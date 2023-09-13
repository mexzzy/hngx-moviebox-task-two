import menu from "../assets/images/menu-alt-4.png";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { styled } from "styled-components";

export default function Nav() {
  return (
    <>
      <NavWrapper>
        <Logo/>
        <div>
          <SearchInput />
        </div>
        <div>
          <span>sign in</span> <img src={menu} alt="menu" />
        </div>
      </NavWrapper>
    </>
  );
}

const NavWrapper = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 1% 6%;
  @media (max-width: 768px) {
    width: 100%;
  }


  div:nth-child(2) {
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
    width: 50%;
  }
  div:nth-child(3) {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;

    img {
      background: #be123c;
      padding: 5px;
      border-radius: 20px;
    }
    @media (max-width: 768px){
        gap: 5px;
    }
  }
`;
