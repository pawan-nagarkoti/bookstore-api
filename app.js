require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/book-routes');

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();

// middleware
app.use(express.json());

// routes
app.use('/api/books', bookRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is now running on port ${PORT}`);
})
