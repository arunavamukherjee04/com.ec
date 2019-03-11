import { resolvers } from "../com.ec.API/Resolvers_Mutations";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = ` 
    type Query {
        hello: String!
        employee(id: String!): Employee
    }

    type Mutation {
        add_employee(input: EmployeeInput): String
    }

    scalar Date

    enum Gender {
        MALE
        FEMALE
    }

    enum AddressType {
        CURRENT
        PERMANENT   
    }
    enum SkillLevel {
        BEGINNER
        INTERMEDIATE
        ADVANCED
    }

    type Contact {
        contact_type: String!
        contact_through: String!
    }

    type Address {
        address_line1: String!
        address_line2: String
        address_line3: String
        city: String!
        pin: Int!
        district: String
        state: String!
        country: String! 
        type_of_address: AddressType! 
    }

    type Skill {
        skill_name: String!
        level: SkillLevel!
    }

    type Experence {
        organization: Organization!
        position: String!
        start: Date!
        end: Date!
    }

    type Organization {
        id: String!
        name: String!
        org_logo: String
    }

    type Employee {
        id: ID!
        employee_id: String!
        name: String!
        bio: String
        gender: Gender
        date_of_birth: Date!
        contact_detail: [Contact!]
        address: Address!
        nationality: String
        organization: Organization!
        position:String
        skills: [Skill!]
        profile_pic: String
        cover_pic: String
        experiences: [Experence!]
    }


    input ContactInput {
        contact_type: String!
        contact_through: String!
    }

    input AddressInput {
        address_line1: String!
        address_line2: String
        address_line3: String
        city: String!
        pin: Int!
        district: String
        state: String!
        country: String! 
        type_of_address: AddressType! 
    }


    input SkillInput {
        skill_name: String!
        level: SkillLevel!
    }

    input OrganizationInput {
        id: String!
        name: String!
        org_logo: String
    }

    input ExperenceInput {
        organization: OrganizationInput!
        position: String!
        start: Date!
        end: Date!
    }

    input EmployeeInput {
        name: String!
        bio: String
        organization: OrganizationInput!
        gender: Gender
        date_of_birth: String!
        contact_detail: [ContactInput!]
        address: AddressInput!
        nationality: String
        position: String
        skills: [SkillInput!]
        profile_pic: String
        cover_pic: String
        experiences: [ExperenceInput!]
    }
`;

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
