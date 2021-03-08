class Food{
    constructor(){

        this.image = loadImage("Milk.png");
        this.foodStock = 0;

    }

    getFoodStock(){
        var stateRef = database.ref('foodStock');
        stateRef.on("value",function(data){
        food = data.val();
       });
       return food;
    
    }

    updateFoodStock(food){
    
        database.ref('/').update({
            foodStock: food
        });
    }

    deductFood(){
        if(mousePressed(feed)){
            feedDog();
         }
        }
    display(){
      var x=80;
      var y=100;

      imageMode(CENTER);
      image(this.image,720,220,70,70);

      if(food!=0){
          for(var i=0;i<food;i++){
              if(i%10==0){
                  x=80;
                  y=y+50;
              }
              image(this.image,x,y,50,50);
              x=x+30;
          }
      }
    }
}
