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

let obejects ={
  name:'mohib khan',
  cnic:3232832392,
phone:3827382
}
const conatct=[829328,3232,32323,32323,3232];
const names=['jahsj','jahsjah','khan']
// console.log("show this")