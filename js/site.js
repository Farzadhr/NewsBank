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

var owlnormal = $('.owl-carousel-normal')

owlnormal.owlCarousel({
    autoplay: false,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    loop:true,
    rtl: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
    center: true,
    navContainerClass: "owl-nav flex justify-between absolute top-1/2 right-[3%] w-[94%]",
    navText: ['<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center"><span class="mingcute--right-line h-6 w-6"></span></p>', '<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center"><span class="mingcute--left-line h-6 w-6"></span></p>']
})
owlnormal.trigger('play.owl.autoplay',[7000])

var owlsport = $('.owl-carousel-sport')

owlsport.owlCarousel({
    autoplay: false,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    loop:true,
    rtl: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
    center: true,
    navContainerClass: "owl-nav flex justify-between absolute top-1/2 right-[3%] w-[94%]",
    navText: ['<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center"><span class="mingcute--right-line h-6 w-6"></span></p>', '<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center"><span class="mingcute--left-line h-6 w-6"></span></p>']
})
owlsport.trigger('play.owl.autoplay',[7000])

fetch("https://farzadhr.ir/NewsNormal.json")
.then(res => res.json())
.then(out =>
  console.log('Checkout this JSON! ', out))
.catch(err => { throw err });
