import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      // match: [^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$]
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;