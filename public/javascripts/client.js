/**
 * Created by joe12 on 4/27/2017.
 */
let socket = io(ip);

socket.on('update',function(raw)
{
    console.log(raw);
});

// let renderer = PIXI.autoDetectRenderer(256, 256);
//
// document.body.appendChild(renderer.view);
//
// let stage = new PIXI.Container();
//
// PIXI.loader.add("mainTank","images/tank.png")
//     .load(function()
//     {
//         let tank = new PIXI.Sprite(PIXI.loader.resources["images/tank.png"].texture);
//         stage.addChild(tank);
//         renderer.render(stage);
//     });









