/** @jsx React.DOM */
var React = require('react/addons');

var InnerCounter = require('./InnerCounter');

var OuterCounter = React.createClass({
    getInitialState: function () {
        return {
            outerCount: 0,
            innerCount: 0
        };
    },
    handleUserInput: function (inner) { // inner == true if called by child
        this.setState({
            outerCount: (this.state.outerCount += 1), // always increment outer
            innerCount: (this.state.innerCount += inner ? 1 : 0) // only increment inner if called by inner
        });
    },
    handleClick: function(evt) {
        return this.handleUserInput(false);
    },
    render: function() {
        return (
            <div>
                <p>{this.state.outerCount}</p>
                <button onClick={this.handleClick}>Outer</button>
                <InnerCounter handleUserInput={this.handleUserInput} innerCount={this.state.innerCount}/>
            </div>
        );
    }
});

module.exports = React.createFactory(OuterCounter);