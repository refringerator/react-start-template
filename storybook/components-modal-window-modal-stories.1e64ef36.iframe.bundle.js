"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[214],{"./src/components/modal-window/modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _VisibleWindow$parame,_VisibleWindow$parame2;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{VisibleWindow:()=>VisibleWindow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Общее/Модальное окно",component:__webpack_require__("./src/components/modal-window/Modal.tsx").u};var VisibleWindow={name:"Модальное окно",args:{visible:!0,children:"Видимое окно"}};VisibleWindow.parameters=_objectSpread(_objectSpread({},VisibleWindow.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_VisibleWindow$parame=VisibleWindow.parameters)||void 0===_VisibleWindow$parame?void 0:_VisibleWindow$parame.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'Модальное окно',\n  args: {\n    visible: true,\n    children: 'Видимое окно'\n  }\n}"},null===(_VisibleWindow$parame2=VisibleWindow.parameters)||void 0===_VisibleWindow$parame2||null===(_VisibleWindow$parame2=_VisibleWindow$parame2.docs)||void 0===_VisibleWindow$parame2?void 0:_VisibleWindow$parame2.source)})});var __namedExportsOrder=["VisibleWindow"]},"./src/components/button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_theming=__webpack_require__("./node_modules/styled-theming/index.js"),styled_theming_default=__webpack_require__.n(styled_theming);function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var backgroundColor=styled_theming_default().variants("mode","type",{primary:{ocean:"#3977ad",forest:"#739072"},secondary:{ocean:"#f0f0f5",forest:"#A0A698"},danger:{ocean:"#fe3266",forest:"#fe3266"},success:{ocean:"#6cbd7d",forest:"#4F6F52"},disabled:{ocean:"#e1e4eb",forest:"#A0A698"},icon:{ocean:"none",forest:"none"}}),color=styled_theming_default().variants("mode","type",{primary:{ocean:"white",forest:"#070D06"},secondary:{ocean:"#828894",forest:"#182612"},success:{ocean:"#white",forest:"#070D06"},danger:{ocean:"white",forest:"#182612"},disabled:{ocean:"#b2b7c2",forest:"#070D06"},icon:{ocean:"inherit",forest:"inherit"}}),Span=styled_components_browser_esm.zo.span(_templateObject||(_templateObject=_taggedTemplateLiteral([""]))),StyledButton=styled_components_browser_esm.zo.button(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  color: ",";\n  background: ",";\n  border: 0;\n  border-radius: 2px;\n  cursor: pointer;\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s ease;\n\n  ","\n\n  ","\n  \n  ","\n    \n  &:hover {\n    box-shadow: none;\n  }\n"])),color||"inherit",backgroundColor||"none",(function(props){switch(props.size){case"small":return(0,styled_components_browser_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n          font-size: 12px;\n          padding: 10px 16px;\n        "])));case"medium":return(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n          font-size: 14px;\n          padding: 11px 20px;\n        "])));case"large":return(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n          font-size: 16px;\n          padding: 12px 24px;\n        "])))}}),(function(props){return"disabled"==props.type&&(0,styled_components_browser_esm.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n      box-shadow: none;\n      cursor: default;\n    "])))}),(function(props){return"icon"==props.type&&(0,styled_components_browser_esm.iv)(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n      box-shadow: none;\n      &:hover {\n        opacity: 0.7;\n      }\n    "])))}));try{Span.displayName="Span",Span.__docgenInfo={description:"",displayName:"Span",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/styles.tsx#Span"]={docgenInfo:Span.__docgenInfo,name:"Span",path:"src/components/button/styles.tsx#Span"})}catch(__react_docgen_typescript_loader_error){}try{StyledButton.displayName="StyledButton",StyledButton.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/styles.tsx#StyledButton"]={docgenInfo:StyledButton.__docgenInfo,name:"StyledButton",path:"src/components/button/styles.tsx#StyledButton"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button=function Button(_ref){var children=_ref.children,_ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,onClick=_ref.onClick;return(0,jsx_runtime.jsx)(StyledButton,{type,size,onClick,children:(0,jsx_runtime.jsx)(Span,{children})})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Базовый UI компонент-кнопка",displayName:"Button",props:{type:{defaultValue:{value:"primary"},description:"Тип кнопки",name:"type",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'},{value:'"success"'},{value:'"icon"'}]}},size:{defaultValue:{value:"medium"},description:"Размер кнопки",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/modal-window/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Modal});var Button=__webpack_require__("./src/components/button/Button.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),modal=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/modal-window/modal.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(modal.Z,options);modal.Z&&modal.Z.locals&&modal.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Modal=function Modal(_ref){var visible=_ref.visible,children=_ref.children,closeModal=_ref.closeModal;return visible&&(0,jsx_runtime.jsx)("div",{className:"modal",children:(0,jsx_runtime.jsxs)("div",{className:"modal--body",children:[(0,jsx_runtime.jsx)("div",{className:"modal--body_text-container",children}),(0,jsx_runtime.jsx)("div",{className:"modal--close",children:(0,jsx_runtime.jsx)(Button.z,{onClick:closeModal,type:"icon",children:"x"})})]})})};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{visible:{defaultValue:null,description:"Видимость окна",name:"visible",required:!0,type:{name:"boolean"}},closeModal:{defaultValue:null,description:"",name:"closeModal",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/modal-window/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/modal-window/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/modal-window/modal.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".modal {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 9999;\n  animation: show 0.4s forwards;\n  top: 0;\n  left: 0;\n}\n\n.modal--body {\n  width: 40%;\n  height: 30%;\n  padding: 1em;\n  display: flex;\n  justify-content: flex-end;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);\n}\n\n.modal--body_text-container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@keyframes show {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n","",{version:3,sources:["webpack://./src/components/modal-window/modal.css"],names:[],mappings:"AAAA;EACE,0EAA0E;EAC1E,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,6BAA6B;EAC7B,MAAM;EACN,OAAO;AACT;;AAEA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,sBAAsB;EACtB,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF",sourcesContent:[".modal {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 9999;\n  animation: show 0.4s forwards;\n  top: 0;\n  left: 0;\n}\n\n.modal--body {\n  width: 40%;\n  height: 30%;\n  padding: 1em;\n  display: flex;\n  justify-content: flex-end;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.2);\n}\n\n.modal--body_text-container {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@keyframes show {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./node_modules/styled-theming/index.js":module=>{function getThemeValue(name,props,values){var themeValue,value=props.theme&&props.theme[name];return"function"==typeof(themeValue="function"==typeof value?value(values):values[value])?themeValue(props):themeValue}function theme(name,values){return function(props){return getThemeValue(name,props,values)}}theme.variants=function(name,prop,values){return function(props){var variant=props[prop]&&values[props[prop]];return variant&&getThemeValue(name,props,variant)}},module.exports=theme}}]);