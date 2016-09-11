var React = require('react');

var Search = React.createClass({
    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },

    render: function () {
        return (
                <div className="container">
                    <div className="searchtron">
                        <h3>what do you want to watch {this.add}?</h3>
                        <p><input type="text" id="movie-input" placeholder="Search for movies" onKeyUp={this.handleChange} /></p>
                    </div>
                </div>

        );
    }
});

module.exports = Search;