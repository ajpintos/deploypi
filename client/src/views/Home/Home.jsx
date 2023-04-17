// import CardsContainer from "../../components/CardsContainer/CardsContainer";
import {lazy, Suspense, useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCountries} from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import App from "../../App";
const CardsContainer = lazy(() => import('../../components/CardsContainer/CardsContainer'));

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
        <div>
            <CardsContainer />
        </div>
    </Suspense>)
}

export default Home