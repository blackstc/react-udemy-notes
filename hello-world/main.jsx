(function() {
  'use strict';

  //define a class
  var HelloWorld = React.createClass({
    render: function() {
      return <div>Hello World!</div>
    }
  });

  //react render the class
  var element = React.createElement(HelloWorld);

  //after it is rendered place in body
  React.render(element, document.body);
})();
