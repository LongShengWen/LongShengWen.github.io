!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("MiniValine",[],t):"object"==typeof exports?exports.MiniValine=t():e.MiniValine=t()}(window,(function(){return function(e){function t(t){for(var n,o,i=t[0],a=t[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);s.length;)s.shift()()}var n={},r={2:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+"MiniValine."+({0:"npm.style-loader",1:"npm.highlight.js",3:"barrager",4:"body-DesertsP",5:"body-xCss",6:"lib",7:"math",8:"md",9:"md-style",10:"npm.leancloud-storage",11:"npm.marked",12:"style-DesertsP",13:"style-barrager",14:"style-dark",15:"style-xCss",16:"ua",17:"vcard-DesertsP",18:"vcard-barrager",19:"vendors~lib",20:"vendors~xss",21:"visitor",22:"xss"}[e]||e)+".min.js"}(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://cdn.jsdelivr.net/npm/minivaline@4.2.11/dist/",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpMiniValine=window.webpackJsonpMiniValine||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=a;return o(o.s=9)}([function(e,t,n){"use strict";var r={on:function(e,t,n,o){for(var i=0,a=(e=e.split(" ")).length;i<a;i++)r.off(e[i],t,n,o),t.addEventListener?t.addEventListener(e[i],n,o||!1):t.attachEvent?t.attachEvent("on".concat(e[i]),n):t["on".concat(e[i])]=n},off:function(e,t,n,r){for(var o=0,i=(e=e.split(" ")).length;o<i;o++)t.removeEventListener?t.removeEventListener(e,n,r||!1):t.detachEvent?t.detachEvent("on".concat(e),n):t["on".concat(e)]=null}};e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.VERSION="4.2.11",o=t.MVUrl="https://cdn.jsdelivr.net/npm/minivaline@"+r;t.GBUrl="https://gravatar.loli.net/avatar/",t.EUrl=[o+"/imgs/alus",o+"/imgs/qq",o+"/imgs/Bilibilis",o+"/imgs/tieba",o+"/imgs/twemoji",o+"/imgs/weibo",o+"/imgs/funny"],t.pf="https://cdn.polyfill.io/v3/polyfill.min.js?features=es6",t.i18nUrl=o+"/i18n/",t.DEHash="9e63c80900d106cbbec5a9f4ea433a3e",t.MaxNL=6,t.PS=6,t.C={ip:"",comment:"",rid:"",at:"",nick:"",mail:"",mailMd5:"",link:"",ua:navigator.userAgent,url:location.pathname}},function(e,t,n){"use strict";var r=function(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.push(("v="+Math.random()).replace(".","")),t.join("&")};e.exports=function(e){(e=e||{}).type=(e.type||"GET").toUpperCase(),e.dataType=e.dataType||"json";var t=r(e.data);if(window.XMLHttpRequest)var n=new XMLHttpRequest;else n=new ActiveXObject("Microsoft.XMLHTTP");n.onreadystatechange=function(){if(4===n.readyState){var t=n.status;200<=t&&t<300?e.success&&e.success(n.responseText,n.responseXML):e.fail&&e.fail(t)}},"GET"==e.type?(n.open("GET",e.url+"?"+t,!0),n.send(null)):"POST"==e.type&&(n.open("POST",e.url,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(t))}},function(e,t,n){"use strict";e.exports=function(e,t){Promise.all([n.e(20),n.e(22)]).then(n.t.bind(null,58,7)).then((function(n){var r=n.XSS;e.TEXT=r(e.TEXT),t(e)}))}},function(e,t,n){"use strict";e.exports=function(e,t){if(document.selection)e.focus(),document.selection.createRange().text=t,e.focus();else if(e.selectionStart||"0"==e.selectionStart){var n=e.selectionStart,r=e.selectionEnd,o=e.scrollTop;e.value=e.value.substring(0,n)+t+e.value.substring(r,e.value.length),e.focus(),e.selectionStart=n+t.length,e.selectionEnd=n+t.length,e.scrollTop=o}else e.focus(),e.value+=t}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e){var t=localStorage&&localStorage.getItem("MiniValineCache");if(t){t=JSON.parse(t);for(var n=["nick","link","mail"],o=0;o<n.length;o++){var i=n[o];e.el.querySelector(".v".concat(i)).value=t[i],e.C[i]=t[i]}""!==t.mail&&"DesertsP"===e.mode&&e.el.querySelector(".visitor_avatar").setAttribute("data-src","".concat(r.GBUrl+md5(t.mail.toLowerCase().trim()),"?size=80&d=robohash"))}}},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(37));e.exports=function(e,t,n){var o=e.C.comment.match(/!\(:(.*?\.\w+):\)/g);if(o)for(var i=0;i<o.length;i++){var a=o[i].match(/!\(:(.*?\.\w+):\)/)[1],c=e.emoticon[a],l=new RegExp("!\\(:"+a.replace(/\./,"\\.")+":\\)","g");e.C.comment=e.C.comment.replace(l,'<img src="'.concat(c,'" alt="').concat(a,'" class="vemoticon-img">'))}t.TEXT=e.C.comment,(0,r.default)(e,t,n)}},function(e,t,n){"use strict";var r=function(e){var t=o(e.getDate(),2),n=o(e.getMonth()+1,2),r=o(e.getFullYear(),2);return"".concat(r,"-").concat(n,"-").concat(t)},o=function(e,t){for(var n=e.toString();n.length<t;)n="0".concat(n);return n};e.exports=function(e,t){try{var n=e.getTime(),o=(new Date).getTime()-n,i=Math.floor(o/864e5);if(0!==i)return i<0?t.now:i<365?"".concat(i," ").concat(t.days):r(e);var a=o%864e5,c=Math.floor(a/36e5);if(0!==c)return"".concat(c," ").concat(t.hours);var l=a%36e5,s=Math.floor(l/6e4);if(0!==s)return"".concat(s," ").concat(t.minutes);var u=l%6e4,d=Math.round(u/1e3);return 0===d?t.now:"".concat(d," ").concat(t.seconds)}catch(e){console.log(e)}}},function(e,t,n){"use strict";e.exports=function(e){var t=document.createElement("script");t.type="text/javascript",t.src=e;try{document.getElementsByTagName("head")[0].appendChild(t)}catch(e){}}},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(n(10)),o=n(1),i=function(e){return window.MV||(console.log("%c MiniValine %c v"+o.VERSION+" ","color: white; background: #0078E7; padding:5px 0;","padding:4px;border:1px solid #0078E7;"),window.MV={},window.MV.v=o.VERSION),new r.default(e)};e.exports=i,e.exports.default=i},function(e,t,n){"use strict";var r=i(n(11)),o=i(n(16));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t=this;try{if(t.config=e,!document.querySelectorAll(t.config.el)[0])return;o.default.Config(t),o.default.initStyle(t),o.default.ActivateCode(t),o.default.script(t),o.default.i18n(t),o.default.initLibs(t)}catch(e){}};a.prototype.initCheck=function(){var e=this;try{var t=setInterval((function(){e.i18n&&(clearInterval(t),"DesertsP"===e.mode?(n.e(4).then(n.t.bind(null,47,7)).then((function(t){var n=t.getEle;e.ele=n(e),e.Start()})),n.e(17).then(n.t.bind(null,48,7)).then((function(t){var n=t.Vcard;e.Vcard=n(e)}))):"xCss"===e.mode&&(e.config.closeUA||n.e(16).then(n.t.bind(null,49,7)).then((function(e){(0,e.init)()})),n.e(5).then(n.t.bind(null,50,7)).then((function(t){var n=t.getEle;e.ele=n(e),e.Start()}))),void 0!==e.config.barrager&&!e.config.barrager||n.e(18).then(n.t.bind(null,51,7)).then((function(t){var n=t.Vbarrager;e.Vbarrager=n(e)})))}),5)}catch(e){}},a.prototype.Start=function(){var e=this;try{r.default.el(e),r.default.loading(e),e.nodata.show(),r.default.smiles(e),o.default.setAV(e),o.default.visitor(e)}catch(e){return}try{o.default.cloudFlag(e),e.loading.hide(e.parentCount),e.loading.show(),o.default.initCount(e),o.default.insertComment(e,r.default),o.default.parentQuery(e),o.default.nestQuery(e),o.default.alert(e),o.default.inputs(e),o.default.previewEvt(e),o.default.smileEvt(e),"DesertsP"===e.mode&&o.default.startEvt(e),void 0!==e.config.barrager&&!e.config.barrager||o.default.barrager(e),o.default.getCache(e),o.default.resetForm(e),o.default.uploadImage(e),o.default.cancelReply(e),o.default.smileBtnEvt(e),o.default.previewBtnEvt(e),o.default.atEvt(e),o.default.submitBtnEvt(e),o.default.smile(e)}catch(e){}},e.exports=a},function(e,t,n){"use strict";var r=c(n(12)),o=c(n(13)),i=c(n(14)),a=c(n(15));function c(e){return e&&e.__esModule?e:{default:e}}e.exports={vcard:r.default,loading:o.default,smiles:i.default,el:a.default}},function(e,t,n){"use strict";var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(n(7));e.exports=function(e,t){t.set("nick",t.get("nick").slice(0,20).trim().replace(/&/g,"&amp;").replace(/\//g,"&#x2F").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"));var n=t.get("mailMd5"),i="".concat(r.GBUrl+n,"?size=80&d=robohash");if(void 0!==e.config.barrager&&!e.config.barrager||e.Vbarrager(e,t,i),"DesertsP"===e.mode)return e.Vcard(e,t,i);if("xCss"===e.mode){var a=t.get("ua")||"",c="",l=r.MVUrl+"/imgs/svg/";if(a&&!e.config.closeUA){a=uaparser(a);try{if(a.browser&&a.browser.name){c+='<span class="vsys"><i><embed class="msvg" src="'+l;var s=a.browser.name.toLowerCase();["samsung browser"].includes(s)?c+="mobile-alt":["android browser"].includes(s)?c+="android":["mobile safari","safari"].includes(s)?c+="safari":["ie","iemobile"].includes(s)?c+="internet-explorer":["wechat"].includes(s)?c+="weixin":["qqbrowser","qqbrowserlite","qq"].includes(s)?c+="qq":["baiduboxapp","baidu"].includes(s)?c+="paw":["chrome","chromium","chrome headless","chrome webview"].includes(s)?c+="chrome":["opera mobi","opera","opera coast","opera mini","opera tablet"].includes(s)?c+="opera":["firefox","edge"].includes(s)?c+=s:c+="snapchat-ghost",c+='.svg"/></i>'+a.browser.name+" "+(a.browser.version?a.browser.version:"")+"</span> "}else c+='<span class="vsys"><i><embed class="msvg" src="'+l+'stars.svg"/></i>Magical APP</span>';if(a.os&&a.os.name){c+='<span class="vsys"><i><embed class="msvg" src="'+l;var u=a.os.name.toLowerCase();["mac os","ios"].includes(u)?c+="apple":["chromium os"].includes(u)?c+="chrome":["firefox os"].includes(u)?c+="firefox":["windows phone","windows"].includes(u)?c+="windows":["android","linux","ubuntu","suse","redhat","fedora","centos","blackberry"].includes(u)?c+=u:c+="snapchat-ghost",c+='.svg"/></i>'+a.os.name+" "+(a.os.version?a.os.version:"")+"</span>"}else c+='<span class="vsys"><i><embed class="msvg" src="'+l+'magic.svg"/></i>Magical OS</span>'}catch(e){}}if(e.config.region)try{var d=t.get("log").region.data.location;d&&(c+='<span class="vsys"><i><embed class="msvg" src="'+l+'map.svg"/></i>'+d+"</span>")}catch(e){}var f="";if(!e.config.closeFlag&&!e.config.cloudflag)try{e.master=e.master.map((function(e){return e.toLowerCase()})),e.friends=e.friends.map((function(e){return e.toLowerCase()}));var v=e.master.includes(t.get("mailMd5").toLowerCase()),m=e.friends.includes(t.get("mailMd5").toLowerCase());f=v?'<span class="vtag vmaster">'+e.tagMeta[0]+"</span>":m?'<span class="vtag vfriend">'+e.tagMeta[1]+"</span>":'<span class="vtag vvisitor">'+e.tagMeta[2]+"</span>"}catch(e){}if(!e.config.closeFlag&&e.config.cloudflag)try{var p=e.cloudFlag.Roles,g=t.get("mailMd5").toLowerCase(),y=e.cloudFlag.Users[g];f=y?'<span class="vtag" style="background:'+"".concat(e.cloudFlag.Roles[y]&&e.cloudFlag.Roles[y].color?e.cloudFlag.Roles[y].color:"#6cf")+';">'+"".concat(e.cloudFlag.Roles[y]&&e.cloudFlag.Roles[y].nick?e.cloudFlag.Roles[y].nick:"visitor")+"</span>":'<span class="vtag" style="background:'+"".concat(p.visitor&&p.visitor.color?p.visitor.color:"#828282")+';">'+"".concat(p.visitor&&p.visitor.nick?p.visitor.nick:"visitor")+"</span>"}catch(e){}return'<div class="vcomment-body"><div class="vhead" >'+'<img class="vavatar lazyload" data-src="'.concat(i,'"/>')+"<a rid='".concat(t.id,"' at='@").concat(t.get("nick"),'\' class="vat" id="at-').concat(t.id,'">').concat(e.i18n.reply,"</a>")+'<div class="vmeta-info">'.concat(t.get("link")?'<a class="vname" href="'.concat(t.get("link"),'" target="_blank" rel="nofollow" > ').concat(t.get("nick"),"</a>").concat(f,'<span class="vsysinfo">').concat(c,"</span>"):'<span class="vname">'.concat(t.get("nick"),"</span> ").concat(f," ").concat(c))+'<br/><span class="vtime">'.concat((0,o.default)(t.get("createdAt"),e.i18n),"</span>")+"</div></div>"+'<section class="text-wrapper"  id="comment-'.concat(t.id,'">')+'<div class="vcomment">'.concat(t.get("comment"),"</div>")+'</section></div><div class="vcomment-children"><div class="vshow-children-wrapper" style="display: none"></div>'+'<ul class="vlist" id="children-list-'.concat(t.id,'"></ul>')+"</div>"}}},function(e,t,n){"use strict";e.exports=function(e){var t=e.el.querySelector(".vempty");e.nodata={show:function(n){t.innerHTML=n||e.i18n.noCommentYet,t.setAttribute("style","display:block;")},hide:function(){t.setAttribute("style","display:none;")}};var n='<div class="spinner"><div class="r1"></div><div class="r2"></div><div class="r3"></div><div class="r4"></div><div class="r5"></div></div>',r=e.el.querySelector(".vloading");r.innerHTML=n,e.loading={show:function(){r.setAttribute("style","display:block;"),e.nodata.hide()},hide:function(t){r.setAttribute("style","display:none;"),0===t&&e.nodata.show()}};var o=e.el.querySelector(".vsubmitting");o.innerHTML=n,e.submitting={show:function(){o.setAttribute("style","display:block;")},hide:function(){o.setAttribute("style","display:none;"),e.nodata.hide()}}}},function(e,t,n){"use strict";e.exports=function(e){var t=setInterval((function(){if(void 0!==e.emoticonList&&0!=e.emoticonList.length){clearInterval(t);for(var n=e.el.querySelector(".vsmile-icons ul"),r=e.el.querySelector(".vsmile-bar ul"),o=e.emoticonList||[],i=0;i<o.length;i++){for(var a=document.createElement("li"),c=document.createElement("li"),l=0;l<o[i].length;l++){var s=document.createElement("img");s.setAttribute("data-src","".concat(o[i][l])),s.setAttribute("class","lazyload");try{a.appendChild(s)}catch(e){}if(0===l){(s=document.createElement("img")).setAttribute("src","".concat(o[i][0])),s.removeAttribute("class","lazyload");try{c.appendChild(s)}catch(e){}}}try{n.appendChild(a)}catch(e){}try{r.appendChild(c)}catch(e){}}try{e.el.querySelector(".vsmile-icons > ul > li:nth-child(1)").style.display="block";for(var u=document.querySelectorAll(".vsmile-bar > ul > li"),d=document.querySelectorAll(".vsmile-icons > ul > li"),f=0;f<u.length;f++)u[f].index=f,u[f].onclick=function(){for(var e=0;e<u.length;e++)u[e].className="",d[e].style.display="none";this.className="active",d[this.index].style.display="block"}}catch(e){}}}),10)}},function(e,t,n){"use strict";e.exports=function(e){var t="[object HTMLDivElement]"===Object.prototype.toString.call(e.config.el)?e.config.el:document.querySelectorAll(e.config.el)[0];"[object HTMLDivElement]"===Object.prototype.toString.call(t)&&(e.el=t,e.el.classList.add("MiniValine"),e.el.classList.add("markdown-body"),e.el.innerHTML=e.ele)}},function(e,t,n){"use strict";var r=L(n(17)),o=L(n(18)),i=L(n(19)),a=L(n(20)),c=L(n(21)),l=L(n(23)),s=L(n(24)),u=L(n(25)),d=L(n(26)),f=L(n(5)),v=L(n(27)),m=L(n(28)),p=L(n(29)),g=L(n(30)),y=L(n(31)),h=L(n(32)),b=L(n(33)),w=L(n(34)),M=L(n(35)),S=L(n(36)),C=L(n(39)),x=L(n(40)),_=L(n(41)),q=L(n(42)),A=L(n(43)),k=L(n(44)),E=L(n(45)),V=L(n(46));function L(e){return e&&e.__esModule?e:{default:e}}e.exports={Config:r.default,i18n:o.default,setAV:i.default,smile:a.default,script:c.default,initStyle:l.default,initLibs:s.default,uploadImage:u.default,alert:d.default,initCount:v.default,smileEvt:m.default,startEvt:p.default,resetForm:g.default,cancelReply:y.default,smileBtnEvt:h.default,previ