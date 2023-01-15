import mongoose, { Schema } from "mongoose";
const ClientSchema = new Schema(
    {
        agencyId: {
            type: Schema.Types.ObjectId,
            ref: 'Agency',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        totalBill: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

ClientSchema.methods = {
    toJSON() {
        return {
            clientId: this._id,
            agencyId: this.agencyId,
            name: this.name,
            email: this.email,
            phone: this.phone,
            totalBill: this.totalBill
        };
    }
};

const Client = mongoose.model("Client", ClientSchema);
export default Client;