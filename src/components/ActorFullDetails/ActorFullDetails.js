import {
  ActorFullDetailsContainer,
  MainImage,
  Description,
  Title,
  Pilots,
  Left,
  Right,
  Movies,
} from "./styles";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import StarshipCard from "../StarshipCard/StarshipCard";

const ActorFullDetails = ({
  actor: {
    name,
    height,
    hair_color,
    birth_year,
    gender,
    skin_color,
    eye_color,
    image,
    starships,
    films,
  },
}) => {
  const [starshipData, setStarshipData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    console.log("pilot data=>", starshipData);
  }, [starshipData]);

  useEffect(() => {
    console.log("movie data=>", movieData);
  }, [movieData]);

  useEffect(() => {
    const getMovies = () => {
      let responses = films.map(async (film) => await axios.get(film));
      Promise.all(responses).then((values) => setMovieData(values));
    };
    getMovies();
  }, [films]);

  useEffect(() => {
    const getStarships = () => {
      let responses = starships.map(
        async (starship) => await axios.get(starship)
      );
      Promise.all(responses).then((values) => setStarshipData(values));
    };
    getStarships();
  }, [starships]);

  return (
    <ActorFullDetailsContainer>
      <MainImage>
        <img src={image} alt='actor-pic' />
      </MainImage>
      <Title>
        <h2>{name.toUpperCase()}</h2>
      </Title>
      <Description>
        {movieData.map(({ data: { title, opening_crawl } }) => (
          <p key={title}>{opening_crawl}</p>
        ))}
      </Description>
      <Pilots>
        <h2>Starships</h2>
        <ul>
          {starshipData.map(({ data: { name, model, manufacturer } }) => (
            <StarshipCard
              key={name}
              name={name}
              model={model}
              manufacturer={manufacturer}
            />
          ))}
        </ul>
      </Pilots>
      <Movies>
        <h2>Movies</h2>
        <ul>
          {movieData.map(({ data: { title, director, release_date } }) => (
            <MovieCard
              key={title}
              title={title}
              director={director}
              release_date={release_date}
            />
          ))}
        </ul>
      </Movies>
      <Left>
        <h4>height: {height}</h4>
        <h4>hair color: {hair_color}</h4>
        <h4>birth year: {birth_year}</h4>
      </Left>
      <Right>
        <h4>gender: {gender}</h4>
        <h4>skin color: {skin_color}</h4>
        <h4>eye color: {eye_color}</h4>
      </Right>
    </ActorFullDetailsContainer>
  );
};

export default ActorFullDetails;
