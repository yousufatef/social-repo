const pg = require('pg');

class pool {
    _pool = null;
   
    connect(options) { 
        this._pool = new pg.Pool(options);
        return this._pool.query('SELECT 1 + 1;')
    }

    close() { 
        return this._pool.end();
    }

    // Really big security issue here 
    query(sql) {    
        return this._pool.query(sql);    
    }
}

module.exports = new pool();