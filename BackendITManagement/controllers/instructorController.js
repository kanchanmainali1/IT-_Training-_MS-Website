const user = require('../model/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Course = require('../model/courseModel');
const Assignment = require('../model/assignmentModel');

const createCourse = async (req, res) => {
  try {
    const { title, description } = req.body;
    const course = await Course.create({ title, description, instructor: req.user._id });
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error });
  }
};

const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const updates = req.body;
    const course = await Course.findByIdAndUpdate(courseId, updates, { new: true });
    res.json({ message: 'Course updated successfully', course });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    await Course.findByIdAndDelete(courseId);
    res.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error });
  }
};

const getStudentProgress = async (req, res) => {
  try {
    const progressData = {}; // Add your logic here to calculate progress
    res.json({ message: 'Student progress retrieved', progress: progressData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error });
  }
};

const uploadResource = async (req, res) => {
  try {
    // You might use a package like 'multer' for handling file uploads.
    // Access the uploaded file via req.file and other details via req.body.
    // Save the file info in a Resource model as needed.
    res.status(201).json({ message: 'Resource uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error });
  }
};

const gradeAssignment = async (req, res) => {
  try {
    const assignmentId = req.params.id;
    const { grade, feedback } = req.body;
    // Logic to update the assignment with grade and feedback
    const assignment = await Assignment.findByIdAndUpdate(
      assignmentId,
      { grade, feedback },
      { new: true }
    );
    res.json({ message: 'Assignment graded successfully', assignment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error });
  }
};

module.exports = { 
  createCourse, 
  updateCourse, 
  deleteCourse, 
  getStudentProgress, 
  uploadResource, 
  gradeAssignment 
};
