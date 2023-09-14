import Logo from "./Logo";
import SearchInput from "./SearchInput";
import { styled } from "styled-components";
import { FiMenu } from "react-icons/fi";

export default function Nav() {
  return (
    <>
      <NavWrapper>
        <Logo />
        <div>
          <SearchInput />
        </div>
        <div>
          <span>sign in</span> <FiMenu />
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
      @media (max-width: 768px) {
        display :none;
      }
  }
`;
