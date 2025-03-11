const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection'); 
const userRouter = require('./routes/userRoutes');
const instructorRouter = require('./routes/instructorRoutes'); 

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Allow frontend requests

app.use('/api/user', userRouter);
app.use('/api/instructor', instructorRouter); 

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
