import { Client } from "pg";

const client: any = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'HSU1',
    database: 'aws_images'
});

client.connect((err: { stack: any; message: any; }) => {
    if (err) {
        console.error('connect failed', err.stack, "error message", err.message);
    }
    console.log('connected');
});

export default client;