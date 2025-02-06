//Whale Talk" is a fun exercise in Codecademy's JavaScript course where you translate a given string into "whale talk."
//In whale talk, you only use vowels and repeat u,e vowels twice.
//uueeieeauuee
const input = "turpentine and turtles";
const vowels=['a','e','i','o','u']
let output=[]
for(i=0;i<input.length;i++){
    //console.log(input[i])
    for(j=0;j<vowels.length;j++){
        if(input[i]===vowels[j]){
            if(input[i]==='u' || input[i]==='e'){
                output.push(input[i],input[i])
            }
            else{
                output.push(input[i])
            }
            
        }
    }
}

console.log(output.join('').toUpperCase())
