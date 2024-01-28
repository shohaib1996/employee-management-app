require('dotenv').config(); 
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");


const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const mongoUri = "mongodb+srv://employee-management:JzDxeTZUh0FNidwf@cluster0.lapzl7c.mongodb.net/employee-management"
mongoose.connect(mongoUri)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB", error);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const Employee = require("./models/employee");

app.post("/employees", async (req, res) => {
    try {
        const employeeData = req.body;
        console.log(employeeData);
        const newEmployeeData = new Employee(employeeData);
        const result = await newEmployeeData.save();
        res.status(201).send({ result, insertedId: result._id });
    } catch (error) {
        console.error("Error adding employee: ", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Get all employees
app.get("/employees", async (req, res) => {
    try {
        const result = await Employee.find();
        res.status(200).send(result);
    } catch (error) {
        console.error("Error fetching employees: ", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

app.get("/employees/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.findOne({ _id: id });

        if (!employee) {
            return res.status(404).send({ message: "Employee not found" });
        }

        res.status(200).send(employee);
    } catch (error) {
        console.error("Error fetching employee: ", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});
