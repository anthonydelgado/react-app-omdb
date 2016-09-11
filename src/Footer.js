var React = require('react');

var Footer = React.createClass({
    handleChange: function (e) {
        var name = e.target.value;
        this.props.onChange(name);
    },

    render: function () {
        return (
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container">
                        © 2014 Copyright Movie Clone
                    </div>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;