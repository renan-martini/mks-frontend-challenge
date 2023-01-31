import { StyledHeader } from "./styles";
import { BsCart4 } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/react";
import { Cart } from "../Cart";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { totalAmount } = useSelector((state: RootState) => state.cart);

  return (
    <StyledHeader>
      <div>
        <h2>MKS</h2>
        <span>Sistemas</span>
      </div>
      <button onClick={onOpen}>
        <BsCart4 fontSize={20} /> {totalAmount}
      </button>
      <Cart isOpen={isOpen} onClose={onClose} />
    </StyledHeader>
  );
};
