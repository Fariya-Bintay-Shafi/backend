const mongoose = require('mongoose');




mongoose.connect("mongodb+srv://fariya:T2zaLBjxdN8KDvVW@cluster0.8deuj.mongodb.net/project", ()=>{
    console.log('Database connected');
})