import styled from "styled-components";

interface CoverProps {
  coverUrl: string;
}

export const BookSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem auto;
  width: 80%;
  height: 12rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const CoverArea = styled.div`
  margin: 0 auto;
  padding-right: 1rem;
  width: 100%;
  height: 10rem;
  flex: 2;

  @media (max-width: 768px) {
    padding-bottom: 0.8rem;
    flex: 4;
  }
`;

export const Cover = styled.div<CoverProps>`
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

  @media (max-width: 768px) {
    height: 10rem;
  }
`;

export const BookDescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;
  flex: 6;

  @media (max-width: 768px) {
    flex: 4;
  }
`;

export const BookTitle = styled.div`
  flex: 3;
  font-weight: 700;
  font-size: 1.4rem;
  color: #333;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: green;
  flex: 7;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const DetailTitle = styled.div`
  color: #aaa;
  font-weight: 400;
  font-size: 0.8rem;
`;

export const DetailContent = styled.div`
  color: #333;
  font-style: italic;
  font-size: 1rem;
`;

export const AddBookToCartBtn = styled.button`
  flex: 2;
  display: inline-block;
  margin: 5px;
  padding: 15px;
  border: none;
  border-radius: 50px;
  background: #60a3bc;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;

  &:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 20px -5px rgba(0, 0, 0, 0.57);
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    flex: 2;
    &:hover {
      text-shadow: none;
      box-shadow: none;
    }
  }
`;
