/*
* @Author: Marte
* @Date:   2018-10-14 13:48:20
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-15 13:14:06
*/

'use strict';
$(document).ready(function(){
    $(".all").click(function(){
      $(".img5,.img6,.img7,.img8,.img9,.img10").fadeIn("show");
    });
    $(".zs").click(function(){
      $(".img5").show();
      $(".img6,.img7,.img8,.img9,.img10").hide();
    });
    $(".mc").click(function(){
      $(".img8,.img9,.img10").hide();
      $(".img5,.img6,.img7").show();
    });
    $(".dg").click(function(){
      $(".img10").hide();
      $(".img5,.img6,.img7,.img8,.img9").show();
    });
})
$(function(){
    $(".dropdown").mouseover(function(){
        $(this).addClass("open");
    });
    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    })
})