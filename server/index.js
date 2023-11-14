const express = require('express');
const app = express();

//database connection
// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log("Database Connected..!"))
//     .catch((err) => console.log("Database Not Connected..!", err))

//middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));

// app.use('/', require('./routes/authRoutes'))

const port = 8000;

app.listen(port, () => console.log(`Server is Running on ${port}`))