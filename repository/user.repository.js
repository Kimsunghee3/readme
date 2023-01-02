const pool = require('./db')

exports.insertOne = async ({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile}) => {
        const sql = `INSERT INTO user(user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile) VALUES('${user_id}','${user_pw}','${user_name}','${nickname}','${birth}','${gender}','${telephone}','${mobile}')`
        await pool.query(sql)
        const id = user_id
        return id
}

exports.joinOne = async (user_id) => {
        const sql = `SELECT * FROM user WHERE user_id = '${user_id}';`
        const [[result]] = await pool.query(sql)
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