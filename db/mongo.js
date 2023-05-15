//It should be in the top side
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//For using the MongoDB Cloud (online)
// const uri = "mongodb+srv://<username>:<pass>@cluster0.rvrwrto.mongodb.net/?retryWrites=true&w=majority";

// For Running Locally
const uri = "mongodb://127.0.0.1:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
// Creating the collections;
const database = client.db("userDB");
const usersCollection = database.collection("users");

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error (Removed this portion for solving the error)
    }
}
run().catch(console.dir);

module.exports = usersCollection