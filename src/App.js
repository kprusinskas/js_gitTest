import React, { Component } from 'react';
import './App.css';
class App extends Component {
    constructor () {
        super();
        this.state = {
            value1: 'value1',
            value2: 'value2',
            value3: 'value3',
        }
    }

    handleChange (event) {
        this.state[event.target.id] = event.target.value;
        this.setState({});
    }

    render() {
        return (
            <div className="App">
                <input id={'value1'} onChange={(event)=>this.handleChange(event)} value={this.state.value1} />
                <div>
                    {this.state.value1}
                </div>
                <input id={'value2'} onChange={(event)=>this.handleChange(event)} value={this.state.value2} />
                <div>
                    {this.state.value2}
                </div>
                <input id={'value3'} onChange={(event)=>this.handleChange(event)} value={this.state.value3} />
                <div>
                    {this.state.value3}
                </div>
                <br/>
                <div onMouseDown={()=>alert("alert on clickDown")}>Alert-1</div>
                <br/>
                <div onMouseUp={()=>alert("alert on clickUp")}>Alert-2</div>
            </div>
        );
    }
}

export default App;