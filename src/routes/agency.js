import { Router } from "express";
import * as controller from '../controllers';
import { validateAgencyCreate, validateAgencyUpdateSchema } from "../utils/validations/validators";
const AgencyRoutes = new Router();

AgencyRoutes.post('/', [validateAgencyCreate], controller.addAgency);
AgencyRoutes.put('/:id', [validateAgencyUpdateSchema], controller.updateAgency);
AgencyRoutes.get('/:id', controller.getAgency);
AgencyRoutes.get('/', controller.getAllAgency);
AgencyRoutes.delete('/:id', controller.deleteAgency);

export default AgencyRoutes;