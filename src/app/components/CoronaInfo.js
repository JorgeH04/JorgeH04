import React from 'react';

const WeatherInfo = props => {
    console.log(props)
    return (
        <div>
           
            {
                <div className="card card-body mt-2 animated fadeInUp" >
                                        <h2>Currently Showing {props.country}</h2>

                    {
                        
                        <p><i className="fas fa-location-arrow"></i> Casos confirmados: {props.confirmed}</p>
                    }
                    {
                        <p><i className="fas fa-temperature-low"></i> Personas recuperadas: {props.recovered}</p>
                    }
                    {
                        <p><i className="fas fa-water"></i> Muertos: {props.deaths}</p>
                    }
                   
                </div>
               
            }
        </div>

    )
}

export default WeatherInfo;