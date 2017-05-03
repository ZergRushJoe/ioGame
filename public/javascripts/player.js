/**
 * Created by joe12 on 5/1/2017.
 */


class player
{
    constructor(spriteName,contorlled,x,y)
    {
        this.spritename = spriteName;
        if(!contorlled)
        {
            player.contorlled.push(this);
        }
        this.pos = new Victor(x,y)
    }
}
player.contorlled = [];