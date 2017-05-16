/**
 * Created by joe12 on 5/1/2017.
 */

let movement = [0,0,0,0];
class Player
{
    constructor(contorlled,app,x,y)
    {
        this.tank = new PIXI.extras.AnimatedSprite(Player.textures['move']);
        this.tank.anchor.x = 0.5;
        this.tank.anchor.y = 0.5;
        app.stage.addChild(this.tank);

        if(!contorlled)
        {
            player.contorlled.push(this);
        }
        this.pos = new Vector(x,y);
        this.vel = new Vector(0,0);
        this.acc = new Vector(0,0);

        this.ang = 0;
        this.angVel = 0;
        this.angAcc = 0;

    }
    update()
    {
        this.calcForces();
        this.calcAngle();
        this.updateSprite();
    }
    calcForces()
    {

        if(movement[0])
        {
            console.log(this.acc);
            this.acc.add(Vector.fromAngMag(.3,this.ang-Math.PI/2));
        }
        if(movement[1])
        {
            this.acc.add(Vector.fromAngMag(-.3,this.ang-Math.PI/2));
        }
        this.acc.add(new Vector(-this.vel.x*.9,-this.vel.y*.9));

        this.vel.add(this.acc);
        if(this.vel.getMag() < .001 && this.vel.getMag() > -.001 )
            this.vel.mult(0);
        this.pos.add(this.vel);
        this.acc.mult(0);

    }
    calcAngle()
    {

        if(movement[2])
        {
            this.angAcc -= Math.PI/256;
        }
        if(movement[3])
        {
            this.angAcc += Math.PI/256;
        }
        this.angAcc += this.angVel*-.9;
        this.angVel += this.angAcc;
        if(this.angVel < .001 && this.angVel > .001 )
            this.angVel = 0;
        this.ang += this.angVel;
        this.angAcc = 0;
    }
    updateSprite()
    {
        this.tank.animationSpeed = .1;
        if(this.vel.getMag()>.001 || this.vel.getMag()<-.001)
        {
            this.tank.animationSpeed = .4;
            this.tank.textures = Player.textures['move'];
            if(!this.tank.playing)
            {
                this.tank.play();
            }

        }else if(this.tank.playing)
        {
            this.tank.stop();
        }
        if(this.angVel > .001 )
        {
            this.tank.animationSpeed = .4;
            this.tank.textures = Player.textures['right'];
            if(!this.tank.playing)
            {
                this.tank.play();
            }
        }
        if(this.angVel < -.001)
        {
            this.tank.animationSpeed = -.4;
            this.tank.textures = Player.textures['left'];
            if(!this.tank.playing)
            {
                this.tank.play();
            }
        }

        this.tank.rotation = this.ang;
        this.tank.position.x = this.pos.x;
        this.tank.position.y = this.pos.y;

    }
}
Player.contorlled = [];



console.log("here");
document.onkeydown = function(e)
{

    let charCode = event.keyCode;

    switch(parseInt(e.keyCode))
    {
        case 87://w
            movement[0] = 1;
            break;
        case 83://s
            movement[1] = 1;
            break;
        case 65://a
            movement[2] = 1;
            break;
        case 68://d
            movement[3] = 1;
            break;
    }

};

document.onkeyup = function(e)
{

    let charCode = event.keyCode;

    switch(e.keyCode)
    {
        case 87://w
            movement[0] = 0;
            break;
        case 83://s
            movement[1] = 0;
            break;
        case 65://a
            movement[2] = 0;
            break;
        case 68://d
            movement[3] = 0;
            break;
    }

};