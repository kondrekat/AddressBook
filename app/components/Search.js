var React = require('react');
var TextField = require ('material-ui/TextField').default;

var unicKey = "TOpwJkKLwV";

var Search = React.createClass({
	getInitialState: function(){
		return {
			userInput: ''
		};
	  },
	
	  handleUserInput: function (e) {
			var resOfSearch = '';
			if(e.target.value != ''){
				var contacts = localStorage.getItem(unicKey).split("%"); //Get all contacts as array
				for(var i = 0; i < contacts.length; i++){
					if(contacts[i] != ""){ 
						var tmp = JSON.parse(contacts[i]);
						var substr = e.target.value;
						if ((tmp.name.indexOf(substr) != -1) || (tmp.phone.indexOf(substr) != -1) || (tmp.email.indexOf(substr) != -1) || (tmp.address.indexOf(substr) != -1)){
							resOfSearch += tmp.id + '%';
						}
					}
				}	
				
				this.props.onChange(resOfSearch, true);
				
			}
			else this.props.onChange(resOfSearch, false);
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
