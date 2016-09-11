var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var React = require('react');

        // var serverRequest = fetch('https://www.omdbapi.com/?s=' + this.props.search + '&y=&plot=short&r=json');
        // var serverRequest;


var Movies = React.createClass({
    getInitialState: function() {
        return {
            movieTitle: '',
            moviePoster: '',
            movieSearchTerm: 'Belly'
        };
    },
    handleChange: function (e) {
        var name = e.target.value;
        this.serverRequest = $.get('https://www.omdbapi.com/?t=' + name + '&y=&plot=short&r=json', function (result) {
            // var movieFound = result[0];
            this.setState({
                movieTitle: result.Title,
                moviePoster: result.Poster,
                movieSearchTerm: name
            });
        }.bind(this));
    },

    componentDidMount: function() {

    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (

        <div className="container">
            <div className="searchtron">
                <h3>what do you want to watch {this.add}?</h3>
                <p><input type="text" id="movie-input" placeholder="Search for movies" onKeyUp={this.handleChange} /></p>
            </div>

            <div>
                {this.state.movieTitle} is the movie
                <img src={this.state.moviePoster} alt="movie" />
            </div>
        </div>

        );
    }
});

module.exports = Movies;