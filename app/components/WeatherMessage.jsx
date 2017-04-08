var React = require('react');

var WeatherMessage = ({temp, location}) =>{
        return (
            <h3 className="text-center">
                <p>It is {temp} degrees in {location}</p>
            </h3>
        )
}
module.exports = WeatherMessage;