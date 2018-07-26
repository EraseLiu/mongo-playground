import { connect, connection } from 'mongoose';

import DBConfig, { dbType } from '../config/database';

const { protocol, host, port, database } = DBConfig[dbType];
const dbUrl = `${protocol}://${host}:${port}/${database}`;

// TODO { useMongoClient: true }
connect(dbUrl);
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => console.log('MongoDB connection open!'));
connection.once('close', () => console.log('MongoDB connection close!'));
connection.disconnect();
