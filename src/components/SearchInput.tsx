import {styled} from "styled-components"
import search from "../assets/images/search.png"

export default function SearchInput(){
    return(
        <>
            <SearchWrapper>
                <input type="text" placeholder="what do you want to watch"/>
                <img src={search} alt="search"/>
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
    @media (max-width: 768px) {
        width: 50%;
    }

        &::placeholder{
            color: #fff;
        }
    }
`