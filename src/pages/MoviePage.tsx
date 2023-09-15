import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Logo from "../components/Logo";
import mainPoster from "../assets/images/mainPoster.png";
import recPic from "../assets/images/Rectangle 37.png";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { ImTicket } from "react-icons/im";
import {
  FiHome,
  FiVideo,
  FiTv,
  FiCalendar,
  FiList,
  FiLogOut,
  FiMenu,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { useParams } from "react-router-dom";
import axios from "axios";

interface movieIdPass{
  id: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
}

export default function MoviePage() {

  const [error, setError] = useState(null);
  const [details, setDetails] = useState<movieIdPass[]>([]);

  const { id } = useParams();

  const apiKey = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTdkODE4YWNkYWQ4Yzk4N2RiNzAwYjVmZWY1MzRlNSIsInN1YiI6IjY0ZmU0MDdmMmRmZmQ4MDEzYmNjYTI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B8qJEbFYrkV1aEADt_2dRpoFlq_3PC3X8-NB7phzOuU";
    
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}`;
    // setLoading(true);
    axios
      .get(apiUrl, {
        headers: {
          Accept: "application/json",
          Authorization: apiKey,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch((error) => {
        setError(error);
        // setLoading(true);
        // console.log(error);
      });
  }, [id]);

  return (
    <>
      <MainLayoutFlex>
        <LeftLayout>
          <LogoLayout>
            <Logo />
          </LogoLayout>
          <MenuToggle>
            <FiMenu color="#fff" />
          </MenuToggle>
          <Menu>
            <Link to="/">
              <MenuList>
                <FiHome color="#454545" size={20} />
                <span>home</span>
              </MenuList>
            </Link>
            <MenuList>
              <FiVideo color="#454545" size={20} />
              <span>movies</span>
            </MenuList>
            <MenuList>
              <FiTv color="#454545" size={20} />
              <span>TV series</span>
            </MenuList>
            <MenuList>
              <FiCalendar color="#454545" size={20} />
              <span>upcoming</span>
            </MenuList>
          </Menu>
          <MessageBox>
            <span>Play movie quizes and earn free tickets</span>
            <span>50k people are playing now</span>
            
            <div>
              <button>start playing</button>
            </div>
          </MessageBox>
          <Logout>
            {" "}
            <MenuList>
              <FiLogOut color="#454545" size={20} />
              <span>log out</span>
            </MenuList>
          </Logout>
        </LeftLayout>
        <RightLayout>
          <MainVideoDisplay>
            <div>
              <span>
                <AiFillPlayCircle size={50} />
                <p>watch trailer</p>
              </span>
            </div>
          </MainVideoDisplay>
          <All>
            <AboutVideoFlex>
              <Box1>
                <div>
                  <div style={{ textTransform: "capitalize" }}>
                    top gun : maverick
                  </div>
                  <span></span>
                  <div>2022</div>
                  <span></span>
                  <div>PG-13</div>
                  <span></span>
                  <div>2h 10m</div>
                  <p>action</p>
                  <p>drama</p>
                </div>
              </Box1>
              <Box2>
                <AiFillStar color="yellow" />
                <span>8.5</span>
                <span>|</span>
                <span>78k</span>
              </Box2>
            </AboutVideoFlex>
            <MoreDetails>
              <Left>
                <OverView>
                  <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                    atque quia placeat assumenda repellat nesciunt aut excepturi
                    suscipit. Iste maiores debitis itaque, veritatis consectetur
                    rerum exercitationem explicabo reiciendis blanditiis alias.
                  </div>
                </OverView>

                <CastDetails>
                  <div>
                    <span>director:</span>
                    <span>samuel meshach</span>
                  </div>
                  <div>
                    <span>writers:</span>
                    <span>samuel meshach, joseph ebuka, micheal, daniel</span>
                  </div>
                  <div>
                    <span>stars:</span>
                    <span>samuel meshach, joseph ebuka, micheal, daniel</span>
                  </div>
                </CastDetails>

                <Line>
                  <div>
                    <span>Top rated movies #65</span>
                    <span>Awards 9 nominations</span>
                  </div>
                  <div>
                    <FiChevronDown />
                  </div>
                </Line>
              </Left>
              <Right>
                <div>
                  <button>
                    <ImTicket size={20} />
                    <span>see showtimes</span>
                  </button>
                </div>
                <div>
                  <button>
                    <FiList size={20} />
                    <span>More watch option</span>
                  </button>
                </div>
                <div>
                  <img src={recPic} alt="icon" />
                </div>
              </Right>
            </MoreDetails>
          </All>
        </RightLayout>
      </MainLayoutFlex>
    </>
  );
}

const MainLayoutFlex = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100vh;
  overflow: hidden;
`;
const LeftLayout = styled.div`
  height: 100vh;
  border: 1px solid #ccc;
  width: 15%;
  display: flex;
  gap: 10px;
  border-radius: 0 30px 30px 0;
  overflow-y: scroll;
  flex-direction: column;
  @media (max-width: 768px) {
    width: fit-content;
  }
`;
const RightLayout = styled.div`
  height: 100vh;
  padding: 10px;
  width: 85%;
  overflow: scroll;
`;

const LogoLayout = styled.div`
  display: block;
  padding: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const MenuToggle = styled.div`
  padding: 10px 10px 5px 10px;
  margin: 10px;
  background: #be123c;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Menu = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const MenuList = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  align-items: center;
  text-transform: capitalize;
  &:hover {
    background: rgba(190, 18, 61, 0.195);
    border-right: 2px solid #be123c;
  }
  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;
const MessageBox = styled.div`
  border: 1px solid rgba(190, 18, 61, 0.195);
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  gap: 10px;
  background: #cccccc56;
  @media (max-width: 768px) {
    display: none;
  }

  span:nth-child(1) {
    font-weight: 600;
  }
  span:nth-child(2) {
    font-weight: 400;
    color: #00000095;
    font-size: 13px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background: rgba(190, 18, 61, 0.195);
      color: #be123c;
      width: fit-content;
      text-transform: capitalize;
      border: 0;
      padding: 5px;
      border-radius: 10px;
    }
  }
`;
const Logout = styled.div``;
const All = styled.div`
  padding: 1%;
`;

const MainVideoDisplay = styled.div`
  div {
    height: 50vh;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
    background-image: url(${mainPoster});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      height: 40vh;
    }
    span {
      display: flex;
      align-items: center;
      flex-direction: column;
      color: #fff;
      text-transform: capitalize;
    }
  }
`;
const AboutVideoFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;
const Box1 = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
    span {
      padding: 2px;
      border-radius: 10px;
      background: #000;
    }
    p {
      padding: 2px 5px;
      color: #be123c;
      border-radius: 10px;
      border: 1px solid #888;
      font-size: 12px;
      text-transform: capitalize;
    }
  }
`;
const Box2 = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const MoreDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  margin-top: 1%;
`;
const Left = styled.div`
  width: 70%;
  height: 100%;
  /* border: 1px solid red; */
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Right = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 768px) {
    width: 100%;
  }
  div:nth-child(1) {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: #fff;
      border: 0;
      border-radius: 5px;
      width: 100%;
      padding: 10px;
      text-transform: capitalize;
      background: #be123c;
    }
  }
  div:nth-child(2) {
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border: 1px solid #be123c;
      border-radius: 5px;
      width: 100%;
      padding: 10px;
      text-transform: capitalize;
      background: #db597928;
    }
  }
  div:nth-child(3) {
    img {
      width: 100%;
    }
  }
`;
const OverView = styled.div`
  color: #454545;
`;
const CastDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  gap: 10px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;
    @media (max-width: 768px) {
      align-items: flex-start;
    }

    span:nth-child(1) {
      color: #454545;
    }
    span:nth-child(2) {
      color: #be123c;
    }
  }
`;

const Line = styled.div`
  border: 1px solid #888;
  border-radius: 7px;
  margin-top: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:nth-child(1) {
    display: flex;
    gap: 10px;
    align-items: center;
    span:nth-child(1) {
      background: #be123c;
      color: #fff;
      border-radius: 7px;
      left: 0;
      top: 0;
      padding: 10px 20px;
    }
    span:nth-child(2) {
      position: static;
    }
  }
  div:nth-child(2) {
    padding-right: 10px;
  }
`;
