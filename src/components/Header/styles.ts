import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100vw;
  padding: 20px 5vw;
  background-color: var(--blue);
  color: white;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  div {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    h2 {
      font-size: 30px;
      margin: 0px;
    }
    span {
      font-weight: 300;
      transform: translateY(-5px);
    }
  }

  button {
    display: flex;
    align-items: center;

    font-weight: 700;
    font-size: 16px;
    color: black;

    border-radius: 8px;
    border: none;

    gap: 15px;
    padding: 10px 15px;

    background-color: white;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;
