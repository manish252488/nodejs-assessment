import Agency from "../models/agency";
import Client from "../models/client";

/**
 * 
 * @param {*} req -> express request object
 * @param {*} res -> express response object
 * return response -> 200/500 -> message
 */
export const createClientAgency = async (req, res) => {
    try {
        const payload = JSON.parse(JSON.stringify(req.body));
        const client = req.body.client;
        delete payload.client;
        const session = await Agency.startSession();
        const opt = { session };
        session.startTransaction();
        const agency = await Agency.create([payload], opt);
        client.agencyId = agency[0]._id;
        const clientdata = await Client.create(client);
        await agency[0].update({ $addToSet: { clients: clientdata._id } });
        await session.commitTransaction();
        session.endSession();
        res.status(200).json({ message: 'agency client added' });
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAgencyTopClients = async (req, res) => {
    try {
        Agency.find().populate({ path: 'clients' }).exec((err, data) => {
            if (err) {
                res.status(500).json(err);
            }
            res.status(200).json(data);
        });
    } catch (err) {
        res.status(500).json(err);
    }
}