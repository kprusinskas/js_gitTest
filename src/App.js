import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Hello value={'tekstas332'}/>
                <Kitas value={10}/>
            </div>
        );
    }
}
function showText (myValue, newValue) {
    return myValue + ' labas ' + newValue
}
function Hello (params) {
    return (<div><Labas tekstas={params.value} kitasTekstas={'kitsTEXTS'}/></div>)
}
function Labas (params) {
    return (<div>{showText(params.tekstas, params.kitasTekstas)}</div>)
}

function Kitas (kiekis) {
    return (<div>Kitz</div>)
}
export default App;




// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//     render() {
//         let array = ['vienas', 'du', 'trys'] // use map
//         console.log(array);
//         return (
//             <div className="App">
//                 <Tekstas />
//                 //todo show 10 or more labas
//             </div>
//         );
//     }
// }
//
// function Tekstas () {
//     let text = "";
//     let value = 10;
//     let i = 0;
//
//     for (i = 0; i <= value; i++) {
//         console.log(i);
//         text += "Labas" + i + " ";
//
//
//     }
//     return (text);
// }
//
// export default App;