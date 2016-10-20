var React = require('react');
var TextField = require ('material-ui/TextField').default;

var ContEl = React.createClass({
	getInitialState: function(){
		return {
			userInput: this.props.text
		};
	},

	handleUserInput: function (e) {
		var returnObj = JSON.parse(localStorage.getItem(this.props.stKey));
		obj[this.props.objType] = e.target.value;
		var serialObj = JSON.stringify(obj);
		try {
		  localStorage.setItem(this.props.stKey, serialObj); 
		} catch (e) {
		  if (e === QUOTA_EXCEEDED_ERR) {
		   alert('Превышен лимит');
		  }
		}
		
		this.setState({
		  userInput: e.target.value
		});
	},
	
	render: function(){
		return (
			 <div>
				<TextField
					id={this.props.objType}
					value={this.state.userInput}
					onChange={this.handleUserInput}
				/>
			 </div>
    );
	}
});

module.exports = ContEl;
