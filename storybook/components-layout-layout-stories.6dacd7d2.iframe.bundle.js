"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[638],{"./src/components/layout/layout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LayoutWithHeader:()=>LayoutWithHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>layout_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,langueages=__webpack_require__("./src/locales/langueages.ts"),Header=__webpack_require__("./src/components/header/Header.tsx"),Select=__webpack_require__("./src/components/select/Select.tsx"),Switch=__webpack_require__("./src/components/switch/Switch.tsx"),styled_components_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),styled_theming=__webpack_require__("./node_modules/styled-theming/index.js"),styled_theming_default=__webpack_require__.n(styled_theming),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _LayoutWithHeader$par,_LayoutWithHeader$par2,layoutTextBackgroundColor=styled_theming_default()("mode",{ocean:(0,styled_components_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    background-color: #fff;\n    color: #000;\n  "]))),forest:(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    background-color: #f1f2e9;\n    color: #070d06;\n  "])))}),StyledInner=styled_components_browser_esm.zo.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  height: 2000px;\n"]))),StyledLayout=styled_components_browser_esm.zo.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ",";\n"])),layoutTextBackgroundColor),Layout=function Layout(_ref){var header=_ref.header,children=_ref.children;return(0,jsx_runtime.jsxs)(StyledLayout,{children:[header,(0,jsx_runtime.jsx)(StyledInner,{children})]})};Layout.displayName="Layout";try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{header:{defaultValue:null,description:"Шапка страницы\nВозможно, есть смысл убрать хэдер",name:"header",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layout/Layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/components/layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const layout_stories={title:"Общее/Каркас(layout)",component:Layout};var Template=function Template(args){return(0,jsx_runtime.jsx)(Layout,_objectSpread({},args))};Template.displayName="Template";var LayoutWithHeader=Template.bind({});LayoutWithHeader.storyName="Каркас(layout)",LayoutWithHeader.args={children:(0,jsx_runtime.jsx)("p",{children:"Содержимое страницы"}),header:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Header.h,{children:[(0,jsx_runtime.jsx)(Switch.r,{}),(0,jsx_runtime.jsx)(Select.P,{options:langueages.V})]})})},LayoutWithHeader.parameters=_objectSpread(_objectSpread({},LayoutWithHeader.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LayoutWithHeader$par=LayoutWithHeader.parameters)||void 0===_LayoutWithHeader$par?void 0:_LayoutWithHeader$par.docs),{},{source:_objectSpread({originalSource:"args => <Layout {...args} />"},null===(_LayoutWithHeader$par2=LayoutWithHeader.parameters)||void 0===_LayoutWithHeader$par2||null===(_LayoutWithHeader$par2=_LayoutWithHeader$par2.docs)||void 0===_LayoutWithHeader$par2?void 0:_LayoutWithHeader$par2.source)})});var __namedExportsOrder=["LayoutWithHeader"]},"./src/components/header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Header});var _templateObject,_templateObject2,_templateObject3,_templateObject4,styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-theming/index.js"),styled_theming__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_0__),_logo_Logo__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/logo/Logo.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var headerBackgroundColor=styled_theming__WEBPACK_IMPORTED_MODULE_0___default()("mode",{ocean:"rgb(48, 96, 138)",forest:"#182612"}),headerColor=styled_theming__WEBPACK_IMPORTED_MODULE_0___default()("mode",{ocean:"#ffffff;",forest:"#637368"}),StyledHeader=styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: sticky;\n  top: 0;\n  padding: 1em;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: ",";\n  color: ",";\n  z-index: 5;\n"])),headerBackgroundColor,headerColor),Inner=styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),InnerLeft=styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 2em;\n"]))),InnerRight=styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 2em;\n"]))),Header=function Header(_ref){var menu=_ref.menu,children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StyledHeader,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_logo_Logo__WEBPACK_IMPORTED_MODULE_1__.T,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Inner,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InnerLeft,{children:menu}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InnerRight,{children})]})]})};Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{menu:{defaultValue:null,description:"",name:"menu",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Logo});const logo_namespaceObject=__webpack_require__.p+"static/media/logo.6ce24c58.svg";var _templateObject,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_theming=__webpack_require__("./node_modules/styled-theming/index.js"),styled_theming_default=__webpack_require__.n(styled_theming),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var filter=styled_theming_default()("mode",{ocean:"none",forest:"invert(63%) sepia(70%) saturate(6883%) hue-rotate(168deg) brightness(104%) contrast(102%)"}),StyledLogo=styled_components_browser_esm.zo.img(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  transition: width 0.2s ease;\n  width: 72px;\n  filter: ",";\n"])),filter),Logo=function Logo(){return(0,jsx_runtime.jsx)("div",{className:"logo",children:(0,jsx_runtime.jsx)("div",{className:"logo--inner",children:(0,jsx_runtime.jsx)(StyledLogo,{src:logo_namespaceObject})})})};Logo.displayName="Logo";try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"src/components/logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/select/Select.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Select});var _templateObject,_templateObject2,styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-theming/index.js"),styled_theming__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(styled_theming__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var itemBackgroundColor=styled_theming__WEBPACK_IMPORTED_MODULE_0___default()("mode",{ocean:"#3977ad",forest:"#739072"}),itemColor=styled_theming__WEBPACK_IMPORTED_MODULE_0___default()("mode",{ocean:"#ffffff;",forest:"#070D06"}),SelectStyled=styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.select(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  padding: 7px 7px;\n  margin-right: 5px;\n  color: ",";\n  background-color: ",";\n  border-radius: 34px;\n  border: none;\n"])),itemColor,itemBackgroundColor),Option=styled_components__WEBPACK_IMPORTED_MODULE_2__.zo.option(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  color: ",";\n  background-color: ",";\n"])),itemColor,itemBackgroundColor),Select=function Select(_ref){var onChange=_ref.onChange,options=_ref.options,value=_ref.value;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SelectStyled,{value,onChange,children:options.map((function(_ref2){var title=_ref2.title,value=_ref2.value,icon=_ref2.icon;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Option,{value,children:[icon," ",title]},value)}))})};Select.displayName="Select";try{Select.displayName="Select",Select.__docgenInfo={description:"",displayName:"Select",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: ChangeEvent<HTMLSelectElement>) => void"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"TOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/select/Select.tsx#Select"]={docgenInfo:Select.__docgenInfo,name:"Select",path:"src/components/select/Select.tsx#Select"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/switch/Switch.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Switch});var _templateObject,_templateObject2,_templateObject3,_templateObject4,styled_theming=__webpack_require__("./node_modules/styled-theming/index.js"),styled_theming_default=__webpack_require__.n(styled_theming),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var itemBackgroundColor=styled_theming_default()("mode",{ocean:"#3977ad",forest:"#739072"}),itemColor=styled_theming_default()("mode",{ocean:"#ffffff;",forest:"#070D06"}),SwitchLabel=styled_components_browser_esm.zo.label(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  width: 56px;\n  height: 30px;\n\n  /* Hide default HTML checkbox */\n  & input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n"]))),SwitchBase=styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral([""]))),SwitchSlider=styled_components_browser_esm.zo.span(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ",";\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n\n  &:before {\n    position: absolute;\n    content: '\\263C';\n    height: 22px;\n    width: 22px;\n    left: 4px;\n    bottom: 4px;\n    color: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n    background-color: ",";\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  /* Rounded sliders */\n  & {\n    border-radius: 34px;\n\n    &:before {\n      border-radius: 50%;\n    }\n  }\n"],["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ",";\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n\n  &:before {\n    position: absolute;\n    content: '\\\\263C';\n    height: 22px;\n    width: 22px;\n    left: 4px;\n    bottom: 4px;\n    color: ",";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 20px;\n    background-color: ",";\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n  }\n\n  /* Rounded sliders */\n  & {\n    border-radius: 34px;\n\n    &:before {\n      border-radius: 50%;\n    }\n  }\n"])),itemBackgroundColor,itemBackgroundColor,itemColor),SwitchInput=styled_components_browser_esm.zo.input(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  &:checked + "," {\n    background-color: ",";\n  }\n  &:focus + "," {\n    box-shadow: 0 0 1px ",";\n  }\n  &:checked + ",":before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n"])),SwitchSlider,itemBackgroundColor,SwitchSlider,itemBackgroundColor,SwitchSlider);try{SwitchLabel.displayName="SwitchLabel",SwitchLabel.__docgenInfo={description:"",displayName:"SwitchLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/switch/styled.tsx#SwitchLabel"]={docgenInfo:SwitchLabel.__docgenInfo,name:"SwitchLabel",path:"src/components/switch/styled.tsx#SwitchLabel"})}catch(__react_docgen_typescript_loader_error){}try{SwitchBase.displayName="SwitchBase",SwitchBase.__docgenInfo={description:"",displayName:"SwitchBase",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/switch/styled.tsx#SwitchBase"]={docgenInfo:SwitchBase.__docgenInfo,name:"SwitchBase",path:"src/components/switch/styled.tsx#SwitchBase"})}catch(__react_docgen_typescript_loader_error){}try{SwitchSlider.displayName="SwitchSlider",SwitchSlider.__docgenInfo={description:"",displayName:"SwitchSlider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/switch/styled.tsx#SwitchSlider"]={docgenInfo:SwitchSlider.__docgenInfo,name:"SwitchSlider",path:"src/components/switch/styled.tsx#SwitchSlider"})}catch(__react_docgen_typescript_loader_error){}try{SwitchInput.displayName="SwitchInput",SwitchInput.__docgenInfo={description:"",displayName:"SwitchInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/switch/styled.tsx#SwitchInput"]={docgenInfo:SwitchInput.__docgenInfo,name:"SwitchInput",path:"src/components/switch/styled.tsx#SwitchInput"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Switch=function Switch(_ref){var _onChange=_ref.onChange,switched=_ref.switched;return(0,jsx_runtime.jsx)(SwitchBase,{children:(0,jsx_runtime.jsxs)(SwitchLabel,{children:[(0,jsx_runtime.jsx)(SwitchInput,{type:"checkbox",checked:switched,onChange:function onChange(e){return _onChange(e)}}),(0,jsx_runtime.jsx)(SwitchSlider,{})]})})};Switch.displayName="Switch";try{Switch.displayName="Switch",Switch.__docgenInfo={description:"",displayName:"Switch",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"}},switched:{defaultValue:null,description:"",name:"switched",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/switch/Switch.tsx#Switch"]={docgenInfo:Switch.__docgenInfo,name:"Switch",path:"src/components/switch/Switch.tsx#Switch"})}catch(__react_docgen_typescript_loader_error){}},"./src/locales/langueages.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>languageOptions});var languageOptions=[{value:"ru",title:"Русский",icon:"🇷🇺"},{value:"en",title:"English",icon:"🇺🇸"}]},"./node_modules/styled-theming/index.js":module=>{function getThemeValue(name,props,values){var themeValue,value=props.theme&&props.theme[name];return"function"==typeof(themeValue="function"==typeof value?value(values):values[value])?themeValue(props):themeValue}function theme(name,values){return function(props){return getThemeValue(name,props,values)}}theme.variants=function(name,prop,values){return function(props){var variant=props[prop]&&values[props[prop]];return variant&&getThemeValue(name,props,variant)}},module.exports=theme}}]);