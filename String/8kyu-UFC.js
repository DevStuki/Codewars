/*
This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck!
*/

/* Beginning
var quote = function(fighter) {
    const gsp = "george saint pierre";
    const mc = "conor mcgregor";
    
    if(fighter.toLowerCase() === gsp){
        return "I am not impressed by your performance.";
    }else if(fighter.toLowerCase() === "conor mcgregor"){
        return "I'd like to take this chance to apologize.. To absolutely NOBODY!";   
    }
};
*/

var quote = function(fighter) {
    switch(fighter.toLowerCase()){
        case "george saint pierre" : 
            return "I am not impressed by your performance.";

        case "conor mcgregor" : 
            return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
            
        default : return "I don't know who you are.."
    }
};