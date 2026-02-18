// ====== Students CRUD Controllers  ======
export const getAllStudents = (req, res) => {
  res.json({
    success: true,
    count: students.length,
    data: students
  });
};

export const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  res.json({
    success: true,
    data: student
  });
};

export const createStudent = (req, res) => {
  const { name, email, major, semester, gpa } = req.body;

  if (!name || !email || !major || !semester) {
    return res.status(400).json({
      success: false,
      message: "Please provide name, email, major, and semester"
    });
  }

  const newStudent = {
    id: generateStudentId(),
    name,
    email,
    major,
    semester: parseInt(semester),
    gpa: gpa ? parseFloat(gpa) : 0.0
  };

  students.push(newStudent);

  res.status(201).json({
    success: true,
    message: "Student created successfully",
    data: newStudent
  });
};

export const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, major, semester, gpa } = req.body;

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  if (name) students[index].name = name;
  if (email) students[index].email = email;
  if (major) students[index].major = major;
  if (semester) students[index].semester = parseInt(semester);
  if (gpa !== undefined) students[index].gpa = parseFloat(gpa);

  res.json({
    success: true,
    message: "Student updated successfully",
    data: students[index]
  });
};

export const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.json({
    success: true,
    message: "Student deleted successfully",
    data: deletedStudent
  });
};