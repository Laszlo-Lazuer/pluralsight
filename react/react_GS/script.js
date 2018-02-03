import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  	render() {
  	return (
    	<div>
      <h1>Hello</h1>
      <button>One</button>
      <button>One</button>
      </div>
    );
  }
}


// ReactDOM.render(
//   <h1>hello world!</h1>,
//   document.getElementById('firstapp')
// );


ReactDOM.render(<App />, document.getElementById('firstapp'));

// ReactDOM.render(
//   <button>Go</button>,
//   document.getElementById('firstElement')
// );
