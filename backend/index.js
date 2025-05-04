// const express = require('express');
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');
// const cors = require('cors');

// require('dotenv').config();

// dotenv.config();
// connectDB();

// const app = express();

// // Middleware
// app.use(express.json());
// // app.use(cors()); // Add this line to enable CORS
// app.use(cors({
//     origin: 'http://localhost:5173', // Replace with your frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true,
// }));


// // Routes
// app.get('/',(req,res)=>{res.send("Hello World")});
// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/booking', require('./routes/bookingRoutes'));
// app.use('/api/destinations', require('./routes/destinationRoutes'));
// app.use('/api/getBookings', require('./routes/bookingRoutes'));

// // Error Handling
// app.use((err, req, res, next) => {
//     res.status(500).json({ message: err.message });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// export default app;

// api/index.js

const serverless = require('serverless-http');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../config/db');
const cors = require('cors');

// Load env variables
dotenv.config();

// Connect to DB
connectDB();

// Initialize app
const app = express();
app.use(express.json());

app.use(cors({
  origin: 'https://your-frontend.vercel.app', // use actual frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Routes
app.get('/', (req, res) => res.send("Hello World"));
app.use('/api/auth', require('../routes/authRoutes'));
app.use('/api/booking', require('../routes/bookingRoutes'));
app.use('/api/destinations', require('../routes/destinationRoutes'));
app.use('/api/getBookings', require('../routes/bookingRoutes'));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

module.exports = app;
module.exports.handler = serverless(app);
