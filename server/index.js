import express from 'express'
import { config } from 'dotenv';
const app = express();



//database connection
// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log("Database Connected..!"))
//     .catch((err) => console.log("Database Not Connected..!", err))

// app.use('/', require('./routes/authRoutes'))

app.get('/', (req, res) => {
    res.send('Home')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`)
}
);