// 4. Интернет-магазин занимается продажей различных сувениров и безделушек. Каждый сувенир весит 75 г, а безделушка – 112 г. 
//    Напишите программу, запрашивающую у пользователя количество тех и других покупок, после чего выведите на экран общий вес посылки.

const souvenir = 75;
const trinkets = 112;
let souvenirAmount = prompt('4) How many souvenirs do you need?', '1');
let trinketsAmount = prompt('4) How many trinkets do you need?', '1');
alert(`4) Total weight: ${souvenir * souvenirAmount + trinkets * trinketsAmount} гр`)
