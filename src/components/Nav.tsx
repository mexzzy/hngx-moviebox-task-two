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
          <span>sign in</span>{" "}
          <span>
            <FiMenu />
          </span>
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
  background-image: linear-gradient(#000000a9, transparent);
  @media (max-width: 768px) {
    width: 90%;
    gap: 10px;
    justify-content: flex-start;
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

    span:nth-child(1) {
      @media (max-width: 768px) {
        display: none;
      }
    }
    span:nth-child(2) {
      background: #be123c;
      padding: 10px 10px 5px 10px;
      border-radius: 20px;
    }
  }
`;
