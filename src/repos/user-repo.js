const pool = require('../pool');
const  toCamelCase  = require('./utils/to-camel-case');

class UserRepo { 
    static async find() {
    const { rows } = await pool.query('SELECT * FROM users;');
    return toCamelCase(rows);
}

    static async findById(id) { 
        const {rows} = await pool.query(`SELECT * FROM users WHERE id = ${id};`);
        return toCamelCase(rows)[0];
    }

    static async insert(user) { 
        const {rows} = await pool.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;',
            [user.name, user.email]
        );
        return rows[0];
    }

    static async update(user) { 
        const {rows} = await pool.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *;',
            [user.name, user.email, user.id]
        );
        return rows[0];
    }

    static async delete(id) { 
        const {rows} = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *;', [id]);
        return rows[0];
    }

}

module.exports = UserRepo;


// usage
// UserRepo.find()
