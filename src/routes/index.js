import { Router } from "express";
import ClientRoutes from "./client";
import AgencyRoutes from "./agency";
import ExtraRoutes from './extra';

const routes = new Router();
routes.use('/client', ClientRoutes);
routes.use('/agency', AgencyRoutes);
routes.use('/extra', ExtraRoutes);
routes.all("*", (req, res) => {
   return res.status(404).json({})
})

export default routes;