"use strict";
$(document).ready(function () {
  $(".alert").hide();
  //what we do section
  $("#design").hide();
  $("#development").hide();
  $("#product").hide();
  //design
  $(".img-1").click(function () {
    $("#design").show();
    $("#design").addClass("click-design");
  });
  //development
  $(".img-2").click(function () {
    $("#development").addClass("click-development");
    $("#development").show();
  });
  //product
  $(".img-3").click(function () {
    $("#product").show();
    $("#product").addClass("click-product");
  });
  //-------------------------------------
  //portfolio section
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
    event.preventDefault();
  });
});
