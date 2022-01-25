import path from "path";
import { Tmimetype, Tsize } from "../types/types";
import config from "../configurations/config";

const extArray = ['image/jpeg', 'image/png'];

export const checkFilesExtName = ({ mimetype }: Tmimetype) => {
    if (!extArray.includes(mimetype)) return { error: { message: new Error('Bad extname') } } as unknown as Error | undefined;
    return mimetype;
};

export const checkFileSize = ({ size }: Tsize) => {
    if (size > config.MAX_IMAGE_SIZE) return { error: new Error('Big size') };
    return size;
};