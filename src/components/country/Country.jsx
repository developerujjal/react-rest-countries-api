import { useState } from 'react';
import './Country.css'


const Country = ({allCountry, displayCountryName}) => {
    const {name, flags, population, region, capital}= allCountry;

    const [visited, setVisit]= useState(false)

    const handleVisit = ()=>{
        setVisit(!visited)
    }

    // const allHandler = (allCountry) =>{
    //     handleVisit();
    //     displayCountryName(allCountry);
    // }


    return (
        <div className={`country-container ${visited && "visited-bg"}`}>
            <div className='country-img'>
                <img src={flags.png} alt="" />
            </div>
            <div className="content-container" >
                <h2>{name?.common}</h2>
                <p><span>Population: </span>{population}</p>
                <p><span>Region: </span>{region}</p>
                <p><span>Capital: </span>{capital}</p>

                <div className='visited-div'>
                <button onClick={()=> {handleVisit(); displayCountryName(allCountry)}}>{visited ? "Visit": "Now Visit"}</button>
                {
                    visited ? <span style={{color: "yellow"}}>You have Visited!</span> : <span>Not Visited Yet!</span>
                }
                </div>
            </div>
        </div>
    );
};

export default Country;