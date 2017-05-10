import React, { Component } from 'react';
import './App.css';
//import info from "./dataModel"
import StudentTable from "./StudentTable"

class App extends Component {
  

  render() {
    
    return (
      
      <div className="App">
        <div className="App-header">
          <h2>React - Exam Preparation Exercise</h2>
        </div>
        <div className="App-intro">s
          <h4>The studentsInfo structure contains two lists:</h4>
          <p>One with all the required headers, whis is a total of ({StudentTable.headerCount})</p>
          <p>One with all the Students, whis is a total of ({StudentTable.studentCount})</p>
          <p>Use the empty table below, or move it (you must eventually) into a separate component</p>
          <StudentTable />
        </div>
      </div>
    );
  }
}

export default App;
