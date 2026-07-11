const app = require('./src/app')();
const pool = require('./src/pool');

pool.connect({
    user: 'postgres',
    host: 'localhost',
    database: 'socialnetwork',
    password: 'alahly123456',
    port: 5432,
})
    .then(() => {
    app.listen(3001, () => {
        console.log('Server is running on port 3001');
    });
    })
    .catch((err) => {
    console.error('Failed to connect to the database:', err);
})

