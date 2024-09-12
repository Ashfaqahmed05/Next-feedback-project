import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database");
        return;
    }
    try {
      const db = await mongoose.connect(process.env.MONGODB_URI || "")

      connection.isConnected = db.connections[0].readyState;

      console.log("DB Connected Successfully");

    } catch (error) {
        console.log("DB Connection failed" , error);
        process.exit(1);
    }
}


// re_Agiik8qd_31MuqQgt5xwDWjmEDJMJqMLD
export default dbConnect;