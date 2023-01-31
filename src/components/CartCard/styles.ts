import styled from "styled-components";

export const StyledCartCard = styled.li`
  color: black;
  width: 100%;
  background-color: white;
  display: flex;
  position: relative;
  border-radius: 8px;
  padding: 10px;
  gap: 10px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 480px) {
    flex-direction: row;
  }

  figure {
    border-radius: 8px;
    overflow: hidden;
    width: 100px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
    }
    @media (min-width: 480px) {
      img {
        width: 60px;
        height: 60px;
      }
      width: 60px;
      height: 60px;
      flex-direction: row;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      & > span {
        font-size: 11px;
        display: none;
        @media (min-width: 480px) {
          display: inline;
        }
      }

      & > div {
        display: flex;
        flex-direction: row;
        border: 0.3px solid var(--gray-200);
        border-radius: 4px;
        padding: 6px;
        align-items: center;
        font-size: 14px;

        .minus {
          border-right: 0.3px solid var(--gray-200);
        }
        .plus {
          border-left: 0.3px solid var(--gray-200);
        }

        button {
          padding: 0px 8px;
        }

        span {
          display: inline;
          padding: 0px 12px;
          width: 40px;
          text-align: center;
        }

        @media (min-width: 480px) {
          padding: 3px;
          font-size: 12px;
          button {
            padding: 0px 5px;
          }
        }
      }
    }
    & > span {
      font-weight: 700;
      width: 120px;
    }
  }
`;
