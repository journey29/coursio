import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Loading() {
    return (
        <div className="absolute bottom-0 left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white">
            <FontAwesomeIcon
                className="h-[70px] w-[70px] animate-spin object-contain text-black"
                icon={faSpinner}
            />
        </div>
    );
}
