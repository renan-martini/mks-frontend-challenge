import styled from "styled-components";

export const StyledCard = styled.li`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;

  width: 90vw;
  max-width: 300px;
  height: 400px;
  padding: 20px 20px 0px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: hidden;

  figure {
    width: 260px;
    height: 200px;
    display: flex;
    justify-content: center;
  }

  div.title-price {
    width: 100%;
    height: 54px;
    display: flex;
    gap: 30px;
    justify-content: space-between;

    span {
      padding: 8px;
      background-color: var(--gray-700);
      color: white;
      font-weight: 700;
      border-radius: 8px;
      height: fit-content;
    }
  }

  & button {
    width: calc(100%);
    height: 40px;

    background-color: var(--blue);
    color: white;

    margin-top: auto;

    font-weight: 600;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;
