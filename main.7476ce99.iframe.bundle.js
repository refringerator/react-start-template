(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[179],{"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});__webpack_require__("./node_modules/react/index.js");var i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),i18nextBrowserLanguageDetector=__webpack_require__("./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js"),esm=__webpack_require__("./node_modules/i18next-http-backend/esm/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ns=["common"],supportedLngs=["en","ru"],resources=ns.reduce((function(acc,n){return supportedLngs.forEach((function(lng){acc[lng]||(acc[lng]={}),acc[lng]=_objectSpread(_objectSpread({},acc[lng]),{},_defineProperty({},n,__webpack_require__("./src/locales sync recursive ^\\.\\/.*\\.json$")("./".concat(lng,"/").concat(n,".json"))))})),acc}),{});i18next.ZP.use(esm.Z).use(i18nextBrowserLanguageDetector.Z).use(es.Db).init({debug:!0,lng:"ru",fallbackLng:"ru",defaultNS:"common",ns,interpolation:{escapeValue:!1},supportedLngs,resources});const i18n=i18next.ZP;var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),withThemeProvider=function withThemeProvider(Story,context){var theme=context.globals.theme;return(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:{mode:theme||"ocean"},children:(0,jsx_runtime.jsx)(Story,{})})};withThemeProvider.displayName="withThemeProvider";const _storybook_preview={globals:{locale:"ru",locales:{en:{title:"English",left:"🇺🇸"},ru:{title:"Russian",left:"🇷🇺"}}},globalTypes:{theme:{description:"Global theme for components",defaultValue:"ocean",toolbar:{title:"Тема",icon:"faceneutral",items:[{value:"ocean",title:"Море"},{value:"forest",title:"Лес"}],dynamicTitle:!0}}},parameters:{i18n,actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Общее","Базовые элементы","Элементы магазина","*","WIP"]}}},decorators:[withThemeProvider]}},"./src/locales sync recursive ^\\.\\/.*\\.json$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./en/common.json":"./src/locales/en/common.json","./ru/common.json":"./src/locales/ru/common.json"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src/locales sync recursive ^\\.\\/.*\\.json$"},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/button/button.stories":["./src/components/button/button.stories.ts",229],"./components/button/button.stories.ts":["./src/components/button/button.stories.ts",229],"./components/cart-button/CartButton.stories":["./src/components/cart-button/CartButton.stories.tsx",574],"./components/cart-button/CartButton.stories.tsx":["./src/components/cart-button/CartButton.stories.tsx",574],"./components/cart-item/CartItem.stories":["./src/components/cart-item/CartItem.stories.tsx",422],"./components/cart-item/CartItem.stories.tsx":["./src/components/cart-item/CartItem.stories.tsx",422],"./components/header/header.stories":["./src/components/header/header.stories.tsx",838],"./components/header/header.stories.tsx":["./src/components/header/header.stories.tsx",838],"./components/layout/layout.stories":["./src/components/layout/layout.stories.tsx",638],"./components/layout/layout.stories.tsx":["./src/components/layout/layout.stories.tsx",638],"./components/logo/logo.stories":["./src/components/logo/logo.stories.tsx",936],"./components/logo/logo.stories.tsx":["./src/components/logo/logo.stories.tsx",936],"./components/modal-window/modal.stories":["./src/components/modal-window/modal.stories.ts",214],"./components/modal-window/modal.stories.ts":["./src/components/modal-window/modal.stories.ts",214],"./components/modal-wrapper/ModalWrapper.stories":["./src/components/modal-wrapper/ModalWrapper.stories.tsx",704],"./components/modal-wrapper/ModalWrapper.stories.tsx":["./src/components/modal-wrapper/ModalWrapper.stories.tsx",704],"./components/product-card/ProductCard.stories":["./src/components/product-card/ProductCard.stories.tsx",339],"./components/product-card/ProductCard.stories.tsx":["./src/components/product-card/ProductCard.stories.tsx",339],"./components/product-page/ProductPage.stories":["./src/components/product-page/ProductPage.stories.tsx",511],"./components/product-page/ProductPage.stories.tsx":["./src/components/product-page/ProductPage.stories.tsx",511],"./components/select/Select.stories":["./src/components/select/Select.stories.tsx",993],"./components/select/Select.stories.tsx":["./src/components/select/Select.stories.tsx",993],"./components/switch/Switch.stories":["./src/components/switch/Switch.stories.tsx",143],"./components/switch/Switch.stories.tsx":["./src/components/switch/Switch.stories.tsx",143]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./node_modules/storybook-react-i18next/dist/preview.mjs"),__webpack_require__("./.storybook/preview.tsx")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__},"?4f7e":()=>{},"./src/locales/en/common.json":module=>{"use strict";module.exports=JSON.parse('{"welcome":"Велком ту май апп."}')},"./src/locales/ru/common.json":module=>{"use strict";module.exports=JSON.parse('{"welcome":"Я пример приложения."}')}},__webpack_require__=>{__webpack_require__.O(0,[78],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);