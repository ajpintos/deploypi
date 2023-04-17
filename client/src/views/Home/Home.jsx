// import CardsContainer from "../../components/CardsContainer/CardsContainer";
import {lazy, Suspense, useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCountries} from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
const CardsContainer = lazy(() => import('../../components/CardsContainer/CardsContainer'));




import App from "../../App";
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