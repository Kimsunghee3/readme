const pool = require('./db')

// list
exports.findAll = async() => {
    const sql = `SELECT * FROM board;`
    const [result] = await pool.query(sql)
    return result
}

// view
exports.findOne = async(idx) => {
    const sql = `SELECT * FROM board WHERE idx = ${idx};`
    const [result] = await pool.query(sql)
    return result
}

// write
exports.insert = async(subject, user_id, content) => {
    const sql = `INSERT INTO board(subject,user_id,content) VALUES('${subject}','${user_id}','${content}');`
    await pool.query(sql)
    return
}

exports.update = async(content, idx) => {
    const sql = `UPDATE board SET content='${content}' WHERE idx=${idx};`
    await pool.query(sql)
    return
}

exports.delete = async(idx)=> {
    const sql = `DELETE FROM board WHERE idx=${idx};`
    await pool.query(sql)
}

exports.hitUp = async (idx) => {
    const [result] = await this.findOne(idx)
    let hitUp = result.hit
    hitUp = hitUp + 1
    const sql = `UPDATE board SET hit=${hitUp} WHERE idx=${idx};`
    await pool.query(sql)
}

exports.findUser = async (user_id) => {
    const sql = `SELECT * FROM user WHERE user_id='${user_id}';`
    const [[result]] = await pool.query(sql)
    return result
}



