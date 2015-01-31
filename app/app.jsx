'use strict';

var React = require('react');
window.React = React;

var IndexComponent = require('./components/indexcomponent.jsx');

React.render(<IndexComponent />, document.getElementById('content'));
