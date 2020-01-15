import React from 'react';

class Application2 extends React.Component {

    constructor(props) {
        super(props);
        this.handleclick = this.handleclick.bind(this);
        this.state = {
            show: 'Application 2'
        };
    }

    handleclick() {
        this.setState ({
            show: <img width="1200" height="600" src="https://imgs.xkcd.com/comics/tattoo_ideas.png" sizes="(max-width: 1200px) 100vw, 1200px"/> 
        });
        console.log('click')
    };

    render() {
        return(
            <button onClick={this.handleclick}>{this.state.show}</button>
        );
    }

    
}

export default Application2;