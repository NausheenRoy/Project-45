class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var countRef = await database.ref('count').once("value");
                if (countRef.exists()) {
                    count = countRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
                
            }
  
   


        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index - 1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }

                     
                     if(keyIsDown(UP_ARROW) && player.index !== null){
                        player.distance +=10
                        player.update();
                      }                  
            }        
        
         

    }

   
}