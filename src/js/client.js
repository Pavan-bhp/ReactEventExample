import React from "react";
import ReactDOM from "react-dom";

import Header from './header';
import Footer from './footer';
import Content from './content';

export default class Title extends React.Component {
constructor(){
	super();
	this.state={
		some:'Welcome',
	};
}

changeText(some){
	this.setState({some});
}



	  render() {
				
	    return (

		    	<div>
		    	<Header />
	    	    <Content  changeText={this.changeText.bind(this)} property={this.state.some}  />
	    	  
	    	    <Footer />
	    	    </div>

			    );
				}
}

const app = document.getElementById('app');
ReactDOM.render(<Title/>, app);
