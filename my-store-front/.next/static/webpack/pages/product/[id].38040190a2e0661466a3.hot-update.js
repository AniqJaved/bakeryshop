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
          height: 200,
          width: 200,
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
        lineNumber: 71,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().details),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
            children: product.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: "price",
          children: (0,_utils_prices__WEBPACK_IMPORTED_MODULE_4__.formatPrices)(cart, product.variants[0])
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().selection),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Select Size"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
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
                lineNumber: 85,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().selection),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Select Quantity"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
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
              lineNumber: 107,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().ticker),
              children: options.quantity
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
              className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_6___default().qtybtn),
              onClick: function onClick() {
                return handleQtyChange("inc");
              },
              children: "+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
            lineNumber: 123,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiShoppingBag, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
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
              lineNumber: 128,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "tab-content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              children: product.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjM4MDQwMTkwYTJlMDY2MTQ2NmEzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLElBQU1XLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0FBQUE7O0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUMvQixvQkFBbUNULGlEQUFVLENBQUNHLDJEQUFELENBQTdDO0FBQUEsTUFBUU8sZ0JBQVIsZUFBUUEsZ0JBQVI7QUFBQSxNQUEwQkMsSUFBMUIsZUFBMEJBLElBQTFCOztBQUNBLGtCQUE4QlosK0NBQVEsQ0FBQztBQUNyQ2EsSUFBQUEsU0FBUyxFQUFFLEVBRDBCO0FBRXJDQyxJQUFBQSxRQUFRLEVBQUUsQ0FGMkI7QUFHckNDLElBQUFBLElBQUksRUFBRTtBQUgrQixHQUFELENBQXRDO0FBQUEsTUFBT0MsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFNQWxCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlXLE9BQUosRUFBYTtBQUNYTyxNQUFBQSxVQUFVLENBQUNYLHFFQUFZLENBQUNJLE9BQUQsQ0FBYixDQUFWO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0EsT0FBRCxDQUpNLENBQVQ7O0FBTUEsTUFBTVEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxNQUFELEVBQVk7QUFDbEMsUUFBSUEsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDcEIsVUFDRUgsT0FBTyxDQUFDRixRQUFSLEdBQ0FKLE9BQU8sQ0FBQ1UsUUFBUixDQUFpQkMsSUFBakIsQ0FBc0I7QUFBQSxZQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxlQUFZQSxFQUFFLEtBQUtOLE9BQU8sQ0FBQ0gsU0FBM0I7QUFBQSxPQUF0QixFQUNHVSxrQkFITCxFQUtFTixVQUFVLENBQUM7QUFD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QUFFakIsd0VBQWhCO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxtQ0FDRTtBQUFRLHVCQUFTLEVBQUVBLDRFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFO0FBQUEsd0JBQUlHLE9BQU8sQ0FBQ21DO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1GRCxDQWhJRCxFQWtJQTs7O0dBbElNcEM7O0tBQUFBOztBQTZKTiwrREFBZUEsT0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tpZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgQmlTaG9wcGluZ0JhZyB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xyXG5pbXBvcnQgU3RvcmVDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3N0b3JlLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UsIHJlc2V0T3B0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXItZnVuY3Rpb25zXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9wcm9kdWN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZXMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJpY2VzXCI7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKHsgcHJvZHVjdCB9KSA9PiB7XHJcbiAgY29uc3QgeyBhZGRWYXJpYW50VG9DYXJ0LCBjYXJ0IH0gPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dCk7XHJcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoe1xyXG4gICAgdmFyaWFudElkOiBcIlwiLFxyXG4gICAgcXVhbnRpdHk6IDAsXHJcbiAgICBzaXplOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByb2R1Y3QpIHtcclxuICAgICAgc2V0T3B0aW9ucyhyZXNldE9wdGlvbnMocHJvZHVjdCkpO1xyXG4gICAgfVxyXG4gIH0sIFtwcm9kdWN0XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVF0eUNoYW5nZSA9IChhY3Rpb24pID0+IHtcclxuICAgIGlmIChhY3Rpb24gPT09IFwiaW5jXCIpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIG9wdGlvbnMucXVhbnRpdHkgPFxyXG4gICAgICAgIHByb2R1Y3QudmFyaWFudHMuZmluZCgoeyBpZCB9KSA9PiBpZCA9PT0gb3B0aW9ucy52YXJpYW50SWQpXHJcbiAgICAgICAgICAuaW52ZW50b3J5X3F1YW50aXR5XHJcbiAgICAgIClcclxuICAgICAgICBzZXRPcHRpb25zKHtcclxuICAgICAgICAgIHZhcmlhbnRJZDogb3B0aW9ucy52YXJpYW50SWQsXHJcbiAgICAgICAgICBxdWFudGl0eTogb3B0aW9ucy5xdWFudGl0eSArIDEsXHJcbiAgICAgICAgICBzaXplOiBvcHRpb25zLnNpemUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uID09PSBcImRlY1wiKSB7XHJcbiAgICAgIGlmIChvcHRpb25zLnF1YW50aXR5ID4gMSlcclxuICAgICAgICBzZXRPcHRpb25zKHtcclxuICAgICAgICAgIHZhcmlhbnRJZDogb3B0aW9ucy52YXJpYW50SWQsXHJcbiAgICAgICAgICBxdWFudGl0eTogb3B0aW9ucy5xdWFudGl0eSAtIDEsXHJcbiAgICAgICAgICBzaXplOiBvcHRpb25zLnNpemUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVG9CYWcgPSAoKSA9PiB7XHJcbiAgICBhZGRWYXJpYW50VG9DYXJ0KHtcclxuICAgICAgdmFyaWFudElkOiBvcHRpb25zLnZhcmlhbnRJZCxcclxuICAgICAgcXVhbnRpdHk6IG9wdGlvbnMucXVhbnRpdHksXHJcbiAgICB9KTtcclxuICAgIGlmIChwcm9kdWN0KSBzZXRPcHRpb25zKHJlc2V0T3B0aW9ucyhwcm9kdWN0KSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGFjZWhvbGRlcn0+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgbG9hZGluZz1cImVhZ2VyXCJcclxuICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYm5haWx9XHJcbiAgICAgICAgICAgIGFsdD17YCR7cHJvZHVjdC50aXRsZX1gfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9maWd1cmU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgPHNwYW4gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDE+e3Byb2R1Y3QudGl0bGV9PC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj57Zm9ybWF0UHJpY2VzKGNhcnQsIHByb2R1Y3QudmFyaWFudHNbMF0pfTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0aW9ufT5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IFNpemU8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0b3JzXCI+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QudmFyaWFudHNcclxuICAgICAgICAgICAgICAgIC5zbGljZSgwKVxyXG4gICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17di5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnNpemVidG59ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYudGl0bGUgPT09IG9wdGlvbnMuc2l6ZSA/IHN0eWxlcy5zZWxlY3RlZCA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudElkOiB2LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBvcHRpb25zLnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHYudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3YudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0aW9ufT5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IFF1YW50aXR5PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF0eX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucXR5YnRufVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUXR5Q2hhbmdlKFwiZGVjXCIpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aWNrZXJ9PntvcHRpb25zLnF1YW50aXR5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5xdHlidG59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVRdHlDaGFuZ2UoXCJpbmNcIil9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRidG59IG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFRvQmFnKCl9PlxyXG4gICAgICAgICAgICA8c3Bhbj5BZGQgdG8gQmFza2V0PC9zcGFuPlxyXG4gICAgICAgICAgICA8QmlTaG9wcGluZ0JhZyAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYnN9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi10aXRsZXNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnRhYnRpdGxlfT5Qcm9kdWN0IERlc2NyaXB0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vL2NyZWF0ZSBhIE1lZHVzYSBjbGllbnRcclxuY29uc3QgY2xpZW50ID0gY3JlYXRlQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHByb2R1Y3RzXHJcbiAgY29uc3QgeyBwcm9kdWN0cyB9ID0gYXdhaXQgY2xpZW50LnByb2R1Y3RzLmxpc3QoKTtcclxuXHJcbiAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gdGhlIHByb2R1Y3RzXHJcbiAgY29uc3QgcGF0aHMgPSBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XHJcbiAgICBwYXJhbXM6IHsgaWQ6IHByb2R1Y3QuaWQgfSxcclxuICB9KSk7XHJcblxyXG4gIC8vIFdlJ2xsIHByZS1yZW5kZXIgb25seSB0aGVzZSBwYXRocyBhdCBidWlsZCB0aW1lLlxyXG4gIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xyXG59XHJcblxyXG4vLyBUaGlzIGFsc28gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIC8vIHBhcmFtcyBjb250YWlucyB0aGUgcHJvZHVjdCBgaWRgLlxyXG4gIC8vIElmIHRoZSByb3V0ZSBpcyBsaWtlIC9wcm9kdWN0L3Byb2RfMSwgdGhlbiBwYXJhbXMuaWQgaXMgMVxyXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gYXdhaXQgY2xpZW50LnByb2R1Y3RzLnJldHJpZXZlKHBhcmFtcy5pZCk7XHJcblxyXG4gIC8vIFBhc3MgcG9zdCBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xyXG4gIHJldHVybiB7IHByb3BzOiB7IHByb2R1Y3QgfSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJJbWFnZSIsIkJpU2hvcHBpbmdCYWciLCJTdG9yZUNvbnRleHQiLCJmb3JtYXRQcmljZSIsInJlc2V0T3B0aW9ucyIsInN0eWxlcyIsImZvcm1hdFByaWNlcyIsIlByb2R1Y3QiLCJwcm9kdWN0IiwiYWRkVmFyaWFudFRvQ2FydCIsImNhcnQiLCJ2YXJpYW50SWQiLCJxdWFudGl0eSIsInNpemUiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsImhhbmRsZVF0eUNoYW5nZSIsImFjdGlvbiIsInZhcmlhbnRzIiwiZmluZCIsImlkIiwiaW52ZW50b3J5X3F1YW50aXR5IiwiaGFuZGxlQWRkVG9CYWciLCJjb250YWluZXIiLCJpbWFnZSIsInBsYWNlaG9sZGVyIiwidGh1bWJuYWlsIiwidGl0bGUiLCJpbmZvIiwiZGV0YWlscyIsInNlbGVjdGlvbiIsInNsaWNlIiwicmV2ZXJzZSIsIm1hcCIsInYiLCJzaXplYnRuIiwic2VsZWN0ZWQiLCJxdHkiLCJxdHlidG4iLCJ0aWNrZXIiLCJhZGRidG4iLCJ0YWJzIiwidGFidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=