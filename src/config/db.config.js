/**
 * Configuration for the database
 */
import mongoose from 'mongoose';
import config from '.';
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
try {
    mongoose.connect(config.db.MONGO_URL);
} catch (err) {
    mongoose.createConnection(config.db.MONGO_URL);
}
mongoose.connection
    .once('open', () => console.log('MongoDB Running'))
    .on('error', e => {
        throw e;
    }); 