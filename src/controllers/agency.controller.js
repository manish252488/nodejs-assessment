import Agency from "../models/agency"

export const addAgency = async (req, res) => {
    try {
        const payload = req.body;
        const data = await Agency.create(payload);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const updateAgency = async (req, res) => {
    try {
        const payload = req.body;
        const AgencyId = req.params.id;
        const agency = await Agency.findOne({ _id: AgencyId });
        if(!agency) {
           return res.status(404).json({ message: `Agency not found: ${AgencyId}`});
        }
        const data = await agency.update(payload);
        if (!data) {
            res.status(400).json({ message: `Agency not present: ${AgencyId}` })
        }
        res.status(200).json({ message: `Updated Agency: ${agency.name}`});
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