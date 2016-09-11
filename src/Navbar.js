var React = require('react');

var Navbar = React.createClass({
    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },

    render: function () {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Movie Clone</a>
                </div>
            </nav>
        );
    }
});

module.exports = Navbar;