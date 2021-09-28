import './App.css';
import NavigationBar from './components/NavigationBar';

function CountryGreeting({countryName}){
  return(
    <h3> Hello from {countryName}</h3>
  );
}

function AddingTwoNumbers({firstNum, secondNum}){

  if(firstNum % 2 === 0){
    return(
      <h4> Even numbers not allowed </h4>
    )
  }
  return(
    <div>
      <h4> 
      Sum of {firstNum} and {secondNum} is {firstNum + secondNum}
      </h4>
      <p> ----------------------------------------- </p>
    </div>
    
  )
}

function StudentReportCard({student}){
  const {name, roll, subject} = student;
  return(
    <div>
      <h4> {name} </h4>
      <span> Roll: {roll} </span>
      <span> Subject: {subject} </span>
    </div>
  )
}


export function App() {

  const studentData = [{
    name: "Soham Mukherjee",
    roll: "77",
    subject: "Computer Science"
  }, {
    name: "Ram Sharma",
    roll: "45",
    subject: "Commerce"
  }, {
    name: "Rahul Modi",
    roll: "33",
    subject: "Arts"
  }]

  return (
    <div>
      <CountryGreeting countryName={"India"} /> 
      <CountryGreeting countryName={"Singapore"} />
      <AddingTwoNumbers firstNum={20} secondNum={30} />
      <AddingTwoNumbers firstNum={45} secondNum={120} />

      {studentData.map(student => <StudentReportCard student={student} />)}
      
    </div>
  );
}
