var React = require ('react');
var ReactDOM = require('react-dom');
var AddressBook = require('./components/AddrBook');
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
//var darkBaseTheme = require('material-ui/styles/baseThemes/darkBaseTheme').default;
//var getMuiTheme = require('material-ui/styles/getMuiTheme').default;


var Main = React.createClass({
	render: function(){
		return (
		<div>
			<MuiThemeProvider>
				<AddressBook />
			</MuiThemeProvider>
			
		</div>
		);
	}
});

ReactDOM.render(
	<Main />,
	document.getElementById('app')
);
