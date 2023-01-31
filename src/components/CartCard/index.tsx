import { IProductCart } from "@/interfaces";
import { addAmount, reduceAmount, removeProduct } from "@/slices/cart.slice";
import { AppDispatch } from "@/store/store";
import { CloseButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { format } from "../ProductCard";
import { StyledCartCard } from "./styles";

export const CartCard = ({ product }: { product: IProductCart }) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <StyledCartCard>
      <figure>
        <Image width={60} height={60} src={product.photo} alt={product.name} />
      </figure>
      <Text
        noOfLines={2}
        textAlign={["center", "left"]}
        width={["100%", "30%"]}
      >
        {product.name}
      </Text>
      <div>
        <div>
          <span>Qtd:</span>
          <div>
            <button
              className="minus"
              onClick={() => dispatch(reduceAmount(product.id))}
            >
              -
            </button>
            <span>{product.amount}</span>
            <button
              className="plus"
              onClick={() => dispatch(addAmount(product.id))}
            >
              +
            </button>
          </div>
        </div>
        <span>
          R${format((parseFloat(product.price) * product.amount).toFixed(2))}
        </span>
      </div>
      <CloseButton
        color={["black", "white"]}
        bg={["white", "black"]}
        borderRadius="50%"
        size={["lg", "sm"]}
        position="absolute"
        right={["10px", "-10px"]}
        top={["10px", "-10px"]}
        _hover={{ bg: "var(--gray-700)" }}
        onClick={() => dispatch(removeProduct(product.id))}
      />
    </StyledCartCard>
  );
};
