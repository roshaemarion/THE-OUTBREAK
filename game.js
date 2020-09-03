class Game{
    constructor(){
        this.heading=createElement("h1");
        this.startbutton=createButton("START");
        
        // this.background=createSprite(displayWidth/2,displayHeight/2);
        // this.background.visible=false;
        // this.scrollbackimg=loadImage("Images/scroll.jpg")
      
    }

    displayfirstpage(){
        background(backgroundimg)
  
        this.heading.position((displayWidth/2)-150,displayHeight/8);
        this.heading.style('font-size', '72px');
        this.heading.style('color', '#ff0000');
        this.heading.html("OUTBREAK");


 
        this.startbutton.style('background-color', '#ff0000');
        this.startbutton.position(displayWidth-300,displayHeight-400);
        this.startbutton.style('font-family', 'cursive');
        this.startbutton.style('font-size', '36px');
        this.startbutton.style('color', 'white');
        this.startbutton.style('width','150px');
        this.startbutton.style('height','80px');


                this.startbutton.mousePressed(()=>{
                this.startbutton.remove();
                this.heading.remove();
                gamestate=2;
                })
    }

    displaysecondpage(){
            player.display();
           
    }

    displaythirdpage(){
     
        // if(scrollflag===0){
        //     this.background.visible=true;
        //     this.background.scale=3
        //     this.background.addImage(this.scrollbackimg);
            
        //     
        //     scrollflag=1;
        // }
       
        // console.log(this.background.velocityY)
        //  if(this.background.y<displayHeight){
        //     this.background.y=displayHeight/2;
        // }
       // background(backgroundimg)
       if(scrollflag===0){
           player.girl.x=20;
           
           player.girl.addImage(sidegirlimg);
            player.girl.scale=0.5;
            player.girl.setVelocity(3,0);
            player.girl.y=displayHeight-100;
            camera.position.x=player.girl.x;
           scrollflag=1
       }
      
       image(scrollimg,displayWidth/displayWidth,displayHeight/displayHeight,displayWidth*5,displayHeight);
       camera.position.x=player.girl.x+650;

        if(keyDown("up")){
            //player.girl.y=player.girl.y-5;
            player.girl.velocityY=-5;
        }
       
        if(keyDown("down")){
            //player.girl.y=player.girl.y+5;
            player.girl.velocityY=+5;
          
        }
        if(player.girl.y>displayHeight-80){
            player.girl.y=displayHeight-80;
            player.girl.velocityY=0;
        }
        if(player.girl.y<20){
            player.girl.y=20;
            player.girl.velocityY=0;
        }
        if(frameCount%50===0){
           this.spawncorona();
        }
        if(frameCount%100===0){
            this.spawnanimals();
        }


        if(watercollected<3){
            
        if(frameCount%300===0){
            this.spawnwater();
         }
        }

        if(sanitizerscollected<3){


            if (frameCount%350===0){
                this.spawnsanitizers();
            }
        }
        
        
         if(watergroup.isTouching(player.girl)){
             if(waterflag===0){
                watercollected=watercollected+1
             }
             waterflag=1;
             watergroup.destroyEach();
             bellsound.play();
           
         }
         if (sanitizersgroup.isTouching(player.girl)){
             if(sanitizersflag===0){
                 sanitizerscollected=sanitizerscollected+1
             }
             sanitizersflag = 1;
             sanitizersgroup.destroyEach();
             bellsound.play();
         }
         
        if(coronagroup.isTouching(player.girl)){

         gamestate="end";
         }
         if(animalsgroup.isTouching(player.girl)){
             gamestate='end'
         }
         if (sanitizerscollected===3&&watercollected===3){
             gamestate="win";
         }
       
    }

    spawncorona()
    {
        var rand=Math.round(random(0,displayHeight));
        var corona=createSprite(player.girl.x+displayWidth,rand,10,10);
        corona.addImage(coronaimg);
        var scalerand=(random(0,0.5));
        corona.scale=scalerand;
        var rand2=Math.round(random(1,10));
        corona.velocityX=-(rand2);
        coronagroup.add(corona);
    }
    
    spawnanimals()
    {
        var rand=Math.round(random(0,displayHeight));
        var animals=createSprite(player.girl.x+displayWidth,rand,10,10);
        animals.addImage(animalsImage);
        var scalerand=(random(0,0.5));
        animals.scale = scalerand;
        var rand2=Math.round(random(1,10));
        animals.velocityX=-(rand2);
        animalsgroup.add(animals);


    }

    spawnwater(){
        var rand=Math.round(random(0,displayHeight));
        var water=createSprite(player.girl.x+displayWidth,rand,10,10);
         water.addImage(waterimg);
      //  var scalerand=(random(0,1));
        water.scale=0.5;
        var rand2=Math.round(random(1,10));
        water.velocityX=-(rand2);
        watergroup.add(water);
        waterflag=0;
     //   water.debug=true;
    }

    spawnsanitizers(){
        var rand=Math.round(random(0,displayHeight));
        var sanitizers = createSprite(player.girl.x+displayWidth,rand,10,10);
        sanitizers.addImage(sanitizersImage);
        sanitizers.scale=0.3;
        var rand2=Math.round(random(1,10));
        sanitizers.velocityX=-(rand2);
        sanitizersgroup.add(sanitizers);
        sanitizersflag=0;

        

    }

}
