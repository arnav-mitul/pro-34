var dog,dogim;
var Database,hunger;
var doghunger;

function preload()
{
	dogim = loadImage("dogImg.png")
}

function setup() {
  Database=firebase.database();
  createCanvas(800, 700);
  dog= createSprite(400,600,10,10)
  dog.addImage(dogim);
  doghunger=Database.ref("dog/hunger")
  doghunger.on("value",readHunger,showError)
  
}


function draw() {  

  drawSprites();
  //add styles here

}

function readPosition(data){
  hunger=data.val();


}

function showError(){
  
}



