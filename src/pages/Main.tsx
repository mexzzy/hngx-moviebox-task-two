import { styled } from "styled-components";
import MainPost from "../assets/images/mainPoster.png";
import tomatoe from "../assets/images/tomatoe.png";
import imbd from "../assets/images/imbd.png";
import play from "../assets/images/play.png";
// import poster from "../assets/images/poster.png";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface movie {
  id: string;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
}
interface posterMovie {
  id: string;
  backdrop_path: string;
  original_title: string;
  overview: string;
  vote_average: number;
}

export default function Main() {
  const [movies, setMovies] = useState<movie[]>([]);
  const [posterMovies, setPosterMovies] = useState<posterMovie[]>([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  const apiKey =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTdkODE4YWNkYWQ4Yzk4N2RiNzAwYjVmZWY1MzRlNSIsInN1YiI6IjY0ZmU0MDdmMmRmZmQ4MDEzYmNjYTI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B8qJEbFYrkV1aEADt_2dRpoFlq_3PC3X8-NB7phzOuU";

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/popular`;

    axios
      .get(apiUrl, {
        headers: {
          Accept: "application/json",
          Authorization: apiKey,
        },
      })
      .then((response) => {
        setMovies(response.data.results.slice(0, 10));
        console.log(response.data.results.slice(0, 10));
        // setLoading(false);
      })
      .catch((error) => {
        // setError(error);
        // setLoading(false);
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const apiUrlTop = `https://api.themoviedb.org/3/movie/top_rated`;

    axios
      .get(apiUrlTop, {
        headers: {
          Accept: "application/json",
          Authorization: apiKey,
        },
      })
      .then((response) => {
        setPosterMovies(response.data.results.slice(0, 1));
        console.log(response.data.results.slice(0, 1));
        // setLoading(false);
      })
      .catch((error) => {
        // setError(error);
        // setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <DetailsFlex>
          <Nav />
          {posterMovies.map((index) => (
            <Details>
              <div>{index.original_title}</div>
              <div>
                <div>
                  <img src={imbd} alt="icon" />
                  <span>{index.vote_average}/100</span>
                </div>
                <div>
                  <img src={tomatoe} alt="icon" />
                  <span>97%</span>
                </div>
              </div>
              <div>{index.overview}</div>
              <div>
                <button>
                  <img src={play} alt="icon" />
                  watch trailer
                </button>
              </div>
            </Details>
          ))}
        </DetailsFlex>
      </Wrapper>
      <TitleHolder>
        <div>featured movies </div>
        <span>See more</span>
      </TitleHolder>
      <Link to="/Movie page">
        <MainMovieWrapper>
          {movies.map((index) => (
            <MovieContainer key={index.id} data-testid="movie-card">
              <div>
                <img
                  data-testid="movie-poster"
                  src={`https://image.tmdb.org/t/p/original/${index.poster_path}`}
                  alt="movie"
                />
              </div>
              <div data-testid="movie-release-date">{index.release_date}</div>
              <div data-testid="movie-title">{index.title}</div>
              <FlexRate>
                <div>
                  <img src={imbd} alt="icon" />
                  <span>{index.vote_average} / 87%</span>
                </div>
                <div>
                  <img src={tomatoe} alt="icon" />
                  <span>10%</span>
                </div>
              </FlexRate>
              <div>Adventure</div>
            </MovieContainer>
          ))}
        </MainMovieWrapper>
      </Link>
    </>
  );
}
const Wrapper = styled.div`
  background-color: #000;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    width: fit-content;
    height: 100%;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
  }
`;
const Details = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2% 6%;
  color: #fff;
  @media (max-width: 768px) {
    width: 100%;
  }

  div:nth-child(1) {
    font-size: 33px;
    font-weight: 700;
    text-transform: capitalize;
    @media (max-width: 768px) {
      font-size: 25px;
    }
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 10px;

    div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 5px;
      img {
        width: 30px;
        object-fit: cover;
      }
      span {
        font-size: 12px;
      }
    }
    div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 5px;
      img {
        width: 15px;
        object-fit: cover;
        height: 15px;
      }
      span {
        font-size: 12px;
        font-weight: 600;
      }
    }
  }
  div:nth-child(3) {
    font-weight: 400;
    @media (max-width: 768px) {
      font-weight: 300;
      font-size: 13px;
    }
  }
  div:nth-child(4) {
    button {
      background: #be123c;
      padding: 5px 10px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      color: #fff;
      border: 0;
      outline: none;
      cursor: pointer;
      text-transform: capitalize;
      gap: 10px;
    }
  }
`;

const MovieContainer = styled.div`
  width: 200px;
  display: flex;
  align-items: flex-start;
  gap: 5px;
  flex-direction: column;
  text-transform: capitalize;

  div:nth-child(1) {
    img {
      width: 100%;
      height: 300px;
    }
  }
  div:nth-child(2) {
    font-size: 12px;
    color: #888;
  }
  div:nth-child(3) {
    font-weight: 600;
  }

  div:nth-child(5) {
    font-size: 12px;
    color: #888;
  }
`;
const FlexRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      width: 30px;
      object-fit: cover;
      height: 15px;
    }
    span {
      color: #000;
      font-size: 12px;
    }
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      width: 15px;
      object-fit: cover;
      height: 15px;
    }
    span {
      color: #000;
      font-size: 12px;
    }
  }
`;
const MainMovieWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;
  padding: 2% 6%;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const TitleHolder = styled.div`
  padding: 2% 6%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  div {
    font-weight: 600;
    text-transform: capitalize;
  }
  span {
    font-size: 12px;
    color: #be123c;
    cursor: pointer;
  }
`;
const DetailsFlex = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;
