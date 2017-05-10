import React, { Component } from 'react';
import './App.css';
import info from "./dataModel"

class App extends Component {
  

  render() {
    var studentInfo = info.studentsInfo;
    var headerCount = studentInfo.headers.length;
    var studentCount = studentInfo.students.length;
    
    const headerRow = studentInfo.headers.map(function(header) {
      return(
        <th key={header.courseId}>{header.courseName}</th>
      );
    });
    const dataRows = studentInfo.students.map(function(student) {
      averageGrade(student);
      
      return(
        
        <tr key={student.studentId}>
          <td>{student.name}</td>
            { student.grades.map(function(grades, i){
                
                return(<td key={i}>{grades.grade}</td>);
              
              })
            
          }
          <td>{student.avg}</td>
        </tr>
      );
    });
    return (
      
      <div className="App">
        <div className="App-header">
          <h2>React - Exam Preparation Exercise</h2>
        </div>
        <div className="App-intro">s
          <h4>The studentsInfo structure contains two lists:</h4>
          <p>One with all the required headers, whis is a total of ({studentInfo.headers.length})</p>
          <p>One with all the Students, whis is a total of ({studentInfo.students.length})</p>
          <p>Use the empty table below, or move it (you must eventually) into a separate component</p>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                {headerRow}
                <th>Average</th>
              </tr>      
            </thead>
            <tbody>
            {dataRows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function averageGrade(student) {
    let sum = 0;
    let sumOfGrades = 0;
    let number = 0
    let countGrades = 0;
    student.grades.map(function(grades){
      
      if(isNaN(grades.grade)) {
        number = 0;
        countGrades = 0;
      } else {
      number = parseInt(grades.grade, 10);
      countGrades = 1;   
      sum += number;
      sumOfGrades += countGrades ;
      console.log(sum);
      
      return student.avg = sum/sumOfGrades;
    }
    return null;
    
    })
  }

export default App;
