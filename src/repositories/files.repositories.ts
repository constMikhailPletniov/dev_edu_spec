
import client from "../databases/database";


export default async (Location: string, imageName: string) => {
  try {
    const result = client.query(`INSERT INTO images(name, url)
    VALUES('${imageName}', '${Location}');`);
    return { result: result };
  } catch (err) {
    return { error: err };
  }
}