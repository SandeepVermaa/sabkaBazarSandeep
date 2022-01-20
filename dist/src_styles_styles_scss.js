/*! For license information please see src_styles_styles_scss.js.LICENSE.txt */
"use strict";(self.webpackChunkcode_exercise=self.webpackChunkcode_exercise||[]).push([["src_styles_styles_scss"],{"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/*Section colors*/\\n/*Shadow colors*/\\n/*Standard colors*/\\n/*Theme colors*/\\n/*Border colors*/\\n*,\\n*::before,\\n*::after {\\n  font-family: \\"Dosis\\", sans-serif;\\n  font-weight: 500;\\n  box-sizing: border-box;\\n  font-size: 16px;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nh1 {\\n  font-size: 1.5rem;\\n}\\n\\n.container {\\n  width: 100%;\\n  margin-right: auto;\\n  margin-left: auto;\\n}\\n@media (max-width: 576px) {\\n  .container {\\n    max-width: 100%;\\n  }\\n}\\n@media (min-width: 576px) {\\n  .container {\\n    max-width: 540px;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .container {\\n    max-width: 720px;\\n  }\\n}\\n@media (min-width: 992px) {\\n  .container {\\n    max-width: 960px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .container {\\n    max-width: 1140px;\\n  }\\n}\\n@media (min-width: 1400px) {\\n  .container {\\n    max-width: 1320px;\\n  }\\n}\\n\\n.row {\\n  width: 100%;\\n  display: flex;\\n}\\n\\n.col-25 {\\n  width: 25%;\\n}\\n\\n.col-30 {\\n  width: 30%;\\n}\\n\\n.col-40 {\\n  width: 40%;\\n}\\n\\n.col-50 {\\n  width: 50%;\\n}\\n\\n.col-60 {\\n  width: 60%;\\n}\\n\\n.col-70 {\\n  width: 70%;\\n}\\n\\n.col-75 {\\n  width: 75%;\\n}\\n\\n.col-100 {\\n  width: 100%;\\n}\\n\\n.btn {\\n  margin: 0;\\n  display: inline-block;\\n  font-weight: 400;\\n  line-height: 1.5;\\n  color: black;\\n  text-align: center;\\n  text-decoration: none;\\n  vertical-align: middle;\\n  cursor: pointer;\\n  user-select: none;\\n  background-color: #d00155;\\n  border: 1px solid transparent;\\n  padding: 0.375rem 0.75rem;\\n  font-size: 1rem;\\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n}\\n.btn:hover {\\n  background-color: rgba(208, 1, 85, 0.7) !important;\\n}\\n\\n.img-responsive {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n.form-control {\\n  display: block;\\n  width: 100%;\\n  padding: 0.375rem 0;\\n  font-size: 1rem;\\n  line-height: 1.5;\\n  color: black;\\n  background-color: white;\\n  border: 0;\\n  border-bottom: 2px solid #eeeeee;\\n  border-radius: 0;\\n  appearance: none;\\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\\n}\\n.form-control:focus {\\n  color: black;\\n  background-color: white;\\n  border-color: #50dae2;\\n  outline: 0;\\n}\\n\\n.form-floating {\\n  position: relative;\\n}\\n.form-floating > .form-control,\\n.form-floating > .form-select {\\n  height: calc(3.5rem + 2px);\\n  line-height: 1.25;\\n}\\n.form-floating > label {\\n  position: absolute;\\n  color: #b8b6b7;\\n  top: 0;\\n  left: 0;\\n  height: 100%;\\n  padding: 1rem 0;\\n  pointer-events: none;\\n  border: 1px solid transparent;\\n  transform-origin: 0 0;\\n  transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;\\n}\\n.form-floating > .form-control {\\n  padding: 1rem 0;\\n}\\n.form-floating > .form-control::placeholder {\\n  color: transparent;\\n}\\n.form-floating > .form-control:focus, .form-floating > .form-control:not(:placeholder-shown) {\\n  padding-top: 1.625rem;\\n  padding-bottom: 0.625rem;\\n}\\n.form-floating > .form-select {\\n  padding-top: 1.625rem;\\n  padding-bottom: 0.625rem;\\n}\\n.form-floating > .form-control:focus ~ label,\\n.form-floating > .form-control:not(:placeholder-shown) ~ label,\\n.form-floating > .form-select ~ label {\\n  transform: scale(0.85) translateY(-0.8rem);\\n}\\n.form-floating > .form-control:focus ~ label {\\n  color: #50dae2;\\n}\\n\\n#snackbar {\\n  visibility: hidden;\\n  min-width: 250px;\\n  margin-left: -125px;\\n  background-color: rgba(0, 0, 0, 0.7);\\n  color: white;\\n  text-align: center;\\n  border-radius: 5px;\\n  padding: 16px;\\n  position: fixed;\\n  z-index: 1;\\n  left: 50%;\\n  bottom: 30px;\\n  font-size: 16px;\\n}\\n\\n.showToast {\\n  visibility: visible !important;\\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\\n}\\n@keyframes fadein {\\n  from {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n  to {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n}\\n@keyframes fadeout {\\n  from {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n  to {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n}\\nheader {\\n  z-index: 99;\\n  position: sticky;\\n  top: 0;\\n  left: 0;\\n}\\n\\n.header-container {\\n  box-shadow: 0 8px 6px -7px #c4c4c4;\\n  width: 100%;\\n  background-color: white;\\n  height: 95px;\\n}\\n@media (max-width: 767.98px) {\\n  .header-container {\\n    height: 55px;\\n    box-shadow: 0 -12px 9px 11px #c4c4c4;\\n  }\\n}\\n@media (max-width: 767.98px) {\\n  .header-container .container {\\n    max-width: 100%;\\n    padding: 0;\\n  }\\n}\\n@media (max-width: 767.98px) {\\n  .header-container .container {\\n    height: 55px;\\n  }\\n}\\n.header-container .app-logo {\\n  align-self: center;\\n}\\n.header-container .app-logo img {\\n  max-height: 70px;\\n  pointer-events: none;\\n  padding: 0;\\n}\\n@media (max-width: 767.98px) {\\n  .header-container .app-logo img {\\n    max-height: 45px;\\n    padding: 0 1rem;\\n  }\\n}\\n@media (max-width: 767.98px) {\\n  .header-container .main-menu {\\n    display: none !important;\\n  }\\n}\\n.header-container .main-menu .nav-link {\\n  padding: 0.5rem 1rem;\\n  font-size: 16px;\\n}\\n.header-container .auth-menu {\\n  margin-bottom: 0.6rem;\\n  margin-top: 0.3rem;\\n}\\n@media (max-width: 767.98px) {\\n  .header-container .auth-menu {\\n    display: none !important;\\n  }\\n}\\n.header-container .auth-menu .nav-link {\\n  padding: 0 0.3rem 0 0.7rem;\\n  font-size: 14px;\\n}\\n.header-container .start-rt {\\n  display: flex;\\n  justify-content: end;\\n}\\n@media (max-width: 767.98px) {\\n  .header-container .cart-btn {\\n    width: 100%;\\n  }\\n}\\n.header-container .cart-btn .btn {\\n  background-color: #eeeeee;\\n  display: flex;\\n  width: 130px;\\n  height: 60px;\\n  align-items: center;\\n}\\n@media (max-width: 767.98px) {\\n  .header-container .cart-btn .btn {\\n    width: 140px;\\n    height: 55px;\\n  }\\n}\\n.header-container .cart-btn .btn:hover {\\n  background-color: rgba(238, 238, 238, 0.5) !important;\\n}\\n.header-container .cart-btn .btn img {\\n  max-height: 35px;\\n  margin-right: 10px;\\n}\\n.header-container .cart-btn .btn div {\\n  white-space: nowrap;\\n}\\n\\n.nav-bar {\\n  align-self: center;\\n}\\n.nav-bar .nav {\\n  display: flex;\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n.nav-bar .nav-link {\\n  font-weight: 600;\\n  color: #565656;\\n  text-decoration: none;\\n}\\n.nav-bar .nav-link:hover {\\n  color: #50dae2;\\n}\\n.nav-bar .active {\\n  color: #50dae2;\\n  text-decoration: underline;\\n}\\n\\n.cart-overlay {\\n  display: none;\\n  position: fixed;\\n  z-index: 1;\\n  left: 0;\\n  bottom: 0;\\n  width: 100%;\\n  height: calc(100% - 95px);\\n  overflow: auto;\\n  background-color: rgba(0, 0, 0, 0.6);\\n}\\n.cart-overlay .cart-container {\\n  display: flex;\\n  justify-content: flex-end;\\n  width: 100%;\\n}\\n.cart-overlay .cart-container .cart {\\n  background-color: white;\\n  width: 45%;\\n  height: calc(100vh - 95px);\\n}\\n.cart-overlay .cart-container .cart .cart-header {\\n  background-color: black;\\n  color: white;\\n  height: 10%;\\n  justify-content: space-between;\\n  display: flex;\\n  align-items: center;\\n  padding: 0 1rem;\\n}\\n.cart-overlay .cart-container .cart .cart-header .cart-title .cart-title--name {\\n  font-weight: bold;\\n}\\n.cart-overlay .cart-container .cart .cart-header .cart-title .cart-title--count {\\n  font-size: 0.85rem;\\n}\\n.cart-overlay .cart-container .cart .cart-header .cart-close {\\n  background: transparent;\\n  border: 0;\\n  font-size: 2.5rem;\\n  padding: 0;\\n  margin: 0;\\n  cursor: pointer;\\n  height: 25px;\\n  width: 25px;\\n  position: relative;\\n}\\n.cart-overlay .cart-container .cart .cart-header .cart-close .cart-close--icon {\\n  font-weight: 200;\\n  position: absolute;\\n  bottom: 3px;\\n  height: 25px;\\n  left: 0;\\n  transform: translate(0, -50%);\\n  width: 25px;\\n}\\n.cart-overlay .cart-container .cart .cart-body {\\n  height: 75%;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-empty {\\n  width: 100%;\\n  height: 100%;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-empty .cart-empty-info {\\n  width: 100%;\\n  height: 100%;\\n  line-height: 1.5;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: white;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-empty .cart-empty-info .cart-empty--text1 {\\n  font-weight: bold;\\n  font-size: 1.2rem;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled {\\n  background-color: #eeeeee;\\n  height: 100%;\\n  padding-top: 0.7rem;\\n  overflow: auto;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item {\\n  display: flex;\\n  padding: 0.5rem 0.8rem;\\n  background-color: white;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-img {\\n  width: 20%;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details {\\n  width: 80%;\\n  padding: 0.5rem 1rem;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-name {\\n  font-weight: bold;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .quantity-price {\\n  align-items: center;\\n  display: flex;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .quantity-price .btn-quantity {\\n  background-color: #d00155;\\n  border-radius: 50%;\\n  color: white;\\n  height: 25px;\\n  width: 20px;\\n  position: relative;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .quantity-price .btn-quantity:hover {\\n  background-color: rgba(208, 1, 85, 0.7);\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .quantity-price .btn-quantity .icon {\\n  position: absolute;\\n  top: 35%;\\n  left: 50%;\\n  font-weight: 200;\\n  font-size: 2rem;\\n  transform: translate(-50%, -50%);\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .quantity-price .quantity-nos {\\n  font-weight: bold;\\n  padding: 1rem;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .quantity-price .price-nos {\\n  padding: 1rem;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .quantity-price .price-nos .icon {\\n  padding-right: 0.5rem;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .total-item-price {\\n  padding: 1rem 0;\\n  font-size: 1.2rem;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-ad {\\n  padding: 0.5rem;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-ad .ad-content {\\n  background-color: white;\\n  align-items: center;\\n  border-radius: 0.2rem;\\n  display: flex;\\n  padding: 0.5rem 0.8rem;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-ad .ad-content .ad-img {\\n  width: 25%;\\n}\\n.cart-overlay .cart-container .cart .cart-body .cart-filled .cart-ad .ad-content .ad-info {\\n  width: 75%;\\n  font-size: 1rem;\\n  padding-left: 0.8rem;\\n}\\n.cart-overlay .cart-container .cart .cart-footer {\\n  background-color: white;\\n  height: 15%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-end;\\n  padding: 0.8rem;\\n}\\n.cart-overlay .cart-container .cart .cart-footer .cart-footer-empty {\\n  width: 100%;\\n}\\n.cart-overlay .cart-container .cart .cart-footer .cart-footer-empty .btn-footer-empty {\\n  background-color: #d00155;\\n  width: 100%;\\n  border-radius: 3px;\\n}\\n.cart-overlay .cart-container .cart .cart-footer .cart-footer-empty .btn-footer-empty a {\\n  text-decoration: none;\\n  color: white;\\n  font-weight: 500;\\n}\\n.cart-overlay .cart-container .cart .cart-footer .cart-footer-item {\\n  width: 100%;\\n}\\n.cart-overlay .cart-container .cart .cart-footer .cart-footer-item .promo-info {\\n  margin: 0;\\n  text-align: center;\\n  padding-bottom: 0.8rem;\\n  font-size: 0.85rem;\\n}\\n.cart-overlay .cart-container .cart .cart-footer .cart-footer-item .btn-footer-item {\\n  background-color: #d00155;\\n  width: 100%;\\n  border-radius: 3px;\\n  display: flex;\\n  justify-content: space-between;\\n  color: white;\\n}\\n\\n.show {\\n  display: block !important;\\n}\\n\\n@media (max-width: 992px) {\\n  .cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details {\\n    padding: 0.5rem !important;\\n  }\\n  .cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .quantity-price .quantity-nos {\\n    padding: 0.5rem 0.7rem !important;\\n  }\\n  .cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .quantity-price .price-nos {\\n    padding: 0.5rem 0.7rem !important;\\n  }\\n  .cart-overlay .cart-container .cart .cart-body .cart-filled .cart-item .cart-item-details .cart-item-pricing .total-item-price {\\n    padding: 0.5rem 0;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .cart-overlay {\\n    height: calc(100% - 55px);\\n  }\\n  .cart-overlay .cart-container .cart {\\n    height: calc(100vh - 55px) !important;\\n    width: 100%;\\n    padding-top: 1.5rem;\\n    background-color: #eeeeee;\\n  }\\n  .cart-overlay .cart-container .cart .cart-header {\\n    background-color: white;\\n    color: black;\\n  }\\n  .cart-overlay .cart-container .cart .cart-header .cart-close {\\n    display: none;\\n  }\\n}\\n.footer-container {\\n  background-color: #eeeeee;\\n  height: 50px;\\n  display: flex;\\n  align-items: center;\\n}\\n.footer-container .footer-info {\\n  font-size: 14px;\\n}\\n\\n@media (max-width: 768px) {\\n  .footer-container {\\n    text-align: center;\\n    height: 35px;\\n  }\\n}\\n@media (max-width: 767.98px) {\\n  .footer-container {\\n    font-size: 12px;\\n  }\\n}\\n.home-container {\\n  padding-top: 2rem;\\n  padding-bottom: 2rem;\\n  /* Slideshow container */\\n}\\n.home-container .slideshow-container {\\n  position: relative;\\n  margin: auto;\\n  box-shadow: 0 10px 23px -27px black;\\n  align-items: center;\\n  /* Next & previous buttons */\\n  /* Position the \\"next button\\" to the right */\\n  /* On hover, add a black background color with a little bit see-through */\\n  /* The dots/bullets/indicators */\\n  /* Fading animation */\\n}\\n.home-container .slideshow-container .banner-slides {\\n  display: none;\\n}\\n.home-container .slideshow-container .banner-slides img {\\n  width: 100%;\\n}\\n.home-container .slideshow-container .prev,\\n.home-container .slideshow-container .next {\\n  cursor: pointer;\\n  position: absolute;\\n  top: 50%;\\n  width: auto;\\n  padding: 10px;\\n  margin-top: -22px;\\n  color: white;\\n  font-size: 16px;\\n  transition: 0.6s ease;\\n  user-select: none;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  opacity: 0.5;\\n}\\n@media (max-width: 767.98px) {\\n  .home-container .slideshow-container .prev,\\n.home-container .slideshow-container .next {\\n    display: none;\\n  }\\n}\\n.home-container .slideshow-container .next {\\n  right: 0;\\n}\\n.home-container .slideshow-container .prev:hover,\\n.home-container .slideshow-container .next:hover {\\n  background-color: rgba(0, 0, 0, 0.5);\\n  opacity: 1;\\n}\\n.home-container .slideshow-container .slide-dots {\\n  position: absolute;\\n  bottom: 5%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n@media (max-width: 767.98px) {\\n  .home-container .slideshow-container .slide-dots {\\n    bottom: -30px;\\n    transform: translate(-50%, 0);\\n  }\\n}\\n.home-container .slideshow-container .dot {\\n  cursor: pointer;\\n  height: 6px;\\n  width: 6px;\\n  margin: 0 10px;\\n  background-color: #b8b6b7;\\n  border-radius: 50%;\\n  display: inline-block;\\n  transition: background-color 0.6s ease;\\n}\\n@media (max-width: 767.98px) {\\n  .home-container .slideshow-container .dot {\\n    height: 5px;\\n    width: 5px;\\n  }\\n}\\n.home-container .slideshow-container .active,\\n.home-container .slideshow-container .dot:hover {\\n  background-color: #686868;\\n}\\n.home-container .slideshow-container .fade {\\n  -webkit-animation-name: fade;\\n  -webkit-animation-duration: 1.5s;\\n  animation-name: fade;\\n  animation-duration: 1.5s;\\n}\\n@-webkit-keyframes fade {\\n  from {\\n    opacity: 0.4;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes fade {\\n  from {\\n    opacity: 0.4;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n.home-container .category-container .category {\\n  box-shadow: 0 10px 23px -27px black;\\n  margin-top: 25px;\\n  align-items: center;\\n  padding-bottom: 30px;\\n}\\n@media (max-width: 767.98px) {\\n  .home-container .category-container .category:first-child {\\n    margin-top: 45px;\\n  }\\n}\\n.home-container .category-container .category:last-child {\\n  padding-bottom: 0;\\n  box-shadow: none;\\n}\\n@media (max-width: 767.98px) {\\n  .home-container .category-container .category .category-img {\\n    width: 45%;\\n  }\\n}\\n.home-container .category-container .category .category-img img {\\n  max-height: 300px;\\n}\\n.home-container .category-container .category .category-details {\\n  text-align: center;\\n  padding: 0 1rem;\\n}\\n@media (max-width: 767.98px) {\\n  .home-container .category-container .category .category-details {\\n    width: 65%;\\n  }\\n}\\n.home-container .category-container .category .category-details .category-btn {\\n  min-height: 36px;\\n  background-color: #d00155;\\n  border-radius: 0;\\n  font-size: 14px;\\n  color: white;\\n  font-weight: 500;\\n}\\n.home-container .category-container .category .category-details h2 {\\n  font-weight: 700;\\n  font-size: 24px;\\n}\\n@media (max-width: 767.98px) {\\n  .home-container .category-container .category .category-details h2 {\\n    font-size: 16px;\\n  }\\n}\\n.home-container .category-container .category .category-details p {\\n  font-size: 16px;\\n  font-weight: 600;\\n}\\n@media (max-width: 767.98px) {\\n  .home-container .category-container .category .category-details p {\\n    font-size: 12px;\\n  }\\n}\\n.home-container .category-container .category-reverse {\\n  flex-direction: row-reverse;\\n}\\n\\n.signin-container {\\n  padding: 2rem 0;\\n}\\n@media (max-width: 767.98px) {\\n  .signin-container {\\n    flex-direction: column;\\n  }\\n}\\n.signin-container .signin-info {\\n  padding: 0 2rem 0 4rem;\\n}\\n@media (max-width: 992px) {\\n  .signin-container .signin-info {\\n    padding: 0 1rem 0 2rem;\\n  }\\n}\\n@media (max-width: 767.98px) {\\n  .signin-container .signin-info {\\n    padding: 0 1rem;\\n  }\\n}\\n.signin-container .signin-info .title {\\n  font-weight: bold;\\n}\\n.signin-container .signin-form {\\n  width: 50%;\\n  padding: 0 2rem;\\n}\\n@media (max-width: 992px) {\\n  .signin-container .signin-form {\\n    padding: 0 1rem 0 1rem;\\n  }\\n}\\n@media (max-width: 767.98px) {\\n  .signin-container .signin-form {\\n    width: 100%;\\n  }\\n}\\n.signin-container .signin-form form {\\n  max-width: 450px;\\n}\\n@media (max-width: 767.98px) {\\n  .signin-container .signin-form form {\\n    max-width: 100%;\\n  }\\n}\\n.signin-container .signin-form .signin-email {\\n  margin-bottom: 1rem;\\n}\\n.signin-container .signin-form .signin-password {\\n  margin-bottom: 2.5rem;\\n}\\n.signin-container .signin-form .signin-btn {\\n  width: 100%;\\n  min-height: 40px;\\n  border-radius: 0;\\n  font-size: 1rem;\\n  color: white;\\n}\\n@media (max-width: 767.98px) {\\n  .signin-container .signin-form {\\n    padding: 0 1rem;\\n  }\\n}\\n\\n.register-container {\\n  padding: 2rem 0;\\n}\\n@media (max-width: 767.98px) {\\n  .register-container {\\n    flex-direction: column;\\n  }\\n}\\n.register-container .register-info {\\n  padding: 0 2rem 0 4rem;\\n}\\n@media (max-width: 992px) {\\n  .register-container .register-info {\\n    padding: 0 1rem 0 2rem;\\n  }\\n}\\n@media (max-width: 767.98px) {\\n  .register-container .register-info {\\n    padding: 0 1rem;\\n  }\\n}\\n.register-container .register-info .title {\\n  font-weight: bold;\\n}\\n.register-container .register-form {\\n  width: 50%;\\n  padding: 0 2rem;\\n}\\n@media (max-width: 992px) {\\n  .register-container .register-form {\\n    padding: 0 1rem 0 1rem;\\n  }\\n}\\n@media (max-width: 767.98px) {\\n  .register-container .register-form {\\n    width: 100%;\\n  }\\n}\\n.register-container .register-form form {\\n  max-width: 450px;\\n}\\n@media (max-width: 767.98px) {\\n  .register-container .register-form form {\\n    max-width: 100%;\\n  }\\n}\\n.register-container .register-form .mb-1 {\\n  margin-bottom: 1rem;\\n}\\n.register-container .register-form .mb-2 {\\n  margin-bottom: 2.5rem;\\n}\\n.register-container .register-form .register-btn {\\n  width: 100%;\\n  min-height: 40px;\\n  border-radius: 0;\\n  font-size: 1rem;\\n  color: white;\\n}\\n@media (max-width: 767.98px) {\\n  .register-container .register-form {\\n    padding: 0 1rem;\\n  }\\n}\\n\\n.products-container .category-container {\\n  background-color: #eeeeee;\\n  padding: 0;\\n  width: 20%;\\n}\\n.products-container .category-container .category-list button {\\n  border: 0;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\\n  padding: 10px 24px;\\n  cursor: pointer;\\n  width: 100%;\\n  background-color: transparent;\\n  color: #686868;\\n  font-size: 16px;\\n  font-weight: 600;\\n  text-align: left;\\n}\\n.products-container .category-container .category-list button.active {\\n  background-color: #d00155;\\n  color: white;\\n  border-color: #d00155;\\n}\\n.products-container .category-container .category-dropdown {\\n  display: none;\\n  position: relative;\\n}\\n.products-container .category-container .category-dropdown .category-dropdown-btn {\\n  width: 100%;\\n  background-color: #d00155;\\n  color: white;\\n  font-size: 16px;\\n  font-weight: 600;\\n  text-align: left;\\n  border: none;\\n  cursor: pointer;\\n  padding: 10px 24px;\\n}\\n.products-container .category-container .category-dropdown .category-dropdown-btn::after {\\n  position: absolute;\\n  top: 50%;\\n  right: 2rem;\\n  display: inline-block;\\n  margin-left: 0.255em;\\n  vertical-align: 0.255em;\\n  content: \\"\\";\\n  border-top: 0.3em solid;\\n  border-right: 0.3em solid transparent;\\n  border-bottom: 0;\\n  border-left: 0.3em solid transparent;\\n}\\n.products-container .category-container .category-dropdown .category-dropdown-list {\\n  display: none;\\n  position: absolute;\\n  background-color: #eeeeee;\\n  width: 100%;\\n  overflow: auto;\\n  border: 1px solid rgba(0, 0, 0, 0.125);\\n  z-index: 1;\\n}\\n.products-container .category-container .category-dropdown .category-dropdown-list:last-child {\\n  border-bottom: none;\\n}\\n.products-container .category-container .category-dropdown .category-dropdown-list button {\\n  border: 0;\\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\\n  padding: 10px 24px;\\n  cursor: pointer;\\n  width: 100%;\\n  background-color: transparent;\\n  color: #686868;\\n  font-size: 16px;\\n  font-weight: 600;\\n  text-align: left;\\n}\\n.products-container .category-container .category-dropdown .category-dropdown-list button:hover {\\n  background-color: #dddddd;\\n}\\n.products-container .category-container .show {\\n  display: block !important;\\n}\\n.products-container .product-list-container {\\n  width: 80%;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 1rem 0.75rem 2rem;\\n}\\n.products-container .product-list-container .product {\\n  width: 25%;\\n  padding: 0.75rem;\\n  display: grid;\\n  grid-template-columns: auto;\\n}\\n.products-container .product-list-container .product .product-title {\\n  font-weight: 800;\\n  font-size: 1rem;\\n  line-height: 1rem;\\n  margin-bottom: 1rem;\\n  height: 60px;\\n}\\n.products-container .product-list-container .product .product-image {\\n  margin-bottom: 0.75rem;\\n}\\n.products-container .product-list-container .product .product-description {\\n  background-color: #eeeeee;\\n  font-size: 0.8rem;\\n  font-weight: 600;\\n  line-height: 0.9rem;\\n  padding: 0.4rem;\\n  height: 4.375rem;\\n  overflow-y: auto;\\n}\\n.products-container .product-list-container .product .product-cart {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding-top: 1rem;\\n}\\n.products-container .product-list-container .product .product-cart .price {\\n  font-size: 14px;\\n  font-weight: 600;\\n}\\n.products-container .product-list-container .product .product-cart .buy-btn {\\n  font-size: 14px;\\n  min-height: 32px;\\n  background-color: #d00155;\\n  color: white;\\n  border-radius: 0;\\n  font-weight: 500;\\n}\\n.products-container .product-list-container .product .product-cart .buy-btn .buy-btn-price {\\n  display: none;\\n}\\n.products-container .product-list-container .product .separator {\\n  border-bottom: 1.5px dashed #b8b6b7;\\n  margin-top: 0.75rem;\\n}\\n\\n@media (max-width: 992px) {\\n  .products-container .product-list-container .product {\\n    width: 50%;\\n    grid-template-columns: auto auto;\\n  }\\n  .products-container .product-list-container .product .product-title {\\n    height: auto;\\n    grid-column: 1/3;\\n  }\\n  .products-container .product-list-container .product .product-image {\\n    grid-column: 1/2;\\n  }\\n  .products-container .product-list-container .product .product-description {\\n    height: auto;\\n  }\\n  .products-container .product-list-container .product .product-cart {\\n    grid-column: 1/3;\\n  }\\n  .products-container .product-list-container .product .product-cart .price {\\n    display: none;\\n  }\\n  .products-container .product-list-container .product .product-cart .buy-btn {\\n    width: 100%;\\n  }\\n  .products-container .product-list-container .product .product-cart .buy-btn .buy-btn-price {\\n    display: inline-block;\\n  }\\n  .products-container .product-list-container .product .separator {\\n    grid-column: 1/3;\\n  }\\n}\\n@media (max-width: 767px) {\\n  .products-container .row {\\n    flex-direction: column;\\n  }\\n  .products-container .category-container {\\n    width: 100%;\\n  }\\n  .products-container .category-container .category-list {\\n    display: none;\\n  }\\n  .products-container .category-container .category-dropdown {\\n    display: block;\\n  }\\n  .products-container .product-list-container {\\n    width: 100%;\\n  }\\n  .products-container .product-list-container .product {\\n    width: 100%;\\n    grid-template-columns: auto auto;\\n  }\\n  .products-container .product-list-container .product .product-title {\\n    height: auto;\\n    grid-column: 1/3;\\n  }\\n  .products-container .product-list-container .product .product-image {\\n    grid-column: 1/2;\\n    grid-row: 2/4;\\n    margin: 0;\\n  }\\n  .products-container .product-list-container .product .product-description {\\n    height: auto;\\n  }\\n  .products-container .product-list-container .product .product-cart {\\n    grid-column: 2/3;\\n  }\\n  .products-container .product-list-container .product .product-cart .price {\\n    display: none;\\n  }\\n  .products-container .product-list-container .product .product-cart .buy-btn {\\n    width: 100%;\\n    min-height: 40px;\\n  }\\n  .products-container .product-list-container .product .product-cart .buy-btn .buy-btn-price {\\n    display: inline-block;\\n  }\\n  .products-container .product-list-container .product .separator {\\n    grid-column: 1/3;\\n  }\\n}\\n.not-found {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://code-exercise/./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js')},"./src/styles/styles.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://code-exercise/./src/styles/styles.scss?')}}]);