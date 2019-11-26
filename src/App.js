import React from 'react';
import {db} from './config/firebase';

class App extends React.Component
{
  render(){
    console.log(db);
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
