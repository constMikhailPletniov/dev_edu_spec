import express, { Request, Response, NextFunction } from "express";
import expressFileUpload from "express-fileupload";
import config from "./configurations/config";
import filesRouter from "./routers/files.routers";
import "./databases/database";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(expressFileUpload());
app.use(express.json());

app.use("/", filesRouter);

app.listen(config.PORT, () => {
    console.log(`App listen port: ${config.PORT}`);
});


