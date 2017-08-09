import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import GifOrganiser from './GifOrganiser';
import FindGif from './FindGif'; 
import request from 'superagent';

// API KEY f2a46c536f804ff5882a0f5acd2bb922

class App extends Component {
	constructor(){
		super();
		this.state = {
            gifs: []
        }
        this.handleTermChange = this.handleTermChange.bind(this);

	}

	handleTermChange(term) {
    	const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

    	request.get(url, (err, res) => {
            this.setState({gifs:res.body.data})
		});
	};
  	render() {
        return (
            <div>
            	
		    	<FindGif onTermChange={term => this.handleTermChange(term)} /> 
		    	<GifOrganiser gifs={this.state.gifs} />
		    {/*this.state.gifs for the array to get filled*/}
		    </div>
        );
    }
}

export default App;

{/*passing functions */}
{/*remember you can only insert term with dollar sign if you use single quotation marks around the string*/}
{/*Have to ---import request from 'superagent';--- first*/}
{/*API CALL TO AN ENDPOINT*/}
{/*base api url --- http://api.giphy.com/v1/gifs/search?q=*/}
{/*my API key --- f2a46c536f804ff5882a0f5acd2bb922*/}