import { useEffect, useState } from "react";
import axios from "axios";
import { StarshipContainer } from "./styles";
import StarshipCard from "../../components/Header/StarshipCard/StarshipCard";

const MainPage = () => {
  const [starships, setStarships] = useState([]);

  const starshipsURL = axios.create({
    baseURL: "https://swapi.dev/api/starships",
    timeout: 1000,
  });

  useEffect(() => {
    console.log(starships);
  }, [starships]);

  useEffect(() => {
    async function getStarships() {
      try {
        let {
          data: { results },
        } = await starshipsURL.get("/");
        setStarships(results);
      } catch (err) {
        console.error("error");
      }
    }
    getStarships();
    // eslint-disable-next-line
  }, []);

  return (
    <StarshipContainer>
      {starships?.map(({ name, model }) => (
        <StarshipCard key={name} name={name} model={model} />
      ))}
    </StarshipContainer>
  );
};

export default MainPage;
