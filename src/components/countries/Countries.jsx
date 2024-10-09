import { useEffect, useState } from "react";
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [displayVisitedInfo, setDisplayVisitedInfo] = useState([])


    useEffect(() => {

        async function dataLoad() {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            setCountries(data)
        }

        dataLoad();
    }, [])


    const displayCountryName = (allCountry) => {
        const newDisplayVisitedInfo = [...displayVisitedInfo, allCountry]
        setDisplayVisitedInfo(newDisplayVisitedInfo);
    }



    return (
        <div className="countires-main">
            <div className="countries-visited">
                <h3>Country Visited: {displayVisitedInfo.length}</h3>

                {/* display Country visited Country name */}

                <ul style={{listStyle: "none", padding: "0px"}}>
                    {
                        displayVisitedInfo.map((singelCountry, index)=> <li key={index}>{singelCountry.name?.common}</li>)
                    }
                </ul>
                
                {/* display country flag */}

                <div className="countries-visited-img">
                    {
                        displayVisitedInfo.map((image, index)=> <img src={image.flags.png} key={index} alt="flag"/>)
                    }
                </div>
            </div>

            <h3 style={{ textAlign: "center" }}>Hello Reset Country</h3>
            <hr /> <br />
            <div className='countires-container'>

                {/* display Countries Cards */}

                {
                    countries.map((country) => <Country
                        allCountry={country}
                        displayCountryName={displayCountryName}
                        key={country.cca3}></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;