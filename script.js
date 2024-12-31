
$(document).ready(function () {

$(function () {
  $(".prof-ile").on("click",function(e){
    $(this).siblings().removeClass('show');
    $(".lo-gin").toggleClass('show');
    e.stopPropagation();
  });
  $(document).click(function(e){
    if($(e.target).is(".lo-gin")===false){
      $(".lo-gin").removeClass('show');
    }
  });
});
$(".sidebar > .side-menu > .down-module > .main > ul > li").click(function(e){
  $(this).siblings().removeClass('active');
  $(this).toggleClass('active');
  $(this).siblings().find(".down-icon").removeClass('rotate');
  $(this).find(".down-icon").toggleClass('rotate')
  $(this).find("ul").slideToggle();
  $(this).siblings().find("ul").slideUp();
  $(this).siblings().find("ul").find("li").removeClass('active');
});

$(".sidebar > .side-menu > .down-module > .theme > li").click(function(e){
  $("body").toggleClass('dark');
  if($("body").hasClass("dark")){
    $(".mode-text").text("Dark");
  }else{
    $(".mode-text").text("Light");

  }
});

$(".navigation > ul > .open").click(function(e){
  $(".sidebar").addClass('active');
});
$(".sidebar > .head > .close").click(function(e){
  $(".sidebar").removeClass('active');
  
});

$(".only-mob").click(function(e){
  $(".search-container").toggleClass('show');
//  ====================== search-contaoiner=================== 
});
$(".search-container > button").click(function(e){
  $(".search-container").removeClass('show');


  $(document).click(function(e){
    if($(e.target).is(".search-container" && ".only-mob > ul > li > .search-mob")===false  ){
      $(".search-container").removeClass('show');
    }
    
  });
  
});
});

      