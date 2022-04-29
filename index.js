import express from "express";
import usersRoutes from './routes/users.js'

const app = express();
// usually 3000 is used for front-end, we can use 5000 for back-end
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', usersRoutes)

app.get("/", (req, res) => {
  console.log("first");
  res.send("This is a node rest-api test page");
});

app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}`)
);
