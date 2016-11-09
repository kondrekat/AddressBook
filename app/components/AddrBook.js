var React = require('react');
var CreateButton = require('./CreateButton');
var Contact = require('./ContactConf');
var EmptyForm = require('./EmptyForm');
var Search = require('./Search');

var unicKey = "TOpwJkKLwV";

var AddressBook = React.createClass({
	getInitialState: function () {
		return { 
		needEmptyForm: false,
		//removeElem: false,
		searchState: false,
		searchRes: '' //string if ids as result of search. Split by "%"
		};
	},
	
	componentWillMount: function(){
		if(localStorage.getItem(unicKey) === null) 
			localStorage.setItem(unicKey, '');
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
			var contacts = localStorage.getItem(unicKey).split("%");
			for(var i = 0; i < contacts.length; i++){
				if(contacts[i] != ""){
					ContactList.push(<Contact item = {contacts[i]} />);
				}
			}
		}
		else{
			var tmp = this.state.searchRes.substring(0, this.state.searchRes.length-1);//remove last "%"
			var res = tmp.split('%');
			
			var contacts = localStorage.getItem(unicKey).split("%"); //Get all contacts as array
			for(var i = 0; i < res.length; i++){
				if(res[i] != ''){
					for(var j = 0; j < contacts.length; j++){
						if(contacts[j].indexOf(res[i]) != -1){
							ContactList.push(<Contact item = {contacts[j]} />);
						}
					}		
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
