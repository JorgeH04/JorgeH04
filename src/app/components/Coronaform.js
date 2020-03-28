import React from 'react';

const WeatherForm = props => (

  <div className="card card-body mt-5">

  <form onSubmit={props.getWeather}>
              
              <div className="form-group ">
                  <input type="text" name="country" placeholder="Digite el país" className="form-control" />
              </div>
              <button className="btn btn-success btn-block">
                  Get country
              </button>
          </form>
  
          
  </div>
  
    
);

export default WeatherForm;