import mongoose, {Schema}  from "mongoose";


const arihantSchema = new Schema(
    {
        personname: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
          },
        products:{
            type: String,
            required: true,
        },
        totalcost: {
            type: Number,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

const donationSchema = new Schema(
    {
        donorname: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        mobile: {
            type: Number,
            required: true,
            unique: true,
            min:10,
            max: 10,
        },
        address: {
            type: String,
            required: true,
        },
        purposeOfDonation:{
            type: String,
            required: true,
        },
        isCash: {
            type: Boolean,
            required: true,
            default: true,
        },
        isSubmitted: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamp: true,
    }

);

const visheshkripaSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        mobile: {
            type: Number,
            required: true,
            unique: true,
            min:10,
            max: 10,
        },
        powder: {
            type: Boolean,
            required: true,
        },
        amount:{
            type: Number,
            required: true,
        },
    },
    {timestamp: true,
    }
);

const namaskarSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        mobile: {
            type: Number,
            required: true,
            unique: true,
            min:10,
            max: 10,
        },
        amount:{
            type: Number,
            required: true,
        },
        isSubmitted: {
            type: Boolean,
            required: true,
        },
    },
    {timestamp: true,
    }
);

export const ArihantS =mongoose.models.ArihantS || mongoose.model("ArihantS", arihantSchema);
export const DonationS =mongoose.models.DonationS || mongoose.model("DonationS", donationSchema);
export const visheshkripaS =mongoose.models.visheshkripaS || mongoose.model("visheshkripaS", donationSchema);
export const NamaskarS =mongoose.models.NamaskarS || mongoose.model("NamaskarS", donationSchema);