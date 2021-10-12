import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StarshipView from "./pages/StarshipViews/StarshipView";
import { useEffect, useState } from "react";
import axios from "axios";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const starshipsURL = axios.create({
    baseURL: "https://swapi.dev/api/",
    timeout: 1000,
  });

  useEffect(() => {
    console.log(starships);
  }, [starships]);

  useEffect(() => {
    async function getStarships() {
      setLoading(true);
      if (currentPage <= 4) {
        try {
          let {
            data: { results },
          } = await starshipsURL.get(`/starships?page=${currentPage}`);
          setStarships((prevState) => [...prevState, ...results]);
          setLoading(false);
        } catch (err) {
          console.error("error");
        }
      } else {
        setLoading(false);
      }
    }
    getStarships();
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/starships/:id'>
          <StarshipView starships={starships} />
        </Route>
        <Route path='/main'>
          <MainPage
            starships={starships}
            loading={loading}
            setCurrentPage={setCurrentPage}
          />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
