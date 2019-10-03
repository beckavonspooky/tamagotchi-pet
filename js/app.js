class Tomagotchi {
    constructor (name){ //the user can choose
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
    }
    
    
};

let interval = null
$('#gameTimer').on('click', ()=>{
    // console.log('button works');

    const setName = prompt('Give Pet Name');
    game.player = setName; 
    const henry = new Tomagotchi(game.player);//instantiate your tomagotchi
    $tama = $('#tamaName')
    $tama.text(henry.name)

    // henry.greet();
    // console.log(henry)

    game.petAge();
    interval = game.setGameTimer();
    game.getHunger();
    game.getSleepiness();
    game.getBoredom();
    game.petDies();
})
$('#feed').on('click', (e)=>{
    if(this.hunger > 0){
        this.hunger--
        $('#hunger').text(`Hunger: ${this.hunger}`)
    }
    game.feedPet()
    
})
$('#light').on('click', (e)=>{
    if(this.sleepiness > 0){
        this.sleepiness--
         $('#sleep').text(`Sleepiness: ${this.sleepiness}`)
    }
    game.sleepPet()
    
})
$('#play').on('click', (e)=>{
    console.log(e.target)
    if(this.boredom > 0){
        this.boredom--
         $('#bored').text(`Boredom:${this.boredom}`)
    }
    game.playPet()
})

const game = {
    player: 'henry',
    time: 0,
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 0,
    isDead: false,
    setGameTimer(){
        const $timer = $('#timer');
        const interval = setInterval(()=>{
            this.time++
            this.petDies()//how do you get rid of the prompt
            $timer.text(`timer: ${this.time}s`);
            if(this.isDead){
                clearInterval(interval);
            }
        }, 1000)
        return interval
    },
    petAge(){
        const $age = $('#tamaAge');
        const interval = setInterval(()=>{
            if(this.age === 5){
                $('.child').css('display','none')
                $('#teen').css('display','block')
                this.age++
            }else if(this.age === 10){
                $('.child').css('display','none')
                $('#teen').css('display','none')
                $('#dead').css('display','block')
                clearInterval(interval);
            }else{
                this.age++
            }
            $age.text(`Age: ${this.age}`)
        }, 5000)

    },
    getHunger(){
        const $hunger = $('#hunger');
        const interval = setInterval(()=>{
            if(this.hunger === 10){
                clearInterval(interval);
            }else{
                this.hunger++
            }
            $hunger.text(`Hunger: ${this.hunger}`)
        }, 7000)
     },
     getSleepiness(){
         const $sleepiness = $('#sleep');
         const interval = setInterval(()=>{
             if(this.sleepiness === 10){
                //  this.petDies()
                 clearInterval(interval);
             }else{
                this.sleepiness++
             }
             $sleepiness.text(`Sleepiness: ${this.sleepiness}`)
         }, 5000)
     },
     getBoredom(){
         const $boredom = $('#bored');
         const interval = setInterval(()=>{
             if(this.boredom === 10){
                 clearInterval(interval)
             }else{
                 this.boredom++
             }
             $boredom.text(`Boredom:${this.boredom}`)
         }, 10000)
     },
     petDies(){
         if(this.hunger === 10 && !this.isDead){
             alert('Lil homie starved to death');
             this.isDead = true;
        }else if(this.sleepiness === 10 && !this.isDead){
            alert('Lil homie is dead from sleep deprivation')
            this.isDead = true;
        }else if(this.boredom === 10 && !this.isDead){
            alert('Lil homie bored to death')
            this.isDead = true;
        }else if(this.age === 20 && !this.isDead){
            alert('Lil homies time to go. RIP')
            this.isDead = true;
         }else{
         }
     },
     feedPet(){
         if(this.hunger > 0){
             this.hunger--
             $('#hunger').text(`Hunger: ${this.hunger}`)
         }
     },
     sleepPet(){
         if(this.sleepiness > 0){
             this.sleepiness--
             $('#sleep').text(`Sleep: ${this.sleepiness}`)
         }

     },
     playPet(){
         if(this.boredom > 0){
             this.boredom--
             $('#bored').text(`Boredom:${this.boredom}`)
         }
     },
     timerStop(){
        clearInterval(interval)
     }

    
}

