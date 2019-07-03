function Music(file_Path)
{
    this.Sound = loadSound(file_Path);
}
function Punt(x, y) {
    this.x = x;
    this.y = y;
}
function player() {
    this.Position = new Punt(1,1);
    this.score = 0;
    this.HP = 3;
    this.richting = "down";
    //this.Dmg = 3;
}
function Room(_Width, _Height) {
    //width en height parameters worden meegegeven als eeen advies.
    this.Width = _Width;
    this.Height = _Height;
    this.ratio = Smallest(this.Width, this.Height);
    if (this.Width == this.ratio)
    {
        this.Height = this.Width / 10 * 5;
    } else {
        this.Width = this.Height / 5 * 10;
    }
    canvas = createCanvas(this.Width, this.Height);

    this.rows = 5;
    this.cols = 10;

    this.tileWidth = this.Width / this.cols;
    this.tileHeight = this.Height / this.rows;
}

function Smallest(x, y)
{
    if (x < y)
    {
        return x;
    } else {
        return y;
    }
}


function ReadJSON(url)
{
    var file;
    this.request = new XMLHttpRequest();
    this.request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            file = JSON.parse(this.responseText);
            kaart.map = file;
        }
    };
    this.request.open("GET", url, true);
    this.request.send();
}

function Kaart()
{
    this.levels = 2;
    this.currentlvl = 1;
    ReadJSON("Levels/Level." + this.currentlvl + ".json");
    background(0);
    this.restart = function() {
        ReadJSON("Levels/Level." + this.currentlvl + ".json");
    }
    this.nextlvl = function() {
        this.currentlvl++;
        if (this.currentlvl > this.levels)
        {
            this.currentlvl = 1;
        }
        ReadJSON("Levels/Level." + this.currentlvl + ".json");
    }
}

function Direction(dir)
{
    switch(dir)
    {
        case "UP":
            tempPoint = new Punt(0,-1);
            ValidMove(tempPoint);
            break;
        case "DOWN":
            tempPoint = new Punt(0,1);
            ValidMove(tempPoint);
            break;
        case "LEFT":
            tempPoint = new Punt(-1,0);
            ValidMove(tempPoint);
            break;
        case "RIGHT":
            tempPoint = new Punt(1,0);
            ValidMove(tempPoint);
            break;
    }
}
function Move(e) {
    var keyCode = e.keyCode;
    switch(keyCode)
    {
        case 38:
        case 119:
            player1.richting = "up";
            Direction("UP");
            break;
        case 37:
        case 97:
            player1.richting = "left";
            Direction("LEFT");
            break;
        case 40:
        case 115:
            player1.richting = "down";
            Direction("DOWN");
            break;
        case 39:
        case 100:
            player1.richting = "right";
            Direction("RIGHT");
            break;
    }
}
function ValidMove(check)
{
    //here the game logic will take place.
    temppos = new Punt(player1.Position.x + check.x, player1.Position.y + check.y);

    switch (Array.from(kaart.map[temppos.y])[temppos.x])
    {
        case 1:
            //YOU CAN NOT WALK INTO A WALL
            //SO NOTHING HAPPENS AND YOU DON'T MOVE
            break;
        case 2:
            pickupDiamond();
            player1.Position = temppos;
            break;
        case 3:
            FinishGame();
            break;
        case 4:
            player1.Position = temppos;
            Damage();
            break;
        default:
            player1.Position = temppos;
            break;
    }
}

function GameOver()
{
    kaart.restart();
    player1.Position.x = 1;
    player1.Position.y = 1;
    player1.score = 0;
    player1.HP = 3;
    player1.richting = "down";
}

function Damage()
{
    player1.HP--;
    if (player1.HP == 0)
    {
        alert("you died!");
        kaart.currentlvl = 1;
        GameOver();
    }
    kaart.map[temppos.y][temppos.x] = 0;
}

function FinishGame()
{
    kaart.nextlvl();
    player1.richting = "down";
    player1.Position.x = 1;
    player1.Position.y = 1;
}

function pickupDiamond()
{
    player1.score++;
    kaart.map[temppos.y][temppos.x] = 0;
}

window.onresize = function() {
    room1 = new Room(window.innerWidth - 5, window.innerHeight - 5);
}

player1 = new player();
sprites = new Sprites();

var canvas;
var img;
var muziek;
function preload() {
    muziek = new Music("Content/music/Last_Summer.mp3");
    img = loadImage('Content/Images/link_sheet.gif');
    sprites.player = img;
    img = loadImage('Content/Images/rupees_sheet.png');
    sprites.diamond = img;
    img = loadImage('Content/Images/rogueMonsters.png');
    sprites.enemy = img;
    img = loadImage('Content/Images/Stone.jpg');
    sprites.wall = img;
    img = loadImage('Content/Images/Exit.png');
    sprites.exit = img;
}

function setup() {
    GameGraphics = new GameGraph();
    DefineAnimations();
    room1 = new Room(window.innerWidth - 5, window.innerHeight - 5);
    window.addEventListener("keydown", Move, false);
    window.addEventListener("keypress", Move, false);
    kaart = new Kaart();
}
function draw() {
    GraphicsRenderer();
}