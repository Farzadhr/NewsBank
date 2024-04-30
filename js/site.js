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
  <a href="ShowNews.html?img=${address}" class="w-full flex justify-center">
  <div class="w-9/12 rounded-sm">
      <img src="${address}" class="w-full" alt="">
  </div>
</a>
  `
  document.getElementById("owlNormalNews").innerHTML += data
}
var sportNews = JSON.parse(sportjson)
for (var i of sportNews) {
  var address = i["Address"]
  var data = `
  <a href="ShowNews.html?img=${address}" class="w-full flex justify-center">
  <div class="w-9/12 rounded-sm">
      <img src="${address}" class="w-full" alt="">
  </div>
</a>
  `
  document.getElementById("owlSportNews").innerHTML += data
}

var imgnormnews = document.querySelectorAll("#owlNormalNews img,#owlSportNews img")
console.log(imgnormnews);
setTimeout(() => {
  for (var i = 0; i < imgnormnews.length; i++) {
    $(imgnormnews[i]).css("height", imgnormnews[0].getBoundingClientRect().width - 70);
  }
  if (window.innerWidth > 600) {
    for (var i = 0; i < imgnormnews.length; i++) {
      $(imgnormnews[i]).css("height", imgnormnews[0].getBoundingClientRect().width - 100);
    }
  }
  if (window.innerWidth > 1000) {
    for (var i = 0; i < imgnormnews.length; i++) {
      $(imgnormnews[i]).css("height", imgnormnews[0].getBoundingClientRect().width - 140);
    }
  }
}, 1);






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
  navContainerClass: "owl-nav flex justify-between absolute top-1/2 right-[3%] w-[94%]",
  navText: ['<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center"><span class="mingcute--right-line h-6 w-6"></span></p>', '<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center"><span class="mingcute--left-line h-6 w-6"></span></p>']
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
  navContainerClass: "owl-nav flex justify-between absolute top-1/2 right-[3%] w-[94%]",
  navText: ['<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center"><span class="mingcute--right-line h-6 w-6"></span></p>', '<p class="bg-primary text-white h-8 w-8 rounded-full flex items-center justify-center"><span class="mingcute--left-line h-6 w-6"></span></p>']
})
owlsport.trigger('play.owl.autoplay', [7000])


