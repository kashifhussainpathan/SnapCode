import mongoose, { Model } from "mongoose";

export interface IUser {
  username: string;
  fullname: string;
  email: string;
  avatar?: string;
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const User: Model<IUserDocument> =
  mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
