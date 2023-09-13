import { styled } from "styled-components";
import MovieHome from "./MovieHome";

export default function MoviePage() {
  return (
    <>
      <MainLayoutFlex>
        <LeftLayout>
            oibokbokbok
        </LeftLayout>
        <RightLayout>
         oknknp
        </RightLayout>
      </MainLayoutFlex>
    </>
  );
}

const MainLayoutFlex = styled.div`
  display: flex;
  align-items: flex-start;
`;
const LeftLayout = styled.div`
  border: 1px solid red;
`;
const RightLayout = styled.div`
  border: 1px solid green;
`;
