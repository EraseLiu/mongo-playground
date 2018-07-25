import mongoose from 'mongoose';

import databaseConfig from '../config/database.json';

const { protocol, host, port, database } = databaseConfig[databaseConfig.type];
const dbUrl = `${protocol}://${host}:${port}/${database}`;

// TODO { useMongoClient: true }
mongoose.connect(dbUrl);
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => console.log('MongoDB connection open!'));
connection.once('close', () => console.log('MongoDB connection close!'));
connection.disconnect();
