import { AiFillInstagram } from "react-icons/ai";
import {
  BiCopyright,
  BiLogoTwitter,
  BiLogoFacebookSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import styled from "styled-components";
export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <Container>
          <SocialMedia>
            <BiLogoFacebookSquare />
            <AiFillInstagram />
            <BiLogoTwitter />
            <BiLogoYoutube />
          </SocialMedia>
          <PolicyContainer>
            <div>conditions of use</div>
            <div>privacy & policy</div>
            <div>press room</div>
          </PolicyContainer>
          <CopyWright>
            <BiCopyright />
            2023 MovieBox by Samuel Meshach
          </CopyWright>
        </Container>
      </FooterWrapper>
    </>
  );
}

const FooterWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 24px;
`;
const PolicyContainer = styled.div`
  display: flex;
  text-transform: capitalize;
  gap: 10px;
  justify-content: center;
    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
  div {
      color: #111827;
      font-weight: 600;
    font-size: 17px;
  }
`;

const CopyWright = styled.div`
  text-align: center;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-weight: 600;
`;
