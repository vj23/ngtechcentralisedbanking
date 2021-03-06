(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-button_3.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/ui-components/dist/esm-es5/amplify-button_3.entry.js ***!
  \****************************************************************************************/
/*! exports provided: amplify_button, amplify_loading_spinner, amplify_section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_button", function() { return AmplifyButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_loading_spinner", function() { return AmplifyLoadingSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "amplify_section", function() { return AmplifySection; });
/* harmony import */ var _index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-3fb5c139.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/index-3fb5c139.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _auth_types_78df304e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-types-78df304e.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/auth-types-78df304e.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _Translations_c833f663_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Translations-c833f663.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/Translations-c833f663.js");
/* harmony import */ var _constants_d1abe7de_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants-d1abe7de.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/constants-d1abe7de.js");
/* harmony import */ var _helpers_09e7c279_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers-09e7c279.js */ "./node_modules/@aws-amplify/ui-components/dist/esm-es5/helpers-09e7c279.js");







var amplifyButtonCss = ":host{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);--text-transform:uppercase;--icon-fill:var(--amplify-white);--icon-height:1.25rem;--padding:1rem;--width:100%;width:var(--width);text-align:center}@media (min-width: 672px){:host{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-sm);font-family:var(--amplify-font-family);font-weight:600;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);padding:var(--padding);letter-spacing:0.75px;text-transform:var(--text-transform);background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.icon{background-color:inherit;border:none;font:inherit;cursor:pointer;padding:var(--padding)}.icon amplify-icon{--icon-fill-color:var(--icon-fill);--height:var(--icon-height)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";
var AmplifyButton = /** @class */ (function () {
    function AmplifyButton(hostRef) {
        var _this = this;
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Type of the button: 'button', 'submit' or 'reset' */
        this.type = 'button';
        /** Variant of a button: 'button' | 'anchor | 'icon' */
        this.variant = 'button';
        /** Disabled state of the button */
        this.disabled = false;
        this.handleClick = function (ev) {
            if (_this.handleButtonClick) {
                _this.handleButtonClick(ev);
            }
            else if (Object(_helpers_09e7c279_js__WEBPACK_IMPORTED_MODULE_6__["e"])(_this.el) && _this.type == 'submit') {
                // this button wants to specifically submit a form
                // climb up the dom to see if we're in a <form>
                // and if so, then use JS to submit it
                var form = _this.el.closest('form');
                if (!form) {
                    // Check for form inside of form section's shadow dom
                    var formSection = _this.el.closest('amplify-form-section');
                    form = formSection && formSection.shadowRoot.querySelector('form');
                }
                if (form) {
                    ev.preventDefault();
                    var fakeButton = document.createElement('button');
                    fakeButton.type = _this.type;
                    fakeButton.style.display = 'none';
                    form.appendChild(fakeButton);
                    fakeButton.click();
                    fakeButton.remove();
                }
            }
        };
    }
    AmplifyButton.prototype.render = function () {
        var _a;
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: (_a = {},
                _a[this.variant] = true,
                _a), type: this.type, disabled: this.disabled, onClick: this.handleClick }, this.variant === 'icon' && Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", { name: this.icon }), Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(AmplifyButton.prototype, "el", {
        get: function () { return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return AmplifyButton;
}());
AmplifyButton.style = amplifyButtonCss;
var amplifyLoadingSpinnerCss = ":host{--spinner-circle-fill:var(--amplify-smoke-white);--spinner-bar-fill:var(--amplify-primary-color);--width:0.875rem;--height:0.875rem}.loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:var(--width);height:var(--height)}.loading-spinner svg #spinner-circle{fill:var(--spinner-circle-fill)}.loading-spinner svg #spinner-bar{fill:var(--spinner-bar-fill)}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";
var AmplifyLoadingSpinner = /** @class */ (function () {
    function AmplifyLoadingSpinner(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    AmplifyLoadingSpinner.prototype.render = function () {
        return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("amplify-icon", { class: "loading-spinner", name: "loading" });
    };
    return AmplifyLoadingSpinner;
}());
AmplifyLoadingSpinner.style = amplifyLoadingSpinnerCss;
var amplifySectionCss = ":host{--font-family:var(--amplify-font-family);--background-color:var(--amplify-background-color)}.section{position:relative;margin-bottom:var(--margin-bottom, 20px);background-color:var(--background-color);padding:var(--padding, 35px 40px);text-align:left;display:inline-block;border-radius:var(--border-radius, 6px);-webkit-box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));box-shadow:var(--box-shadow, 1px 1px 4px 0 rgba(0, 0, 0, 0.15));-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:var(--min-width, 20rem)}@media (min-width: 672px){.section{width:var(--width, 28.75rem)}}";
var AmplifySection = /** @class */ (function () {
    function AmplifySection(hostRef) {
        Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Equivalent to html section role */
        this.role = 'application';
    }
    AmplifySection.prototype.render = function () {
        return (Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "section", role: this.role }, Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(AmplifySection.prototype, "el", {
        get: function () { return Object(_index_3fb5c139_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return AmplifySection;
}());
AmplifySection.style = amplifySectionCss;



/***/ })

}]);
//# sourceMappingURL=11.js.map