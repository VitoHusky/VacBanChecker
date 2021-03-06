// ==UserScript== 
// @version         1.1
// @name            VacChecker
// @namespace       https://github.com/VacBanChecker
// @description  	Shows vac bans underneath players on steam (even with new steam!)
// @match     		http://steamcommunity.com/id/*
// @match     		http://steamcommunity.com/profiles/*
// @match     		https://steamcommunity.com/id/*
// @match     		https://steamcommunity.com/profiles/*
// @homepageURL     https://fluxter.net/projects/vacchecker
// @noframes
// ==/UserScript==

(function() {
    !function(){function e(e,n){return n>=e.length?"0":e.charAt(e.length-n-1)}function n(e,n){for(var r=e,t=0;t<n;t++)r="0"+r;return r}function r(r){return function(r,t){for(var a=Math.max(r.length,t.length),o="",s=0,l=0,c=0;c<a;c++){var u=Number(e(r,c))+Number(e(t,c))+s;for(s=0;u>=10;)u-=10,s++;0===u?l++:(o=String(u)+n(o,l),l=0)}return s>0&&(o=String(s)+o),o}("76561197960265728",r.attributes.getNamedItem("data-miniprofile").value)}var t={};function a(e){t[e.SteamId].forEach(function(n){var r=document.createElement("span");if(r.style.display="block",e.NumberOfVACBans||e.NumberOfGameBans){var t="";e.NumberOfGameBans&&(t+=e.NumberOfGameBans+" OW bans"),e.NumberOfVACBans&&(t+=(""===t?"":", ")+e.NumberOfVACBans+" VAC bans"),t+=" "+e.DaysSinceLastBan+" days ago.",r.style.color="rgb(255, 73, 73)",r.innerHTML="✘ "+t}else r.style.color="rgb(43, 203, 64)",r.innerHTML="✔ No Bans";var a=n.querySelector(".friend_block_content");null!=a&&(a.append(r),n.style.height="65px"),null!=(a=n.querySelector(".friendSmallText"))&&a.append(r)})}function o(e){var n=new XMLHttpRequest,r="https://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=12A1D1DE83F9932934EDD6DF2BA00463&steamids="+e.join(",");n.onreadystatechange=function(){var e;(e=n).readyState===XMLHttpRequest.DONE&&200===e.status&&JSON.parse(e.responseText).players.forEach(a)},n.open("GET",r,!0),n.send()}[].slice.call(document.querySelectorAll("#memberList .member_block, #memberManageList .member_block, .friendHolder, .friendBlock, .friend_block_v2")).forEach(function(e){var n=r(e);t[n]||(t[n]=[]),t[n].push(e)});for(var s=Object.keys(t);s.length>0;){o(s.splice(0,100))}}();
})();