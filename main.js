(()=>{"use strict";var n={56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},72:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},a=[],s=0;s<n.length;s++){var c=n[s],p=i.base?c[0]+i.base:c[0],h=o[p]||0,d="".concat(p," ").concat(h);o[p]=h+1;var l=t(d),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(u);else{var v=r(u,i);i.byIndex=s,e.splice(s,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=i(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var c=i(n,r),p=0;p<o.length;p++){var h=t(o[p]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}o=c}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var p=0;p<n.length;p++){var h=[].concat(n[p]);i&&a[h[0]]||(void 0!==o&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=o),t&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=t):h[2]=t),r&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=r):h[4]="".concat(r)),e.push(h))}},e}},365:(n,e,t)=>{t.d(e,{A:()=>s});var i=t(601),r=t.n(i),o=t(314),a=t.n(o)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Raleway+Dots);"]),a.push([n.id,'* {\n    font-family: "Roboto", sans-serif;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n\n    -webkit-font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0,0,0,.01) 0 0 1px;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    min-height: 100vh;\n    background: linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f);\n    overflow: hidden;\n\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Page background animation */\n\n.stars {\n    width: 1px;\n    height: 1px;\n    position: absolute;\n    background: white;\n    box-shadow: 2vw 5vh 2px white, 10vw 8vh 2px white, 15vw 15vh 1px white,\n      22vw 22vh 1px white, 28vw 12vh 2px white, 32vw 32vh 1px white,\n      38vw 18vh 2px white, 42vw 35vh 1px white, 48vw 25vh 2px white,\n      53vw 42vh 1px white, 58vw 15vh 2px white, 63vw 38vh 1px white,\n      68vw 28vh 2px white, 73vw 45vh 1px white, 78vw 32vh 2px white,\n      83vw 48vh 1px white, 88vw 20vh 2px white, 93vw 52vh 1px white,\n      98vw 35vh 2px white, 5vw 60vh 1px white, 12vw 65vh 2px white,\n      18vw 72vh 1px white, 25vw 78vh 2px white, 30vw 85vh 1px white,\n      35vw 68vh 2px white, 40vw 82vh 1px white, 45vw 92vh 2px white,\n      50vw 75vh 1px white, 55vw 88vh 2px white, 60vw 95vh 1px white,\n      65vw 72vh 2px white, 70vw 85vh 1px white, 75vw 78vh 2px white,\n      80vw 92vh 1px white, 85vw 82vh 2px white, 90vw 88vh 1px white,\n      95vw 75vh 2px white;\n    animation: twinkle 8s infinite linear;\n}\n  \n.shooting-star {\n    position: absolute;\n    width: 100px;\n    height: 2px;\n    background: linear-gradient(90deg, white, transparent);\n    animation: shoot 3s infinite ease-in;\n}\n\n.shooting-star:nth-child(1) {\n    top: 20%;\n    left: -100px;\n    animation-delay: 0s;\n}\n\n.shooting-star:nth-child(2) {\n    top: 35%;\n    left: -100px;\n    animation-delay: 1s;\n}\n\n.shooting-star:nth-child(3) {\n    top: 50%;\n    left: -100px;\n    animation-delay: 2s;\n}\n\n@keyframes twinkle {\n    0%,\n    100% {\n        opacity: 0.8;\n    }\n    50% {\n        opacity: 0.4;\n    }\n}\n\n@keyframes shoot {\n    0% {\n        transform: translateX(0) translateY(0) rotate(25deg);\n        opacity: 1;\n    }\n    100% {\n        transform: translateX(120vw) translateY(50vh) rotate(25deg);\n        opacity: 0;\n    }\n}\n\n/* Additional twinkling stars with different animation timing */\n.stars::after {\n    content: "";\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    background: white;\n    box-shadow: 8vw 12vh 2px white, 16vw 18vh 1px white, 24vw 25vh 2px white,\n    33vw 15vh 1px white, 41vw 28vh 2px white, 49vw 35vh 1px white,\n    57vw 22vh 2px white, 65vw 42vh 1px white, 73vw 28vh 2px white,\n    81vw 48vh 1px white, 89vw 32vh 2px white, 97vw 45vh 1px white,\n    3vw 68vh 2px white, 11vw 75vh 1px white, 19vw 82vh 2px white,\n    27vw 88vh 1px white, 35vw 72vh 2px white, 43vw 85vh 1px white,\n    51vw 92vh 2px white, 59vw 78vh 1px white;\n    animation: twinkle 6s infinite linear reverse;\n}  \n\ninput, button {\n    border: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n    filter: brightness(90%);\n}\n\n.card {\n    background-color: rgba(255,255,255,0.5);\n    padding: 12.5px 15px;\n    border-radius: 50px;\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n\n    &.showResult {\n        border-radius: 15px;\n    }\n}\n\n.search-area {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.search-bar {\n    padding: 5px 10px;\n    border-radius: 50px;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.fa-search {\n    border-radius: 50px;\n    padding: 7px 7px;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.result {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    align-items: center;\n    \n    &.hide {\n        display: none;\n    }\n}\n\n/* The switch - the box around the slider */\n.switch {\n    margin-top: 10px;\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n}\n\n.switch.hide {\n    display: none;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.unit-label {\n    position: absolute;\n    left: 10px; /* Position it to the left of the slider */\n    z-index: 1000;\n    top: 50%;\n    transform: translateY(-50%);\n    color: white;\n    font-size: 12px;\n    font-weight: bold;\n    pointer-events: none; /* Prevent interaction */\n}\n\n/* The slider */\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f);\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider::before {\n    position: absolute;\n    content: "";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider::after {\n    content: "°C"; /* Text for Fahrenheit */\n    position: absolute;\n    right: 12.5px; /* Position it on the right side */\n    top: 50%;\n    transform: translateY(-50%);\n    color: white;\n    font-size: 12px;\n    font-weight: bold;\n    pointer-events: none; /* Prevent interaction */\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n    border-radius: 34px;\n}\n\n.slider.round:before {\n    border-radius: 50%;\n}\n\nfooter {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    text-align: center;\n    color: white;\n    font-size: 12px;\n    padding: 10px 0;\n}',""]);const s=a},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},601:n=>{n.exports=function(n){return n[1]}},659:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}}},e={};function t(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=i[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var i=t(72),r=t.n(i),o=t(825),a=t.n(o),s=t(659),c=t.n(s),p=t(56),h=t.n(p),d=t(540),l=t.n(d),u=t(113),v=t.n(u),w=t(365),f={};f.styleTagTransform=v(),f.setAttributes=h(),f.insert=c().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),r()(w.A,f),w.A&&w.A.locals&&w.A.locals;const x=t.p+"057a07c99a528e24758f.svg",m=t.p+"1026b23220ec81e4fa54.svg",g=t.p+"acacccf2475f1ff290be.svg",b=t.p+"bdfed6dbf1a8fd56c4f7.svg",y=t.p+"395c6d34650c4d65a0fd.svg",C=t.p+"1c5e177dffbbd30da893.svg",k=t.p+"01940a81603ec57dcbc1.svg",L=t.p+"c48a0696436044a4b788.svg",S=t.p+"c4c242c7968159002a8f.svg",T=t.p+"a5f68d252435738ba37c.svg",E=t.p+"e7212d331cadaef89f24.svg",A=t.p+"3405d5c3244903ca960b.svg",M=t.p+"acfa173dbc9e12b97306.svg",$=t.p+"b3dbc72580931e033127.svg",P=t.p+"c90fde9c9a1c5b9093d7.svg",R=t.p+"fe58b3378a5b75dd0271.svg",F=document.querySelector(".card"),N=document.querySelector(".search-bar"),j=document.querySelector(".fa-search"),q=document.querySelector(".result"),z=document.querySelector(".switch"),H=document.querySelector(".switch input");let I=null,O=null;function U(n){return(Math.round(5*(n-32)/9*10)/10).toString()}async function X(n){let e=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?key=D82Z94FJ9Q7CBMRB5RQH2M26U`;try{const n=await fetch(e,{mode:"cors"}),t=await n.json(),i=t.address;I=t.currentConditions.temp;const r=U(Number(I));O=t.currentConditions.feelslike;const o=t.currentConditions.humidity,a=t.currentConditions.windspeed,s=t.currentConditions.icon;q.innerHTML="";const c=document.createElement("h1");c.textContent=i.charAt(0).toUpperCase()+i.slice(1),c.style.maxWidth="20ch",c.style.overflow="hidden",c.style.textOverflow="ellipsis";const p=document.createElement("img");p.src=function(n){switch(n){case"snow":return P;case"rain":return S;case"fog":return C;case"wind":return R;case"cloudy":return y;case"partly-cloudy-day":return g;case"partly-cloudy-night":return b;case"clear-day":return x;case"clear-night":return m;case"snow-showers-day":return M;case"snow-showers-night":return $;case"thunder-rain":return A;case"thunder-showers-day":return T;case"thunder-showers-night":return E;case"showers-day":return k;case"showers-night":return L}}(s),p.style.width="130px",p.style.height="100px";const h=document.createElement("p");h.textContent=`${r}°`,h.style.fontSize="30px",h.style.marginBottom="20px",h.classList.add("displayTemp");const d=document.createElement("p");d.textContent=`Humidity: ${o}%`;const l=document.createElement("p");l.textContent=`Wind speed: ${a} m/s`;const u=document.createElement("p");u.textContent=`Feels Like: ${U(Number(O))}°`,u.classList.add("displayFeelsLike"),q.appendChild(c),q.appendChild(p),q.appendChild(h),q.appendChild(d),q.appendChild(l),q.appendChild(u),N.value="",z.classList.remove("hide"),F.classList.add("showResult"),q.classList.remove("hide")}catch(n){q.innerHTML="";const e=document.createElement("p");e.textContent="Location not found.",e.style.color="red",e.style.textAlign="center",q.appendChild(e),N.value="",z.classList.add("hide"),F.classList.add("showResult"),q.classList.remove("hide")}}j.addEventListener("click",(()=>{X(N.value)})),N.addEventListener("keypress",(n=>{"Enter"===n.key&&X(N.value)})),H.addEventListener("change",(()=>{const n=document.querySelector(".displayTemp"),e=document.querySelector(".displayFeelsLike");n&&e&&(H.checked?(n.textContent=`${I}°`,e.textContent=`Feels Like: ${O}°`):(n.textContent=`${U(Number(I))}°`,e.textContent=`Feels Like: ${U(Number(O))}°`))}))})();