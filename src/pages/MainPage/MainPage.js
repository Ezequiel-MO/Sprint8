import { StarshipContainer } from "./styles";
import { useEffect } from "react";
import { withRouter } from "react-router";
import StarshipMenu from "../../components/StarshipMenu/StarshipMenu";

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
            <StarshipMenu key={name} name={name} model={model} />
          ))}
        </StarshipContainer>
      )}
    </>
  );
};

export default withRouter(MainPage);
