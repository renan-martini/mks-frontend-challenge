import { IProduct, IReducer } from "@/interfaces";
import { Skeleton } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";
import { StyledList } from "./styles";

export const ProductsList = ({
  products,
  loading,
}: {
  products: IProduct[];
  loading: boolean;
}) => {
  return (
    <StyledList>
      {!products[0]
        ? new Array(8)
            .fill(0)
            .map((_, index) => <ProductCard key={index} isLoading={loading} />)
        : products?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isLoading={loading}
            />
          ))}
    </StyledList>
  );
};
