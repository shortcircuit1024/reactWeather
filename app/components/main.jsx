var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//     render: function() {
//         return (
//             <div class="container-fluid">
//                 <h1>Main Component</h1>
//                 <Nav/>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

var Main = (props) => {
  return (
      <div class="container-fluid">
          <h1>Main Component</h1>
          <Nav/>
          {props.children}
      </div>
  );
}

module.exports = Main;
