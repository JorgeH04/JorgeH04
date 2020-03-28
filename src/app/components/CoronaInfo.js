import React from 'react';

const WeatherInfo = props => {
    console.log(props)
    return (
        <div>
           
            {
                <div className="card card-body mt-2 animated fadeInUp" >
                                        <h1>País consultado: {props.country}</h1>

                    {
                        
                        <h1 className="mt-5"><i className="fas fa-location-arrow"></i> Casos confirmados: {props.confirmed}</h1>
                    }
                    {
                        <h1 className="mt-5"><i className="fas fa-temperature-low"></i> Personas recuperadas: {props.recovered}</h1>
                    }
                    {
                        <h1 className="mt-5"><i className="fas fa-water"></i> Muertos: {props.deaths}</h1>
                    }
                   
                </div>
               
            }
        </div>

    )
}

export default WeatherInfo;