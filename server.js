// server.js
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// typical express boilerplate
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


////////// <REACT> /////////

require("node-jsx").install(); // Make sure to include the JSX transpiler

var React = require('react/addons');

var NestedCounter = require(__dirname+'/app/NestedCounter'); // server-side React component

app.get('/', function(req, res){
    var reactHtml = React.renderToString(NestedCounter()); // generate the markup
    return res.render('index.jade', {reactOutput: reactHtml}); // Output html rendered by react
});

////////// </REACT> /////////


app.listen(4444);