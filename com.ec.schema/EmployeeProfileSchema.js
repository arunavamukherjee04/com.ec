import { buildSchema } from "graphql";

const schema = buildSchema(`
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

    type Position {
        id: ID!
        name: String!
    }

    type Contact {
        contact_no: String!
        email: String!
    }

    type Country {
        name: String!
        country_code: String!
    }

    type City {
        name: String!
        city_code: String!
    }

    type Location {
        country: Country!
        city: City!
        desk_location: String!
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

    type Organization {
        name: String!
        description: String!
    }

    type Employee {
        id: ID!
        employee_id: String!
        name: String!
        bio: String
        organization: Organization!
        Manager: Employee
        gender: Gender
        date_of_birth: Date!
        joining_date: Date!
        contact_detail: Contact!
        address: Address!
        nationality: String
        position: Position!
        location: Location
        skills: [Skill!]
        profile_pic: String
        cover_pic: String
    }

    
    input ContactInput {
        contact_no: String!
        email: String!
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

    input LocationInput {
        country: String!
        city: String!
        desk_location: String!
    }

    input SkillInput {
        skill_name: String!
        level: SkillLevel!
    }

    input EmployeeInput {
        name: String!
        bio: String
        organization: String!
        Manager: String
        gender: Gender
        date_of_birth: Date!
        joining_date: Date!
        contact_detail: ContactInput!
        address: AddressInput!
        nationality: String
        position: String!
        location: LocationInput
        skills: [SkillInput!]
        profile_pic: String
        cover_pic: String
    }
`);

export default schema;