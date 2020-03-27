import React from 'react';

const WeatherForm = props => (

  <div className="card card-body">

  <form onSubmit={props.getWeather}>
              
              <div className="form-group">
                  <input type="text" name="country" placeholder="Your Country Name" className="form-control" />
              </div>
              <button className="btn btn-success btn-block">
                  Get country
              </button>
          </form>
  
          
  </div>
  
    
);

export default WeatherForm;