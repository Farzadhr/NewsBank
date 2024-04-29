// arabic time
$("#6b253632").html(moment().format('iYYYY/iMM/iDD'));
$("#71e7b4c8").html(moment().format('iddd - iDD iMMMM iYYYY'));
// persian time
var m = moment();
m.locale('fa');
$("#9ac1ccf7").html(m.format('YYYY/MM/DD'));
$("#fe33eafd").html(m.format('ddd - DD MMMM YYYY'));
output = m.format('ddd') + ' ' + m.format("DD MMMM YYYY");
document.getElementById("TodayTime").innerHTML = output;
// english time
var men = moment().locale("en");
$("#41fa8bce").html(men.format('YYYY/MM/DD'));
$("#243f75ca").html(men.format('ddd - DD MMMM YYYY'));

$("#OpenMobileMenu").click(function (e) { 
    e.preventDefault();
    $("#MobileMenu").removeClass("-right-full");
    $("#MobileMenu").addClass("right-0");
});
$("#CloseMobileMenu").click(function (e) { 
    e.preventDefault();
    $("#MobileMenu").addClass("-right-full");
    $("#MobileMenu").removeClass("right-0");
});