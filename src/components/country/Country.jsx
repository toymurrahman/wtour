import Countries from "../countries/countries";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags, population, area, cca3, capitals, region } = country;
  // console.log(country.length);
  return (
    <div className="country">
      <p>area: {area}</p>
      {/* <h1>Capital : {capitals} </h1> */}
      <h1>Population : {population} </h1>
      <img src={flags?.svg} alt="" />
    </div>
  );
};

export default Country;
