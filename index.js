function lemonadeChange(payment){
    let cashArray=[0,0];
    for(let i=0;i<payment.length;i++){
        if(payment[i]===5){
            cashArray[0]++;
        }
        if(payment[i]===10){
            cashArray[1]++;
            if(cashArray[0]===0){
                return false;
            }
            else{
                cashArray[0]--;
            }
        }
        if(payment[i]===20){
            if(cashArray[1]===0){
               if(cashArray[0]>=3){
                   cashArray[0]=cashArray[0]-3;
               }
               else{
                   return false;
               }
            }
            else{
                cashArray[1]--;
                if(cashArray[0]>=1){
                    cashArray[0]--;
                }
                else{
                    return false;
                }
            }
        }

    }
console.log(cashArray);
    return true;
}
console.log(lemonadeChange([5,5,5,10,20])===true);
console.log(lemonadeChange([5,5,5,10,10,10])===true);
console.log(lemonadeChange([5,10,10])===false);
console.log(lemonadeChange([5,5,10,10])===true);
console.log(lemonadeChange([5])===true);