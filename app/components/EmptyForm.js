var React = require('react');
var RaisedButton = require('material-ui/RaisedButton').default;
var TextField = require ('material-ui/TextField').default;

var unicKey = "TOpwJkKLwV";
var min = 0;
var max = 100000;

var EmptyForm = React.createClass({
	addContact: function(){
		var newName = document.getElementById('name').value;
		if(!newName.match(/^[a-z0-9\s]+$/i)) alert('Name not OK');
		else{
			var newPhone = document.getElementById('phone').value;
			if(!newPhone.match(/^\+?[0-9\-]+$/)) alert('Phone not OK');
			else{
				var newEmail = document.getElementById('email').value;
				if(!newEmail.match(/@/)) alert('Email not OK');
				else{
					var newAddress = document.getElementById('address').value;
					if(!newAddress.match(/^[a-z0-9\s]*/i)) alert('Address not OK');
					else{
						var obj = {
							id: Math.floor(Math.random() * (max - min + 1)) + min, //id is random number between min and max
							name: newName,
							phone: newPhone,
							email: newEmail,
							address: newAddress
						}
			
						var serialObj = JSON.stringify(obj); //serialazed it
						var tmp = localStorage.getItem(unicKey);
						tmp = serialObj + "%" + tmp;
			
						try {
						  localStorage.setItem(unicKey, tmp);
						} 
						
						catch (e) {
						  if (e == QUOTA_EXCEEDED_ERR) {
						   alert('Превышен лимит');
						  }
						}
						this.props.closeForm();
					}
				}
			}
		}
	}, 
	
	closeForm: function(){
		this.props.closeForm();//!!! Можно ли это убрать???
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
