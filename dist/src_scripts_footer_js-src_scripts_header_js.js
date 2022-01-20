/*! For license information please see src_scripts_footer_js-src_scripts_header_js.js.LICENSE.txt */
(self.webpackChunkcode_exercise=self.webpackChunkcode_exercise||[]).push([["src_scripts_footer_js-src_scripts_header_js"],{"./src/scripts/footer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "init": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _templates_footer_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../templates/footer.hbs */ "./src/templates/footer.hbs");\n/* harmony import */ var _templates_footer_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_footer_hbs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction init() {\n  var container = document.getElementById("footer");\n  container.innerHTML = _templates_footer_hbs__WEBPACK_IMPORTED_MODULE_0__({\n    title: "FOOTER"\n  });\n}\n\n//# sourceURL=webpack://code-exercise/./src/scripts/footer.js?')},"./src/scripts/header.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "setCartItemsLength": () => (/* binding */ setCartItemsLength),\n/* harmony export */   "init": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _templates_header_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../templates/header.hbs */ "./src/templates/header.hbs");\n/* harmony import */ var _templates_header_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_header_hbs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _templates_cart_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../templates/cart.hbs */ "./src/templates/cart.hbs");\n/* harmony import */ var _templates_cart_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_cart_hbs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar navList = [{\n  name: "Home",\n  link: "/"\n}, {\n  name: "Products",\n  link: "/products.html"\n}];\nvar navAuth = [{\n  name: "SignIn",\n  link: "/signin.html"\n}, {\n  name: "Register",\n  link: "/register.html"\n}];\nvar cartItems = [];\nvar cartItemsLength = 0;\nvar cartItemsLengthEle;\n\nfunction openCart() {\n  var cart = document.querySelector(".cart-overlay");\n  cart.classList.toggle("show");\n  cartInit();\n}\n\nfunction closeCart() {\n  var cart = document.querySelector(".cart-overlay");\n  cart.classList.remove("show");\n}\n\nfunction getCartItems() {\n  cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];\n  cartItemsLength = cartItems && cartItems.length ? cartItems.length : 0;\n}\n\nfunction changeQuantity(e) {\n  var id = e.target.dataset.id;\n  var action = e.target.dataset.action;\n  var item = cartItems.find(function (item) {\n    return item.id === id;\n  });\n\n  if (action === "plus") {\n    item.quantity += 1;\n    item.totalPrice = item.quantity * item.price;\n  } else {\n    item.quantity -= 1;\n    item.totalPrice = item.quantity * item.price;\n\n    if (item.quantity <= 0) {\n      cartItems = cartItems.filter(function (item) {\n        return item.quantity > 0;\n      });\n    }\n  }\n\n  localStorage.setItem(\'cartItems\', JSON.stringify(cartItems));\n  setCartItemsLength();\n  cartInit();\n}\n\nfunction cartInit() {\n  var totalItemsCost = 0;\n  cartItems.forEach(function (item) {\n    item.totalPrice = item.price * item.quantity;\n    totalItemsCost += item.totalPrice;\n  });\n  var templateData = {\n    cartNotEmpty: cartItemsLength > 0 ? "hidden" : "",\n    cartEmpty: cartItemsLength <= 0 ? "hidden" : "",\n    itemCount: cartItemsLength,\n    cartItems: cartItems,\n    totalItemsCost: totalItemsCost\n  };\n  var cart = _templates_cart_hbs__WEBPACK_IMPORTED_MODULE_1___default()(templateData);\n  document.querySelector(".cart-overlay").innerHTML = cart;\n  document.querySelector(".cart-close--icon").addEventListener("click", closeCart);\n  var quantityBtns = document.querySelectorAll(".btn-quantity");\n  quantityBtns.forEach(function (btn) {\n    btn.addEventListener("click", changeQuantity);\n  });\n}\n\nfunction setCartItemsLength() {\n  getCartItems();\n\n  if (cartItemsLengthEle) {\n    cartItemsLengthEle.innerHTML = cartItemsLength;\n  }\n}\nfunction init(currentPage) {\n  navList.forEach(function (item) {\n    if (item.name === currentPage) {\n      item.status = "active";\n    } else {\n      item.status = "";\n    }\n  });\n  navAuth.forEach(function (item) {\n    if (item.name === currentPage) {\n      item.status = "active";\n    } else {\n      item.status = "";\n    }\n  });\n  var container = document.getElementById("header");\n\n  if (container) {\n    container.innerHTML = _templates_header_hbs__WEBPACK_IMPORTED_MODULE_0__({\n      navList: navList,\n      navAuth: navAuth\n    });\n    document.querySelector(".cart-btn button").addEventListener("click", openCart);\n    cartItemsLengthEle = document.querySelector("#cartItemsLength");\n    setCartItemsLength();\n  }\n}\n\n//# sourceURL=webpack://code-exercise/./src/scripts/header.js?')},"./src/templates/cart.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{eval('var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {\n    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "          <div class=\\"cart-item\\">\\r\\n            <div class=\\"cart-item-img\\">\\r\\n              <img\\r\\n                class=\\"img-responsive\\"\\r\\n                src=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"imageURL") : depth0), depth0))\n    + "\\"\\r\\n                alt=\\"Product image of "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "\\"\\r\\n              />\\r\\n            </div>\\r\\n            <div class=\\"cart-item-details\\">\\r\\n              <div class=\\"cart-item-name\\">"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "</div>\\r\\n              <div class=\\"cart-item-pricing\\">\\r\\n                <div class=\\"quantity-price\\">\\r\\n                  <button\\r\\n                    type=\\"button\\"\\r\\n                    class=\\"btn btn-quantity\\"\\r\\n                    data-action=\\"plus\\"\\r\\n                    data-id=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))\n    + "\\"\\r\\n                    aria-label=\\"Decrement item quantity of "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "\\"\\r\\n                  >\\r\\n                    <span\\r\\n                      class=\\"icon\\"\\r\\n                      data-action=\\"minus\\"\\r\\n                      data-id=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))\n    + "\\"\\r\\n                    >-</span>\\r\\n                  </button>\\r\\n                  <div class=\\"quantity-nos\\">\\r\\n                    "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"quantity") : depth0), depth0))\n    + "\\r\\n                  </div>\\r\\n                  <button\\r\\n                    type=\\"button\\"\\r\\n                    class=\\"btn btn-quantity\\"\\r\\n                    data-action=\\"plus\\"\\r\\n                    data-id=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))\n    + "\\"\\r\\n                    aria-label=\\"Increment item quantity of "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "\\"\\r\\n                  >\\r\\n                    <span\\r\\n                      class=\\"icon\\"\\r\\n                      data-action=\\"plus\\"\\r\\n                      data-id=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))\n    + "\\"\\r\\n                    >+</span>\\r\\n                  </button>\\r\\n                  <div class=\\"price-nos\\">\\r\\n                    <span class=\\"icon\\">X</span>\\r\\n                    Rs."\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"price") : depth0), depth0))\n    + "\\r\\n                  </div>\\r\\n                </div>\\r\\n                <div class=\\"total-item-price\\">Rs."\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"totalPrice") : depth0), depth0))\n    + "</div>\\r\\n              </div>\\r\\n            </div>\\r\\n          </div>\\r\\n";\n},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {\n    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "<div class=\\"cart-container container\\">\\r\\n  <div class=\\"cart\\">\\r\\n    <div class=\\"cart-header\\">\\r\\n      <div class=\\"cart-title\\">\\r\\n        <span class=\\"cart-title--name\\">My Cart</span>\\r\\n        <span class=\\"cart-title--count\\" "\n    + alias4(((helper = (helper = lookupProperty(helpers,"cartEmpty") || (depth0 != null ? lookupProperty(depth0,"cartEmpty") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartEmpty","hash":{},"data":data,"loc":{"start":{"line":6,"column":40},"end":{"line":6,"column":53}}}) : helper)))\n    + ">("\n    + alias4(((helper = (helper = lookupProperty(helpers,"itemCount") || (depth0 != null ? lookupProperty(depth0,"itemCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"itemCount","hash":{},"data":data,"loc":{"start":{"line":6,"column":55},"end":{"line":6,"column":68}}}) : helper)))\n    + "\\r\\n          item)</span>\\r\\n      </div>\\r\\n      <button\\r\\n        id=\\"cartClose\\"\\r\\n        type=\\"button\\"\\r\\n        class=\\"cart-close\\"\\r\\n        aria-label=\\"Close cart popup\\"\\r\\n      >\\r\\n        <span class=\\"cart-close--icon\\">&times;</span>\\r\\n      </button>\\r\\n    </div>\\r\\n    <div class=\\"cart-body\\">\\r\\n      <div class=\\"cart-empty\\" "\n    + alias4(((helper = (helper = lookupProperty(helpers,"cartNotEmpty") || (depth0 != null ? lookupProperty(depth0,"cartNotEmpty") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartNotEmpty","hash":{},"data":data,"loc":{"start":{"line":19,"column":30},"end":{"line":19,"column":46}}}) : helper)))\n    + ">\\r\\n        <div class=\\"cart-empty-info\\">\\r\\n          <div class=\\"cart-empty--text1\\">No items in your cart</div>\\r\\n          <div class=\\"cart-empty--text2\\">Your favourite items are just a click\\r\\n          </div>\\r\\n          away</div>\\r\\n      </div>\\r\\n      <div class=\\"cart-filled\\" "\n    + alias4(((helper = (helper = lookupProperty(helpers,"cartEmpty") || (depth0 != null ? lookupProperty(depth0,"cartEmpty") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartEmpty","hash":{},"data":data,"loc":{"start":{"line":26,"column":31},"end":{"line":26,"column":44}}}) : helper)))\n    + ">\\r\\n"\n    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"cartItems") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":8},"end":{"line":78,"column":17}}})) != null ? stack1 : "")\n    + "        <div class=\\"cart-ad\\">\\r\\n          <div class=\\"ad-content\\">\\r\\n            <div class=\\"ad-img\\">\\r\\n              <img\\r\\n                class=\\"img-responsive\\"\\r\\n                src=\\"/static/images/lowest-price.png\\"\\r\\n                alt=\\"Lowest price guaranteed image\\"\\r\\n              />\\r\\n            </div>\\r\\n            <div class=\\"ad-info\\">You won\'t find it cheaper anywhere</div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n    <div class=\\"cart-footer\\">\\r\\n      <div class=\\"cart-footer-empty\\" "\n    + alias4(((helper = (helper = lookupProperty(helpers,"cartNotEmpty") || (depth0 != null ? lookupProperty(depth0,"cartNotEmpty") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartNotEmpty","hash":{},"data":data,"loc":{"start":{"line":94,"column":37},"end":{"line":94,"column":53}}}) : helper)))\n    + ">\\r\\n        <button\\r\\n          type=\\"button\\"\\r\\n          class=\\"btn btn-footer-empty\\"\\r\\n          aria-label=\\"Start Shopping\\"\\r\\n        >\\r\\n          <a href=\\"/products.html\\">Start Shopping</a>\\r\\n        </button>\\r\\n      </div>\\r\\n      <div class=\\"cart-footer-item\\" "\n    + alias4(((helper = (helper = lookupProperty(helpers,"cartEmpty") || (depth0 != null ? lookupProperty(depth0,"cartEmpty") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cartEmpty","hash":{},"data":data,"loc":{"start":{"line":103,"column":36},"end":{"line":103,"column":49}}}) : helper)))\n    + ">\\r\\n        <p class=\\"promo-info\\">Promo code can be applied on payment page</p>\\r\\n        <button\\r\\n          type=\\"button\\"\\r\\n          class=\\"btn btn-footer-item\\"\\r\\n          aria-label=\\"Proceed to Checkout\\"\\r\\n        >\\r\\n          <span>Proceed to Checkout</span>\\r\\n          <span>Rs."\n    + alias4(((helper = (helper = lookupProperty(helpers,"totalItemsCost") || (depth0 != null ? lookupProperty(depth0,"totalItemsCost") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"totalItemsCost","hash":{},"data":data,"loc":{"start":{"line":111,"column":19},"end":{"line":111,"column":37}}}) : helper)))\n    + " ></span>\\r\\n        </button>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</div>";\n},"useData":true});\n\n//# sourceURL=webpack://code-exercise/./src/templates/cart.hbs?')},"./src/templates/footer.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{eval('var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {\n    return "<section class=\\"footer-container\\">\\r\\n  <div class=\\"footer-info container\\">\\r\\n    Copyright &copy; 2011 - 2018 Sabka Bazaar Grocery Supplies Pvt Ltd\\r\\n  </div>\\r\\n</footer>";\n},"useData":true});\n\n//# sourceURL=webpack://code-exercise/./src/templates/footer.hbs?')},"./src/templates/header.hbs":(module,__unused_webpack_exports,__webpack_require__)=>{eval('var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {\n    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "                <li class=\\"nav-item\\">\\r\\n                  <a\\r\\n                    class=\\"nav-link "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"status") : depth0), depth0))\n    + "\\"\\r\\n                    href=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"link") : depth0), depth0))\n    + "\\"\\r\\n                    aria-label=\\"Click to "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "\\"\\r\\n                    title=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "\\"\\r\\n                  >"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "</a>\\r\\n                </li>\\r\\n";\n},"3":function(container,depth0,helpers,partials,data) {\n    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "                <li class=\\"nav-item\\">\\r\\n                  <a\\r\\n                    class=\\"nav-link "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"status") : depth0), depth0))\n    + "\\"\\r\\n                    href=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"link") : depth0), depth0))\n    + "\\"\\r\\n                    aria-label=\\"Navigate to "\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + " screen\\"\\r\\n                    title=\\""\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "\\"\\r\\n                  >"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))\n    + "</a>\\r\\n                </li>\\r\\n";\n},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {\n    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return "<section class=\\"header-container\\">\\r\\n  <div class=\\"container\\">\\r\\n    <div class=\\"row\\">\\r\\n      <div class=\\"col-25 app-logo\\">\\r\\n        <a\\r\\n          href=\\"/\\"\\r\\n          aria-label=\\"Click logo to navigate to Home screen\\"\\r\\n          title=\\"Home\\"\\r\\n        >\\r\\n          <img\\r\\n            alt=\\"Sabka Bazaar brand logo - Click to navigate to home page\\"\\r\\n            src=\\"/static/images/logo.png\\"\\r\\n          />\\r\\n        </a>\\r\\n      </div>\\r\\n      <div class=\\"col-75\\">\\r\\n        <div class=\\"row\\">\\r\\n          <nav class=\\"col-100 nav-bar auth-menu start-rt\\">\\r\\n            <ul class=\\"nav\\">\\r\\n"\n    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"navAuth") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":14},"end":{"line":29,"column":23}}})) != null ? stack1 : "")\n    + "            </ul>\\r\\n          </nav>\\r\\n        </div>\\r\\n        <div class=\\"row\\">\\r\\n          <nav class=\\"col-75 nav-bar main-menu\\">\\r\\n            <ul class=\\"nav\\">\\r\\n"\n    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"navList") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":36,"column":14},"end":{"line":45,"column":23}}})) != null ? stack1 : "")\n    + "            </ul>\\r\\n          </nav>\\r\\n          <div class=\\"col-25 cart-btn start-rt\\">\\r\\n            <button\\r\\n              type=\\"button\\"\\r\\n              class=\\"btn\\"\\r\\n              aria-label=\\"Click to view items in the cart\\"\\r\\n              title=\\"View Cart\\"\\r\\n            >\\r\\n              <img alt=\\"Cart Icon\\" src=\\"/static/images/cart.svg\\" />\\r\\n              <div><span id=\\"cartItemsLength\\">0</span> items</div>\\r\\n            </button>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<section class=\\"cart-overlay\\">\\r\\n"\n    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./cart.hbs */ "./src/templates/cart.hbs"),depth0,{"name":"cart","data":data,"indent":" ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")\n    + "</section>";\n},"usePartial":true,"useData":true});\n\n//# sourceURL=webpack://code-exercise/./src/templates/header.hbs?')}}]);