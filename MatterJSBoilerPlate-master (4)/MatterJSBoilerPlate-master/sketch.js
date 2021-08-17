var bg,bg2;
var score=0;

function preload(){
bg=loadImage("background1.png");
bg2=loadImage("background2.png");
}

function setup() {
	createCanvas(1000, 800);

  system = new System()
  main = new Main()

	

	

	
  
}


function draw() {
  
  background(bg);
  clues();
  main.display();

  
  
  textSize(20);
  fill("white");
  text("score : "+ score,500,40);
  text("entered code in capital letters and solve this puzzles and became a winner of this game you are solve one",10,470)
  text("puzzle for point gained by 1 and as well your score reached to 3 you suprised by my gift ",10,490)
  text("|THANK YOU|",430,530)

  if(score===3){
    clear()
    background(bg2);
  }

 
  
  
  drawSprites();
 
}



