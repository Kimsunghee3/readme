const service = require('../services/admin.service')

exports.getLogin = async (req, res) => {
    res.render('admin/admin.html')
}

exports.postLogin = async (req, res, next) => {
    const { user_id, user_pw } = req.body
    const user = await service.serviceLogin({ user_id, user_pw })
    if(user.user_id !== 'admin') return next(new Error('접근할 수 없습니다!!'))
    res.setHeader('Set-Cookie', `level=${user.level}; path=/admin;`)

    res.redirect('/admin/userList')
}

exports.getAdmin = async (req, res) => {
    const userList = await service.serviceUserList()

    res.render('admin/userList.html', {userList})
}

exports.postUpdate = async (req, res) => {
    const body = JSON.stringify(req.body)
    const result = JSON.parse(body)
    await service.serviceUpdateUser(result)

    res.redirect('/admin/userList')
}

exports.getProfile = async (req, res) => {
    const user_id = req.query.user_id
    const user = await service.serviceUserProfile(user_id)

    res.render('admin/userEdit.html', { user })
}

