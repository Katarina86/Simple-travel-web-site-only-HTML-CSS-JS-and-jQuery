
$(document).ready(function ($) {

  // carousel
    $('.next').on('click', function(){
     $("#carousel ul").animate({marginLeft:"-250px"},800, function(){
     $("#carousel ul li:last").after($("#carousel ul li:first"));
     $(this).css("margin-left","0");
     });  
    });
    $('.prev').on('click', function(){
     $("#carousel ul").animate({marginLeft:"250px"},800, function(){
      $("#carousel ul li:first").before($("#carousel ul li:last"));
      $(this).css("margin-left","0");
      });
    });
  
  // drop down language selector
    $(".drop-down .selected a").click(function() {
        $(".drop-down .options ul").toggle();
    });
    
    $(".drop-down .options ul li a").click(function() {
        var text = $(this).html();
        $(".drop-down .selected a span").html(text);
        $(".drop-down .options ul").hide();
    }); 
    
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("drop-down"))
            $(".drop-down .options ul").hide();
    });  
});
  
function openMenu() {
    if (screen.width <= 976){
      let meni = document.getElementById("meni").style.display = "block";
      let right_meni = document.getElementById("right_meni").style.display = "block";
      let hamburger = document.getElementById("hamburger").style.display = "none";
      let meni_x = document.getElementById("meni_x").style.display = "block";
    }
}

function closeMenu() {
    if (screen.width <= 976){
      let meni = document.getElementById("meni").style.display = "none";
      let right_meni = document.getElementById("right_meni").style.display = "none";
      let hamburger = document.getElementById("hamburger").style.display = "block";
      let meni_x = document.getElementById("meni_x").style.display = "none";
    }
}

function showSerchBox(){
    let search = document.getElementById("search").style.display = "block";
    let img_x = document.getElementById("img_x").style.display = "block";
    let search_container = document.getElementById("search_container").style.background = "#f3f5f9";
    if (screen.width > 976){
        let meni = document.getElementById("meni").style.display = "none";
    }
}

function hideSerchBox() {
    let search = document.getElementById("search").style.display = "none";
    let img_x = document.getElementById("img_x").style.display = "none";
    let search_container = document.getElementById("search_container").style.background = "transparent";
    if (screen.width > 976) {
    let meni = document.getElementById("meni").style.display = "block";
    }
}

function openBaner() {
  
var baner = document.getElementById('hero_baner');
var btn = document.getElementById("btn_watch");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    baner.style.display = "block";
}
span.onclick = function() {
    baner.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == baner) {
    baner.style.display = "none";
  }
}
}

function proveraForme(form) {

    let flag = true;
    let submitBtn = document.getElementById("submitBtn");

	if(form.name.value.trim() == ""){
        flag = false;
    } 
	if(form.email.value.trim() == ""){
        flag = false; 
    }
	if(!form.checkbox.checked){
        flag = false;   
    }
    
	return flag;
}

function showPanel() {
let acc = document.getElementsByClassName("acc");
let i;

for (i = 0; i < acc.length; i++) {
    
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
}