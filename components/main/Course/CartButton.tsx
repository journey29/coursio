import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import { faCheck, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CostType, Level } from "@prisma/client";
import { MouseEvent } from "react";

type Props = {
  level: Level;
  title: string;
  costType: CostType;
  id: string;
  price: string | null;
};

const CartButton = ({ level, costType, id, price, title }: Props) => {
  const { cartItems, deleteItem, setCartItem } = useCart((state) => state);

  const addToCart = async (e:MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const convertedPrice = formatPrice(price);
    setCartItem({ level, title, costType, id, price: convertedPrice });
  };

  const removeFromCart = async (e:MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteItem(id);
  };

  return (
    <>
      {cartItems.some((cartItem) => cartItem.id === id) ? (
        <Button
          className="flex max-w-12 cursor-pointer items-center justify-center 
        rounded-xl bg-primary p-4 text-white shadow-md transition-all hoverDevice:opacity-0 hoverDevice:group-hover:opacity-100"
          onClick={removeFromCart}
        >
          <FontAwesomeIcon icon={faCheck} width={30} height={30} />
        </Button>
      ) : (
        <Button
          className="flex max-w-12 cursor-pointer items-center justify-center 
            rounded-xl bg-primary p-4 text-white shadow-md transition-all hoverDevice:opacity-0 hoverDevice:group-hover:opacity-100"
          onClick={addToCart}
        >
          <FontAwesomeIcon icon={faShoppingCart} width={30} height={30} />
        </Button>
      )}
    </>
  );
};

export default CartButton;
