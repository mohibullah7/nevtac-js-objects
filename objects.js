function submitForm() {
let name =document.getElementById('namestudent').value;
let nameValue=name;
let semester=document.getElementById('semester').value;
let semValue=semester;
let cgpa =document.getElementById('cgpa').value;
let cgpaValue=Number(cgpa);
let rollNo=document.getElementById('rollno').value;
let rollValue=Number(rollNo);

let studentDetails={
  studentName : nameValue,
  currentSemester: semValue,
  currentCgpa : cgpaValue,
  studentRollNo :rollValue,
  
}

// studentDetails.innerHTML = `
// Name: ${studentDetails.studentName}<br>
// Semester: ${studentDetails.currentSemester}<br>
// CGPA: ${studentDetails.currentCgpa}<br>
// Roll No: ${studentDetails.studentRollNo}
// `;


// window.alert("show message");
// console.log(studentDetails);

// let studentAllData="";
// for (let x in studentDetails) {
//  studentAllData+=studentDetails[x]+"<br/>"
// }

let studentAllData="";
for (let x in studentDetails) {
 studentAllData+=studentDetails[x]+"<br/>"
}

let output=document.getElementById('show').innerHTML=studentAllData + studentAllData.indexOf(2);
}

// console.log("show this")