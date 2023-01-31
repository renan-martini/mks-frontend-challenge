import { IChildren } from "@/interfaces";
import { StyledMain } from "./styles";

export const Main = ({ children }: IChildren) => {
  return <StyledMain>{children}</StyledMain>;
};
