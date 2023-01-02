const repository = require('../repository/board.repository')

exports.serviceList = async()=> {
    const result = await repository.findAll()
    return result
}

exports.serviceView = async(idx) => {
    const [result] = await repository.findOne(idx)
    await repository.hitUp(idx)
    return result
}

exports.serviceWrite = async(body, user_id) => {
    const {subject, content} = body
    await repository.insert(subject, user_id, content)
}

exports.serviceLogin = async (user_id) => {
    const user = await repository.findUser(user_id)
    return user
}

exports.serviceModify = async(body, idx) =>  {
    const {content} = body
    await repository.update(content,idx)
    return 
}

exports.serviceDelete = async(idx) => {
    await repository.delete(idx)
}