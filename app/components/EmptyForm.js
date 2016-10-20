var React = require('react');
var RaisedButton = require('material-ui/RaisedButton').default;
var TextField = require ('material-ui/TextField').default;

var EmptyForm = React.createClass({
	addContact: function(){
		var obj = {
		name: document.getElementById('name').value,
		phone: document.getElementById('phone').value,
		email: document.getElementById('email').value,
		address: document.getElementById('address').value,
		timeOfAdd: localStorage.length
		}
		
		var serialObj = JSON.stringify(obj); //сериализуем его
		
		try {
		  localStorage.setItem(obj.name, serialObj); 
		} catch (e) {
		  if (e == QUOTA_EXCEEDED_ERR) {
		   alert('Превышен лимит');
		  }
		}
		
		
		this.props.closeForm();
	}, 
	
	closeForm: function(){
		this.props.closeForm();
	},
	
	render: function(){
		return (
			<div style = {{margin: 'auto', padding: 5, width: 500}}>
				 <TextField id = 'name' hintText='Name'  /><br />
				 <TextField id = 'phone'  hintText='Phone'  /><br />
				 <TextField id = 'email'  hintText='E-mail'  /><br />
				 <TextField id = 'address' hintText='Address'  /><br />
				<RaisedButton label='Save' onClick = {this.addContact} primary={true} style= {{margin: 10}}/>
				<RaisedButton label='Cancel' onClick = {this.closeForm} primary={true} style= {{margin: 10}}/>
			</div>
		);
	}
});

module.exports = EmptyForm;