const isInstructor = (req, res, next) => {
    if (req.user && req.user.role === 'instructor') {
      next();
    } else {
      res.status(403).json({ message: 'Access Denied: Instructors only' });
    }
  };
  
  module.exports = { isInstructor };
  