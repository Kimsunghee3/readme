const service = require('../services/board.service')


// list
exports.getList = async(req, res) => {
    const { token } = req.cookies
    const { level } = await service.serviceLogin(token)
    const itemList = await service.serviceList()
    res.setHeader('Set-Cookie', `level=${level}; path=/board;`)
    res.render('board/list.html', {itemList})
}

// write
exports.getWrite = (req, res) => {
    const user_id = req.cookies.token
    res.render('board/write.html', {user_id})
}

exports.postWrite = async(req, res) => {
    const user_id = req.cookies.token
    await service.serviceWrite(req.body, user_id)
    res.redirect('/board/list')
}

// view
exports.getView = async(req, res) => {
    const itemView = await service.serviceView(req.query.index)
    res.render('board/view.html',{itemView})
}

// modify
exports.getModify = async(req, res) => {
    const itemModify = await service.serviceView(req.query.index) 
    res.render('board/modify.html', {itemModify})
}

exports.postModify = async(req, res) => {
    await service.serviceModify(req.body, req.query.index)
    res.redirect(`/board/view?index=${req.query.index}`)
}

// delete
exports.postDelete = async(req,res,next) => {
    const user_id = req.body.user_id
    const logInUser = req.cookies.token
    const logInLevel = req.cookies.level
    if( user_id !== logInUser && logInLevel === '3') return next(new Error('삭제 권한이 없습니다.'))
    await service.serviceDelete(req.query.index)
    res.redirect('/board/list')
}