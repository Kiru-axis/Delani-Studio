"use strict";
$(document).ready(function () {
  $(".alert").hide();
  //what we do section
  $("#design").hide();
  $("#development").hide();
  $("#product").hide();

  //user interface
  //1. Design
  $("div.img-text-1").click(function () {
    $("div.img-text-1").toggle();
    $("#design").hide();
  });
  $("#design").click(function () {
    $("div.img-text-1").toggle();
    $("#design").hide();
  });
  //2 .Development
  $("div.img-text-2").click(function () {
    $("div.img-text-2").toggle();
    $("#development").hide();
  });
  $("#development").click(function () {
    $("div.img-text-2").toggle();
    $("#development").hide();
  });

  //3. Product
  $("div.img-text-3").click(function () {
    $("div.img-text-3").toggle();
    $("#product").hide();
  });
  $("#product").click(function () {
    $("div.img-text-3").toggle();
    $("#product").hide();
  });

  // js
  //design
  $("div.img-text-1").click(function () {
    $("#design").show();
    $("#design").addClass("click-design");
    $("div.img-text-1").hide();
  });

  //development
  $("div.img-text-2").click(function () {
    $("#development").show();
    $("#development").addClass("click-development");
    $("div.img-text-2").hide();
  });
  //product
  $("div.img-text-3").click(function () {
    $("#product").show();
    $("#product").addClass("click-product");
    $("div.img-text-3").hide();
  });
  //-------------------------------------
  //portfolio section
  $(".portfolioImg").addClass("hoverImg");

  
  //--------------------------------------
  //form section
  $("form.user-input").submit(function (event) {
    let userName = $("#name").val();
    let userEmail = $("#email").val();
    let userMessage = $("#user-msg").val();
    //output name, email and message
    $("#hisName").html(userName);
    $("#hisEmail").html(userEmail);
    $("#hisMessage").html(userMessage);
    $(".alert").show();
    alert(
      `Hello ${userName} . we have recieved your message : ${userMessage}, and we thank you for reaching out to us.`
    );
    event.preventDefault();
  });
});
