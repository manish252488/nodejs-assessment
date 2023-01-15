import { Router } from "express";
import * as controller from '../controllers';
import { validateAgencyClientCreate } from "../utils/validations/validators";
const ExtraRoutes = new Router();

ExtraRoutes.post('/agency', [validateAgencyClientCreate], controller.createClientAgency);
ExtraRoutes.get('/top-clients', controller.getAgencyTopClients);

export default ExtraRoutes;