import React, { Component } from 'react';
import info from "./dataModel"

export default class StudentTable extends Component {
    
    render() {
    var studentInfo = info.studentsInfo;
    var headerCount = studentInfo.headers.length;
    var studentCount = studentInfo.students.length;
    
 /*   const averageGrade = studentInfo.student.grades.map(function(grades) {
      let sum = 0;
      sum += parseInt(grades.grade, 10);
      return(sum/2);

    });*/
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

 