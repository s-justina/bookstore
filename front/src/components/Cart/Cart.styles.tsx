import styled from "styled-components";

export const TotalPriceInfo = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  font-weight: 700;
  font-size: 3rem;
  background: linear-gradient(to right, #fdfbfb, #ebedee 70%);
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover + button {
    animation: shake 2s;
  }
  @media (max-width: 900px) {
    font-size: 1.7rem;

    &:hover + button {
      animation: none;
    }
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg) scale(1.1);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-5deg) scale(1.2);
    }
    20% {
      transform: translate(-3px, 0px) rotate(5deg) scale(1.3);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg) scale(1.4);
    }
    40% {
      transform: translate(1px, -1px) rotate(5deg) scale(1.5);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-5deg) scale(1.5);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg) scale(1.5);
    }
    70% {
      transform: translate(3px, 1px) rotate(-5deg) scale(1.4);
    }
    80% {
      transform: translate(-1px, -1px) rotate(5deg) scale(1.3);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg) scale(1.2);
    }
    100% {
      transform: translate(1px, -2px) rotate(-5deg) scale(1);
    }
  }
`;

export const BuyBooksBtn = styled.button`
  display: block;
  margin: 3rem 70%;
  border: none;
  border-radius: 50px;
  width: 10rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #f1be18;
  background: #34ad00;
  transition: all 0.4s ease 0s;
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.57);
  }

  &:hover svg {
    transform: translateX(100%);
  }

  @media (max-width: 900px) {
    margin: 2rem auto;
    font-size: 1.5rem;

    &:hover {
      text-shadow: none;
      -webkit-box-shadow: 0none;
      -moz-box-shadow: none;
    }

    &:hover svg {
      transform: none;
    }
  }
`;
