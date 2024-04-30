var sportjson = `[{"Id":21,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/AbrarSport.jpg"},{"Id":22,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/Footballs.jpg"},{"Id":23,"Address":"https://www.pishkhan.com/Archive/1403/02/14030210/KhabarVarzeshi.jpg"},{"Id":24,"Address":"https://www.pishkhan.com/Archive/1403/02/14030210/Shoot.jpg"},{"Id":25,"Address":"https://www.pishkhan.com/Archive/1403/02/14030209/Gol_s.jpg"},{"Id":26,"Address":"https://www.pishkhan.com/Archive/1403/02/14030209/Gol.jpg"}]`
var normjson = `[{"Id":3,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/Asia.jpg"},{"Id":4,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/AbrarEghtesadi.jpg"},{"Id":5,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/AkhbarSanat.jpg"},{"Id":6,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/EqtesadAyandeh.jpg"},{"Id":7,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/EghtesadPooya_s.jpg"},{"Id":8,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/EghtesadSaramad_s.jpg"},{"Id":9,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/EghtesadKish_s.jpg"},{"Id":10,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/EghtesadeMardom_s.jpg"},{"Id":11,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/EghtesadeMeli_s.jpg"},{"Id":12,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/Emrooz_s.jpg"},{"Id":13,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/Servat_s.jpg"},{"Id":14,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/Jahan-e-Eghtesad_s.jpg"},{"Id":15,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/JahanSanat_s.jpg"},{"Id":16,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/Khoob_s.jpg"},{"Id":17,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/DonyayeEghtesad_s.jpg"},{"Id":18,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/MadanDaily_s.jpg"},{"Id":19,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/Shorou_s.jpg"},{"Id":20,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/GostareshSMT_s.jpg"},{"Id":21,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/Movajehe_s.jpg"},{"Id":22,"Address":"https://www.pishkhan.com/Archive/1403/02/14030211/NaghshDaily_s.jpg"},{"Id":23,"Address":"https://www.pishkhan.com/Archive/1403/02/14030209/Eskenas_s.jpg"},{"Id":24,"Address":"https://www.pishkhan.com/Archive/1403/02/14030208/Roozegar_s.jpg"}]`

// arabic time
$("#6b253632").html(moment().format('iYYYY/iMM/iDD'));
$("#71e7b4c8").html(moment().format('iddd - iDD iMMMM iYYYY'));
// persian time
var m = moment().add("1", "hours");
m.locale('fa');
$("#9ac1ccf7").html(m.format('YYYY/MM/DD'));
$("#fe33eafd").html(m.format('ddd - DD MMMM YYYY'));
var time = setInterval(() => {
  var m = moment().add("1", "hours");
  output = m.format("HH:mm:ss");
  document.getElementById("TodayTime").innerHTML = output;
}, 1000)
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

var normalNews = JSON.parse(normjson);
for (var i of normalNews) {
  var address = i["Address"]
  var data = `
  <div class="w-full flex justify-center relative z-50">
  <a href="ShowNews.html?img=${address}" class="w-9/12 rounded-sm">
      <img src="${address}" class="w-full" alt="">
  </a>
</div>
  `
  document.getElementById("owlNormalNews").innerHTML += data
}
var sportNews = JSON.parse(sportjson)
for (var i of sportNews) {
  var address = i["Address"]
  var data = `
  <div class="w-9/12 flex justify-center  relative z-50 mx-auto">
  <a href="ShowNews.html?img=${address}" class="w-full rounded-sm">
      <img src="${address}" class="w-full" alt="">
  </a>
</div>
  `
  document.getElementById("owlSportNews").innerHTML += data
}

var imgnormnews = document.querySelectorAll("#owlNormalNews img,#owlSportNews img")
console.log(imgnormnews);
if (window.innerWidth < 770) {
  console.log((((window.innerWidth - 120) * 75) / 100));
  for (var i = 0; i < imgnormnews.length; i++) {
    $(imgnormnews[i]).css("height", (((window.innerWidth - 120) * 75) / 100) - 60);
  }
}
if (window.innerWidth < 1024 && window.innerWidth > 770) {
  console.log(((((window.innerWidth - 108) / 2) - 40) * 75) / 100);
  for (var i = 0; i < imgnormnews.length; i++) {
    $(imgnormnews[i]).css("height", ((((window.innerWidth - 108) / 2) - 40) * 75) / 100 - 60);
  }
}
if(window.innerWidth > 1024){
  console.log(((((window.innerWidth - 108) / 2) - 40) * 75) / 100);
  for (var i = 0; i < imgnormnews.length; i++) {
    $(imgnormnews[i]).css("height", ((((window.innerWidth - 108) / 2) - 40) * 75) / 100 - 90);
  }
}






var owlnormal = $('.owl-carousel-normal')

owlnormal.owlCarousel({
  autoplay: false,
  autoplayTimeout: 7000,
  autoplayHoverPause: false,
  loop: true,
  rtl: true,
  margin: 10,
  nav: true,
  items: 1,
  dots: false,
  center: true,
  // stageOuterClass:"owl-stage-outer relative z-50",
  // navContainerClass: "owl-nav flex justify-between absolute top-1/2 right-[3%] w-[94%] z-10",
  navText: ['<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center absolute top-1/2"><span class="mingcute--right-line h-6 w-6"></span></p>', '<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center absolute top-1/2 left-[20px]"><span class="mingcute--left-line h-6 w-6"></span></p>']
})
owlnormal.trigger('play.owl.autoplay', [7000])

var owlsport = $('.owl-carousel-sport')

owlsport.owlCarousel({
  autoplay: false,
  autoplayTimeout: 7000,
  autoplayHoverPause: false,
  loop: true,
  rtl: true,
  margin: 10,
  nav: true,
  items: 1,
  dots: false,
  center: true,
  // stageOuterClass:"owl-stage-outer relative z-50",
  // navContainerClass: "owl-nav flex justify-between absolute top-1/2 right-[3%] w-[94%] z-10",
  navText: ['<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center absolute top-1/2"><span class="mingcute--right-line h-6 w-6"></span></p>', '<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center absolute top-1/2 left-[20px]"><span class="mingcute--left-line h-6 w-6"></span></p>']
})
owlsport.trigger('play.owl.autoplay', [7000])


