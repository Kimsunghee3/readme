const express = require('express')
const nunjucks = require('nunjucks')
const router = require('./routes/index')
const cookieParser = require('cookie-parser')

const app = express()

app.set('view engine', 'html')

nunjucks.configure('views', {
    express: app,
})

app.use(express.static('public'))
app.use(express.urlencoded({ extended : false }))
app.use(cookieParser())
app.use(router)


app.use((error, req, res, next) => {
    // console.log(error, error.message)
    res.send(`
        <script type='text/javascript'>
            alert('${error.message}');
            history.back();
        </script>
    `)
})

app.listen(3000, () => {
    console.log('start server')
})


