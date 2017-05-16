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
        let tank = new PIXI.extras.AnimatedSprite(textures.slice(0,4));

        tank.gotoAndPlay(0);
        tank.animationSpeed = .4;
        app.stage.addChild(tank);
        console.log("here");
        app.ticker.add(function()
        {
           tank.animationSpeed -= .001;
        });
        app.start();
    });









