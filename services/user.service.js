const repository = require('../repository/user.repository')

exports.serviceUser = async ({user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile}) => {
    const user = await repository.insertOne({ user_id, user_pw, user_name, nickname, birth, gender, telephone, mobile })
    return user
}

exports.serviceUserinfo = async (user_id) => {
    const user = await repository.joinOne(user_id)
    return user
}

exports.serviceLogin = async ({user_id, user_pw}) => {
    const user = await repository.findOne({ user_id, user_pw })
    return user
}