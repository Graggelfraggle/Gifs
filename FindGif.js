import React from 'react';

{/*Find gif as input is updated*/}
class FindGif extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }
	
    onInputChange(term) {
        this.setState({term});
    	{/*execute passed function as property*/}
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
            	<h1>Fuel Your Gif Addiction</h1>
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default FindGif;