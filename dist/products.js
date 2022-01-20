/*! For license information please see products.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/helper/general.helper.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "request": () => (/* binding */ request),\n/* harmony export */   "isMobile": () => (/* binding */ isMobile)\n/* harmony export */ });\nvar API_URL = \'http://localhost:3000/\';\nfunction request(route, method, body, headers) {\n  return fetch(API_URL + route, {\n    method: method,\n    body: JSON.stringify(body),\n    headers: headers\n  });\n}\nfunction isMobile() {\n  var isMobile = false;\n  var screenWidth = window.innerWidth;\n\n  if (screenWidth < 768) {\n    isMobile = true;\n  }\n\n  return isMobile;\n}\n\n//# sourceURL=webpack://code-exercise/./src/helper/general.helper.js?')},"./src/scripts/products.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/styles.scss */ "./src/styles/styles.scss");\n/* harmony import */ var _templates_products_hbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../templates/products.hbs */ "./src/templates/products.hbs");\n/* harmony import */ var _templates_products_hbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_templates_products_hbs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _templates_productList_hbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../templates/productList.hbs */ "./src/templates/productList.hbs");\n/* harmony import */ var _templates_productList_hbs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_templates_productList_hbs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer.js */ "./src/scripts/footer.js");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.js */ "./src/scripts/header.js");\n/* harmony import */ var _helper_general_helper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helper/general.helper.js */ "./src/helper/general.helper.js");\n\n\n\n\n\n\n\n\n\nvar allProducts = [];\nvar templateData = {\n  categories: [],\n  products: [],\n  selectedCategoryName: "All Products"\n};\nvar selectedCategory;\n\nfunction getProducts() {\n  return _getProducts.apply(this, arguments);\n}\n\nfunction _getProducts() {\n  _getProducts = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var response, products;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _helper_general_helper_js__WEBPACK_IMPORTED_MODULE_8__.request("products", "GET");\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            products = _context.sent;\n            return _context.abrupt("return", products);\n\n          case 10:\n            _context.prev = 10;\n            _context.t0 = _context["catch"](0);\n            console.log("Error: ", _context.t0);\n\n          case 13:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 10]]);\n  }));\n  return _getProducts.apply(this, arguments);\n}\n\nfunction getCategory() {\n  return _getCategory.apply(this, arguments);\n}\n\nfunction _getCategory() {\n  _getCategory = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n    var response, categories;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return _helper_general_helper_js__WEBPACK_IMPORTED_MODULE_8__.request("categories", "GET");\n\n          case 3:\n            response = _context2.sent;\n            _context2.next = 6;\n            return response.json();\n\n          case 6:\n            categories = _context2.sent;\n\n            if (categories && categories.length) {\n              categories = categories.filter(function (category) {\n                return category.enabled;\n              }).sort(function (a, b) {\n                return a.order - b.order;\n              });\n            }\n\n            return _context2.abrupt("return", categories);\n\n          case 11:\n            _context2.prev = 11;\n            _context2.t0 = _context2["catch"](0);\n            console.log("Error: ", _context2.t0);\n\n          case 14:\n          case "end":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 11]]);\n  }));\n  return _getCategory.apply(this, arguments);\n}\n\nfunction toggleCategoryDropdown() {\n  var categoryDropdownList = document.querySelector(".category-dropdown-list");\n  categoryDropdownList.classList.toggle("show");\n}\n\nfunction categorizedProducts(e) {\n  if (e && e.target && e.target.dataset && e.target.dataset.id) {\n    var id = e.target.dataset.id;\n\n    if (templateData.products) {\n      templateData.products = allProducts.filter(function (product) {\n        return product.category === id;\n      });\n    }\n\n    highlightSelectedCategory(e);\n    updateProductDOM();\n    document.querySelector(".category-dropdown-btn").innerHTML = templateData.selectedCategoryName;\n  }\n}\n\nfunction updateProductDOM() {\n  var updatedHTML = _templates_productList_hbs__WEBPACK_IMPORTED_MODULE_5___default()(templateData);\n  document.querySelector(".product-list-container").innerHTML = updatedHTML;\n  registerBuyEvent();\n}\n\nfunction highlightSelectedCategory(e) {\n  if (selectedCategory && selectedCategory.srcElement) {\n    selectedCategory.srcElement.classList.remove("active");\n  } else if (selectedCategory) {\n    selectedCategory.classList.remove("active");\n  }\n\n  if (e && e.srcElement) {\n    e.srcElement.classList.add("active");\n    selectedCategory = e;\n    templateData.selectedCategoryName = e.srcElement.innerHTML;\n  } else {\n    var categoryListBtns = document.querySelectorAll(".category-list-btn");\n    categoryListBtns.forEach(function (btn) {\n      if (btn.dataset.id === e.target.dataset.id) {\n        btn.classList.add("active");\n        selectedCategory = btn;\n        templateData.selectedCategoryName = btn.innerHTML;\n      }\n    });\n  }\n}\n\nfunction registerBuyEvent() {\n  var buyBtns = document.querySelectorAll(".buy-btn");\n  buyBtns.forEach(function (btn) {\n    btn.addEventListener("click", addToCart);\n  });\n}\n\nfunction addToCart(e) {\n  var newItemID = e.target.dataset.id;\n  var newItemDetails = allProducts.find(function (product) {\n    return product.id === newItemID;\n  });\n  var cartItems = JSON.parse(localStorage.getItem("cartItems"));\n\n  if (cartItems && cartItems.length) {\n    var existingItem = cartItems.find(function (item) {\n      return item.id === newItemID;\n    });\n\n    if (existingItem) {\n      existingItem.quantity += 1;\n      existingItem.totalPrice = existingItem.quantity * existingItem.price;\n      localStorage.setItem("cartItems", JSON.stringify(cartItems));\n    } else {\n      newItemDetails.quantity = 1;\n      newItemDetails.totalPrice = newItemDetails.quantity * newItemDetails.price;\n      cartItems.push(newItemDetails);\n      localStorage.setItem("cartItems", JSON.stringify(cartItems));\n    }\n  } else {\n    var newCart = [];\n    newItemDetails.quantity = 1;\n    newItemDetails.totalPrice = newItemDetails.quantity * newItemDetails.price;\n    newCart.push(newItemDetails);\n    localStorage.setItem("cartItems", JSON.stringify(newCart));\n  }\n\n  _header_js__WEBPACK_IMPORTED_MODULE_7__.setCartItemsLength();\n}\n\nfunction init() {\n  return _init.apply(this, arguments);\n}\n\nfunction _init() {\n  _init = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {\n    var container, categoryListBtns, categoryDropdown, categoryDropdownListBtns, urlParams, obj;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return getProducts();\n\n          case 2:\n            allProducts = _context3.sent;\n            templateData.products = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allProducts);\n            _context3.next = 6;\n            return getCategory();\n\n          case 6:\n            templateData.categories = _context3.sent;\n            container = document.getElementById("products");\n\n            if (container) {\n              container.innerHTML = _templates_products_hbs__WEBPACK_IMPORTED_MODULE_4___default()(templateData);\n              categoryListBtns = document.querySelectorAll(".category-list-btn");\n              categoryListBtns.forEach(function (btn) {\n                btn.addEventListener("click", categorizedProducts);\n              });\n              categoryDropdown = document.querySelector(".category-dropdown-btn");\n              categoryDropdown.addEventListener("click", toggleCategoryDropdown);\n              categoryDropdownListBtns = document.querySelectorAll(".category-dropdown-list-btn");\n              categoryDropdownListBtns.forEach(function (btn) {\n                btn.addEventListener("click", function (e) {\n                  categorizedProducts(e);\n                  toggleCategoryDropdown();\n                });\n              });\n              registerBuyEvent();\n            }\n\n            urlParams = new URLSearchParams(location.search);\n\n            if (urlParams.has("productID")) {\n              obj = {\n                target: {\n                  dataset: {\n                    id: urlParams.get("productID")\n                  }\n                }\n              };\n              categorizedProducts(obj);\n            }\n\n          case 11:\n          case "end":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _init.apply(this, arguments);\n}\n\ndocument.addEventListener("DOMContentLoaded", function () {\n  _header_js__WEBPACK_IMPORTED_MODULE_7__.init("Products");\n  _footer_js__WEBPACK_IMPORTED_MODULE_6__.init();\n  init();\n});\n\n//# sourceURL=webpack://code-exercise/./src/scripts/products.js?')},"./src/templates/productList.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{eval('var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {\n    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "  <div class=\\"product\\">\\r\\n    <div class=\\"product-title\\">"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "</div>\\r\\n    <div class=\\"product-image\\">\\r\\n      <img\\r\\n        class=\\"img-responsive\\"\\r\\n        src=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imageURL") : depth0), depth0))\n    + "\\"\\r\\n        alt=\\"Image of "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "\\"\\r\\n      />\\r\\n    </div>\\r\\n    <div class=\\"product-description\\">\\r\\n      "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"description") : depth0), depth0))\n    + "\\r\\n    </div>\\r\\n    <div class=\\"product-cart\\">\\r\\n      <div class=\\"price\\">MRP Rs."\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"price") : depth0), depth0))\n    + "</div>\\r\\n      <button\\r\\n        class=\\"btn buy-btn\\"\\r\\n        type=\\"button\\"\\r\\n        data-id=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))\n    + "\\"\\r\\n        aria-label=\\"Click the Buy Now button to buy product\\"\\r\\n      >\\r\\n        Buy Now\\r\\n        <span class=\\"buy-btn-price\\">@ Rs."\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"price") : depth0), depth0))\n    + "</span>\\r\\n      </button>\\r\\n    </div>\\r\\n    <div class=\\"separator\\"></div>\\r\\n  </div>\\r\\n";\n},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {\n    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"products") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":28,"column":9}}})) != null ? stack1 : "");\n},"useData":true});\n\n//# sourceURL=webpack://code-exercise/./src/templates/productList.hbs?')},"./src/templates/products.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{eval('var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {\n    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "          <button\\r\\n            class=\\"category-list-btn\\"\\r\\n            data-id=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))\n    + "\\"\\r\\n          >"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "</button>\\r\\n";\n},"3":function(container,depth0,helpers,partials,data) {\n    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "            <button\\r\\n              class=\\"category-dropdown-list-btn\\"\\r\\n              data-id=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))\n    + "\\"\\r\\n            >"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "</button>\\r\\n";\n},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {\n    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "<section class=\\"container products-container\\">\\r\\n  <div class=\\"row\\">\\r\\n    <div class=\\"category-container\\">\\r\\n      <div class=\\"category-list\\">\\r\\n"\n    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":10,"column":17}}})) != null ? stack1 : "")\n    + "      </div>\\r\\n      <div class=\\"category-dropdown\\">\\r\\n        <button class=\\"category-dropdown-btn\\">\\r\\n          "\n    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"selectedCategoryName") : depth0), depth0))\n    + "\\r\\n        </button>\\r\\n        <div class=\\"category-dropdown-list\\">\\r\\n"\n    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"categories") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":17,"column":10},"end":{"line":22,"column":19}}})) != null ? stack1 : "")\n    + "        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\"product-list-container\\">\\r\\n"\n    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./productList.hbs */ "./src/templates/productList.hbs"),depth0,{"name":"productList","data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")\n    + "    </div>\\r\\n  </div>\\r\\n</section>";\n},"usePartial":true,"useData":true});\n\n//# sourceURL=webpack://code-exercise/./src/templates/products.hbs?')},"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://code-exercise/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?')},"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);\n}\n\n//# sourceURL=webpack://code-exercise/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?')},"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://code-exercise/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?')},"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");\n}\n\n//# sourceURL=webpack://code-exercise/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?')},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();\n}\n\n//# sourceURL=webpack://code-exercise/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?')},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === "Object" && o.constructor) n = o.constructor.name;\n  if (n === "Map" || n === "Set") return Array.from(o);\n  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);\n}\n\n//# sourceURL=webpack://code-exercise/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?')}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var n=__webpack_module_cache__[e]={id:e,exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,r,n,t)=>{if(!r){var _=1/0;for(i=0;i<deferred.length;i++){for(var[r,n,t]=deferred[i],a=!0,o=0;o<r.length;o++)(!1&t||_>=t)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](r[o])))?r.splice(o--,1):(a=!1,t<_&&(_=t));if(a){deferred.splice(i--,1);var s=n();void 0!==s&&(e=s)}}return e}t=t||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>t;i--)deferred[i]=deferred[i-1];deferred[i]=[r,n,t]},__webpack_require__.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(r,{a:r}),r},__webpack_require__.d=(e,r)=>{for(var n in r)__webpack_require__.o(r,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={products:0};__webpack_require__.O.j=r=>0===e[r];var r=(r,n)=>{var t,_,[a,o,s]=n,i=0;if(a.some((r=>0!==e[r]))){for(t in o)__webpack_require__.o(o,t)&&(__webpack_require__.m[t]=o[t]);if(s)var c=s(__webpack_require__)}for(r&&r(n);i<a.length;i++)_=a[i],__webpack_require__.o(e,_)&&e[_]&&e[_][0](),e[a[i]]=0;return __webpack_require__.O(c)},n=self.webpackChunkcode_exercise=self.webpackChunkcode_exercise||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var __webpack_exports__=__webpack_require__.O(void 0,["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_noSo-54d0eb","vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_babel_runtime_helpers_es-58772e","src_scripts_footer_js-src_scripts_header_js-src_styles_styles_scss"],(()=>__webpack_require__("./src/scripts/products.js")));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();