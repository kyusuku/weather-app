(() => {
  "use strict";
  var n = {
      56: (n, t, e) => {
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute("nonce", t);
        };
      },
      72: (n) => {
        var t = [];
        function e(n) {
          for (var e = -1, i = 0; i < t.length; i++)
            if (t[i].identifier === n) {
              e = i;
              break;
            }
          return e;
        }
        function i(n, i) {
          for (var a = {}, r = [], p = 0; p < n.length; p++) {
            var s = n[p],
              l = i.base ? s[0] + i.base : s[0],
              c = a[l] || 0,
              d = "".concat(l, " ").concat(c);
            a[l] = c + 1;
            var h = e(d),
              x = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== h) t[h].references++, t[h].updater(x);
            else {
              var f = o(x, i);
              (i.byIndex = p),
                t.splice(p, 0, { identifier: d, updater: f, references: 1 });
            }
            r.push(d);
          }
          return r;
        }
        function o(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = i((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var r = 0; r < a.length; r++) {
              var p = e(a[r]);
              t[p].references--;
            }
            for (var s = i(n, o), l = 0; l < a.length; l++) {
              var c = e(a[l]);
              0 === t[c].references && (t[c].updater(), t.splice(c, 1));
            }
            a = s;
          };
        };
      },
      113: (n) => {
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
      314: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = "",
                  i = void 0 !== t[5];
                return (
                  t[4] && (e += "@supports (".concat(t[4], ") {")),
                  t[2] && (e += "@media ".concat(t[2], " {")),
                  i &&
                    (e += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (e += n(t)),
                  i && (e += "}"),
                  t[2] && (e += "}"),
                  t[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (t.i = function (n, e, i, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var r = {};
              if (i)
                for (var p = 0; p < this.length; p++) {
                  var s = this[p][0];
                  null != s && (r[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var c = [].concat(n[l]);
                (i && r[c[0]]) ||
                  (void 0 !== a &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = a)),
                  e &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = e))
                      : (c[2] = e)),
                  o &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = o))
                      : (c[4] = "".concat(o))),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      365: (n, t, e) => {
        e.d(t, { A: () => p });
        var i = e(601),
          o = e.n(i),
          a = e(314),
          r = e.n(a)()(o());
        r.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css?family=Raleway+Dots);",
        ]),
          r.push([
            n.id,
            "* {\n    font-family: \"Roboto\", sans-serif;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n\n    -webkit-font-smoothing: antialiased;\n    text-rendering: optimizeLegibility;\n    text-shadow: rgba(0,0,0,.01) 0 0 1px;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    min-height: 100vh;\n    background: linear-gradient(to bottom, #0b0b2b, #1b2735 70%, #090a0f);\n    overflow: hidden;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Page background animation */\n\n.stars {\n    width: 1px;\n    height: 1px;\n    position: absolute;\n    background: white;\n    box-shadow: 2vw 5vh 2px white, 10vw 8vh 2px white, 15vw 15vh 1px white,\n      22vw 22vh 1px white, 28vw 12vh 2px white, 32vw 32vh 1px white,\n      38vw 18vh 2px white, 42vw 35vh 1px white, 48vw 25vh 2px white,\n      53vw 42vh 1px white, 58vw 15vh 2px white, 63vw 38vh 1px white,\n      68vw 28vh 2px white, 73vw 45vh 1px white, 78vw 32vh 2px white,\n      83vw 48vh 1px white, 88vw 20vh 2px white, 93vw 52vh 1px white,\n      98vw 35vh 2px white, 5vw 60vh 1px white, 12vw 65vh 2px white,\n      18vw 72vh 1px white, 25vw 78vh 2px white, 30vw 85vh 1px white,\n      35vw 68vh 2px white, 40vw 82vh 1px white, 45vw 92vh 2px white,\n      50vw 75vh 1px white, 55vw 88vh 2px white, 60vw 95vh 1px white,\n      65vw 72vh 2px white, 70vw 85vh 1px white, 75vw 78vh 2px white,\n      80vw 92vh 1px white, 85vw 82vh 2px white, 90vw 88vh 1px white,\n      95vw 75vh 2px white;\n    animation: twinkle 8s infinite linear;\n}\n  \n.shooting-star {\n    position: absolute;\n    width: 100px;\n    height: 2px;\n    background: linear-gradient(90deg, white, transparent);\n    animation: shoot 3s infinite ease-in;\n}\n\n.shooting-star:nth-child(1) {\n    top: 20%;\n    left: -100px;\n    animation-delay: 0s;\n}\n\n.shooting-star:nth-child(2) {\n    top: 35%;\n    left: -100px;\n    animation-delay: 1s;\n}\n\n.shooting-star:nth-child(3) {\n    top: 50%;\n    left: -100px;\n    animation-delay: 2s;\n}\n\n@keyframes twinkle {\n    0%,\n    100% {\n        opacity: 0.8;\n    }\n    50% {\n        opacity: 0.4;\n    }\n}\n\n@keyframes shoot {\n    0% {\n        transform: translateX(0) translateY(0) rotate(25deg);\n        opacity: 1;\n    }\n    100% {\n        transform: translateX(120vw) translateY(50vh) rotate(25deg);\n        opacity: 0;\n    }\n}\n\n/* Additional twinkling stars with different animation timing */\n.stars::after {\n    content: \"\";\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    background: white;\n    box-shadow: 8vw 12vh 2px white, 16vw 18vh 1px white, 24vw 25vh 2px white,\n    33vw 15vh 1px white, 41vw 28vh 2px white, 49vw 35vh 1px white,\n    57vw 22vh 2px white, 65vw 42vh 1px white, 73vw 28vh 2px white,\n    81vw 48vh 1px white, 89vw 32vh 2px white, 97vw 45vh 1px white,\n    3vw 68vh 2px white, 11vw 75vh 1px white, 19vw 82vh 2px white,\n    27vw 88vh 1px white, 35vw 72vh 2px white, 43vw 85vh 1px white,\n    51vw 92vh 2px white, 59vw 78vh 1px white;\n    animation: twinkle 6s infinite linear reverse;\n}  \n\ninput, button {\n    border: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n    filter: brightness(90%);\n}\n\n.card {\n    background-color: rgba(255,255,255,0.5);\n    padding: 10px 15px;\n    border-radius: 50px;\n}\n\n.search-area {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n\n.search-bar {\n    padding: 5px 10px;\n    border-radius: 50px;\n}\n\n.fa-search {\n    border-radius: 50px;\n    padding: 7px 7px;\n}\n\n.result {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: repeat(5, 1fr);\n}\n\n/* Weather Icons */\n\n.wrapper div {\n    display: none;\n}\n\n.wrapper{\n    width: 150px;\n    height: 150px;\n    position: absolute;\n    top: calc(50% - 75px);\n    left: calc(50% - 75px);\n  }\n  \n  .sun{\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n    width: 85px;\n    height: 85px;\n    background: #f9db62;\n    border-radius: 360px;\n    opacity: 1;\n    animation: sun 10s 0s linear infinite;\n  }\n  \n  .cloud{\n    position: absolute;\n    bottom: 12px;\n    left: 8px;\n    z-index: 2;\n    opacity: 0;\n    animation: cloud 10s 0s linear infinite;\n  }\n  \n  .cloud .cloud1:not(.c_shadow) ul li{\n    animation: cloudi 10s 0.1s linear infinite;\n  }\n  \n  .cloud .cloud1:not(.c_shadow):before{\n    animation: cloudi 10s 0s linear infinite;\n  }\n  \n  .cloud_s{\n    position: absolute;\n    bottom: 70px;\n    left: 150px;\n    transform: scale(0.7,0.7) matrix(-1, 0, 0, 1, 0, 0);\n    z-index: 1;\n    opacity: 0;\n    animation: cloud_s 10s 0s linear infinite;\n  }\n  \n  .cloud_s .c_shadow{\n    transform: scale(1.02,1.02);\n  }\n  \n  .cloud_vs{\n    position: absolute;\n    bottom: 90px;\n    left: 30px;\n    transform: scale(0.5,0.5);\n    z-index: 0;\n    opacity: 0;\n    animation: cloud_vs 10s 0s linear infinite;\n  }\n  \n  .c_shadow{\n    z-index: 4 !important;\n    left: -5px;\n    bottom: -3px !important;\n  }\n  \n  .c_shadow:before{\n    background: #33495f !important;\n  }\n  \n  .c_shadow ul li{\n    width: 60px !important;\n    height: 60px !important;\n    background: #33495f !important;\n    float: left;\n    position: absolute;\n    bottom: -2px !important;\n    border-radius: 360px;\n  }\n  \n  .c_shadow ul li:nth-child(2){\n    width: 80px !important;\n    height: 80px !important;\n    background: #33495f !important;\n    float: left;\n    border-radius: 360px;\n    position: absolute;\n    bottom: 16px !important;\n    left: 25px !important;\n  }\n  \n  .c_shadow ul li:nth-child(3){\n    width: 70px !important;\n    height: 70px !important;\n    background: #33495f !important;\n    float: left;\n    border-radius: 360px;\n    position: absolute;\n    bottom: 6px !important;\n    left: 60px !important;\n  }\n  \n  .c_shadow ul li:last-child{\n    width: 60px !important;\n    height: 60px !important;\n    background: #33495f !important;\n    float: left;\n    border-radius: 360px;\n    position: absolute;\n    bottom: 0px;\n    left: 90px;\n  }\n  \n  \n  .cloud1{\n    position: absolute;\n    bottom: 0px;\n    z-index: 5;\n  }\n  \n  .cloud1:before{\n    content: '';\n    position: absolute;\n    bottom: 0px;\n    left: 28px;\n    width: 90px;\n    height: 20px;\n    background: #fff;\n  }\n  \n  .cloud1 ul{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  \n  .cloud1 ul li{\n    width: 50px;\n    height: 50px;\n    background: #fff;\n    float: left;\n    border-radius: 360px;\n  }\n  \n  .cloud1 ul li:nth-child(2){\n    width: 70px;\n    height: 70px;\n    background: #fff;\n    float: left;\n    border-radius: 360px;\n    position: absolute;\n    bottom: 18px;\n    left: 25px;\n  }\n  \n  .cloud1 ul li:nth-child(3){\n    width: 60px;\n    height: 60px;\n    background: #fff;\n    float: left;\n    border-radius: 360px;\n    position: absolute;\n    bottom: 8px;\n    left: 60px;\n  }\n  \n  .cloud1 ul li:last-child{\n    width: 50px;\n    height: 50px;\n    background: #fff;\n    float: left;\n    border-radius: 360px;\n    position: absolute;\n    bottom: 0px;\n    left: 90px;\n  }\n  \n  .haze{\n    background: #33495f;\n    position: absolute;\n    bottom: 50px;\n    left: 0px;\n    width: 200px;\n    height: 45px;\n    z-index: 6;\n    opacity: 0;\n    animation: haze 10s 0s linear infinite;\n  }\n  \n  .haze_stripe{\n    background: #a3b5c7;\n    position: absolute;\n    bottom: 75px;\n    left: 20px;\n    width: 115px;\n    height: 10px;\n    z-index: 17;\n    opacity: 0;\n    border-radius: 360px;\n    animation: haze_stripe 10s 0.1s linear infinite;\n  }\n  \n  .haze_stripe:nth-child(6){\n    bottom: 55px;\n    animation: haze_stripe 10s 0.2s linear infinite;\n  }\n  .haze_stripe:last-child{\n    bottom: 35px;\n    animation: haze_stripe 10s 0.4s linear infinite;\n  }\n  \n  .thunder{\n    position: absolute;\n    bottom: 100px;\n    left: 65px;\n    width: 12px;\n    height: 12px;\n    background: #f9db62;\n    transform: skew(-25deg);\n    opacity: 0;\n    animation: thunder 10s 0s linear infinite;\n  }\n  \n  .thunder:before{\n    content: '';\n    position: absolute;\n    top: 11px;\n    left: 0px;\n    width: 25px;\n    height: 8px;\n    background: #f9db62;\n  }\n  \n  .thunder:after{\n    content: '';\n    position: absolute;\n    width: 0; \n    height: 0;\n    top: 18px;\n    right: -14px;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    \n    border-top: 20px solid #f9db62;\n    transform: skew(5deg);\n  }\n  \n  .rain{\n    position: absolute;\n    bottom: 0px;\n    left: 25px;\n  }\n  \n  .rain ul{\n    list-style: none;\n    margin: 0;\n    padding: 0px;\n  }\n  \n  .rain ul li{\n    float: left;\n    position: absolute;\n    bottom: 50px;\n    left: 50px;\n    margin-left: 20px;\n    background: #6ab9e9;\n    height: 40px;\n    width: 10px;\n    border-radius: 360px;\n    transform: rotate(35deg);\n    opacity: 0;\n  }\n  \n  .rain ul li:first-child{\n    animation: raini 10s 0s linear infinite;\n  }\n  \n  .rain ul li:nth-child(2){\n    animation: rainii 10s 0.2s linear infinite;\n  }\n  \n  .rain ul li:last-child{\n    animation: rainiii 10s 0.4s linear infinite;\n  }\n  \n  .sleet{\n    position: absolute;\n    bottom: 0px;\n    left: 25px;\n  }\n  \n  .sleet ul{\n    list-style: none;\n    margin: 0;\n    padding: 0px;\n  }\n  \n  .sleet ul li{\n    float: left;\n    position: absolute;\n    bottom: 50px;\n    left: 50px;\n    margin-left: 20px;\n    background: #fff;\n    height: 40px;\n    width: 10px;\n    border-radius: 360px;\n    transform: rotate(35deg);\n    opacity: 0;\n  }\n  \n  .sleet ul li:first-child{\n    animation: raini 10s 1.0s linear infinite;\n  }\n  \n  .sleet ul li:nth-child(2){\n    animation: rainii 10s 1.4s linear infinite;\n  }\n  \n  .sleet ul li:last-child{\n    animation: rainiii 10s 1.6s linear infinite;\n  }\n  \n  .text{\n    position: absolute;\n    bottom: 0px;\n  }\n  \n  .text ul{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  \n  .text ul li{\n    position: absolute;\n    bottom: -50px;\n    width: 150px;\n    color: #fff;\n    font-family: 'Raleway Dots', cursive;\n    font-weight: 100;\n    font-size: 20px;\n    text-align: center;\n    opacity: 0;\n  }\n  \n  .text ul li:first-child{\n    animation: fade_in 10.0s 0s linear infinite;\n  }\n  \n  .text ul li:nth-child(2){\n    animation: fade_in 10.0s 1.6s linear infinite;\n  }\n  \n  .text ul li:nth-child(3){\n    animation: fade_in 10.0s 2.4s linear infinite;\n  }\n  \n  .text ul li:nth-child(4){\n    animation: fade_in 10.0s 3.4s linear infinite;\n  }\n  \n  .text ul li:nth-child(5){\n    animation: fade_in 10.0s 4.0s linear infinite;\n  }\n  \n  .text ul li:nth-child(6){\n    animation: fade_in 10.0s 5.4s linear infinite;\n  }\n  \n  .text ul li:nth-child(7){\n    animation: fade_in 10.0s 6.4s linear infinite;\n  }\n  \n  .text ul li:nth-child(8){\n    animation: fade_in 10.0s 7.2s linear infinite;\n  }\n  \n  .text ul li:nth-child(9){\n    animation: fade_in 10.0s 8.2s linear infinite;\n  }\n  \n  @keyframes sun{\n    0%{\n      opacity: 1;\n      bottom: 35px;\n      right: 35px;\n    }\n    4%{\n      bottom: 80px;\n      right: 80px;\n    }\n    4.5%{\n      bottom: 75px;\n      right: 75px;\n      opacity: 1;\n    }\n    40%{\n      opacity: 1;\n    }\n    41%{\n      bottom: 75px;\n      right: 75px;\n      opacity: 0;\n    }\n    100%{\n      opacity: 0;\n      bottom: 0px;\n      right: 0px;\n    }\n  }\n  \n  @keyframes cloud{\n    0%{\n      transform: scale(0.8);\n      left: 120px;\n      bottom: 35px;\n      opacity: 0;\n    }\n    2%{\n      opacity: 1;\n    }\n    3.5%{\n      bottom: 35px;\n      left: 10px;\n      opacity: 1;\n    }\n    16%{\n      transform: scale(0.8);\n    }\n    18%{\n      transform: scale(0.95);\n    }\n    19%{\n      transform: scale(0.9);\n    }\n    48%{\n      opacity: 1;\n      bottom: 35px;\n    }\n    50%{\n      bottom: 70px;\n    }\n    64%{\n      \n    }\n    96%{\n      opacity: 1;\n    }\n    100%{\n      opacity: 0;\n      bottom: 70px;\n      left: 10px;\n    }\n  }\n  \n  @keyframes cloud_s{\n    0%{\n      transform: scale(0.6);\n      opacity: 0;\n      bottom: 40px;\n      left: 18px;\n    }\n    23%{\n      opacity: 0;\n    }\n    24%{\n      opacity: 1;\n      bottom: 40px;\n      left: 30px;\n    }\n    28%{\n      opacity: 1;\n      bottom: 85px;\n      left: 60px;\n    }\n    32%{\n      transform: scale(0.6);\n    }\n    34%{\n      transform: scale(0.75);\n    }\n    35%{\n      transform: scale(0.7);\n    }\n    48%{\n      opacity: 1;\n    }\n    49%{\n      opacity: 0;\n    }\n    100%{\n      transform: scale(0.7);\n      opacity: 0;\n      bottom: 85px;\n      left: 60px;\n    }\n  }\n  \n  @keyframes cloud_vs{\n    0%{\n      opacity: 0;\n      bottom: 85px;\n      left: 60px;\n    }\n    39%{\n      opacity: 0;\n    }\n    40%{\n      opacity: 1; \n      bottom: 85px;\n      left: 60px;\n    }\n    42%{\n      bottom: 125px;\n      left: 10px;\n    }\n    43%{\n      bottom: 120px;\n      left: 15px;\n    }\n    48%{\n      opacity: 1;\n    }\n    49%{\n      opacity: 0;\n    }\n    100%{\n      opacity: 0;\n      bottom: 120px;\n      left: 15px;\n    }\n  }\n  \n  @keyframes haze{\n    0%{\n      opacity: 0;\n    }\n    48%{\n      height: 0px;\n      opacity: 0;\n    }\n    49%{\n      height: 45px;\n      opacity: 1;\n    }\n    57%{\n      opacity:1;\n      height: 45px;\n    }\n    58%{\n      opacity: 0;\n      height: 0px;\n    }\n  }\n  \n  @keyframes haze_stripe{\n    0%{\n      opacity: 0;\n    }\n    48%{\n      opacity: 0;\n    }\n    49%{\n      opacity: 1;\n    }\n    56%{\n      opacity:1;\n    }\n    57%{\n      opacity: 0;\n    }\n  }\n  \n  @keyframes cloudi{\n    0%{\n      background: #fff;\n    }\n    56%{\n      background: #fff;\n    }\n    57%{\n      background: #92a4b6;\n    }\n    100%{\n      background: #92a4b6;\n    }\n  }\n  \n  @keyframes thunder{\n    0%{\n      opacity: 0;\n      bottom: 100px;\n      left: 65px;\n    }\n    62%{\n      opacity: 0;\n      bottom: 100px;\n      left: 65px;\n    }\n    64%{\n      opacity: 1;\n      bottom: 50px;\n      left: 60px;\n    }\n    65%{\n      opacity: 1;\n      bottom: 55px;\n      left: 61px;\n    }\n    72%{\n      opacity: 1;\n      bottom: 55px;\n      left: 61px;\n    }\n    73%{\n      opacity: 0;\n    }\n    100%{\n      opacity: 0;\n      bottom: 55px;\n    }\n  }\n  \n  @keyframes raini{\n    0%{\n      opacity: 0;\n      bottom: 100px;\n      left: 60px;\n    }\n    72%{\n      opacity: 0;\n      bottom: 100px;\n      left: 60px;\n    }\n    73%{\n      opacity: 1;\n      bottom: 15px;\n      left: 50px;\n    }\n    74%{\n      opacity: 1;\n      bottom: 25px;\n      left: 52px;\n    }\n    80%{\n      opacity: 1;\n      bottom: 25px;\n      left: 52px;\n    }\n    81%{\n      opacity: 0;\n      bottom: -15px;\n      left: 6px;\n    }\n    100%{\n      opacity: 0;\n      bottom: 20px;\n    }\n  }\n  \n  @keyframes rainii{\n    0%{\n      opacity: 0;\n      bottom: 100px;\n      left: 30px;\n    }\n    72%{\n      opacity: 0;\n      bottom: 100px;\n      left: 30px;\n    }\n    73%{\n      opacity: 1;\n      bottom: 15px;\n      left: 20px;\n    }\n    74%{\n      opacity: 1;\n      bottom: 25px;\n      left: 22px;\n    }\n    80%{\n      opacity: 1;\n      bottom: 25px;\n      left: 22px;\n    }\n    81%{\n      opacity: 0;\n      bottom: -15px;\n      left: -6px;\n    }\n    100%{\n      opacity: 0;\n      bottom: 20px;\n    }\n  }\n  \n  @keyframes rainiii{\n    0%{\n      opacity: 0;\n      bottom: 100px;\n      left: 0px;\n    }\n    72%{\n      opacity: 0;\n      bottom: 100px;\n      left: 0px;\n    }\n    73%{\n      opacity: 1;\n      bottom: 15px;\n      left: -10px;\n    }\n    74%{\n      opacity: 1;\n      bottom: 25px;\n      left: -8px;\n    }\n    80%{\n      opacity: 1;\n      bottom: 25px;\n      left: -8px;\n    }\n    81%{\n      opacity: 0;\n      bottom: -15px;\n      left: -28px;\n    }\n    100%{\n      opacity: 0;\n      bottom: 20px;\n    }\n  }\n  \n  @keyframes fade_in{\n    0%{\n      opacity: 0;\n    }\n    8%{\n      opacity: 1;\n    }\n    9%{\n      opacity: 1;\n    }\n    11%{\n      opacity: 1;\n    }\n    12%{\n      opacity: 0;\n    }\n    100%{\n      oapcity: 0;\n    }\n  }    ",
            "",
          ]);
        const p = r;
      },
      540: (n) => {
        n.exports = function (n) {
          var t = document.createElement("style");
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      659: (n) => {
        var t = {};
        n.exports = function (n, e) {
          var i = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!i)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          i.appendChild(e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var i = "";
                e.supports && (i += "@supports (".concat(e.supports, ") {")),
                  e.media && (i += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (i += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {",
                  )),
                  (i += e.css),
                  o && (i += "}"),
                  e.media && (i += "}"),
                  e.supports && (i += "}");
                var a = e.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (i +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  t.styleTagTransform(i, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
    },
    t = {};
  function e(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var a = (t[i] = { id: i, exports: {} });
    return n[i](a, a.exports, e), a.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var i in t)
        e.o(t, i) &&
          !e.o(n, i) &&
          Object.defineProperty(n, i, { enumerable: !0, get: t[i] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0);
  var i = e(72),
    o = e.n(i),
    a = e(825),
    r = e.n(a),
    p = e(659),
    s = e.n(p),
    l = e(56),
    c = e.n(l),
    d = e(540),
    h = e.n(d),
    x = e(113),
    f = e.n(x),
    u = e(365),
    m = {};
  (m.styleTagTransform = f()),
    (m.setAttributes = c()),
    (m.insert = s().bind(null, "head")),
    (m.domAPI = r()),
    (m.insertStyleElement = h()),
    o()(u.A, m),
    u.A && u.A.locals && u.A.locals;
  const b = document.querySelector(".search-bar"),
    y = document.querySelector(".fa-search"),
    w = document.querySelector(".result"),
    v = document.querySelector(".sun"),
    g = document.querySelector(".cloud"),
    k = document.querySelector(".cloud_s"),
    _ = document.querySelector(".cloud_vs"),
    C = document.querySelector(".haze"),
    z = document.querySelector(".haze_stripe"),
    S = document.querySelector(".thunder"),
    E = document.querySelector(".rain"),
    q = document.querySelector(".sleet");
  function A(n) {
    return (Math.round(((5 * (n - 32)) / 9) * 10) / 10).toString();
  }
  function M() {
    (v.style.display = "none"),
      (g.style.display = "none"),
      (k.style.display = "none"),
      (_.style.display = "none"),
      (C.style.display = "none"),
      (z.style.display = "none"),
      (S.style.display = "none"),
      (E.style.display = "none"),
      (q.style.display = "none");
  }
  async function T(n) {
    let t = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?key=D82Z94FJ9Q7CBMRB5RQH2M26U`;
    try {
      const n = await fetch(t, { mode: "cors" }),
        e = await n.json(),
        i = e.address,
        o = e.currentConditions.temp,
        a = A(Number(o)),
        r = e.currentConditions.feelslike,
        p = e.currentConditions.humidity,
        s = e.currentConditions.windspeed,
        l = e.currentConditions.icon,
        c = document.createElement("h1");
      (c.textContent = i),
        (function (n) {
          switch (n) {
            case "snow":
            case "snow-showers-day":
            case "snow-showers-night":
              M(), (q.style.display = "block");
              break;
            case "rain":
            case "showers-day":
            case "showers-night":
              M(), (E.style.display = "block");
              break;
            case "fog":
              M(), (C.style.display = "block");
              break;
            case "wind":
              M(), (z.style.display = "block");
              break;
            case "cloudy":
              M(), (g.style.display = "block");
              break;
            case "partly-cloudy-day":
              M(), (k.style.display = "block");
              break;
            case "partly-cloudy-night":
              M(), (_.style.display = "block");
              break;
            case "clear-day":
            case "clear-night":
              M(), (v.style.display = "block");
              break;
            case "thunder-rain":
            case "thunder-showers-day":
            case "thunder-showers-night":
              M(), (S.style.display = "block");
          }
        })(l);
      const d = document.createElement("p");
      d.textContent = `${o}F / ${a}C`;
      const h = document.createElement("p");
      h.textContent = `Humidity: ${p}%`;
      const x = document.createElement("p");
      x.textContent = `Wind speed: ${s} m/s`;
      const f = document.createElement("p");
      (f.textContent = `Feels Like: ${r}F / ${A(Number(r))}C`),
        w.appendChild(c),
        w.appendChild(d),
        w.appendChild(h),
        w.appendChild(x),
        w.appendChild(f),
        (w.style.display = "block"),
        (b.value = ""),
        b.focus(),
        w.scrollIntoView({ behavior: "smooth" }),
        console.log("Weather data fetched successfully"),
        console.log("Location: " + i),
        console.log("Temp: " + o + "F / " + a + "C"),
        console.log("Feels Like: " + r + "F / " + A(Number(r)) + "C"),
        console.log("Humidity: " + p + "%"),
        console.log("Wind speed: " + s + " m/s"),
        console.log("Icon: " + l);
    } catch (n) {
      console.log("Please enter a valid location");
    }
  }
  y.addEventListener("click", () => {
    T(b.value);
  }),
    b.addEventListener("keypress", (n) => {
      "Enter" === n.key && T(b.value);
    });
})();
