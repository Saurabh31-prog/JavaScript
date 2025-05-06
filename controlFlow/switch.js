//-----------------------------------------------------
// IMPORTANT  SWITCH 
//---------------

/*
syntax:
switch(key) {
    case value:
        break;
    case value2:
        break;
    default:
        break;
}
 */

const month = 3
switch (month) {
    case 1:
        console.log('january')
        break;
    case 2:
        console.log('feb')
        break;
    case 3:
        console.log('march')
        break;

    default:
        console.log('no match');
        break;
}
