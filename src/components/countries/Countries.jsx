import { useEffect, useState } from "react";
import Country from "../country/country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(( ) => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
   console.log(countries);
    return (
        <div>
            <h1>World tour : {countries.length} </h1>
          
            {
                countries.map(country => <Country key={country.cca3} country={country}> </Country>)    
            }
            
        </div>
    );
};

export default Countries;