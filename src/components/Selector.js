

const Selector=(props)=>{
    // console.log(countriesJson[0]);
    return(
        <div className='selector-container'>
            <select onChange={(e)=>props.setCountry(e.target.value)}>
                {props.countriesJson.map((country,index)=>
                    <option key={index} value={country.Slug}>{country.Country}</option>
                )}
            </select>

            <button onClick={props.getCountryData}>Get Data</button>
        </div>
    );
};

export default Selector;