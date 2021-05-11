import styled from "styled-components";

interface CoverProps {
  coverUrl: string;
}

export const BookSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  border: 2px solid #333;
  width: 80%;
  height: 10rem;
`;

export const CoverArea = styled.div`
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  height: 10rem;
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
  color: black;
`;

export const BookDescriptionArea = styled.div`
  width: 100%;
  border: 2px solid red;
`;

export const BookTitle = styled.div`
  color: red;
`;

export const BookDetails = styled.div`
  color: green;
`;

export const DetailTitle = styled.div`
  color: grey;
`;
export const DetailContent = styled.div`
  color: orange;
`;
