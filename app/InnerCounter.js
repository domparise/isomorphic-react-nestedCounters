/** @jsx React.DOM */
var React = require('react/addons');

var InnerCounter = React.createClass({
    handleClick: function() {
        this.props.handleUserInput(true);
    },
    render: function () {
        return ( 
            <div>
                <p>{this.props.innerCount}</p>
                <button onClick={this.handleClick}>Inner</button>
            </div>
        );
    }
});

module.exports = React.createFactory(InnerCounter);