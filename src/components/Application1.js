import React from 'react';

class Application1 extends React.Component {

    constructor(props) {
        super(props);
        this.handleclick = this.handleclick.bind(this);
        this.state = {
            show: 'Application 1' ,
            Num1: '' ,
            Num2: '' ,
        };
    }

    handleclick() {
        this.setState ({
            show: this.test()
        });
        console.log('click')
    };

    updateNum1(e) {
        this.setState ({
            Num1: e.target.value
        });
    }
    
    updateNum2(e) {
        this.setState ({
            Num2: e.target.value
        });
    }

    render() {
        return(
            <button onClick={this.handleclick}>{this.state.show}</button>
        );
    }

    test =()=> {
        return (
        <div>
            <input type='text' placeholder='Num1' onChange={e => this.updateNum1(e)}/>
            <input type='text' placeholder='Num2' onChange={e => this.updateNum2(e)}/>
            <button onClick={ (e) => { this.Sum(); }}>Result</button>
            </div>
        );
    }

    Sum=() => {
        var N1=parseInt(this.state.Num1);
        var N2=parseInt(this.state.Num2);

        var Ans=N1+N2;
        alert(Ans)
    }

}

export default Application1;