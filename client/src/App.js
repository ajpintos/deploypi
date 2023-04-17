import {Home, Landing, Form} from "./views";
import {Route, useLocation} from "react-router-dom";
// import NavBar from "./components/NavBar/NavBar";
// import DetailsContainer from "./components/DetailsContainer/DetailsContainer";
import axios from "axios";
import {useDispatch} from "react-redux";
import {countryByName} from "./redux/actions";
import {lazy, Suspense} from "react";
const NavBar = lazy(() => import("./components/NavBar/NavBar"));
const DetailsContainer = lazy(() => import("./components/DetailsContainer/DetailsContainer"));
axios.defaults.baseURL = "deploypi-production-ae2e.up.railway.app";


function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    const onSearch = (countryName) => {
        axios
            .get(`/countries/?name=${countryName}`)
            .then((response) => {
                dispatch(countryByName(response.data));
/*                console.log("Este es el contenido de response.data",response.data)
                console.log("Este es el contenido de countryByName(response.data)",countryByName(response.data));*/
            });
    };


    return (
        <Suspense fallback={<h1>Loading...</h1>}>
        <div className="App">
            {location.pathname !== "/" && <NavBar onSearch={onSearch}/>}
            <Route exact path="/" component={Landing}/>
            <Route exact path="/detail/:id" render={({match})=> <DetailsContainer id={match.params.id}/>}/>
            <Route exact path="/create" component={Form}/>
            <Route exact path="/home" component={Home}/>
        </div>
        </Suspense>
    );
}

export default App;