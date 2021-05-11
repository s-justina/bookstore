import styled from "styled-components";

export const ShoppingCartBtn = styled.button`
  margin-top: 20px;
  margin-bottom: 1.5rem;
  padding: 1rem 1.5rem;
  border: 0.2rem solid rgba(0, 0, 0, 0.2);
  border-top-width: 1px;
  border-left-width: 1px;
  border-radius: 0.25rem;
  background: #f76707;
  color: #eeeeee;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background: #ffc300;
    cursor: pointer;
  }

  &:hover svg {
    transform: translateX(-30%) scale(1.5) rotate(30deg);
  }
`;
