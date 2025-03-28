const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());

const studentRoutes = require("./routes/student"); 
app.use("/api/students", studentRoutes); 

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
