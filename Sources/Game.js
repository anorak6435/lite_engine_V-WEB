function GameGraph()
{
    this.empty = function(x, y) {
        //EMPTY
        stroke(150);
        fill(150);
        rect(x * room1.tileWidth, y * room1.tileHeight, room1.tileWidth, room1.tileHeight);
    }
    this.wall = function(x, y) {
        //WALL
        stroke(0);
        fill(0);
        rect(x * room1.tileWidth, y * room1.tileHeight, room1.tileWidth, room1.tileHeight);
        image(sprites.wall, x * room1.tileWidth, y * room1.tileHeight, room1.tileWidth, room1.tileHeight);
    }
    this.diamond = function(x, y) {
        //DIAMOND
        /*stroke(0);
        fill(0, 0, 255);
        rect(x * room1.tileWidth, y * room1.tileHeight, room1.tileWidth, room1.tileHeight);
        */
        stroke(150);
        fill(150);
        rect(x * room1.tileWidth, y * room1.tileHeight, room1.tileWidth, room1.tileHeight);
        image(sprites.diamond, x * room1.tileWidth + room1.tileWidth / 4, y * room1.tileHeight + room1.tileHeight / 4, room1.tileWidth / 2, room1.tileHeight / 2, 350, 0, 85, 153);
    }
    this.exit = function(x, y) {
        //EXIT
        this.empty(x, y);
        image(sprites.exit, x * room1.tileWidth, y * room1.tileHeight, room1.tileWidth, room1.tileHeight);
    }
    this.enemy = function(x, y) {
        //ENEMY
        /*stroke(0);
        fill(255, 165, 0);
        rect(x * room1.tileWidth, y * room1.tileHeight, room1.tileWidth, room1.tileHeight);
        fill(0);
        var txtSize = room1.tileHeight / 100 * 20;
        textSize(txtSize);
        text('MON', x * room1.tileWidth + room1.tileWidth / 3.5 , y * room1.tileHeight + room1.tileHeight / 2 + txtSize / 2);
        */
        this.empty(x, y);
        image(sprites.enemy, x * room1.tileWidth + room1.tileWidth / 4, y * room1.tileHeight + room1.tileHeight / 4, room1.tileWidth / 2, room1.tileHeight / 2, 193, 199, 46, 40);
    }
}