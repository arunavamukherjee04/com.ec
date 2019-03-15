import  Mongoose  from "mongoose";

const Schema = Mongoose.Schema;
Mongoose.connect("mongodb://localhost/employeecentral", {
    useNewUrlParser: true
})

//Creating the model 
const employeeSchema = new Schema({
    name: String,
    bio: String,
    organization: {
        id: String,
        name: String,
        org_logo: String
    },
    gender: String,
    date_of_birth: Date,
    contact_detail: [{
        contact_type: String,
        contact_through: String
    }],
    address: {
        address_line1: String,
        address_line2: String,
        address_line3: String,
        city: String,
        pin: Number,
        district: String,
        state: String,
        country: String, 
        type_of_address: String
    },
    nationality: String,
    skills: [{
        skill_name: String,
        level: String
    }],
    profile_pic: String,
    cover_pic: String,
    experiences: [{
        organization: {
            id: String,
            name: String,
            org_logo: String
        }, 
        position: String,
        start: Date,
        end: Date
    }]
});

const Employee = Mongoose.model("Employee", employeeSchema);

//CRUD Operations
const createEmployee = (employeeData) => {
    let employee = new Employee(employeeData)
    return employee.save();
};

const getEmployee = (employeeID) => {
    return new Promise((resolve, reject) => {
        Employee.findById(employeeID, (error, user) => {
            if(error) reject (err)
            resolve(user)
        })
    });
}

module.exports = {
    createEmployee: createEmployee,
    getEmployee: getEmployee
}
