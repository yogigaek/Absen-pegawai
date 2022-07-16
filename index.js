require('./config/db');
const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const userRouter = require('./routes/user.routes');
const attendenceRouter = require('./routes/attendence.routes');
const leaveRouter = require('./routes/leave.routes');
const departementRouter = require('./routes/departement.routes');
const reportRouter = require('./routes/reportMonth.routes')
const bodyPharser = require('body-parser');

app.use(logger('dev'));
app.use(bodyPharser.json());
app.use(bodyPharser.urlencoded({ extended:true }));
app.use(cors());

// Api
app.use('/api', userRouter);
app.use('/api', attendenceRouter);
app.use('/api', leaveRouter);
app.use('/api', departementRouter);
app.use('/api', reportRouter);

app.use('/', (req, res) => {
    res.status(404).send(`<h1> Pos API server <h1>`)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on PORT = ${PORT}`));