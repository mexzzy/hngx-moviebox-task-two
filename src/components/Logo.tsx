import { styled } from "styled-components";
import logo from "../assets/images/logo.png";

export default function Logo() {
  return (
    <>
      <LogoPage>
        <img src={logo} alt="logo" />
        MovieBox
      </LogoPage>
    </>
  );
}

const LogoPage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 5px;
    img {
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
  }
`;
