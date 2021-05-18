import styled from "styled-components";

export const ShoppingCartBtn = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 1rem 1.5rem;
  border: 0.2rem solid rgba(0, 0, 0, 0.2);
  border-top-width: 1px;
  border-left-width: 1px;
  border-radius: 0.25rem;
  background: #f76707;
  color: #eeeeee;
  font-size: 1rem;
  transition: 0.3s;

  & svg {
    padding-right: 0.5rem;
    transition: 0.3s;
  }

  &:hover {
    background: #ffc300;
    cursor: pointer;
  }

  &:hover svg {
    transform: translateX(-30%) scale(1.5) rotate(30deg);
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 0.1rem solid rgba(0, 0, 0, 0.2);

  & svg {
    padding:0;
    position: absolute;
    top: 0.9rem;
    right: 0.9rem;
  }

    &:hover {
      background: #f76707;
    }
    &:hover svg {
      transform: none;
    }
  }
`;

export const TextContent = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;
