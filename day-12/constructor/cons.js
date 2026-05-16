// TASK: Create a Student constructor and make 3 students
// ✔ You must:

// Create a constructor function named Student

// It should take name and class as parameters

// Create three different student objects

// Print all of them

function Student ( name, className, roll){
    this.name= name;
    this.className= className;
    this.roll= roll;
}

let student1 = new Student ('Akibul', 'Ten', 23);
let student2 = new Student ('Sakibul', 'Nine', 45);
let student3 = new Student ('Rakibul', 'Eight', 12);
let student4 = new Student ('Siddikul', 'Seven', 3);
let student5 = new Student ('Aanamul', 'Eleven', 65);

let students = [student1, student2, student3, student4, student5 ];

function classTenStudents(students){
    for (let student of students){
        if (student.className === 'Ten'){
            console.log(student);
    }
            
}

}

classTenStudents(students);