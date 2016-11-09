var React = require('react');
var TextField = require ('material-ui/TextField').default;

var unicKey = "TOpwJkKLwV";

var ContEl = React.createClass({
	getInitialState: function(){
		return {
			userInput: this.props.text
			//oldValue: this.props.text
		};
	},
	componentWillReceiveProps: function (nextProps) {
		this.setState({
		  userInput: nextProps.text
		});
	},
	handleUserInput: function (e) {
		var contacts = localStorage.getItem(unicKey).split("%"); //Get all contacts as array
		for(var i = 0; i < contacts.length; i++){
			if(contacts[i].indexOf(this.props.itemId) != -1){
				var tmp = JSON.parse(contacts[i]);
				tmp[this.props.objType] = e.target.value; 
				contacts[i] = JSON.stringify(tmp);
			}
		}
		localStorage.removeItem(unicKey);
		var newValue = "";
		for (var i = 0; i < contacts.length; i++){
			newValue += contacts[i] + "%";
		}
		localStorage.setItem(unicKey, newValue);
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
