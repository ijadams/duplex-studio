!function(e){var t={};function o(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t){$(document).ready(function(){$("body").removeClass("fade-out"),$("#toggle").click(function(){$(this).toggleClass("active"),$("#overlay").toggleClass("open")}),$(document).keyup(function(e){$("#overlay").hasClass("open")&&($("button_container").toggleClass("active"),$("#overlay").toggleClass("open"))}),$("#intro").addClass("active");let e=0,t=!1,o=$("section").length;$(".left").click(()=>{!t&&c()&&d("previous")}),$(".right").click(()=>{!t&&c()&&d("next")}),$(window).on("scroll",e=>{c()&&e.preventDefault()});let a={isThrottled:!1,throttleDuration:1100};$(window).on("mousewheel",e=>{if(c()){if(e.preventDefault(),a.isThrottled)return;a.isThrottled=!0,setTimeout(()=>{a.isThrottled=!1},a.throttleDuration),t||(e.originalEvent.wheelDelta>0?(t=!0,i("previous")):(t=!0,i("next")))}});const i=t=>{"previous"===t&&0==e?e=0:"next"===t&&e===o-1?e=o-1:"next"===t?s():"previous"===t&&l(),setTimeout(()=>n(),1e3)},s=()=>{$("section.active .left").addClass("leave"),$("section.active .right").addClass("leave"),setTimeout(()=>{$("section.active .description").addClass("leave")},300),e+=1,setTimeout(()=>n(),1e3)},l=()=>{e-=1,n(),$("section.active .left").removeClass("leave"),$("section.active .right").removeClass("leave"),setTimeout(()=>{$("section.active .description").removeClass("leave")},1e3)},n=()=>{$("section.active").removeClass("active"),$("section").eq(e).addClass("active"),r(),t=!1},r=()=>{$("section.active").hasClass("dark")||$("section.active ul li.active").hasClass("dark")?$("body").addClass("dark"):$("body").removeClass("dark")},c=()=>$(window).width()>768;$(".more").click(()=>{console.log("more")});const d=e=>{if("next"===e){let e=$("section.active ul li.active"),t=e.next();0===t.length&&(t=$("section.active ul li:first")),e.removeClass("active"),t.addClass("active"),t.hasClass("dark")?$("body").addClass("dark"):$("body").removeClass("dark")}else if("previous"===e){let e=$("section.active ul li.active"),t=e.prev();0===t.length&&(t=$("section.active ul li:last")),e.removeClass("active"),t.addClass("active"),t.hasClass("dark")?$("body").addClass("dark"):$("body").removeClass("dark")}}})}]);