import express from "express";
import config from "./configurations/config";
import router from "./routers/routers";

const app = express();

app.use(express.json());

app.use("/", router);

app.listen(config.PORT, () => {
    console.log(`App listen port: ${config.PORT}`);
});