import React, { Component } from 'react';
import Keyboard from './components/Keyboard';
import TextArea from './components/TextArea';

class App extends Component {
  render() {
    return (
   
      <div className="App">
   
       <TextArea />
		<Keyboard />
		
			
      </div>
     
    );
  }
}

export default App;
