import Joi from 'joi';

export const CreateAgencySchema = Joi.object()
    .keys({
        name: Joi.string().required().allow(),
        address1: Joi.string().required().allow(),
        address2: Joi.string().optional().allow(),
        state: Joi.string().required().allow(),
        city: Joi.string().required().allow(),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/).required().allow()
    })
    .unknown(false);

export const CreateClientSchema = Joi.object()
    .keys({
        agencyId: Joi.string().required().allow(),
        name: Joi.string().required().allow(),
        email: Joi.string().email({ tlds: { allow: false } }).required().allow(),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/).required().allow(),
        totalBill: Joi.number().required().allow()
    })
    .unknown(false);

export const updateAgencySchema = Joi.object()
    .keys({
        name: Joi.string().required().allow(),
        address1: Joi.string().required().allow(),
        address2: Joi.string().optional().allow(),
        state: Joi.string().required().allow(),
        city: Joi.string().required().allow(),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/).required().allow()
    })
    .unknown(false);

export const UpdateClientSchema = Joi.object()
    .keys({
        agencyId: Joi.string().required().allow(),
        name: Joi.string().required().allow(),
        email: Joi.string().email({ tlds: { allow: false } }).required().allow(),
        phone: Joi.string().length(10).pattern(/^[0-9]+$/).required().allow(),
        totalBill: Joi.number().required().allow()
    })
    .unknown(false);