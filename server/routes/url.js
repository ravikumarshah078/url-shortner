import express  from "express";
import { createShort, getAllShort, getUrl } from "../controllers/url.js";

const router = express.Router();

router.post("/short", createShort);
router.get("/:userId/all", getAllShort);
router.get("/:urlId", getUrl);

export default router;
