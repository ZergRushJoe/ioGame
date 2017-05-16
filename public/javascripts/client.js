/**
 * Created by joe12 on 4/27/2017.
 */
let socket = io(ip);

socket.on('update',function(raw)
{
    console.log(raw);
});

const app = new PIXI.Application();

document.body.appendChild(app.view);
app.stop();

let player;

PIXI.loader.add("mainTank","images/tank.png")
    .load(function()
    {
        let baseTexture = PIXI.loader.resources["mainTank"].texture.baseTexture;
        console.log(baseTexture);
        let textures = [];

        for(let i = 0; i < 4;i++)
        {
            for(let j = 0; j < 4; j++)
            {
                textures.push(new PIXI.Texture(baseTexture,new PIXI.Rectangle((j*64),(i*64),64,64)));
            }
        }
        Player.textures = {};
        Player.textures["move"] = textures.slice(0,4);
        Player.textures["left"] = textures.slice(4,8);
        Player.textures["right"] = textures.slice(8,12);
        Player.textures["fire"] = textures.slice(12,16);
        // let keys = Object.keys(Player.textures);
        // for(let i= 0 ;i < keys.length;i++)
        // {
        //     Player.textures[keys[i]].hasLoaded = true;
        // }
        player = new Player(true,app,100,100);

        app.ticker.add(function(e)
        {
           player.update();
        });

        app.start();
    });









