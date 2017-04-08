var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className='text-center'>About</h1>
            <p>
                Reactive Weather is my first reactjs endeavor. I created it while following
                along with a Udemy course taught by
                <a href="https://www.udemy.com/user/andrewmead/" target='_blank'>Andrew Mead.</a>
                For more information about the class and instructor please visit the link above.
            </p>
            <p>
                The API used to get weather information is from
                <a href="http://openweathermap.org/" target="_blank">Open Weather Map.</a>
                Open Weather Map offers a free to use API.
            </p>
            <p>
                If you would like to visit the
                <a href="https://github.com/christianspringer/ReactiveWeather" target="_blank">
                    git hub</a>
                for this app please feel free.
            </p>
        </div>
    )
}

module.exports = About;