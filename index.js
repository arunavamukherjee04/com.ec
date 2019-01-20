import express from "express";
import graphqlHTTP from "express-graphql";
import schema  from "./com.ec.schema/EmployeeProfileSchema";

const app = express();

app.get("/", (req, res) => {
    res.send("Graphql Is amazing");
});

const root = {
    hello: () => "Hi,welcome to graphql" 
}

app.use("/api/v1/com/ec", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => {
    console.log("Server started on port 8080");
    
});

