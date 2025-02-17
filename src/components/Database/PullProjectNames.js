const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://agray5287:216622Ag@timesheet.z3nbg.mongodb.net/?retryWrites=true&w=majority&appName=Timesheet";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    // Grab the 'Projects' collection from the 'Timesheet' DB
    const db = client.db("Timesheet");
    const projectsCollection = db.collection("Projects");

    // Projection for the "Project Name" field. 
    // (Field name includes a space, so make sure to use quotes or bracket notation when you access it.)
    const cursor = projectsCollection.find({}, { projection: { "Project Name": 1, _id: 0 } });
    const projects = await cursor.toArray();

    // Extract the field "Project Name" from each document
    const projectNames = projects.map(project => project["Project Name"]);

    console.log("Project Names:", projectNames);
    
  } finally {
    // Ensures that the client will close when you're done
    await client.close();
  }
}

// Run the function and catch any errors
run().catch(console.dir);
