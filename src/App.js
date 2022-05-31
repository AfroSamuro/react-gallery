import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import HomePage from "./components/pages/HomePage";
import GalleryAPI from './network/GalleryAPI'
import Adaptive from './adaptive/Adaptive'
import UseThemeSwitch from "./hooks/themeSwitch/UseThemeSwitch";

import './main.css'
import { ThemeContext, themes } from "./hooks/themeSwitch/ThemeContext";


export default function App() {

    const [paintings, setPaintings] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [locations, setLocations] = useState([]);

    const [isWhite, setIsWhite] = useState(true)

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

    const turnTheme = () => {

    }



    return (
        <UseThemeSwitch>
            <Adaptive tagname='section'>
                <ThemeContext.Consumer>
                    {({ changeTheme }) => (
                        <Header
                            isWhite={isWhite}
                            handleChangeTheme={() => {
                                setIsWhite(!isWhite);
                                changeTheme(isWhite ? themes.dark : themes.light);
                            }
                            }
                        />
                    )}
                </ThemeContext.Consumer>
                <HomePage paintings={paintings} authors={authors} locations={locations} />
            </Adaptive>
        </UseThemeSwitch>
    )
}