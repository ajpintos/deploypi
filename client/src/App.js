import {Home, Landing, Form} from "./views";
import {Route, useLocation} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {countryByName} from "./redux/actions";
import {lazy, Suspense, useEffect, useState} from "react";
import {ClipLoader} from "react-spinners";
const NavBar = lazy(() => import("./components/NavBar/NavBar"));
const DetailsContainer = lazy(() => import("./components/DetailsContainer/DetailsContainer"));
axios.defaults.baseURL = "deploypi-production-ae2e.up.railway.app";


function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 8000)
    }, [])

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
            loading?
            <ClipLoader
            color={"#123abc"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
            :
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