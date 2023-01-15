import { Router } from "express";
import ClientRoutes from "./client";
import AgencyRoutes from "./agency";
const routes = new Router();
routes.use('/client', ClientRoutes);
routes.use('/agency', AgencyRoutes);
routes.all("*", (req, res) => {
   return res.status(404).json({})
})

export default routes;