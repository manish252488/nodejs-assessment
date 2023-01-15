import { Router } from "express";
import * as controller from '../controllers';
import { validateClientCreate, validateClientUpdateSchema } from "../utils/validations/validators";
const ClientRoutes = new Router();

ClientRoutes.post('/', [validateClientCreate], controller.addClient);
ClientRoutes.put('/:id', [validateClientUpdateSchema], controller.updateClient);
ClientRoutes.get('/:id', controller.getClient);
ClientRoutes.get('/', controller.getAllClient);
ClientRoutes.delete('/:id', controller.deleteClient);


export default ClientRoutes;