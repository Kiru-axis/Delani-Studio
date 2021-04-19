"use strict";
$(document).ready(function () {
  $(".alert").hide();
  //what we do section
  $("#design").hide();
  $("#development").hide();
  $("#product").hide();

  //user interface
  $("").click(function () {
    $("div.img-text-1").toggle();
    $("#design").hide();
  });
  //design
  $("div.img-text-1").click(function () {
    $("#design").show();
    $("#design").addClass("click-design");
    $("div.img-text-1").hide();
  });

  //development
  $("div.img-text-2").click(function () {
    $("#development").addClass("click-development");
    $("#development").show();
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
