import readlineSync from 'readline-sync'
let i=1;
let a;
function oddeven(){
while(i>0){
    a = readlineSync.questionInt("Enter number to check Even or Odd : ")
    
    if(a%2==0){
        console.log("Given number is even");
    }
    else{
        console.log("Given number is odd");
    }
    continue1();
    break;
    i++;
}


}

function continue1(){

        // oddeven();
     
    let b=readlineSync.question("you wants to continue if yes type 'Yes' if no type 'No': ");
    if (b === "Yes" || b === "yes" || b === "Y" || b === "y") {
        oddeven();
      } else if (b === "No" || b === "no" || b === "N" || b === "n") {
        console.log("Thank You");
      } else {
        console.log("Invalid input");
      }
     
}
    
oddeven()


