import { ActorsContainer } from "./styles";
import { useEffect } from "react";
import { withRouter } from "react-router";
import ActorsCard from "../../components/ActorsCard/ActorsCard";

const ActorsPage = ({ actors, loading, setCurrentPage }) => {
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
        <ActorsContainer>
          {actors?.map(({ name, gender }) => (
            <ActorsCard key={name} name={name} gender={gender} />
          ))}
        </ActorsContainer>
      )}
    </>
  );
};

export default withRouter(ActorsPage);
