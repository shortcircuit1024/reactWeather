var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//     render: function() {
//         return (
//           <div>
//             <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//             <span> </span>
//             <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
//             <span> </span>
//             <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
//           </div>
//         );
//     }
// });

var Nav = () => {
    return (
        <div>
            <IndexLink to="/" activeClassName="active" activeStyle={{
                fontWeight: 'bold'
            }}>Get Weather</IndexLink>
            <span></span>
            <IndexLink to="/about" activeClassName="active" activeStyle={{
                fontWeight: 'bold'
            }}>About</IndexLink>
            <span></span>
            <IndexLink to="/examples" activeClassName="active" activeStyle={{
                fontWeight: 'bold'
            }}>Examples</IndexLink>
        </div>
    );
};

module.exports = Nav;
