import  EmployeeModel  from "../com.ec.models/Employee.model";

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello There !!!"
        }
    },

    Mutation: {
        add_employee: (root, {input}) => {
            return EmployeeModel.createEmployee(input).then((result) => {
                return result._id;
            });
        }
    }
};

