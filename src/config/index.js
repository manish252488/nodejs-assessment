export default {
    port: process.env.SERVER_PORT || 3000,
    db: {
        MONGO_URL: process.env.MONGO_URL
    }
}