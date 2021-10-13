import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StarshipView from "./pages/StarshipViews/StarshipView";
import { useEffect, useState } from "react";
import axios from "axios";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import PrivateRoute from "./auth/PrivateRoute";
import ActorsPage from "./pages/ActorsPage/ActorsPage";
import ActorView from "./pages/ActorsViews/ActorView";

function App() {
  const [starships, setStarships] = useState([]);
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAuth, setIsAuth] = useState(false);

  const starshipsURL = axios.create({
    baseURL: "https://swapi.dev/api/",
  });

  useEffect(() => {
    console.log(starships);
  }, [starships]);

  useEffect(() => {
    async function getActors() {
      setLoading(true);
      if (currentPage <= 9) {
        try {
          let {
            data: { results },
          } = await starshipsURL.get(`/people?page=${currentPage}`);
          setActors((prevState) => [...prevState, ...results]);
          setLoading(false);
        } catch (err) {
          console.error("error");
        }
      } else {
        setLoading(false);
      }
    }
    getActors();
    // eslint-disable-next-line
  }, [currentPage]);

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
      <Header isAuth={isAuth} />
      <Switch>
        <Route path='/actors/:id'>
          <ActorView actors={actors} />
        </Route>
        <Route path='/starships/:id'>
          <StarshipView starships={starships} />
        </Route>
        <PrivateRoute path='/actors' isAuth={isAuth}>
          <ActorsPage
            actors={actors}
            loading={loading}
            setCurrentPage={setCurrentPage}
          />
        </PrivateRoute>
        <PrivateRoute path='/main' isAuth={isAuth}>
          <MainPage
            starships={starships}
            loading={loading}
            setCurrentPage={setCurrentPage}
          />
        </PrivateRoute>
        <Route path='/login'>
          <Login isAuth={isAuth} setIsAuth={setIsAuth} />
        </Route>
        <Route path='/'>
          <SignUp isAuth={isAuth} setIsAuth={setIsAuth} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
