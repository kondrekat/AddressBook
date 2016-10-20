var React = require('react');
var CreateButton = require('./CreateButton');
var Contact = require('./ContactConf');
var EmptyForm = require('./EmptyForm');
var Search = require('./Search');

var AddressBook = React.createClass({
	getInitialState: function () {
		return { 
		needEmptyForm: false,
		removeElem: false,
		searchState: false,
		searchRes: '' //строка ключей, удовлетвор€ющих поиску, разделЄнных ","
		};
	},
	
	openEmptyForm: function(){
		this.setState({ needEmptyForm: true });
	},
	
	closeEmptyForm: function(){
		this.setState({ needEmptyForm: false });
	},
	
	showRes: function(res, searchNeeded){
		this.setState({ searchRes: res, searchState: searchNeeded });
	},
	
	render: function(){
		
		var ContactList = [];
		if(!this.state.searchState){
			for(var i = 0; i < localStorage.length; i++){
				var itKey = localStorage.key(i);
				ContactList.push(<Contact itemKey = {itKey} />);
			}
		}
		else{
			var tmp = this.state.searchRes.substring(0, this.state.searchRes.length - 1);
			var res = tmp.split(',');
			console.log("tmp = ", tmp);
			for(var i = 0; i < res.length; i++){
				if(res[i] != ''){
					console.log("itkey = " + res[i]);
					ContactList.push(<Contact itemKey = {res[i]} />);
				}
			}
		}
		if(this.state.needEmptyForm){
			return(
			<div style={{margin: 'auto', width: 700, heigth: 1000}} >
				<h2>Address Book</h2>
				<CreateButton changeState = {this.openEmptyForm} />
				<EmptyForm closeForm = {this.closeEmptyForm}/>
				<Search onChange = {this.showRes}/>
				{ContactList}
			</div>
			);
		}
		else{
			return(
			<div style={{margin: 'auto', width: 700, heigth: 1000}} > 
				<h2>Address Book</h2>
				<CreateButton changeState = {this.openEmptyForm} />
				<Search onChange = {this.showRes}/>
				{ContactList}
			</div>
			);
		}
	}

});

module.exports = AddressBook;