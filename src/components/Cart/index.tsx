import { AppDispatch, RootState } from "@/store/store";
import {
  CloseButton,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartCard } from "../CartCard";
import { format } from "../ProductCard";
import { StyledCart } from "./styles";

export const Cart = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { cartProducts, total } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size={["xs", "sm"]}>
      <DrawerOverlay />
      <DrawerContent>
        <StyledCart>
          <header>
            <h2>Carrinho de compras</h2>
            <CloseButton
              onClick={onClose}
              color="white"
              bg="black"
              borderRadius="50%"
              size="lg"
              _hover={{
                bg: "var(--gray-700)",
              }}
            />
          </header>
          <ul>
            {cartProducts.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
          </ul>

          <p>
            Total:{" "}
            <span className="total-price">R${format(total.toFixed(2))}</span>
          </p>
          <button>Finalizar Compra</button>
        </StyledCart>
      </DrawerContent>
    </Drawer>
  );
};
