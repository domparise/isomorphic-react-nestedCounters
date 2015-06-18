/** @jsx React.DOM */
var React = require('react/addons');
var NestedCounter = require('./NestedCounter');

var mountNode = document.getElementById("react-main-mount");

React.render(NestedCounter(), mountNode);
