import { CostType, Level } from "@prisma/client";

export type CartItem = {
    id: string;
    title: string;
    price?: number;
    costType: CostType;
    level: Level;
}