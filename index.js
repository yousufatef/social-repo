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
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    })
    .catch((err) => {
    console.error('Failed to connect to the database:', err);
})

