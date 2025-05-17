const mongodb = require("mongodb");
mongoclient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";
const client = new mongoclient(url);

async function run() {
  try {
    const database = client.db("Student");
    const record = database.collection("Records");
    const data = await record.insertMany([
      {
        name: "Aditya",
        phone_number: "6396369163",
        marks: 991,
      },
      {
        name: "Adi",
        phone_number: "299289922",
        marks: 9,
      },
      {
        name: "Adi",
        phone_number: "299289922",
        marks: 9219,
      },
    ]);
    console.log(
      "Data is succesfully inserted in collection " +
        record.collectionName +
        " from database " +
        database.databaseName
    );
  } finally {
    await client.close();
  }
}
run().catch((err) => {
  console.log("ERROR: " + err);
});
