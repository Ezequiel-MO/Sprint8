import {
  StarshipFullDetailsContainer,
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
import PilotCard from "../PilotCard/PilotCard";
import MovieCard from "../MovieCard/MovieCard";

const StarshipFullDetails = ({
  starship: {
    name,
    manufacturer,
    model,
    cost_in_credits,
    max_atmosphering_speed,
    length,
    crew,
    image,
    pilots,
    films,
  },
}) => {
  const [pilotData, setPilotData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    console.log("pilot data=>", pilotData);
  }, [pilotData]);

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
    const getPilots = () => {
      let responses = pilots.map(async (pilot) => await axios.get(pilot));
      Promise.all(responses).then((values) => setPilotData(values));
    };
    getPilots();
  }, [pilots]);

  return (
    <StarshipFullDetailsContainer>
      <MainImage>
        <img src={image} alt='starship-pic' />
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
        <h2>Pilots</h2>
        <ul>
          {pilotData.map(({ data: { name, gender, hair_color } }) => (
            <PilotCard
              key={name}
              name={name}
              gender={gender}
              hair_color={hair_color}
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
        <h4>model: {model}</h4>
        <h4>cost in credits: {cost_in_credits}</h4>
        <h4>Atmospheric speed: {max_atmosphering_speed}</h4>
      </Left>
      <Right>
        <h4>manufacturer: {manufacturer}</h4>
        <h4>legth: {length}</h4>
        <h4>crew: {crew}</h4>
      </Right>
    </StarshipFullDetailsContainer>
  );
};

export default StarshipFullDetails;
