const express = require('express');
const app = express();
app.listen(3000, () => {
    console.log('running...');
})
const path = require('path');
const template = require('express-art-template');
app.engine('html', template);
let obj = {
    name: '二蛋',
    age: 18
}
app.get('/index', (req, res) => {
    res.render(path.join(__dirname,'view','index.html'),obj)
})