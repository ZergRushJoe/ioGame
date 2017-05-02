/**
 * Created by joe12 on 4/27/2017.
 */
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(server);

io.on('connection',function(socket)
{
    console.log(socket.id);
    socket.join('all');
    socket.emit('update',{msg:'hello'});
    socket.on('move',function(raw)
    {
        console.log(raw);
        io.sockets.in('all').emit('update',{msg:'hello'});
    });
});


//sets up view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
app.use('/',express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res,next)
{
    res.render('index',{serverIP:'http://127.0.0.1:3001'})
});


server.listen(3001);