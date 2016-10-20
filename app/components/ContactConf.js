var React = require('react');
var ContEl = require('./ContEl');
var RaisedButton = require('material-ui/RaisedButton').default;
var Divider = require('material-ui/Divider').default;
var FlatButton = require('material-ui/FlatButton').default;
var Dialog = require('material-ui/Dialog').default;

var Contact = React.createClass({
	getInitialState: function () {	
		return {
			name: this.props.itemKey,
			deleted: false,
			open: false
		};
	},
	
	handleOpen: function () {
		this.setState({open: true});
	  },

	handleClose: function () {
		this.setState({open: false});
	  },
	
	delCont: function(){
		localStorage.removeItem(this.state.name);
		this.setState({ deleted: true, open: false });
	},
	
	render: function(){
		const actions = [
		 <FlatButton
			label="Cancel"
			primary={true}
			onTouchTap={this.handleClose}
		 />,
		 <FlatButton
			label="Delete"
			primary={true}
			onTouchTap={this.delCont}
		 />,
		];
		
		var key =  this.props.itemKey;
		console.log("this.props.itemKey = " + key);
		
		var returnObj = JSON.parse(localStorage.getItem(key));
		//console.log("name = " + returnObj.name);
		if(!this.state.deleted){
			//console.log("name = " + returnObj.name);
			return (
				<div style = {{ margin: 'auto', width: 500}}>
					<ContEl text = {returnObj.name} stKey = {key} objType = 'name' />
					<ContEl text = {returnObj.phone} stKey = {key} objType = 'phone' />
					<ContEl text = {returnObj.email} stKey = {key} objType = 'email' />
					<ContEl text = {returnObj.address} stKey = {key} objType = 'address' />
					<RaisedButton label="Delete" onTouchTap={this.handleOpen} secondary={true}/>
					<Dialog
					  actions={actions}
					  modal={false}
					  open={this.state.open}
					  onRequestClose={this.handleClose}
					>
					  Do you want to delete this contact?
					</Dialog>
					
				</div>
			);
		}
		else return <div></div>;
		
	}
});

module.exports = Contact;