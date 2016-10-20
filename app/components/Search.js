var React = require('react');
var TextField = require ('material-ui/TextField').default;

var Search = React.createClass({
	getInitialState: function(){
		return {
			userInput: ''
		};
	  },
	
	  handleUserInput: function (e) {
			var resOfSearch = '';
			if(e.target.value != ''){
				for(var i = 0; i < localStorage.length; i++){
					var itKey = localStorage.key(i);
					var returnObj = JSON.parse(localStorage.getItem(itKey));
					var substr = e.target.value;
					if ((returnObj.name.indexOf(substr) != -1) || (returnObj.phone.indexOf(substr) != -1) || (returnObj.email.indexOf(substr) != -1) || (returnObj.address.indexOf(substr) != -1)){
						resOfSearch += itKey + ',';
					}
				}
				
				this.props.onChange(resOfSearch, true);
			}
			else { this.props.onChange(resOfSearch, false);}
			this.setState({
				userInput: e.target.value
			});
	 },
	 
	render: function () {
		return (
		  <div style = {{ margin: 5, padding: 5 }}>
				<TextField
					id="search"
					hintText="Search"
					value={this.state.userInput}
					onChange={this.handleUserInput}
					style = {{width: 600, float:'right'}}
				/>
			 
		  </div>
		);
	  }
	});

module.exports = Search;