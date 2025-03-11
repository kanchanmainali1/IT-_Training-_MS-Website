// routes/instructorRoutes.js
const express = require('express');
const router = express.Router();
const { 
  createCourse, 
  updateCourse, 
  deleteCourse, 
  getStudentProgress, 
  uploadResource, 
  gradeAssignment 
} = require('../controllers/instructorController');
const { isInstructor } = require('../middleware/authMiddleware');

router.post('/courses', isInstructor, createCourse);
router.put('/courses/:id', isInstructor, updateCourse);
router.delete('/courses/:id', isInstructor, deleteCourse);

router.get('/student-progress', isInstructor, getStudentProgress);

router.post('/resources', isInstructor, uploadResource);

router.post('/assignments/:id/grade', isInstructor, gradeAssignment);

module.exports = router;
