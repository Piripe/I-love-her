import config from "@/config";
import { createPool } from "mariadb";

export default createPool(config.db);