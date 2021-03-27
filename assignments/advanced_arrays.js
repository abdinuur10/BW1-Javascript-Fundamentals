// ==== ADVANCED Array Methods ====

// Given this student data from public school, follow the instructions below.  Use array methods to answer the requests.

const students = [
    {id: 1, student_name: "Obidiah", class: "Math", age: 17, gender: "M"},
    {id: 2, student_name: "Kip", class: "English", age: 15, gender: "F"},
    {id: 3, student_name: "Liuka", class: "History", age: 14, gender: "F"},
    {id: 4, student_name: "Adolphus", class: "Math", age: 15, gender: "M"},
    {id: 5, student_name: "Decca", class: "Math", age: 12, gender: "M"},
    {id: 6, student_name: "Odette", class: "English", age: 10, gender: "F"},
    {id: 7, student_name: "Harley", class: "English", age: 12, gender: "F"},
    {id: 8, student_name: "Gilles", class: "History", age: 17, gender: "M"},
    {id: 9, student_name: "Kenon", class: "History", age: 16, gender: "M"},
    {id: 10, student_name: "Lev", class: "Math", age: 13, gender: "M"}
];
  
  
  /* Request 1:
  
  The school wants all student's gender converted to full gender word, M = Male, F = Female. Print the name of the student and their gender like "Lev : Male".
  
  */
  let stuentinformation = [];
// console.log(stuentinformation); 
const mystudents = students.map((item) => item.student_name.gender())
console.log(students)

  
  /* Request 2:
  
  The school wants to know the students that are one year away from graduating, the graduating year is 18. Print the name of the student and their age.
  
  */
let mygraduation = '18';
const student_name=[]
runners.filter((item) => {
  if (item.student_name === "age") {
    student_name.push(item.shirt_size.age)
  }
})
console.log(student_name)



  /* Request 3: 
  
The school wants to know the percentage of females and males. Print the percentage of females like "Females: 40%" and "Males: 60%", you can use the total items to calculate your percentage.
  
  */
const studnetsPercentage = students.reduce(function(acculator,currentValue) {
  console.log(`I am the accumulator ${accumulator}`)
  console.log(`I am the currentValue ${currentValue}`)
  return accumulator + currentValue.gender;
},0)

console.log(studnetsPercentage)


  