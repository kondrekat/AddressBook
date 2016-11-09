var React = require('react');
var ContEl = require('./ContEl');
var RaisedButton = require('material-ui/RaisedButton').default;
var FlatButton = require('material-ui/FlatButton').default;
var Dialog = require('material-ui/Dialog').default;

var unicKey = "TOpwJkKLwV";

var Contact = React.createClass({
	getInitialState: function () {
		return { 
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
		var tmp = localStorage.getItem(unicKey);
		localStorage.setItem(unicKey, tmp.replace(this.props.item + '%', ''));
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
		
		
		var returnObj = JSON.parse(this.props.item);
		if(!this.state.deleted){
			return (
				<div style = {{ margin: 'auto', width: 500}}>
					<ContEl text = {returnObj.name} objType = 'name' itemId = {returnObj.id}/>
					<ContEl text = {returnObj.phone} objType = 'phone' itemId = {returnObj.id}/>
					<ContEl text = {returnObj.email} objType = 'email' itemId = {returnObj.id}/>
					<ContEl text = {returnObj.address} objType = 'address' itemId = {returnObj.id}/>
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
