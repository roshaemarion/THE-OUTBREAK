class Player{
    constructor(){
        this.girl=createSprite(displayWidth-200,displayHeight/2);
        var kidimage=loadImage("Images/girl_flip.png")
        this.girl.addImage(kidimage);
        this.playbutton=createButton("PLAY");
        this.granny=createSprite(displayWidth-700,displayHeight/2);
        var grannyimage=loadImage("Images/granny_flip.png");
        this.granny.addImage(grannyimage);
        this.granny.scale=1.2;
        this.girl.scale=0.8

        this.nextbutton=createButton("NEXT");

         speechbubble1=loadImage("Images/sb1.png")
         speechbubble2=loadImage("Images/sb2.png")
         speechbubble3=loadImage("Images/sb3.png")
        
        this.nextcount=1;
    
       
    }

    display(){
        drawSprites();
        if(this.nextcount<=3){
            if(this.nextcount===1){
                image(speechbubble1,displayWidth-600,displayHeight-600);
            }
            else if(this.nextcount===2){
                image(speechbubble2,displayWidth-600,displayHeight-600);
            }
            else if(this.nextcount===3){
                image(speechbubble3,displayWidth-600,displayHeight-600);
            }
                       
            
            this.nextbutton.style('background-color', '#ff0000');
            this.nextbutton.position(displayWidth-300,displayHeight-200);
            this.nextbutton.style('font-family', 'cursive');
            this.nextbutton.style('font-size', '36px');
            this.nextbutton.style('color', 'white');
            this.nextbutton.style('width','150px');
            this.nextbutton.style('height','80px');
            this.nextbutton.mousePressed(()=>{
             
                if(this.nextcount===1){
                    this.nextcount=2;
                }
                else if(this.nextcount===2){
                    this.nextcount=3;
                }
                else if(this.nextcount===3){
                   
                    this.nextcount=4;
                    this.nextbutton.remove();
                    this.showplaybutton();
                }
                console.log(this.nextcount)
                })
        }
    }
    showplaybutton(){
        this.playbutton.style('background-color', '#ff0000');
        this.playbutton.position(displayWidth-300,displayHeight-200);
        this.playbutton.style('font-family', 'cursive');
        this.playbutton.style('font-size', '36px');
        this.playbutton.style('color', 'white');
        this.playbutton.style('width','150px');
        this.playbutton.style('height','80px');
        this.playbutton.mousePressed(()=>{
            this.playbutton.remove();
            this.granny.remove();
            gamestate=3;
            })
    }
}