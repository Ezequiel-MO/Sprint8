import { StarshipContainer } from "./styles";
import StarshipCard from "../../components/StarshipCard/StarshipCard";
import { useEffect } from "react";

const MainPage = ({ starships, loading, setCurrentPage }) => {
  useEffect(() => {
    //consultar pq no funciona el evento onScroll
    window.addEventListener("scroll", () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      if (scrollHeight - scrollTop === clientHeight) {
        setCurrentPage((prevState) => prevState + 1);
      }
    });
  }, [setCurrentPage]);

  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <StarshipContainer>
          {starships?.map(({ name, model }) => (
            <StarshipCard key={name} name={name} model={model} />
          ))}
        </StarshipContainer>
      )}
    </>
  );
};

export default MainPage;
