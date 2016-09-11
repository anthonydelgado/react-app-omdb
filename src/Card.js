var React = require('react');

var Card = React.createClass({
    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },

    render: function () {
        return (
            <div className="col s12 m6 l4">
                <div className="card horizontal grey darken-3">
                    <div className="card-image">
                        <img src={ this.props.poster } alt="image" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content white-text">
                            <span className="card-title">{ this.props.title }</span>
                            <p></p>
                        </div>
                        <div className="card-action">
                            <a href={ this.props.url }>Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Card;