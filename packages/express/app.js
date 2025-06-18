const express = require('express');
const myMiddleWare = require('./middleware/middle');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port ${port}`));
app.use(express.json());
app.use(myMiddleWare);
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Hello from Express Server!");
})

app.get('/about', (req, res) => {
    res.send("Learning Express implementation!");
})

app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === Number.parseInt(req.params.id));
    const courseName = course?.name ?? "Invalid course";
    const statusCode = course ? 200 : 404; // 200 is overriden by 304 automatically
    res.status(statusCode).send(`Course name: ${courseName}`);
})

app.get('/courses', (req, res) => {
    console.log(`Printing custom property in route handler: ${req.customProperty}`);
    res.send(courses);
})

app.post('/courses', (req, res) => {
    const course = req.body;
    courses.push({
        id: courses.length + 1,
        ...course
    });
    res.send("Course added successfully!");
})

const courses = [
    {
        id: 1,
        name: 'Javascript'
    },
    {
        id: 2,
        name: 'Java'
    },
    {
        id: 3,
        name: 'Python'
    }
];