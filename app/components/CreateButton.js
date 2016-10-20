var React = require('react');
var RaisedButton = require('material-ui/RaisedButton').default;

var Button = React.createClass({
	render: function(){
		return <RaisedButton label="Save contact" primary={true} onClick={this.props.changeState} style={{margin: 5}} />;
	}
});
module.exports = Button;