import { connect } from 'mongoose';

export const startConnection = async () => {
    try {
        const db = await connect('mongodb://0.0.0.0:27017/mevn-database');
        console.log(db.connection.name);
    } catch (error) {
        console.log(error);
    }
}