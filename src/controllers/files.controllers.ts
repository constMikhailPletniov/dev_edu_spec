import { Request, Response, NextFunction } from "express";
import { UploadedFile } from "express-fileupload";

import STATUS_CODE from "../configurations/status.code";
import s3 from "../services/s3.services";
import sendGrid from "../services/email.services";
import { checkFilesExtName, checkFileSize } from "../utils/images.utils";
import filesRepositories from "../repositories/files.repositories";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.files) {
            throw new Error('You didn`t upload file');
        }
        const { name } = req.body;
        const { image } = req.files;

        const checkExtName = checkFilesExtName(image as UploadedFile);
        if (typeof checkExtName !== 'string') res.status(STATUS_CODE.BAD_REQUEST).json({ message: "bad extName image" });
        const checkSize = checkFileSize(image as UploadedFile);
        if (typeof checkSize !== 'number') res.status(STATUS_CODE.BAD_REQUEST).json({ message: "big image" });
        const filePath = await s3(image as UploadedFile);
        const { error: dBError } = await filesRepositories(filePath.Location, name);
        if (dBError) res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ message: "Can not put image" });
        await sendGrid(filePath.Location);
        res.status(STATUS_CODE.CREATED).json({ message: "Done", imageUrl: filePath.Location });
    } catch (err) {
        next(err);
    }
}

