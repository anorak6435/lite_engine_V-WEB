function GraphicsRenderer()
{
    if(kaart.map != undefined)
    {
        for (var j = 0; j < 5; j++)
        {
            for (var i = 0; i < 10; i++)
            {
                var g = Array.from(kaart.map[j])[i];
                tileRenderer(g, i, j);
            }
        }
        RenderPlayer();
        RenderScore();
        RenderHealth();
    }
}

function RenderHealth()
{
    textSize(room1.tileHeight / 100 * 30);
    stroke(255);
    fill(255);
    var Health = "HP: " + player1.HP;
    text(Health, 5, room1.tileHeight * 2 / 3);
}

function RenderScore()
{
    textSize(room1.tileHeight / 100 * 30);
    stroke(255);
    fill(255);
    var score = "score: " + player1.score;
    text(score, 5, room1.tileHeight / 3);
}

function RenderPlayer()
{
    /*stroke(0);sd
    fill(255, 0, 0);
    rect(player1.Position.x * room1.tileWidth, player1.Position.y * room1.tileHeight, room1.tileWidth, room1.tileHeight);
    */
    switch (player1.richting)
    {
        case "down":
            image(sprites.player, player1.Position.x * room1.tileWidth, player1.Position.y * room1.tileHeight, room1.tileWidth, room1.tileHeight, 200, 40, 24, 30);
            break;
        case "right":
            image(sprites.player, player1.Position.x * room1.tileWidth, player1.Position.y * room1.tileHeight, room1.tileWidth, room1.tileHeight, 196, 8, 24, 30);
            break;
        case "left":
            image(sprites.player, player1.Position.x * room1.tileWidth, player1.Position.y * room1.tileHeight, room1.tileWidth, room1.tileHeight, 175, 8, 24, 30);
            break;
        case "up":
            image(sprites.player, player1.Position.x * room1.tileWidth, player1.Position.y * room1.tileHeight, room1.tileWidth, room1.tileHeight, 172, 40, 24, 30);
            break;
    }
}

function tileRenderer(curTile, x, y) {
    switch (curTile)
    {
        case 0:
            //EMPTY
            GameGraphics.empty(x, y);
            break;
        case 1:
            //WALL
            GameGraphics.wall(x, y);
            break;
        case 2:
            //DIAMOND
            GameGraphics.diamond(x, y);
            break;
        case 3:
            //EXIT
            GameGraphics.exit(x, y);
            break;
        case 4:
            //ENEMY
            GameGraphics.enemy(x, y);
            break;
        default:
            GameGraphics.wall(x, y);
            break;
    }
}

function DefineAnimations() {
    //HIER MOET IK PROBEREN DE SPRITES IN TE LADEN IN EEN ARRAY VOOR EEN GOEDE DOORLOOP VAN DE APP.
    console.log("animations defined");
    playerDown = new PlayerAnimation();

}

function PlayerAnimation() {
    this.framenr = 0;
    this.frames = [];
    this.nextFrame = function() {

    }
}

function Sprites() {
}