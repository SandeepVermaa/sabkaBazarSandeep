/*! For license information please see index.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/helper/general.helper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "request": () => (/* binding */ request),\n/* harmony export */   "isMobile": () => (/* binding */ isMobile)\n/* harmony export */ });\nvar API_URL = \'http://localhost:3000/\';\nfunction request(route, method, body) {\n  return fetch(API_URL + route, {\n    method: method,\n    body: body\n  });\n}\nfunction isMobile() {\n  var isMobile = false;\n  var screenWidth = window.innerWidth;\n\n  if (screenWidth < 768) {\n    isMobile = true;\n  }\n\n  return isMobile;\n}\n\n//# sourceURL=webpack://code-exercise/./src/helper/general.helper.js?')},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");\n/* harmony import */ var _templates_home_hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/home.hbs */ "./src/templates/home.hbs");\n/* harmony import */ var _templates_home_hbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_home_hbs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/footer.js */ "./src/scripts/footer.js");\n/* harmony import */ var _scripts_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/header.js */ "./src/scripts/header.js");\n/* harmony import */ var _helper_general_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helper/general.helper */ "./src/helper/general.helper.js");\n\n\n\n\n\n\n\nvar slideIndex = 1;\nvar templateData = {\n  banners: [],\n  categories: []\n};\n\nfunction changeSlides(n) {\n  showSlides(slideIndex += n);\n}\n\nfunction currentSlide(n) {\n  showSlides(slideIndex = n);\n}\n\nfunction showSlides(n) {\n  var i;\n  var slides = document.getElementsByClassName("banner-slides");\n  var dots = document.getElementsByClassName("dot");\n\n  if (n > slides.length) {\n    slideIndex = 1;\n  }\n\n  if (n < 1) {\n    slideIndex = slides.length;\n  }\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = "none";\n  }\n\n  for (i = 0; i < dots.length; i++) {\n    dots[i].className = dots[i].className.replace(" active", "");\n  }\n\n  slides[slideIndex - 1].style.display = "block";\n  dots[slideIndex - 1].className += " active";\n}\n\nfunction navigateToProducts(e) {\n  if (e && e.target && e.target.dataset && e.target.dataset.id) {\n    var id = e.target.dataset.id;\n    location.assign("".concat(location.href, "products.html?productID=").concat(e.target.dataset.id));\n  }\n}\n\nfunction getBanners() {\n  return _getBanners.apply(this, arguments);\n}\n\nfunction _getBanners() {\n  _getBanners = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n    var response, banners;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _helper_general_helper__WEBPACK_IMPORTED_MODULE_6__.request("banners", "GET");\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            banners = _context.sent;\n\n            if (banners && banners.length) {\n              banners = banners.filter(function (banner) {\n                return banner.isActive;\n              }).sort(function (a, b) {\n                return a.order - b.order;\n              });\n            }\n\n            return _context.abrupt("return", banners);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context["catch"](0);\n            console.log("Error: ", _context.t0);\n\n          case 14:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n  return _getBanners.apply(this, arguments);\n}\n\nfunction getCategory() {\n  return _getCategory.apply(this, arguments);\n}\n\nfunction _getCategory() {\n  _getCategory = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {\n    var response, categories;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _helper_general_helper__WEBPACK_IMPORTED_MODULE_6__.request("categories", "GET");\n\n          case 3:\n            response = _context2.sent;\n            _context2.next = 6;\n            return response.json();\n\n          case 6:\n            categories = _context2.sent;\n\n            if (categories && categories.length) {\n              categories = categories.map(function (category) {\n                var isOdd = category.order % 2 !== 0;\n\n                if (isOdd) {\n                  category.reverse = "category-reverse";\n                }\n\n                return category;\n              }).filter(function (category) {\n                return category.enabled;\n              }).sort(function (a, b) {\n                return a.order - b.order;\n              });\n            }\n\n            return _context2.abrupt("return", categories);\n\n          case 11:\n            _context2.prev = 11;\n            _context2.t0 = _context2["catch"](0);\n            console.log("Error: ", _context2.t0);\n\n          case 14:\n          case "end":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 11]]);\n  }));\n  return _getCategory.apply(this, arguments);\n}\n\nfunction init() {\n  return _init.apply(this, arguments);\n}\n\nfunction _init() {\n  _init = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n    var container, prevBtn, nextBtn, slideDots, categoryBtns;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return getBanners();\n\n          case 2:\n            templateData.banners = _context3.sent;\n            _context3.next = 5;\n            return getCategory();\n\n          case 5:\n            templateData.categories = _context3.sent;\n            container = document.getElementById("home");\n\n            if (container) {\n              container.innerHTML = _templates_home_hbs__WEBPACK_IMPORTED_MODULE_3___default()(templateData);\n              showSlides(slideIndex);\n              prevBtn = document.querySelector(".prev");\n              prevBtn.addEventListener("click", changeSlides.bind(null, -1));\n              nextBtn = document.querySelector(".next");\n              nextBtn.addEventListener("click", changeSlides.bind(null, 1));\n              slideDots = document.querySelectorAll(".dot");\n              slideDots.forEach(function (dot, index) {\n                dot.addEventListener("click", currentSlide.bind(null, index + 1));\n              });\n              categoryBtns = document.querySelectorAll(".category-btn");\n              categoryBtns.forEach(function (btn) {\n                btn.addEventListener("click", navigateToProducts);\n              });\n            }\n\n          case 8:\n          case "end":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _init.apply(this, arguments);\n}\n\ndocument.addEventListener("DOMContentLoaded", function () {\n  _scripts_header_js__WEBPACK_IMPORTED_MODULE_5__.init(\'Home\');\n  _scripts_footer_js__WEBPACK_IMPORTED_MODULE_4__.init();\n  init();\n});\n\n//# sourceURL=webpack://code-exercise/./src/index.js?')},"./src/templates/home.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{eval('var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {\n    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "      <div class=\\"banner-slides fade\\">\\r\\n        <img src=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"bannerImageUrl") : depth0), depth0))\n    + "\\" alt=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"bannerImageAlt") : depth0), depth0))\n    + "\\" />\\r\\n      </div>\\r\\n";\n},"3":function(container,depth0,helpers,partials,data) {\n    return "        <span class=\\"dot\\"></span>\\r\\n";\n},"5":function(container,depth0,helpers,partials,data) {\n    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "      <div id=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"key") : depth0), depth0))\n    + "\\" class=\\"row category "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"reverse") : depth0), depth0))\n    + "\\">\\r\\n        <div class=\\"col-30 category-img\\">\\r\\n          <img\\r\\n            class=\\"responsive-img\\"\\r\\n            src=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imageUrl") : depth0), depth0))\n    + "\\" alt=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "\\"\\r\\n          />\\r\\n        </div>\\r\\n        <div class=\\"col-70 category-details\\">\\r\\n          <h2>"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "</h2>\\r\\n          <p>"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"description") : depth0), depth0))\n    + "</p>\\r\\n          <button\\r\\n            data-id=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))\n    + "\\"\\r\\n            class=\\"btn category-btn\\"\\r\\n            type=\\"button\\"\\r\\n            aria-label=\\"Click here to explore "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"key") : depth0), depth0))\n    + "\\"\\r\\n          >Explore "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"key") : depth0), depth0))\n    + "</button>\\r\\n        </div>\\r\\n      </div>\\r\\n";\n},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {\n    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "<section class=\\"home-container container\\">\\r\\n  <div class=\\"slideshow-container\\">\\r\\n"\n    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"banners") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":7,"column":13}}})) != null ? stack1 : "")\n    + "    <a class=\\"prev\\">PREV</a>\\r\\n    <a class=\\"next\\">NEXT</a>\\r\\n\\r\\n    <div class=\\"slide-dots\\">\\r\\n"\n    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"banners") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":6},"end":{"line":14,"column":15}}})) != null ? stack1 : "")\n    + "    </div>\\r\\n  </div>\\r\\n\\r\\n  <div class=\\"category-container\\">\\r\\n"\n    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":19,"column":4},"end":{"line":38,"column":13}}})) != null ? stack1 : "")\n    + "  </div>\\r\\n</section>";\n},"useData":true});\n\n//# sourceURL=webpack://code-exercise/./src/templates/home.hbs?')}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var r=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,n,r,t)=>{if(!n){var _=1/0;for(l=0;l<deferred.length;l++){for(var[n,r,t]=deferred[l],a=!0,o=0;o<n.length;o++)(!1&t||_>=t)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](n[o])))?n.splice(o--,1):(a=!1,t<_&&(_=t));if(a){deferred.splice(l--,1);var s=r();void 0!==s&&(e=s)}}return e}t=t||0;for(var l=deferred.length;l>0&&deferred[l-1][2]>t;l--)deferred[l]=deferred[l-1];deferred[l]=[n,r,t]},__webpack_require__.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(e,n)=>{for(var r in n)__webpack_require__.o(n,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={index:0};__webpack_require__.O.j=n=>0===e[n];var n=(n,r)=>{var t,_,[a,o,s]=r,l=0;if(a.some((n=>0!==e[n]))){for(t in o)__webpack_require__.o(o,t)&&(__webpack_require__.m[t]=o[t]);if(s)var i=s(__webpack_require__)}for(n&&n(r);l<a.length;l++)_=a[l],__webpack_require__.o(e,_)&&e[_]&&e[_][0](),e[a[l]]=0;return __webpack_require__.O(i)},r=self.webpackChunkcode_exercise=self.webpackChunkcode_exercise||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var __webpack_exports__=__webpack_require__.O(void 0,["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_noSo-54d0eb","vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_babel_runtime_helpers_es-58772e","src_scripts_footer_js-src_scripts_header_js-src_styles_styles_scss"],(()=>__webpack_require__("./src/index.js")));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();