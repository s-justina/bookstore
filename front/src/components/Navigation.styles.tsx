import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navigation = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 5.5rem;
  background-color: #ff9800;
  box-shadow: 10px 5px 5px #ddd;
`;

export const HomeNav = styled(Link)`
  padding-left: 2rem;
  font-size: 2rem;
  font-style: italic;
  line-height: 5.5rem;
  text-decoration: underline;
  text-transform: uppercase;
  color: #fff;

  @media (max-width: 400px) {
    padding-left: 1rem;
    font-size: 1rem;
  }
`;
