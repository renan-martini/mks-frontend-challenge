import styled from "styled-components";

export const StyledCart = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--blue);

  padding: 20px;
  color: white;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    h2 {
      font-size: 24px;
      font-weight: 700;
    }
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: calc(100vh - 260px);
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 10px;

    @media (min-width: 480px) {
      height: calc(100vh - 228px);
    }
  }

  & > p {
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    padding: 20px;
  }

  & > button {
    margin-top: auto;
    width: calc(100% + 40px);
    background-color: black;
    transform: translateX(-20px);
    height: 50px;
    font-weight: 700;

    &:hover {
      background-color: var(--gray-700);
      transition: 300ms;
    }
  }

  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-track {
    background: #0f52ba;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #2762bb;
    border-radius: 10px;
    border: 0px solid #ffffff;
  }
`;
