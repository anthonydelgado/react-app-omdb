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
                    <a href="#" className="brand-logo">MovieFone</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">GitHub</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Navbar;