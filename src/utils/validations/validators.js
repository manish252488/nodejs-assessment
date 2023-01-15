import { CreateAgencySchema, CreateClientAgencySchema, CreateClientSchema, UpdateClientSchema, updateAgencySchema } from "./validation.schema";

export const validateAgencyCreate = async (req, res, next) => {
    const { error } = CreateAgencySchema.validate(req.body);
    if (error) {
        res.status(400).json(error);
    } else {
        next();
    }
}

export const validateClientCreate = async (req, res, next) => {
    const { error } = CreateClientSchema.validate(req.body);
    if (error) {
        res.status(400).json(error);
    } else {
        next();
    }
}

export const validateAgencyUpdateSchema = async (req, res, next) => {
    const { error } = updateAgencySchema.validate(req.body);
    if (error) {
        res.status(400).json(error);
    } else {
        next();
    }
}

export const validateClientUpdateSchema = async (req, res, next) => {
    const { error } = UpdateClientSchema.validate(req.body);
    if (error) {
        res.status(400).json(error);
    } else {
        next();
    }
}

export const validateAgencyClientCreate = async (req, res, next) => {
    const { error } = CreateClientAgencySchema.validate(req.body);
    if (error) {
        res.status(400).json(error);
    } else {
        next();
    }
}