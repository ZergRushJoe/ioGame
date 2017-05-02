/**
 * Created by joe12 on 4/27/2017.
 */
let socket = io(ip);

socket.on('update',function(raw)
{
    console.log(raw);
});

