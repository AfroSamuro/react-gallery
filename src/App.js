import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import HomePage from "./components/pages/HomePage";
import GalleryAPI from './network/GalleryAPI'
import Adaptive from './adaptive/Adaptive'


export default function App() {

    const [paintings, setPaintings] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getPaintings();
        getAuthors();
        getLocations();
    }, []);

    const getPaintings = async () => {
        setPaintings(await GalleryAPI.getPaintings())
    }
    const getAuthors = async () => {
        setAuthors(await GalleryAPI.getAuthors())
    }
    const getLocations = async () => {
        setLocations(await GalleryAPI.getLocations())
    }


    return (
        <Adaptive tagname='section'>
            <Header />
            <HomePage paintings={paintings} authors={authors} locations={locations} />
        </Adaptive>
    )
}