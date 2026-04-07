const { MongoClient } = require('mongodb');

async function run() {
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  
  try {
    await client.connect();
    const db = client.db('collegeEvents');
    const events = db.collection('events');

    // Insert
    await events.insertMany([
      { name: "Tech Talk", date: "2026-04-15", participants: 50 },
      { name: "Music Fest", date: "2026-04-20", participants: 200 },
      { name: "Art Expo", date: "2026-04-18", participants: 30 }
    ]);

    // Update
    await events.updateOne({ name: "Tech Talk" }, { $set: { participants: 60 } });

    // Delete
    await events.deleteOne({ name: "Art Expo" });

    // Find
    const allEvents = await events.find().toArray();
    console.log("Events:", allEvents);

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
