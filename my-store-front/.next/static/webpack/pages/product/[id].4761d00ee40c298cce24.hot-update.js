"use strict";
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var _context_store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/store-context */ "./context/store-context.js");
/* harmony import */ var _utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/helper-functions */ "./utils/helper-functions.js");
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/product.module.css */ "./styles/product.module.css");
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_prices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/prices */ "./utils/prices.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\ALL-Code\\Js-code\\Node-Projects\\shopeee\\my-store-front\\pages\\product\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();










var Product = function Product(_ref) {
  _s();

  var product = _ref.product;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_store_context__WEBPACK_IMPORTED_MODULE_2__.default),
      addVariantToCart = _useContext.addVariantToCart,
      cart = _useContext.cart;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    variantId: "",
    quantity: 0,
    size: ""
  }),
      options = _useState[0],
      setOptions = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (product) {
      setOptions((0,_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__.resetOptions)(product));
    }
  }, [product]);

  var handleQtyChange = function handleQtyChange(action) {
    if (action === "inc") {
      if (options.quantity < product.variants.find(function (_ref2) {
        var id = _ref2.id;
        return id === options.variantId;
      }).inventory_quantity) setOptions({
        variantId: options.variantId,
        quantity: options.quantity + 1,
        size: options.size
      });
    }

    if (action === "dec") {
      if (options.quantity > 1) setOptions({
        variantId: options.variantId,
        quantity: options.quantity - 1,
        size: options.size
      });
    }
  };

  var handleAddToBag = function handleAddToBag() {
    addVariantToCart({
      variantId: options.variantId,
      quantity: options.quantity
    });
    if (product) setOptions((0,_utils_helper_functions__WEBPACK_IMPORTED_MODULE_3__.resetOptions)(product));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("figure", {
      className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().image),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().placeholder),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          objectFit: "cover",
          layout: "fill",
          loading: "eager",
          src: product.thumbnail,
          alt: "".concat(product.title)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().details),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            children: product.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "price",
          children: (0,_utils_prices__WEBPACK_IMPORTED_MODULE_4__.formatPrices)(cart, product.variants[0])
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().selection),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Select Size"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "selectors",
            children: product.variants.slice(0).reverse().map(function (v) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
                className: "".concat((_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().sizebtn), " ").concat(v.title === options.size ? (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().selected) : null),
                onClick: function onClick() {
                  return setOptions({
                    variantId: v.id,
                    quantity: options.quantity,
                    size: v.title
                  });
                },
                children: v.title
              }, v.id, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().selection),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Select Quantity"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().qty),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().qtybtn),
              onClick: function onClick() {
                return handleQtyChange("dec");
              },
              children: "-"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().ticker),
              children: options.quantity
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().qtybtn),
              onClick: function onClick() {
                return handleQtyChange("inc");
              },
              children: "+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().addbtn),
          onClick: function onClick() {
            return handleAddToBag();
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            children: "Add to Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiShoppingBag, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().tabs),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "tab-titles",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().tabtitle),
              children: "Product Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "tab-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              children: product.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
}; //create a Medusa client


_s(Product, "YsnEHj0ftMBwRyxCf0vaJR3LWkU=");

_c = Product;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjQ3NjFkMDBlZTQwYzI5OGNjZTI0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLElBQU1XLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUMvQixvQkFBbUNULGlEQUFVLENBQUNHLDJEQUFELENBQTdDO0FBQUEsTUFBUU8sZ0JBQVIsZUFBUUEsZ0JBQVI7QUFBQSxNQUEwQkMsSUFBMUIsZUFBMEJBLElBQTFCOztBQUNBLGtCQUE4QlosK0NBQVEsQ0FBQztBQUNyQ2EsSUFBQUEsU0FBUyxFQUFFLEVBRDBCO0FBRXJDQyxJQUFBQSxRQUFRLEVBQUUsQ0FGMkI7QUFHckNDLElBQUFBLElBQUksRUFBRTtBQUgrQixHQUFELENBQXRDO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFNQWxCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlXLE9BQUosRUFBYTtBQUNYTyxNQUFBQSxVQUFVLENBQUNYLHFFQUFZLENBQUNJLE9BQUQsQ0FBYixDQUFWO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0EsT0FBRCxDQUpNLENBQVQ7O0FBTUEsTUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxNQUFELEVBQVk7QUFDbEMsUUFBSUEsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEIsVUFDRUgsT0FBTyxDQUFDRixRQUFSLEdBQ0FKLE9BQU8sQ0FBQ1UsUUFBUixDQUFpQkMsSUFBakIsQ0FBc0I7QUFBQSxZQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxlQUFZQSxFQUFFLEtBQUtOLE9BQU8sQ0FBQ0gsU0FBM0I7QUFBQSxPQUF0QixFQUNHVSxrQkFITCxFQUtFTixVQUFVLENBQUM7QUFD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QUFmO0FBQUEsbUNBQ0U7QUFBUSx1QkFBUyxFQUFFQSw0RUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxtQ0FDRTtBQUFBLHdCQUFJRyxPQUFPLENBQUNtQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpRkQsQ0E5SEQsRUFnSUE7OztHQWhJTXBDOztLQUFBQTs7QUEySk4sK0RBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IEJpU2hvcHBpbmdCYWcgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuaW1wb3J0IFN0b3JlQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9zdG9yZS1jb250ZXh0XCI7XHJcbmltcG9ydCB7IGZvcm1hdFByaWNlLCByZXNldE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvaGVscGVyLWZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvcHJvZHVjdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCIuLi8uLi91dGlscy9jbGllbnRcIjtcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2VzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3ByaWNlc1wiO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgYWRkVmFyaWFudFRvQ2FydCwgY2FydCB9ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpO1xyXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKHtcclxuICAgIHZhcmlhbnRJZDogXCJcIixcclxuICAgIHF1YW50aXR5OiAwLFxyXG4gICAgc2l6ZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwcm9kdWN0KSB7XHJcbiAgICAgIHNldE9wdGlvbnMocmVzZXRPcHRpb25zKHByb2R1Y3QpKTtcclxuICAgIH1cclxuICB9LCBbcHJvZHVjdF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVRdHlDaGFuZ2UgPSAoYWN0aW9uKSA9PiB7XHJcbiAgICBpZiAoYWN0aW9uID09PSBcImluY1wiKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBvcHRpb25zLnF1YW50aXR5IDxcclxuICAgICAgICBwcm9kdWN0LnZhcmlhbnRzLmZpbmQoKHsgaWQgfSkgPT4gaWQgPT09IG9wdGlvbnMudmFyaWFudElkKVxyXG4gICAgICAgICAgLmludmVudG9yeV9xdWFudGl0eVxyXG4gICAgICApXHJcbiAgICAgICAgc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICB2YXJpYW50SWQ6IG9wdGlvbnMudmFyaWFudElkLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IG9wdGlvbnMucXVhbnRpdHkgKyAxLFxyXG4gICAgICAgICAgc2l6ZTogb3B0aW9ucy5zaXplLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbiA9PT0gXCJkZWNcIikge1xyXG4gICAgICBpZiAob3B0aW9ucy5xdWFudGl0eSA+IDEpXHJcbiAgICAgICAgc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICB2YXJpYW50SWQ6IG9wdGlvbnMudmFyaWFudElkLFxyXG4gICAgICAgICAgcXVhbnRpdHk6IG9wdGlvbnMucXVhbnRpdHkgLSAxLFxyXG4gICAgICAgICAgc2l6ZTogb3B0aW9ucy5zaXplLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRvQmFnID0gKCkgPT4ge1xyXG4gICAgYWRkVmFyaWFudFRvQ2FydCh7XHJcbiAgICAgIHZhcmlhbnRJZDogb3B0aW9ucy52YXJpYW50SWQsXHJcbiAgICAgIHF1YW50aXR5OiBvcHRpb25zLnF1YW50aXR5LFxyXG4gICAgfSk7XHJcbiAgICBpZiAocHJvZHVjdCkgc2V0T3B0aW9ucyhyZXNldE9wdGlvbnMocHJvZHVjdCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxhY2Vob2xkZXJ9PlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJlYWdlclwiXHJcbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYm5haWx9XHJcbiAgICAgICAgICAgIGFsdD17YCR7cHJvZHVjdC50aXRsZX1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDE+e3Byb2R1Y3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj57Zm9ybWF0UHJpY2VzKGNhcnQsIHByb2R1Y3QudmFyaWFudHNbMF0pfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0aW9ufT5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IFNpemU8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0b3JzXCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QudmFyaWFudHNcclxuICAgICAgICAgICAgICAgIC5zbGljZSgwKVxyXG4gICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17di5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNpemVidG59ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudGl0bGUgPT09IG9wdGlvbnMuc2l6ZSA/IHN0eWxlcy5zZWxlY3RlZCA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudElkOiB2LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBvcHRpb25zLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHYudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3YudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0aW9ufT5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IFF1YW50aXR5PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF0eX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucXR5YnRufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUXR5Q2hhbmdlKFwiZGVjXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aWNrZXJ9PntvcHRpb25zLnF1YW50aXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5xdHlidG59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdHlDaGFuZ2UoXCJpbmNcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRidG59IG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvQmFnKCl9PlxyXG4gICAgICAgICAgICA8c3Bhbj5BZGQgdG8gQmFza2V0PC9zcGFuPlxyXG4gICAgICAgICAgICA8QmlTaG9wcGluZ0JhZyAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYnN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi10aXRsZXNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnRhYnRpdGxlfT5Qcm9kdWN0IERlc2NyaXB0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vL2NyZWF0ZSBhIE1lZHVzYSBjbGllbnRcclxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHByb2R1Y3RzXHJcbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgY2xpZW50LnByb2R1Y3RzLmxpc3QoKTtcclxuXHJcbiAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gdGhlIHByb2R1Y3RzXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgaWQ6IHByb2R1Y3QuaWQgfSxcclxuICB9KSk7XHJcblxyXG4gIC8vIFdlJ2xsIHByZS1yZW5kZXIgb25seSB0aGVzZSBwYXRocyBhdCBidWlsZCB0aW1lLlxyXG4gIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xyXG59XHJcblxyXG4vLyBUaGlzIGFsc28gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIC8vIHBhcmFtcyBjb250YWlucyB0aGUgcHJvZHVjdCBgaWRgLlxyXG4gIC8vIElmIHRoZSByb3V0ZSBpcyBsaWtlIC9wcm9kdWN0L3Byb2RfMSwgdGhlbiBwYXJhbXMuaWQgaXMgMVxyXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gYXdhaXQgY2xpZW50LnByb2R1Y3RzLnJldHJpZXZlKHBhcmFtcy5pZCk7XHJcblxyXG4gIC8vIFBhc3MgcG9zdCBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHByb2R1Y3QgfSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJJbWFnZSIsIkJpU2hvcHBpbmdCYWciLCJTdG9yZUNvbnRleHQiLCJmb3JtYXRQcmljZSIsInJlc2V0T3B0aW9ucyIsInN0eWxlcyIsImZvcm1hdFByaWNlcyIsIlByb2R1Y3QiLCJwcm9kdWN0IiwiYWRkVmFyaWFudFRvQ2FydCIsImNhcnQiLCJ2YXJpYW50SWQiLCJxdWFudGl0eSIsInNpemUiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImhhbmRsZVF0eUNoYW5nZSIsImFjdGlvbiIsInZhcmlhbnRzIiwiZmluZCIsImlkIiwiaW52ZW50b3J5X3F1YW50aXR5IiwiaGFuZGxlQWRkVG9CYWciLCJjb250YWluZXIiLCJpbWFnZSIsInBsYWNlaG9sZGVyIiwidGh1bWJuYWlsIiwidGl0bGUiLCJpbmZvIiwiZGV0YWlscyIsInNlbGVjdGlvbiIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCIsInYiLCJzaXplYnRuIiwic2VsZWN0ZWQiLCJxdHkiLCJxdHlidG4iLCJ0aWNrZXIiLCJhZGRidG4iLCJ0YWJzIiwidGFidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=