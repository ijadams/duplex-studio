!function(e){var t={};function o(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";function i(){let e=$("section.project--slide.active canvas")[0];if(e){let t=e.getContext("2d");t.closePath(),t.clearRect(0,0,e.width,e.height)}}o.r(t),$(window).on("load",function(){$("body").removeClass("fade-out");const e=()=>$(window).width()>768;$("#toggle").click(function(){$(this).toggleClass("active"),$("#overlay").toggleClass("open")}),$("#overlay").click(()=>{e()&&($("#toggle").toggleClass("active"),$("#overlay").toggleClass("open"))}),$(document).keyup(function(){$("#overlay").hasClass("open")&&($("button_container").toggleClass("active"),$("#toggle").toggleClass("active"),$("#overlay").toggleClass("open"))}),$("#intro").addClass("active");let t=0,o=!0,n=$("#desktop section").length;new Promise(function(e){setTimeout(function(){$("#intro .left img").css("opacity","1"),$("#intro .right img").css("opacity","1"),e()},800)}).then(function(){e()&&setTimeout(function(){0===t&&l("next")},6e3)}),$("section.project--slide ul").slick({arrows:!1,infinite:!0,lazyLoad:"progressive"}),$("section.project--slide ul").on("lazyLoaded",function(e,t,o,i){o.parent().css("background-image",'url("'+i+'")'),o.hide()}),$(".project--slide ul").on("beforeChange",(t,o,i,n)=>{let s;if(e())s=$("section.active ul li").eq(n+1);else{let e=o.$slider[0];s=$(e).find("li").eq(n+1)}let l=$(s).children()[0].innerHTML;l||(l=s.hasClass("dark")?"black":"white"),u(l)}),$(".prev").click(()=>{!o&&e()&&(i(),d("previous"))}),$(".next").click(()=>{!o&&e()&&(i(),d("next"))}),$(window).on("scroll",t=>{e()&&t.preventDefault()});let s={isThrottled:!1,throttleDuration:1650};$(window).on("mousewheel",t=>{if(e()){if(t.preventDefault(),s.isThrottled)return;s.isThrottled=!0,setTimeout(()=>{s.isThrottled=!1},s.throttleDuration),o||(i(),t.originalEvent.wheelDelta>0?(o=!0,l("previous")):(o=!0,v(),l("next")))}});const l=e=>{"previous"===e&&0==t?t=0:"previous"===e&&1==t?t=1:"next"===e&&t===n-1?t=n-1:"next"===e?c():"previous"===e&&r(),setTimeout(()=>a(),1e3)},c=()=>{$("section.active .left").addClass("leave"),$("section.active .right").addClass("leave"),setTimeout(()=>{$("section.active .description").addClass("leave")},300),t+=1,setTimeout(()=>a(),1e3)},r=()=>{t-=1,a(),$("section.active .left").removeClass("leave"),$("section.active .right").removeClass("leave"),setTimeout(()=>{$("section.active .description").removeClass("leave")},1e3)},a=()=>{$("section.active ul").slick("slickGoTo",0),$("section.active").removeClass("active"),$("section").eq(t).addClass("active"),o=!1},u=e=>{e&&($("#title").css("color",e),$("section .description p").css("color",e),$("body #toggle.button_container span").css("background",e))};$(".project--slide").click(t=>{let o=$(t.target);e()||$(o).closest(".project--slide ul").slick("slickNext")});const d=t=>{e()&&("next"===t?$(".project--slide.active ul").slick("slickNext"):"previous"===t&&$(".project--slide.active ul").slick("slickPrev"))},v=()=>{const e=t+2;$("section.project--slide:nth-of-type("+e+") ul").hasClass("slick-initialized")||$("section.project--slide:nth-of-type("+e+") ul").slick({arrows:!1,infinite:!0,lazyLoad:"ondemand"})}})}]);