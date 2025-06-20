//SWITCH
var date = 2 ;
switch(date)
{
    case 2:
        console.log('Hôm nay là thứ 2 ');
    break ;
    case 3 :
        console.log('Hôm nay là thứ 3');
    break ;
    default :
    console.log('Không Biết');
}
function run(fruits) {
    var result;

   switch (fruits) {
        case  "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
    }

    return result;
}