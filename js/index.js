const calculateGrade = ()=>{
    
    let myvalue = document.getElementById('mymarks').value;
    let myAnswer = document.getElementById("answer");
    if(myvalue >79 && myvalue<=100){
        myGrade = "Your grade is: A";
        
    }
    else if(myvalue >59 && myvalue<=79){
        myGrade="Your grade is: B";
    }
    else if(myvalue >49 && myvalue<=59){
        myGrade="Your grade is: C";
    }
    else if(myvalue >39 && myvalue<=49){
        myGrade="Your grade is: D";
    }
    else if(myvalue < 40) {
        myGrade ="Your grade is: E";
    }
     myAnswer.innerHTML = myGrade;
}

const getPenalty = ()=>{
    let myspeed = document.getElementById('myspeed').value; // I get the value of the speed entered
    let response =document.getElementById('myPenalty');  //this is where our penalty will be printed on the page
    let speedLimit =70;
    let maxSpeed =130;
    let penalty;

    if (myspeed <=speedLimit){  //checks if the speed entered is less then or equal to 70
        penalty ="Ok";
        
    }
    else if(myspeed > speedLimit && myspeed<maxSpeed){ // Checks if the speed is between 70-130 which is over the limit
        let overLimit = myspeed-speedLimit; //gets the value of the speed over the limit i.e if myspeed =76 therefore overLimit = 6
        let myRemainder = overLimit%5;  //checks to see whether the overLimit is divisible by 5
        if(myRemainder ==0 ){ //remainder zero means our overLimit is divisible by 5.
            penalty=`Points:${overLimit/5}`;
            
        }
        else if(myRemainder !==0 ){      //an if for overLimits that are not divisible by 5
           let someNumber= overLimit-myRemainder; // cuts our overLimit to a number divisible by 5
           penalty = `Points:${someNumber/5}`;
        }
    }
    else if (myspeed>=maxSpeed){
        penalty = "License suspended";
    }
    response.innerHTML= penalty;
}