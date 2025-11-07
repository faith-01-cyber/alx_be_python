// 🎓 Student Grade Calculator

// Step 1: Create student data
const students = [
  { name: "Faith Kemboi", marks: 85 },
  { name: "John Doe", marks: 67 },
  { name: "Mary Wambui", marks: 73 },
  { name: "Alex Kimani", marks: 48 },
];

// Step 2: Function to calculate grade
function calculateGrade(mark) {
  if (mark >= 80) return "A";
  else if (mark >= 70) return "B";
  else if (mark >= 60) return "C";
  else if (mark >= 50) return "D";
  else return "E";
}

// Step 3: Generate report
console.log("🎓 STUDENT GRADE REPORT");
console.log("----------------------------------");
console.log("Name\t\tMarks\tGrade");
console.log("----------------------------------");

let total = 0;

students.forEach(student => {
  const grade = calculateGrade(student.marks);
  total += student.marks;
  console.log(`${student.name}\t${student.marks}\t${grade}`);
});

const average = total / students.length;
console.log("----------------------------------");
console.log(`Class Average: ${average.toFixed(2)}`);
 
