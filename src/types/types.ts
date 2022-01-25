type TFilesData = {
    name: string,
    data: Buffer,
    size: number,
    encoding: string,
    tempFilePath: string,
    truncated: boolean,
    mimetype: string,
    md5: string
}

export type TFiles = {
    image: TFilesData
}

export type TS3Location = {
    Location: string | undefined
}

export type Tmimetype = { mimetype: string };
export type Tsize = { size: number };