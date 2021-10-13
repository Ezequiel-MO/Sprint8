import { MovieCardContainer, Title, Director, ReleaseDate } from "./styles";

const MovieCard = ({ title, director, release_date }) => {
  return (
    <MovieCardContainer>
      <Title>
        <strong>Title: </strong>
        {title}
      </Title>
      <Director>
        <strong>Director: </strong>
        {director}
      </Director>
      <ReleaseDate>
        <strong>Release Date: </strong>
        {release_date}
      </ReleaseDate>
    </MovieCardContainer>
  );
};

export default MovieCard;
