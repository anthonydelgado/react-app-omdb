var $ = require('jquery');
window.jQuery = $;
window.$ = $;
var React = require('react');
// Cards
var Card = require('./Card');

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
        this.serverRequest = $.get('https://www.omdbapi.com/?s=' + name + '&y=&plot=short&r=json', function (result) {
            // var movieFound = result[0];
            this.setState({
                movieTitle: result.Search[0].Title,
                moviePoster: result.Search[0].Poster,
                movieObject: result.Search,
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

        if(this.state.movieObject){
            var rows = [];
            var lastCategory = null;
            this.state.movieObject.forEach(function(movie) {
                var url = 'http://www.imdb.com/title/' + movie.imdbID + '/';
                if(!(movie.Poster == "N/A")){
                    var image = movie.Poster;
                }else{
                    var image = 'http://placehold.it/182x268';
                }
                rows.push(<Card title={movie.Title}  poster={image} url={url} />);
            });

        }

        return (
        <div className="container">
            <div className="searchtron">
                <h3>what do you want to watch?</h3>
            </div>
            <nav>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input  id="movie-input" placeholder="Search for movies" onKeyUp={this.handleChange} type="search" required />
                                <label for="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>

                <div className="row">{rows}</div>
        </div>

        );
    }
});

module.exports = Movies;