import readlineSync from 'readline-sync'

let n=readlineSync.questionInt("Enter size if the array:");
const array=[];
for(let i=0;i<n;i++){
    const element = readlineSync.questionInt(`Enter elements: `);
    array.push(element);
    
}
let max=array[0];
for(let i=1 ;i<array.length;i++){
    if(array[i]>max){
        
       max=array[i];
       
    }
    
}

console.log(max);




