import mongoose from "mongoose";

const schema = new mongoose.Schema({
  
});

export default mongoose.models.Schema ||
  mongoose.model("Schema", schema);
