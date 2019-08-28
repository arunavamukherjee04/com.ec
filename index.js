import express from "express";
import graphqlHTTP from "express-graphql";
import cors from "cors";
import { schema } from "./com.ec.schema/EmployeeProfileSchema";

const app = express();

app.use(cors());
app.get("/", (req, res) => {
    res.send("Welcome To GraphQL")
});

app.use("/api/v1/com/ec", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(8080, () => {
    console.log("Server started on port 8080");
});

