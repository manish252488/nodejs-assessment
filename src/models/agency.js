import mongoose, { Schema } from "mongoose";
const AgencySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        address1: {
            type: String,
            required: true
        },
        address2: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

AgencySchema.methods = {
    toJSON() {
        return {
            agencyId: this._id,
            name: this.name,
            address1: this.address1,
            address2: this.address2,
            state: this.state,
            city: this.city,
            phone: this.phone
        };
    },
};

const Agency = mongoose.model("Agency", AgencySchema);
export default Agency;