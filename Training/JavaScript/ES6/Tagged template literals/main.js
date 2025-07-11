/**
 * 
 *Tagged template literals : chuổi mẩu có gắn thẻ 
 */

 function highlight ([first,...strings],...value)
 {
    console.log('first',first);
    console.log('strings',strings);
    console.log('value',value);

    return value.reduce(
        (acc,curr) => [...acc ,`<span>${curr}</span>`,strings.shift()],
        [first]
        ).join('')
 }

 var brand = 'F8';
 var course = 'Javascript';

 var html = highlight`Học lập trình ${course} tại ${brand} !`;

 console.log(html);
var show = document.getElementById('show');
show.innerHTML = html;