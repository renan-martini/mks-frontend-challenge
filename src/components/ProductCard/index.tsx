import { IProduct } from "@/interfaces";
import { Skeleton, SkeletonText, Text, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { StyledCard } from "./style";
import { RiShoppingBag3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addCart } from "@/slices/cart.slice";

export const format = (num: string) =>
  num
    .replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1.")
    .split("")
    .reverse()
    .join("")
    .replace(".", ",")
    .split("")
    .reverse()
    .join("");

export const ProductCard = ({
  product,
  isLoading,
}: {
  product?: IProduct;
  isLoading: boolean;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <StyledCard>
      <Skeleton isLoaded={!isLoading}>
        <figure>
          <Image
            src={product?.photo || ""}
            alt={product?.name || ""}
            width={200}
            height={200}
          />
        </figure>
      </Skeleton>
      <div className="title-price">
        <SkeletonText
          maxW="60%"
          isLoaded={!isLoading}
          noOfLines={2}
          skeletonHeight={5}
        >
          <Text noOfLines={2} fontSize="18px">
            {product?.name || "kflajflkjadfkljas"}
          </Text>
        </SkeletonText>
        <Skeleton isLoaded={!isLoading}>
          <span>R${format(product?.price || "00.00")}</span>
        </Skeleton>
      </div>
      <SkeletonText isLoaded={!isLoading}>
        <Tooltip
          hasArrow
          label={product?.description}
          bg="gray.300"
          color="gray.800"
        >
          <Text noOfLines={2} maxW="100%">
            {product?.description ||
              "Grave vídeos 4K, faça belos retratos e capture paisagens"}
          </Text>
        </Tooltip>
      </SkeletonText>
      <Skeleton width="calc(100% + 40px)" mt="auto" isLoaded={!isLoading}>
        <button onClick={() => dispatch(addCart(product))}>
          <RiShoppingBag3Line fontSize={22} />
          COMPRAR
        </button>
      </Skeleton>
    </StyledCard>
  );
};
