/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/scanf/index.js":
/*!*************************************!*\
  !*** ./node_modules/scanf/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./lib/scanf */ \"./node_modules/scanf/lib/scanf.js\");\n\n\n//# sourceURL=webpack://app_maquina/./node_modules/scanf/index.js?");

/***/ }),

/***/ "./node_modules/scanf/lib/gets.js":
/*!****************************************!*\
  !*** ./node_modules/scanf/lib/gets.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n * http://stackoverflow.com/questions/3430939/node-js-readsync-from-stdin\n * @mklement0\n */\nvar fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar BUFSIZE = 256;\nvar buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);\nvar bytesRead;\n\nmodule.exports = function() {\n  var fd =\n    'win32' === process.platform\n      ? process.stdin.fd\n      : fs.openSync('/dev/stdin', 'rs');\n  bytesRead = 0;\n\n  try {\n    bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);\n  } catch (e) {\n    if (e.code === 'EAGAIN') {\n      // 'resource temporarily unavailable'\n      // Happens on OS X 10.8.3 (not Windows 7!), if there's no\n      // stdin input - typically when invoking a script without any\n      // input (for interactive stdin input).\n      // If you were to just continue, you'd create a tight loop.\n      console.error('ERROR: interactive stdin input not supported.');\n      process.exit(1);\n    } else if (e.code === 'EOF') {\n      // Happens on Windows 7, but not OS X 10.8.3:\n      // simply signals the end of *piped* stdin input.\n      return '';\n    }\n    throw e; // unexpected exception\n  }\n\n  if (bytesRead === 0) {\n    // No more stdin input available.\n    // OS X 10.8.3: regardless of input method, this is how the end\n    //   of input is signaled.\n    // Windows 7: this is how the end of input is signaled for\n    //   *interactive* stdin input.\n    return '';\n  }\n  // Process the chunk read.\n\n  var content = buf.toString(undefined, 0, bytesRead - 1);\n\n  return content;\n};\n\n\n//# sourceURL=webpack://app_maquina/./node_modules/scanf/lib/gets.js?");

/***/ }),

/***/ "./node_modules/scanf/lib/scanf.js":
/*!*****************************************!*\
  !*** ./node_modules/scanf/lib/scanf.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var utils = __webpack_require__(/*! ./utils */ \"./node_modules/scanf/lib/utils.js\");\nvar gets = __webpack_require__(/*! ./gets */ \"./node_modules/scanf/lib/gets.js\");\n\nvar input = '';\nvar stdin_flag = true;\n\nexports[\"throw\"] = true;\n\nvar scanf = (module.exports = function(format) {\n  var re = new RegExp('[^%]*%[0-9]*[A-Za-z][^%]*', 'g');\n  var selector = format.match(re);\n\n  if (selector === null) {\n    throw new Error('Unable to parse scanf selector.');\n  }\n\n  var result,\n    len = selector.length;\n  var json_flag = false,\n    count = 0,\n    keys = Array.prototype.slice.call(arguments, 1);\n\n  if (!this.sscanf) {\n    // clear sscanf cache\n    if (!stdin_flag) input = '';\n    stdin_flag = true;\n  }\n\n  if (keys.length > 0) {\n    result = {};\n    json_flag = true;\n  } else if (len > 1) {\n    result = [];\n  } else {\n    return dealType(selector[0]);\n  }\n\n  selector.forEach(function(val) {\n    if (json_flag) {\n      result[keys.shift() || count++] = dealType(val);\n    } else {\n      result.push(dealType(val));\n    }\n  });\n\n  return result;\n});\n\nmodule.exports.sscanf = function(str, format) {\n  if (typeof str !== 'string' || !str.length) {\n    return null;\n  }\n\n  // clear scanf cache\n  if (stdin_flag) input = '';\n\n  input = str;\n  stdin_flag = false;\n\n  return scanf.apply(\n    { sscanf: true },\n    Array.prototype.slice.call(arguments, 1)\n  );\n};\n\nvar getInput = function(pre, next, match, type) {\n  var result;\n  if (!input.length || input === '\\r') {\n    if (stdin_flag) {\n      input = gets();\n    } else {\n      return null;\n    }\n  }\n\n  // match format\n  var replace = '(' + match + ')';\n  var tmp = input;\n\n  // while scan string, replace before and after\n  if (type === 'STR' && next.trim().length > 0) {\n    var before_macth = utils.regslashes(pre);\n    var after_match = utils.regslashes(next) + '[\\\\w\\\\W]*';\n    if (before_macth.length) {\n      tmp = tmp.replace(new RegExp(before_macth), '');\n    }\n    tmp = tmp.replace(new RegExp(after_match), '');\n  } else {\n    replace = utils.regslashes(pre) + replace;\n  }\n\n  var m = tmp.match(new RegExp(replace));\n\n  if (!m) {\n    // todo strip match\n    return null;\n  }\n  result = m[1];\n\n  // strip match content\n  input = input\n    .substr(input.indexOf(result))\n    .replace(result, '')\n    .replace(next, '');\n\n  if (type === 'HEXFLOAT') {\n    return m;\n  }\n  return result;\n};\n\nvar getInteger = function(pre, next) {\n  var text = getInput(pre, next, '[-]?[A-Za-z0-9]+');\n  if (!text) {\n    return null;\n  }\n  if (text.length > 2) {\n    if (text[0] === '0') {\n      if (text[1].toLowerCase() === 'x') {\n        try {\n          return utils.hex2int(text);\n        }\n        catch(e) {\n          if(exports.throw) return NaN\n\n          return null\n        }\n      }\n      // parse Integer (%d %ld %u %lu %llu) should be precise for octal\n      if (text[1].toLowerCase() === 'o') {\n        try {\n          return utils.octal2int(text);\n        }\n        catch(e) {\n          if(exports.throw) return NaN\n\n          return null\n        }\n      }\n    }\n  }\n  return parseInt(text);\n};\n\nvar getFloat = function(pre, next) {\n  var text = getInput(pre, next, '[-]?[0-9]+[.]?[0-9]*');\n  return parseFloat(text);\n};\n\nvar getHexFloat = function(pre, next) {\n  var hfParams = getInput(\n    pre,\n    next,\n    '^([+-]?)0x([0-9a-f]*)(.[0-9a-f]*)?(p[+-]?[0-9a-f]+)?',\n    'HEXFLOAT'\n  );\n  var sign = hfParams[2];\n  var sint = hfParams[3];\n  var spoint = hfParams[4];\n  var sexp = hfParams[5] || 'p0';\n  // We glue the integer and point parts together when parsing\n  var integer = parseInt(\n    sign + sint + (spoint !== undefined ? spoint.slice(1) : ''),\n    16\n  );\n  // The actual exponent is the specified exponent minus the de..heximal points we shifted away\n  var exponent =\n    parseInt(sexp.slice(1), 16) -\n    4 * (spoint !== undefined ? spoint.length - 1 : 0);\n  return integer * Math.pow(2, exponent);\n};\n\nvar getHex = function(pre, next) {\n  var text = getInput(pre, next, '[A-Za-z0-9]+');\n  try {\n    return utils.hex2int(text);\n  }\n  catch(e) {\n    if(exports.throw) return NaN\n\n    return null\n  }\n};\n\nvar getOctal = function(pre, next) {\n  var text = getInput(pre, next, '[A-Za-z0-9]+');\n  try {\n    return utils.octal2int(text);\n  }\n  catch(e) {\n    if(exports.throw) return NaN\n\n    return null\n  }\n};\n\nvar getString = function(pre, next) {\n  var text = getInput(\n    pre,\n    next,\n    // Match repeat string\n    '(' +\n    '[\\\\w\\\\]=-]' +\n    '|' +\n    '\\\\S+[^\\\\ ]' + // Match string witch \\SPC like 'Alan\\ Bob'\n      ')' +\n      // Match after\n      '+(\\\\\\\\[\\\\w\\\\ ][\\\\w\\\\:]*)*',\n    'STR'\n  );\n  if (/\\\\/.test(text)) text = utils.stripslashes(text);\n  return text;\n};\n\nvar getLine = function(pre, next) {\n  var text = getInput(pre, next, '[^\\n\\r]*');\n  if (/\\\\/.test(text)) text = utils.stripslashes(text);\n  return text;\n};\n\nvar dealType = function(format) {\n  var ret;\n  var res = format.match(/%(0[1-9]+)?[A-Za-z]+/);\n  var res2 = format.match(/[^%]*/);\n  if (!res) {\n    // DID NOT throw error here to stay compatible with old version\n    console.warn('Invalid scanf selector: [%s]', format);\n    return null;\n  }\n\n  var type = res[0].replace(res[1], '');\n  var pre = !!res2 ? res2[0] : null;\n  var next = format.substr(format.indexOf(type) + type.length);\n\n  switch (type) {\n    case '%d':\n    case '%ld':\n    case '%llu':\n    case '%lu':\n    case '%u':\n      ret = getInteger(pre, next);\n      break;\n    case '%c': // TODO getChar\n    case '%s':\n      ret = getString(pre, next);\n      break;\n    case '%S':\n      ret = getLine(pre, next);\n      break;\n    case '%X':\n    case '%x':\n      ret = getHex(pre, next);\n      break;\n    case '%O':\n    case '%o':\n      ret = getOctal(pre, next);\n      break;\n    case '%a':\n      ret = getHexFloat(pre, next);\n      break;\n    case '%f':\n      ret = getFloat(pre, next);\n      break;\n\n    default:\n      throw new Error('Unknown type \"' + type + '\"');\n  }\n  return ret;\n};\n\n\n//# sourceURL=webpack://app_maquina/./node_modules/scanf/lib/scanf.js?");

/***/ }),

/***/ "./node_modules/scanf/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/scanf/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("var ASCII = {\n  a: 'a'.charCodeAt(),\n  f: 'f'.charCodeAt(),\n  A: 'A'.charCodeAt(),\n  F: 'F'.charCodeAt(),\n  0: '0'.charCodeAt(),\n  7: '7'.charCodeAt(),\n  9: '9'.charCodeAt()\n};\n\nexports.hex2int = function(str) {\n  str = str.replace(/^[0Oo][Xx]/, '');\n  var ret = 0,\n    digit = 0;\n\n  for (var i = str.length - 1; i >= 0; i--) {\n    ret += intAtHex(str[i], digit++);\n  }\n\n  return ret;\n};\n\nvar intAtHex = function(c, digit) {\n  var ret = null;\n  var ascii = c.charCodeAt();\n\n  if (ASCII.a <= ascii && ascii <= ASCII.f) {\n    ret = ascii - ASCII.a + 10;\n  } else if (ASCII.A <= ascii && ascii <= ASCII.F) {\n    ret = ascii - ASCII.A + 10;\n  } else if (ASCII[0] <= ascii && ascii <= ASCII[9]) {\n    ret = ascii - ASCII[0];\n  } else {\n    throw new Error('Invalid ascii [' + c + ']');\n  }\n\n  while (digit--) {\n    ret *= 16;\n  }\n  return ret;\n};\n\nexports.octal2int = function(str) {\n  str = str.replace(/^0[Oo]?/, '');\n  var ret = 0,\n    digit = 0;\n\n  for (var i = str.length - 1; i >= 0; i--) {\n    ret += intAtOctal(str[i], digit++);\n  }\n\n  return ret;\n};\n\nvar intAtOctal = function(c, digit) {\n  var num = null;\n  var ascii = c.charCodeAt();\n\n  if (ascii >= ASCII[0] && ascii <= ASCII[7]) {\n    num = ascii - ASCII[0];\n  } else {\n    throw new Error('Invalid char to Octal [' + c + ']');\n  }\n\n  while (digit--) {\n    num *= 8;\n  }\n  return num;\n};\n\nexports.regslashes = function(pre) {\n  return pre\n    .replace(/\\[/g, '\\\\[')\n    .replace(/\\]/g, '\\\\]')\n    .replace(/\\(/g, '\\\\(')\n    .replace(/\\)/g, '\\\\)')\n    .replace(/\\|/g, '\\\\|');\n};\n\nexports.stripslashes = function(str) {\n  return str.replace(/\\\\([\\sA-Za-z\\\\]|[0-7]{1,3})/g, function(str, c) {\n    switch (c) {\n      case '\\\\':\n        return '\\\\';\n      case '0':\n        return '\\u0000';\n      default:\n        if (/^\\w$/.test(c)) {\n          return getSpecialChar(c);\n        } else if (/^\\s$/.test(c)) {\n          return c;\n        } else if (/([0-7]{1,3})/.test(c)) {\n          return getASCIIChar(c);\n        }\n        return str;\n    }\n  });\n};\n\nvar getASCIIChar = function(str) {\n  var num = exports.octal2int(str);\n  return String.fromCharCode(num);\n};\n\nvar getSpecialChar = function(letter) {\n  switch (letter.toLowerCase()) {\n    case 'b':\n      return '\\b';\n    case 'f':\n      return '\\f';\n    case 'n':\n      return '\\n';\n    case 'r':\n      return '\\r';\n    case 't':\n      return '\\t';\n    case 'v':\n      return '\\v';\n    default:\n      return letter;\n  }\n};\n\n\n//# sourceURL=webpack://app_maquina/./node_modules/scanf/lib/utils.js?");

/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Application = void 0;\nconst scanf_1 = __importDefault(__webpack_require__(/*! scanf */ \"./node_modules/scanf/index.js\"));\nclass Application {\n    constructor(views) {\n        this.views = views;\n    }\n    myStartConsole() {\n        let flag = false;\n        this.views.viewMenu();\n        let instruction = (0, scanf_1.default)(\"%d\");\n        switch (instruction) {\n            case 1:\n                this.views.viewCreateProduct();\n                break;\n            case 2:\n                this.views.viewShowProduct();\n                break;\n            case 3:\n                this.views.viewSelectProduct();\n                break;\n            case 4:\n                this.views.viewGetMoney();\n                break;\n            case 5:\n                flag = this.views.viewExit();\n                break;\n            default:\n                console.log(\"Sorry, option not available :(\");\n        }\n        return flag;\n    }\n}\nexports.Application = Application;\n\n\n//# sourceURL=webpack://app_maquina/./src/app/app.ts?");

/***/ }),

/***/ "./src/app/application/services/menu.machine.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/application/services/menu.machine.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MenuMachineService = void 0;\nconst products_json_1 = __importDefault(__webpack_require__(/*! ../../../assets/data/products.json */ \"./src/assets/data/products.json\"));\nclass MenuMachineService {\n    constructor() {\n        this.amount = 0;\n        this.selection = \"\";\n        this.products = [];\n        this.selectProduct = [];\n        this.purchasedProduct = [];\n    }\n    createProduct(product) {\n        this.products.push(product);\n    }\n    getMoney(money) {\n        let total = this.accesProduct.price * this.amount;\n        let purchased;\n        if (total < money) {\n            let change = money - total;\n            purchased = {\n                productName: this.accesProduct.name,\n                productAmount: this.amount,\n                change: change\n            };\n            this.purchasedProduct.push(purchased);\n        }\n        return this.purchasedProduct;\n    }\n    selectionProduct(nameProduct) {\n        this.products = products_json_1.default.products;\n        this.selection = nameProduct;\n        this.selectProduct = this.products.filter((product) => {\n            return product.name === this.selection;\n        });\n        return this.selectProduct;\n    }\n    amountProduct(productAmount) {\n        let flag = false;\n        this.amount = productAmount;\n        this.accesProduct = this.selectProduct[0];\n        let verifyAmount = this.accesProduct.amount >= this.amount;\n        if (verifyAmount) {\n            let newAmount = this.accesProduct.amount - this.amount;\n            this.accesProduct.amount = newAmount;\n            flag = true;\n        }\n        return flag;\n    }\n    showProducts() {\n        this.products = products_json_1.default.products;\n        return this.products;\n    }\n    exit(instruction) {\n        return instruction;\n    }\n}\nexports.MenuMachineService = MenuMachineService;\n\n\n//# sourceURL=webpack://app_maquina/./src/app/application/services/menu.machine.service.ts?");

/***/ }),

/***/ "./src/app/common/constants/console.app.ts":
/*!*************************************************!*\
  !*** ./src/app/common/constants/console.app.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ConsoleApp = void 0;\nvar ConsoleApp;\n(function (ConsoleApp) {\n    ConsoleApp[\"ENTER_NAME\"] = \"Enter the product name\";\n    ConsoleApp[\"ENTER_MONEY\"] = \"Enter the purchase money\";\n    ConsoleApp[\"ENTER_AMOUNT\"] = \"Enter the quantity of the product to buy\";\n    ConsoleApp[\"DO_YOU_WANT_TO_GO_OUT\"] = \"Do you want to exit the application, yes or no?\";\n    ConsoleApp[\"MESSAGE_EXIT\"] = \"Thank you for using our services, come back soon :)\";\n    ConsoleApp[\"ACTION_TO_PERFORM\"] = \"\\u00BFWhat action do you want to perform?\";\n})(ConsoleApp || (exports.ConsoleApp = ConsoleApp = {}));\n\n\n//# sourceURL=webpack://app_maquina/./src/app/common/constants/console.app.ts?");

/***/ }),

/***/ "./src/app/common/constants/form.product.ts":
/*!**************************************************!*\
  !*** ./src/app/common/constants/form.product.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.FormProduct = void 0;\nvar FormProduct;\n(function (FormProduct) {\n    FormProduct[\"ENTER_NAME\"] = \"Enter the product name\";\n    FormProduct[\"ENTER_PRICE\"] = \"Enter the price of the product\";\n    FormProduct[\"ENTER_AMOUNT\"] = \"Enter the quantity of the product\";\n})(FormProduct || (exports.FormProduct = FormProduct = {}));\n\n\n//# sourceURL=webpack://app_maquina/./src/app/common/constants/form.product.ts?");

/***/ }),

/***/ "./src/app/common/constants/menu.machine.ts":
/*!**************************************************!*\
  !*** ./src/app/common/constants/menu.machine.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MenuMachine = void 0;\nvar MenuMachine;\n(function (MenuMachine) {\n    MenuMachine[\"PRODUCT\"] = \"***Product Selected***\";\n    MenuMachine[\"PRODUCT_NOT_REGISTRED\"] = \"The entered product is not registered\";\n    MenuMachine[\"SALE\"] = \"***Successful Sale***\";\n    MenuMachine[\"INSUFFICIENT_BACKGROUND\"] = \"Insufficient found to obtain the product\";\n    MenuMachine[\"INSUFFICIENTE_AMOUNT\"] = \"We do not have the quantity of the requested product\";\n})(MenuMachine || (exports.MenuMachine = MenuMachine = {}));\n\n\n//# sourceURL=webpack://app_maquina/./src/app/common/constants/menu.machine.ts?");

/***/ }),

/***/ "./src/app/common/constants/view.menu.ts":
/*!***********************************************!*\
  !*** ./src/app/common/constants/view.menu.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ViewMenu = void 0;\nvar ViewMenu;\n(function (ViewMenu) {\n    ViewMenu[\"WELCOME\"] = \"***WELCOME TO OUR PRODUCT MACHINE***\";\n    ViewMenu[\"ENTER_PRODUCT\"] = \"1. Enter product\";\n    ViewMenu[\"SEE_PRODUCT\"] = \"2. See the product catalog\";\n    ViewMenu[\"SELECT_PRODUCT\"] = \"3. Select the product\";\n    ViewMenu[\"ENTER_MONEY\"] = \"4. Enter money\";\n    ViewMenu[\"EXIT\"] = \"5. Exit\";\n    ViewMenu[\"ACTION_TO_PERFORM\"] = \"\\u00BFWhat action do you want to perform?\";\n})(ViewMenu || (exports.ViewMenu = ViewMenu = {}));\n\n\n//# sourceURL=webpack://app_maquina/./src/app/common/constants/view.menu.ts?");

/***/ }),

/***/ "./src/app/common/utils/menu.view.application.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/utils/menu.view.application.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MenuView = void 0;\nconst view_menu_1 = __webpack_require__(/*! ../constants/view.menu */ \"./src/app/common/constants/view.menu.ts\");\nclass MenuView {\n    printMenu() {\n        this.enumValues = Object.values(view_menu_1.ViewMenu);\n        this.enumValues.forEach((value) => {\n            console.log(value);\n        });\n    }\n}\nexports.MenuView = MenuView;\n\n\n//# sourceURL=webpack://app_maquina/./src/app/common/utils/menu.view.application.ts?");

/***/ }),

/***/ "./src/app/common/utils/messages.application.ts":
/*!******************************************************!*\
  !*** ./src/app/common/utils/messages.application.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MessagesApp = void 0;\nclass MessagesApp {\n    showFormProducto(form) {\n        console.log(form);\n    }\n    showMessage(msn) {\n        return msn;\n    }\n}\nexports.MessagesApp = MessagesApp;\n\n\n//# sourceURL=webpack://app_maquina/./src/app/common/utils/messages.application.ts?");

/***/ }),

/***/ "./src/app/ui/console/components/views.application.ts":
/*!************************************************************!*\
  !*** ./src/app/ui/console/components/views.application.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ViewsApplication = void 0;\nconst scanf_1 = __importDefault(__webpack_require__(/*! scanf */ \"./node_modules/scanf/index.js\"));\nconst console_app_1 = __webpack_require__(/*! ../../../common/constants/console.app */ \"./src/app/common/constants/console.app.ts\");\nconst menu_machine_1 = __webpack_require__(/*! ../../../common/constants/menu.machine */ \"./src/app/common/constants/menu.machine.ts\");\nconst form_product_1 = __webpack_require__(/*! ../../../common/constants/form.product */ \"./src/app/common/constants/form.product.ts\");\nclass ViewsApplication {\n    constructor(menuSVC, msn, menuView) {\n        this.menuSVC = menuSVC;\n        this.msn = msn;\n        this.menuView = menuView;\n    }\n    viewCreateProduct() {\n        let product = {};\n        this.msn.showFormProducto(form_product_1.FormProduct.ENTER_NAME);\n        product.name = (0, scanf_1.default)(\"%s\");\n        this.msn.showFormProducto(form_product_1.FormProduct.ENTER_PRICE);\n        product.price = (0, scanf_1.default)(\"%d\");\n        this.msn.showFormProducto(form_product_1.FormProduct.ENTER_AMOUNT);\n        product.amount = (0, scanf_1.default)(\"%d\");\n        this.menuSVC.createProduct(product);\n    }\n    viewShowProduct() {\n        let products = this.menuSVC.showProducts();\n        products.forEach((product, index) => {\n            console.log(`${index + 1}. product--> ${product.name} price--> ${product.price} stock--> ${product.amount}`);\n        });\n    }\n    viewSelectProduct() {\n        let nameProduct;\n        console.log(this.msn.showMessage(console_app_1.ConsoleApp.ENTER_NAME));\n        nameProduct = (0, scanf_1.default)(\"%s\");\n        let product = this.menuSVC.selectionProduct(nameProduct);\n        try {\n            if (product.length == 0) {\n                let message = this.msn.showMessage(menu_machine_1.MenuMachine.PRODUCT_NOT_REGISTRED);\n                throw new Error(message);\n            }\n            else {\n                console.log(`Product select--> ${product[0].name}`);\n            }\n        }\n        catch (error) {\n            console.log(error);\n        }\n    }\n    viewAmountProduct() {\n        let productAmount;\n        console.log(this.msn.showMessage(console_app_1.ConsoleApp.ENTER_AMOUNT));\n        productAmount = (0, scanf_1.default)(\"%f\");\n        let flag = this.menuSVC.amountProduct(productAmount);\n        try {\n            if (flag) {\n                console.log(`Requested amount--> ${productAmount}`);\n            }\n            else {\n                let message = this.msn.showMessage(menu_machine_1.MenuMachine.INSUFFICIENTE_AMOUNT);\n                throw new Error(message);\n            }\n        }\n        catch (error) {\n            console.log(error);\n        }\n    }\n    viewGetMoney() {\n        this.viewSelectProduct();\n        this.viewAmountProduct();\n        let money;\n        console.log(this.msn.showMessage(console_app_1.ConsoleApp.ENTER_MONEY));\n        money = (0, scanf_1.default)(\"%f\");\n        let purchased = this.menuSVC.getMoney(money);\n        try {\n            if (purchased.length == 0) {\n                let message = this.msn.showMessage(menu_machine_1.MenuMachine.INSUFFICIENT_BACKGROUND);\n                throw new Error(message);\n            }\n            else {\n                console.log(this.msn.showMessage(menu_machine_1.MenuMachine.SALE));\n                console.log(`Product purchased--> ${purchased[0].productName}`);\n                console.log(`Amount product--> ${purchased[0].productAmount}`);\n                console.log(`Change--> ${purchased[0].change}`);\n            }\n        }\n        catch (error) {\n            console.log(error);\n        }\n    }\n    viewMenu() {\n        this.menuView.printMenu();\n    }\n    viewExit() {\n        let flag = false;\n        let instruction = \"\";\n        console.log(this.msn.showMessage(console_app_1.ConsoleApp.DO_YOU_WANT_TO_GO_OUT));\n        instruction = (0, scanf_1.default)(\"%s\");\n        let instructionExit = this.menuSVC.exit(instruction);\n        switch (instructionExit) {\n            case \"yes\":\n                console.log(this.msn.showMessage(console_app_1.ConsoleApp.MESSAGE_EXIT));\n                break;\n            case \"no\":\n                console.log(this.msn.showMessage(console_app_1.ConsoleApp.ACTION_TO_PERFORM));\n                flag = true;\n                break;\n            default:\n                console.log(\"Sorry, option not available :(\");\n        }\n        return flag;\n    }\n}\nexports.ViewsApplication = ViewsApplication;\n\n\n//# sourceURL=webpack://app_maquina/./src/app/ui/console/components/views.application.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst app_1 = __webpack_require__(/*! ./app/app */ \"./src/app/app.ts\");\nconst menu_machine_service_1 = __webpack_require__(/*! ./app/application/services/menu.machine.service */ \"./src/app/application/services/menu.machine.service.ts\");\nconst menu_view_application_1 = __webpack_require__(/*! ./app/common/utils/menu.view.application */ \"./src/app/common/utils/menu.view.application.ts\");\nconst messages_application_1 = __webpack_require__(/*! ./app/common/utils/messages.application */ \"./src/app/common/utils/messages.application.ts\");\nconst views_application_1 = __webpack_require__(/*! ./app/ui/console/components/views.application */ \"./src/app/ui/console/components/views.application.ts\");\nconst app = new app_1.Application(new views_application_1.ViewsApplication(new menu_machine_service_1.MenuMachineService, new messages_application_1.MessagesApp, new menu_view_application_1.MenuView));\nlet flag = true;\nwhile (flag) {\n    app.myStartConsole();\n    if (app.myStartConsole() == false) {\n        flag = false;\n    }\n}\n\n\n//# sourceURL=webpack://app_maquina/./src/index.ts?");

/***/ }),

/***/ "./src/assets/data/products.json":
/*!***************************************!*\
  !*** ./src/assets/data/products.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"products\":[{\"name\":\"sprite\",\"price\":350,\"amount\":3},{\"name\":\"pepsi\",\"price\":400,\"amount\":2},{\"name\":\"doritos\",\"price\":500,\"amount\":5},{\"name\":\"coca cola\",\"price\":550,\"amount\":6}]}');\n\n//# sourceURL=webpack://app_maquina/./src/assets/data/products.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;