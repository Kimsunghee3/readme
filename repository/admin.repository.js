const pool = require('./db')

exports.findAll = async () => {
    const sql = `SELECT * FROM user where level != 1;`
    const result = await pool.query(sql)
    return result
}

exports.findOne = async (user) => {
    const payload = Object.entries(user)
            .map(([key, value]) => `${key}='${value}'`)
            .join(' and ')
    const sql = `SELECT * FROM user WHERE ${payload};`
    const [[result]] = await pool.query(sql)
    return result
}

exports.findProfile = async (user_id) => {
    const user = String(user_id)
    const sql = `select * from user where user_id = '${user}';`
    const [result] = await pool.query(sql)
    return result
}

exports.updateUser = async (user_id, user_author, level) => {
    const updateAuthor =`UPDATE user SET user_author=${user_author} WHERE user_id='${user_id}';`
    const updatelevel =`UPDATE user SET level=${level} WHERE user_id='${user_id}';`
    await pool.query(updateAuthor)
    await pool.query(updatelevel)
}