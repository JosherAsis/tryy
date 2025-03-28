// controllers/studentController.js


const students = [
    { id: 1, name: "Josher Asis BSIT-2A", age: 23 },
    
];

// Get all students
const getStudents = (req, res) => {
    res.json(students);
};

// Add a new student
const addStudent = (req, res) => {
    const { name, age } = req.body;
    const newStudent = { id: students.length + 1, name, age };
    students.push(newStudent);
    res.status(201).json(newStudent);
};

// Update a student
const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const student = students.find(stu => stu.id === parseInt(id));
    
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = name || student.name;
    student.age = age || student.age;
    res.json(student);
};

// Delete a student
const deleteStudent = (req, res) => {
    const { id } = req.params;
    const index = students.findIndex(stu => stu.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);
    res.json({ message: "Student deleted successfully" });
};


module.exports = { getStudents, addStudent, updateStudent, deleteStudent };

