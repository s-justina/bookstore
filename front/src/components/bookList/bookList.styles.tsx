import styled from "styled-components";

interface CoverProps {
  coverUrl: string;
}

export const BookSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border: 2px solid #333;
  width: 80%;
  height: 10rem;
`;

export const Cover = styled.div<CoverProps>`
  margin: 0 auto;
  width: 7rem;
  height: 7rem;
  background-image: url("${(props: CoverProps) => {
    return props.coverUrl !== undefined
      ? props.coverUrl
      : "https://api.time.com/wp-content/uploads/2019/08/better-smartphone-photos.jpg";
  }}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  color: black;
`;
