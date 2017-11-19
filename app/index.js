var React = require('react');
var ReactDOM = require('react-dom');
const PropTypes = require('prop-types');

require('./index.css');

// state
// lifecycle event
// UI

class App extends React.Component{
    render(){
        return (
            <div>
                Hello React I am coming!
            </div>
        )
    }

}

App.propTypes = {
    
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

