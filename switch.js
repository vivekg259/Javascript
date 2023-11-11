// switch (new Date().getDay()) {
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today is Tuesday");
//     break;
//   case 3:
//     console.log("Today is Wednesday");
//     break;
//   case 4:
//     console.log("Today is Thursday");
//     break;
//   case 5:
//     console.log("Today is Friday");
//     break;
//   case 6:
//     console.log("Today is Saturday");
//     break;
//   case 7:
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("Incorrect Input");
// }




let result = marks();
function marks() {
    let obtMark = 401 ;
    if (obtMark>198 && obtMark<=600) {
        return (obtMark);
    } else if (obtMark<=198) {
        return 'Failed';
    } else {
        return;
    }
}

let percentOfResult = result*100/600;

switch(typeof result){
    case "number":
      console.log(`Passed with ${percentOfResult.toFixed(2)}% and Your total obtained mark is ${result} out of 600`);
      break;
    case "string":
        console.log(`Failed`);
      break;
      default:
        console.log('Invalid Input Marks')
}
