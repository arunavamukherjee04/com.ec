import  EmployeeModel  from "../com.ec.models/Employee.model";

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello There !!!"
        },

        employee: (obj, args, context, info) => {
            return EmployeeModel.getEmployee(args.id).then((result) => {
                return result;
            });
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

