import {styled} from "styled-components"
import search from "../assets/images/search.png"
import { FiSearch } from "react-icons/fi";

export default function SearchInput(){
    return(
        <>
            <SearchWrapper>
                <input type="text" placeholder="what do you want to watch"/>
                <FiSearch/>
            </SearchWrapper>
        </>
    )
}

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px ;

    input{
        background-color: transparent;
        border: 0;
        outline: none;
        font-size: 17px;
        color: #fff;
        width: 100%;

        &::placeholder{
            color: #fff;
        }
    }
`