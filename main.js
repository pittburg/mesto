(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,c){var a=i.openConfirm;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._item=e,this._userId=n,this._view=r.querySelector(".card").cloneNode(!0),this._openModal=o,this._openConfirm=a,this._trashIcon=this._view.querySelector(".card__trash"),this._likeButton=this._view.querySelector(".card__like"),this._numberOfLikes=this._view.querySelector(".card__like-counter"),this._cardTitle=this._view.querySelector(".card__title"),this._photo=this._view.querySelector(".card__photo"),this._api=c}var n,r;return n=t,(r=[{key:"_toggleLike",value:function(e){this._numberOfLikes.textContent=e.likes.length,this._likeButton.classList.toggle("card__like_active")}},{key:"deleteCard",value:function(e){this._view.remove(e._id),this._view=null}},{key:"_setLike",value:function(e){var t=this;this._api.setLike(e).then((function(e){return t._toggleLike(e)})).catch((function(e){console.log("Что-то не так: ".concat(e))}))}},{key:"_deleteLike",value:function(e){var t=this;this._api.deleteLike(e).then((function(e){return t._toggleLike(e)})).catch((function(e){console.log("Что-то не так: ".concat(e))}))}},{key:"_checkTrashIcon",value:function(){this._userId!==this._item.owner._id&&this._trashIcon.remove()}},{key:"_checkLike",value:function(){var e=this;this._item.likes.forEach((function(t){e._userId===t._id&&e._likeButton.classList.add("card__like_active")}))}},{key:"_addListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("card__like_active")?e._deleteLike(e._item):e._setLike(e._item)})),this._trashIcon.addEventListener("click",(function(){e._openConfirm(e._item)})),this._photo.addEventListener("click",(function(){return e._openModal(e._item.name,e._item.link)}))}},{key:"render",value:function(){return this._cardTitle.textContent=this._item.name,this._numberOfLikes.textContent=this._item.likes.length,this._photo.src=this._item.link,this._photo.alt=this._item.name,this._checkTrashIcon(),this._checkLike(),this._addListeners(),this._view}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();const n=t;function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._gallery=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._gallery.prepend(e)}},{key:"renderCards",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const i=o;function c(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inputErrorClass=t.inputErrorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._errorClass=t.errorClass,this._form=n}var t,n;return t=e,(n=[{key:"_handleSubmit",value:function(e){e.preventDefault()}},{key:"_toggleButtonState",value:function(){this._button=this._form.querySelector(this._submitButtonSelector),this._button.disabled=!this._form.checkValidity(),this._button.classList.toggle(this._inactiveButtonClass,!this._form.checkValidity())}},{key:"_showError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_handleFieldValidation",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_resetError",value:function(){var e=this;this._inputs=c(this._form.querySelectorAll(this._inputSelector)),this._inputs.forEach((function(t){return e._hideError(t)}))}},{key:"checkForm",value:function(){this._resetError(),this._toggleButtonState()}},{key:"_setFormListeners",value:function(){var e=this;this._form.addEventListener("submit",this._handleSubmit),this._form.addEventListener("input",(function(){return e._toggleButtonState()})),this._inputs=c(this._form.querySelectorAll(this._inputSelector)),this._inputs.forEach((function(t){t.addEventListener("input",(function(){return e._handleFieldValidation(t)}))})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setFormListeners()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const l=s;function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._component=n,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._component.classList.add(this._config.popupOpenClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._component.classList.remove(this._config.popupOpenClass),document.addEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close(),e.target.classList.contains("popup__close")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._component.addEventListener("click",(function(t){return e._handleClickClose(t)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const h=p;function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function m(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&b(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e,t))._image=n._component.querySelector(".popup__photo"),n._caption=n._component.querySelector(".popup__caption"),n}return t=c,(n=[{key:"open",value:function(e,t){d(k(c.prototype),"open",this).call(this),this._caption.textContent=e,this._image.src=t,this._image.alt=e}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(h);const w=g;function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function j(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&L(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(r);if(o){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function c(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,e,t))._form=r._component.querySelector(".popup__form"),r._inputs=r._component.querySelectorAll(".popup__input"),r._submitForm=n,r._popupButton=r._form.querySelector(".popup__button"),r._popupButtonText=r._popupButton.textContent,r}return t=c,(n=[{key:"renderLoading",value:function(e){this._popupButton.textContent=e?"Сохранение...":this._popupButtonText}},{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputs.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"_handlerSubmit",value:function(e){e.preventDefault(),this._submitForm(this._getInputValues())}},{key:"close",value:function(){E(P(c.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;E(P(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){return e._handlerSubmit(t)}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(h);const R=q;function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=U(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function U(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function A(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&x(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e,t))._form=n._component.querySelector(".popup__form"),n}return t=c,(n=[{key:"handlerSubmit",value:function(e){this._submitForm=e}},{key:"setEventListeners",value:function(){var e=this;B(V(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm()}))}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(h);const D=F;function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._about=n,this._avatar=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const J=N;function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const $=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.place,link:e.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var z=document.querySelector(".popup_edit"),G=document.querySelector(".popup_add"),K=document.querySelector(".popup_confirm"),Q=document.querySelector(".popup_avatar"),W=document.querySelector(".profile__button_edit"),X=document.querySelector(".profile__button_add"),Y=document.querySelector(".profile__avatar-button"),Z=document.querySelector(".popup__form_add"),ee=document.querySelector(".popup__form_edit"),te=document.querySelector(".popup__form_avatar"),ne=document.querySelector(".popup__input_type_name"),re=document.querySelector(".popup__input_type_about"),oe=(document.querySelector(".popup__input_type_place"),document.querySelector(".popup__input_type_link"),document.querySelector(".profile__title")),ie=document.querySelector(".profile__subtitle"),ce=document.querySelector(".profile__avatar"),ae=document.querySelector(".popup_modal"),ue=document.querySelector(".cards-grid"),se=document.querySelector(".template").content,le={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible",popupOpenClass:"popup_opened"};function fe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var pe,he=new $({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-32",headers:{authorization:"f5a0177a-689d-461c-8da0-42fcda5fb7c6","Content-Type":"application/json"}});Promise.all([he.getUserInfo(),he.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return fe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fe(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ke.setUserInfo(o),pe=o._id,me.renderCards(i)})).catch((function(e){console.log("Что-то не так: ".concat(e))}));var _e=new R(le,G,(function(e){_e.renderLoading(!0),he.addCard(e).then((function(e){me.addItem(Oe(e)),_e.close()})).catch((function(e){console.log("Что-то не так: ".concat(e))})).finally((function(){_e.renderLoading(!1)}))}));_e.setEventListeners();var ye=new R(le,z,(function(e){ye.renderLoading(!0),he.setUserInfo(e).then((function(e){ke.setUserInfo(e),ye.close()})).catch((function(e){console.log("Что-то не так: ".concat(e))})).finally((function(){ye.renderLoading(!1)}))}));ye.setEventListeners();var de=new R(le,Q,(function(e){de.renderLoading(!0),he.setAvatar(e).then((function(e){ke.setUserInfo(e),de.close()})).catch((function(e){console.log("Что-то не так: ".concat(e))})).finally((function(){de.renderLoading(!1)}))}));de.setEventListeners();var ve=new w(le,ae);ve.setEventListeners();var be=new D(le,K);be.setEventListeners();var me=new i({renderer:function(e){me.addItem(Oe(e))}},ue),ke=new J(oe,ie,ce),ge=new l(le,Z);ge.enableValidation();var we=new l(le,ee);we.enableValidation();var Se=new l(le,te);function Oe(e){var t=new n(e,pe,se,Ee,{openConfirm:function(e){be.open(),be.handlerSubmit((function(){he.deleteCard(e).then((function(){t.deleteCard(e),be.close()})).catch((function(e){console.log("Что-то не так: ".concat(e))}))}))}},he);return t.render()}function Ee(e,t){ve.open(e,t)}Se.enableValidation(),Y.addEventListener("click",(function(){de.open(),Se.checkForm()})),W.addEventListener("click",(function(){ye.open();var e=ke.getUserInfo();ne.value=e.name,re.value=e.about,we.checkForm()})),X.addEventListener("click",(function(){_e.open(),ge.checkForm()}))})();