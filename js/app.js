class Tomagotchi {
    constructor (name){ //the user can choose
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
    }
    greet(){
        console.log('Kon-nichiwa')
    }
    getHunger(){

    }
    getSleepiness(){

    }
    getBoredom(){

    }
};
const henry = new Tomagotchi();//instantiate your tomagotchi
henry.greet();


$('#gameTimer').on('click', ()=>{
    console.log('button works');
    game.setGameTimer();
})


const game = {
    player: 'henry',
    time: 0,
    setGameTimer(){
        const $timer = $('#timer');
        setInterval(()=>{
                this.time++
            
            $timer.text(`timer: ${this.time}s`)
            
        }, 1000)
    },
    

}

