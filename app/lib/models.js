import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

// Arihanta
// const arihantaSchema = new mongoose.Schema(
//   {
//     center_name: {
//       type: String,
//       required: true,
//       unique: true,
//       min: 3,
//       max: 20,
//     },
//     supervisor: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     amount: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     submitted: {
//       type: Boolean,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// // Donation
// const donationSchema = new mongoose.Schema(
//   {
//     center_name: {
//       type: String,
//       required: true,
//       unique: true,
//       min: 3,
//       max: 20,
//     },
//     donor_name: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     purpose: {
//       type: String,
//       required: true,
//     },
//     amount: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     submitted: {
//       type: Boolean,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// // Namaskar
// const namaskarSchema = new mongoose.Schema(
//   {
//     center_name: {
//       type: String,
//       required: true,
//       unique: true,
//       min: 3,
//       max: 20,
//     },
//     supervisor: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     amount: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     submitted: {
//       type: Boolean,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// // VisheshKripa
// const visheshKripaSchema = new mongoose.Schema(
//   {
//     center_name: {
//       type: String,
//       required: true,
//       unique: true,
//       min: 3,
//       max: 20,
//     },
//     person_name: {
//       type: String,
//       required: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     samagri: {
//       type: Boolean,
//       default: false,
//     },
//     amount: {
//       type: Number,
//       required: true,
//       min: 0,
//     },
//     submitted: {
//       type: Boolean,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

// export const Arihanta =
//   mongoose.models.Arihanta || mongoose.model("Arihanta", arihantaSchema);
// export const Namaskar =
//   mongoose.models.Namaskar || mongoose.model("Namaskar", namaskarSchema);
// export const Donation =
//   mongoose.models.Donation || mongoose.model("Donation", donationSchema);
// export const VisheshKripa =
//   mongoose.models.VisheshKripa ||
//   mongoose.model("VisheshKripa", visheshKripaSchema);
