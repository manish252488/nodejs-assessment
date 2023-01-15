import Agency from "../models/agency"

export const addAgency = async (req, res) => {
    try {
        const payload = req.body;
        const data = await Agency.create(payload);
        console.log("🚀 ~ file: agency.controller.js:7 ~ addAgency ~ data", data)
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateAgency = async (req, res) => {
    try {
        const payload = req.body;
        const AgencyId = req.params.id;
        const data = await Agency.updateOne(payload, { _id: AgencyId });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteAgency = async (req, res) => {
    try {
        const AgencyId = req.params.id;
        const data = await Agency.deleteOne({ _id: AgencyId });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAgency = async (req, res) => {
    try {
        const AgencyId = req.params.id;
        const data = await Agency.findOne({ _id: AgencyId });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAllAgency = async (req, res) => {
    try {
        const data = await Agency.find({});
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}