// import CardsContainer from "../../components/CardsContainer/CardsContainer";
import {lazy, Suspense, useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCountries} from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import App from "../../App";
import {ClipLoader} from "react-spinners";
const CardsContainer = lazy(() => import('../../components/CardsContainer/CardsContainer'));

const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch])

    //! Spinner Loader
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000)
    }, [])

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            {loading?
                <ClipLoader
                    color={"#123abc"}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                :
        <div>
            <CardsContainer />
        </div>}
    </Suspense>)
}

export default Home