import styled from "styled-components";

interface CoverProps {
  coverUrl: string;
}

export const CartSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem auto;
  width: 80%;
  height: 12rem;

  @media (max-width: 900px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const BookInCartSection = styled.div`
  justify-content: space-between;
  display: flex;
  flex: 1;

  @media (max-width: 900px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const CoverAreaWrapper = styled.div`
  flex: 2;

  @media (max-width: 900px) {
    padding-bottom: 0.8rem;
  }
`;

export const CoverBookInCartArea = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 10rem;
`;

export const CoverBookInCart = styled.div<CoverProps>`
  width: 100%;
  height: 100%;
  background-image: url("${(props: CoverProps) => {
    return props.coverUrl !== undefined
      ? props.coverUrl
      : "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg";
  }}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  color: #333;

  @media (max-width: 900px) {
    height: 10rem;
  }
`;

export const BookInCartTitleAreaWrapper = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const BookInCartTitle = styled.div`
  flex: 3;
  font-weight: 700;
  font-size: 1.4rem;
  color: #333;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const BookInCartPriceWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const BookInCartPrice = styled.div`
  flex: 3;
  font-weight: 700;
  font-size: 1.4rem;
  color: #333;

  @media (max-width: 900px) {
    text-align: right;
  }
`;

export const BookInCartCurrencySpace = styled.div`
  @media (max-width: 900px) {
    width: 0.5rem;
  }
`;

export const BookInCartCurrency = styled.div`
  flex: 3;
  font-weight: 700;
  font-size: 1.4rem;
  color: #333;

  @media (max-width: 900px) {
    text-align: left;
  }
`;

export const CounterWrapper = styled.div`
  flex: 0.75;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg:hover {
    transform: scale(1.4);
  }

  @media (max-width: 900px) {
    & svg:hover {
      transform: none;
    }
  }
`;

export const CounterQuantity = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const RemoveBookFromCartWrapper = styled.div`
  display: flex;
  align-items: center;

  & svg:hover {
    transform: scale(1.2);
  }

  @media (max-width: 900px) {
    margin-bottom: 1rem;
    justify-content: center;

    & svg:hover {
      transform: none;
    }
  }
`;
