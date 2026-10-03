import mongoose, { Document } from "mongoose";

interface ISocialLinks {
  youtube?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}
interface IpartnerProfile {
  slug?: string;
  bio?: string;
  website?: string;
  socialLinks?: ISocialLinks;
}
interface IpaymentDetails {
  method: "upi" | "bank";
  upiId?: string;
  accountHolderName?: string;
  accountNumber?: string;
  ifscCode?: string;
}
export interface IUser extends Document {
  firebaseUid: string;
  name: string;
  email: string;
  role: "partner" | "admin";
  partnerProfile: IpartnerProfile;
  paymentDetails: IpaymentDetails;
  totalSales: number;
  totalRevenue: number;
  isActive: boolean;
  createdAt: Date;
  updateddAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ["partner", "admin"],
      default: "partner",
      index: true,
    },
    partnerProfile: {
      slug: {
        type: String,
        unique: true,
        index: true,
      },
      bio: {
        type: String,
        default: "",
        trim: true,
      },
      website: {
        type: String,
        default: "",
        trim: true,
      },
      socialLinks: {
        youtube: {
          type: String,
          default: "",
          trim: true,
        },
        instagram: {
          type: String,
          default: "",
          trim: true,
        },
        linkedin: {
          type: String,
          default: "",
          trim: true,
        },
        github: {
          type: String,
          default: "",
          trim: true,
        },
      },
    },
    paymentDetails: {
      methods: {
        type: String,
        enum: ["upi", "bank"],
        default: "upi",
      },
      upiId: {
        type: String,
        trim: true,
        default: "",
      },
      accountHolderName: {
        type: String,
        trim: true,
        default: "",
      },
      accountNumber: {
        type: String,
        trim: true,
        default: "",
      },
      ifscCode: {
        type: String,
        trim: true,
        default: "",
      },
    },
    totalSales: {
      type: Number,
      default: 0,
      min: 0,
    },
    totalRevenue: {
      type: Number,
      default: 0,
      min: 0,
    },
    isActive:{
        type:Boolean,
        default:true,
    }
  },
  { timestamps: true },
);

const userModel = mongoose.model("user", userSchema);

export default userModel;

