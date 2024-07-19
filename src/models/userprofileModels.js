import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({});

const Profile =
  mongoose.models.profiles || mongoose.model("profiles", profileSchema);

export default Profile;
