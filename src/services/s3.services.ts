import aws from "aws-sdk/clients/s3";
import dotenv from "dotenv";
import { UploadedFile } from "express-fileupload";
dotenv.config();

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const backetName = process.env.BUCKET_NAME || '';

export default (files: UploadedFile) => {
    const s3 = new aws({
        region,
        accessKeyId,
        secretAccessKey
    });
    const uploadParams = {
        Bucket: backetName,
        Body: files.data,
        Key: files.name
    }
    return s3.upload(uploadParams).promise();
}
