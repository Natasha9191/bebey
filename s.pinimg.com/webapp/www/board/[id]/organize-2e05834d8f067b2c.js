(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5604],{162730:function(e,t,r){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/board/[id]/organize"]=function(){return r(45615).Z}},150326:function(e,t,r){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/board/[id]/organize/add"]=function(){return r(291781).Z}},477641:function(e,t,r){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/board/[id]/organize/repin"]=function(){return r(741282).Z}},768559:function(e,t,r){"use strict";var n=r(826067),o=/\/today\/(article|best|trending)\/[\w-]+\/(\d+)/,i=function(e,t){return t?e.substring(t.length).split("/")[0]:e},c=function(e){var t,r=e.boardUrl,c=e.path,a=e.pinId,u=e.pinnerUserName,s=e.search,l=e.storyPinDataId;if(!c)return"";switch(c){case"/":case"/homefeed/":return"UserHomefeedResource";case u&&"/".concat(u,"/pins/"):return"UserPinsResource";case u&&"/".concat(u,"/"):case/\/_activity\//.test(c)&&c:return"UserActivityPinsResource";case/\/_created\//.test(c)&&c:return l?"UserStoryPinsFeedResource":"UserActivityPinsResource";case/\/_community\//.test(c)&&c:return"UserDiscoveredPinsResource";case/\/_saved\//.test(c)&&c:return"BoardlessPinsResource";case u&&"/".concat(u,"/_shopping_list/"):return"ShoppingListFeedResource";case/\/visual-search\//.test(c)&&c:return"VisualLiveSearchResource";case/\/pin\//.test(c)&&c:var f=i(c,"/pin/");if(a!==f)return"RelatedPinFeedResource_".concat(f);break;case/\/search\//.test(c)&&c:if(s){var d=(0,n.mB)(s,{shouldDecode:!1}).q||"";return"SearchResource_".concat(d.toLowerCase())}break;case/\/categories\//.test(c)&&c:var p=i(c,"/categories/");return"CategoryFeedResource_".concat(p);case/\/discover\/topics\//.test(c)&&c:return"CategoryFeedResource";case/\/news_hub\//.test(c)&&c:var y=i(c,"/news_hub/");return"NewsHubDetailsResource_".concat(y);case/\/_tools\/more-ideas\//.test(c)&&c:return"BoardContentRecommendationResource";case/\/topics\//.test(c)&&c:var m=i(c,"/topics/");return"TopicFeedResource_".concat(m);case/\/source\//.test(c)&&c:var b=i(c,"/source/");return"DomainFeedResource_".concat(b);case/\/explore\//.test(c)&&c:var v=i(c,"/explore/");return"SearchResource_".concat(v);case r:case!!r&&/\/more_ideas\//.test(c)&&c:return"BoardFeedResource";case r&&c.indexOf(r)>-1&&c:return"BoardSectionPinsResource";case/\/brand_catalog\//.test(c)&&c:return"BrandCatalogFeedResource";case o.test(c)&&c:var h=(null===(t=c.match(o))||void 0===t?void 0:t[2])||"unknown";return"TodayArticleFeedResource_".concat(h);case/\/today\//.test(c):return"TodayTabResource";case/\story_feed\//.test(c)&&c:if(s){var S=(0,n.mB)(s),g=S.feed_type,_=S.request_params;return"StoryFeedResource_".concat(g,"_").concat(_)}}return""},a=function(e){var t=null==e?void 0:e.pathname;return t?(t.match(/\/search\//)&&null!=e&&e.search&&(t+=e.search),t.toLowerCase()):""};t.Z=function(e){var t,r,n=e.boardUrl,o=e.location,i=e.pinId,u=e.pinnerUserName,s=e.previousHistory,l=e.storyPinDataId,f=e.trackingParams,d=e.trackingParamsMap,p=void 0===d?{}:d;if(i&&f&&o){if(!p)return"".concat(null!=f?f:"","~0");var y=o.pathname,m=o.search,b=c({boardUrl:n,path:y,pinId:i,pinnerUserName:u,search:m,storyPinDataId:l,trackingParams:f,trackingParamsMap:p}),v=Object.keys(p);if((y||"").startsWith("/pin/")){var h=v.find(function(e){return"PinResource"!==e});t=h?p[h]:p.PinResource}else t=p[b];return!t&&s&&s.length&&(r=c({boardUrl:n,path:a(s[s.length-1].location),pinId:i,pinnerUserName:u,search:m,storyPinDataId:l,trackingParams:f,trackingParamsMap:p}),t=p[r]),t||(t="".concat(f||"","~0")),t}}},425288:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(76911);function o(e,t){var r="consumer"===t?"".concat(e,"Consumer"):"use".concat(e);return"\n  ".concat(r," must be used within a ").concat(e,"Provider.\n  Please see https://pdocs.pinadmin.com/docs/webapp/docs/testing-jest#createhydra-errors for more information.\n  ")}function i(e,t){var r,i,c=(0,n.createContext)(t),a=((i=(i=e.slice(1)).endsWith("Context")?i:"".concat(i,"Context"),r)?{hocDisplayName:"with".concat(e[0].toUpperCase()).concat(i,"(").concat(r,")")}:{propsDisplayName:"".concat(e[0].toLowerCase()).concat(i),messageDisplayName:"".concat(e[0].toUpperCase()).concat(i)}).messageDisplayName;c.displayName=a;var u=c.Provider,s=function(e){var t=e.children,r=(0,n.useContext)(c);if(void 0===r)throw Error(o(a,"consumer"));return t(r)},l=function(){return(0,n.useContext)(c)};return u.displayName="".concat(a,"Provider"),s.displayName="".concat(a,"Consumer"),{Provider:u,Consumer:s,MaybeConsumer:function(e){return(0,e.children)((0,n.useContext)(c))},useMaybeHook:l,useHook:function(){var e=l();if(void 0===e)throw Error(o(a,"hook"));return e}}}},780280:function(e,t,r){"use strict";r.d(t,{B:function(){return m},LC:function(){return p},P2:function(){return d},fH:function(){return y},gf:function(){return b}});var n=r(76911),o=r(608832),i=r(239745),c=r(515198);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var f=(0,n.createContext)();function d(e){var t,r=e.children,a=e.initialValue,u=function(e){if(Array.isArray(e))return e}(t=(0,n.useState)(a))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,a=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(s)throw o}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=u[0],p=u[1],y=(0,n.useMemo)(function(){return{requestContext:d,updateRequestContext:function(e){var t=s(s({},d),e);(0,i.Z)(d,e)||p(t),(0,o.J)(t)}}},[d]);return(0,c.jsx)(f.Provider,{value:y,children:r})}var p=function(e){var t=e.children,r=(0,n.useContext)(f);if(!r)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return t(r.requestContext)},y=function(e){var t=e.children,r=(0,n.useContext)(f);if(!r)throw Error("RequestContextConsumer must be used within a RequestContextProvider");return t(r.requestContext)};function m(){var e=(0,n.useContext)(f);if(!e)throw Error("useRequestContext must be used within a RequestContextProvider");return e.requestContext}function b(){var e=(0,n.useContext)(f);if(!e)throw Error("useUpdateRequestContext must be used within a RequestContextProvider");return e.updateRequestContext}},608832:function(e,t,r){"use strict";var n;function o(e){n=e}function i(){return n}r.d(t,{J:function(){return o},l:function(){return i}})},239745:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(Object.is(e,t))return!0;if("object"!==n(e)||null===e||"object"!==n(t)||null===t)return!1;var r=Object.keys(e),o=Object.keys(t);return r.length===o.length&&r.every(function(r){return e[r]===t[r]})}r.d(t,{Z:function(){return o}})},50286:function(e,t,r){"use strict";r.d(t,{HG:function(){return f},Kf:function(){return c},Mq:function(){return o},Wb:function(){return l},dA:function(){return a},ds:function(){return u},ml:function(){return s}});var n=r(780280);function o(e){var t=e.userAgent,r=t.isMobile;return t.isTablet?"tablet":r?"phone":"desktop"}var i=function(){return o((0,n.B)())},c=function(e){return"phone"===e},a=function(e){return"tablet"===e},u=function(e){return"desktop"===e},s=function(){return c(i())},l=function(){return a(i())},f=function(){return u(i())};t.ZP=i},19121:function(e,t,r){"use strict";r.d(t,{$:function(){return o}});var n=(0,r(425288).Z)("viewer"),o=n.Provider,i=n.useHook;t.Z=i},295017:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return L}});var n=r(76911),o=r(506979),i=r(599689),c=r(908390),a=r(112690),u=r(499128),s=r(898781),l=r(784590),f=r(343341),d=r(50286),p=r(411465),y=r(19121),m=r(823434),b=r(497307),v=r(781123),h=r(676802),S=r(743203),g=r(678638),_=r(10693),P=r(130460),w=r(963732),O=r(515198);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(t){k(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,N(n.key),n)}}function R(e,t){return(R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function E(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,r){return(t=N(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){var t=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==C(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===C(t)?t:String(t)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(o,e);var t,r,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=D(o);if(t){var n=D(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return E(e)}(this,e)});function o(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,o);for(var e,t,r,i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return k(E(r=n.call.apply(n,[this].concat(a))),"state",{pinIds:(null===(e=r.props.location.state)||void 0===e?void 0:e.pinIds)||[],inSelectAll:(null===(t=r.props.location.state)||void 0===t?void 0:t.inSelectAll)||!1,name:""}),k(E(r),"onRepinNavigate",function(){var e=r.props,t=e.board,n=e.location,o=e.history,i=e.logContextEvent,c=r.state,a=c.inSelectAll,u=c.pinIds,s=n.state?n.state.trackingParams:"";i({event_type:102,element:401,view_type:5}),t&&o.push({pathname:"/board/".concat(t.id,"/organize/repin/"),state:{inSelectAll:a,pinIds:u,trackingParams:s}})}),k(E(r),"onAddNewSectionNavigate",function(){var e=r.props,t=e.board,n=e.history,o=r.state,i=o.inSelectAll,c=o.pinIds;t&&n.push({pathname:"/board/".concat(t.id,"/organize/add/"),state:{inSelectAll:i,pinIds:c}})}),k(E(r),"onRepinToBoardWithSectionsNavigate",function(e){var t,n=r.props,o=n.board,i=n.location,c=n.history,a=r.state,u=a.inSelectAll,s=a.pinIds,l=i.state?i.state.trackingParams:"";c.push({pathname:"/board/".concat(e.id,"/organize/repin/"),state:{boardId:e.id,inSelectAll:u,originalBoardId:null!==(t=null==o?void 0:o.id)&&void 0!==t?t:"",pinIds:s,trackingParams:l}})}),k(E(r),"onTogglePin",function(e){var t=r.state.pinIds,n=r.props.feedPinIds;if(t.includes(e))r.setState({pinIds:t.filter(function(t){return t!==e})});else{var o=t.concat(e);o.length===n.length?r.onSelectAll(!r.state.inSelectAll):r.setState({pinIds:o})}}),k(E(r),"onNameChange",function(e){r.setState({name:e.target.value})}),k(E(r),"onCreateSection",function(){var e,t=r.state,n=t.inSelectAll,o=t.name,i=t.pinIds,c=r.props,a=c.createSection,u=c.board;a(null!==(e=null==u?void 0:u.id)&&void 0!==e?e:"",i,o,n,r.props.i18n)}),k(E(r),"onSelectAll",function(e){r.setState({inSelectAll:e,pinIds:[]})}),k(E(r),"getSelectedPinIds",function(){var e=r.state,t=e.pinIds,n=e.inSelectAll,o=r.props.feedPinIds;return n?o.filter(function(e){return!t.includes(e)}):t}),k(E(r),"isSelected",function(e){var t=r.state,n=t.inSelectAll,o=t.pinIds;return n?!o.includes(e):o.includes(e)}),k(E(r),"renderBoardFeed",function(){var e,t,n=null!==(e=null===(t=r.props.board)||void 0===t?void 0:t.id)&&void 0!==e?e:"";return(0,O.jsx)(S.ZP,{resourceConfig:{name:"BoardFeedResource",options:{is_react:!0,field_set_key:"react_grid_pin",filter_section_pins:!0,prepend:!1,board_id:n}},feedKey:"boardfeed:".concat(n),gridConfig:{key:"minCols=3",minCols:3},renderFeedItem:function(e){return(0,O.jsx)(c.xu,{paddingY:1,children:(0,O.jsx)(w.Z,{pinKey:{type:"deprecated",data:e.id},togglePin:r.onTogglePin,isSelected:r.isSelected(e.id)})})},trafficSource:"board"})}),k(E(r),"renderBulkSelectPinsScreen",function(){var e=r.props.board;if(!e)return null;var t=r.state.inSelectAll,n=r.getSelectedPinIds();return(0,O.jsx)(v.Z,{allowSelectAll:!e.is_collaborative,renderFeed:r.renderBoardFeed,onButtonTouch:r.onRepinNavigate,onSelectAll:r.onSelectAll,selectedPinIds:n,buttonLabel:r.props.i18n._('Next', 'Next button accessibility label for board organize page', 'Next button accessibility label for board organize page'),buttonDisabled:0===n.length,inSelectAll:t})}),k(E(r),"renderRepinScreen",function(e){var t=r.state,n=t.pinIds,o=t.inSelectAll,i=r.props,c=i.board,a=i.history,u=e.location.state||{},s=r.getSelectedPinIds();return c?(0,O.jsx)(h.ZP,{boardId:c.id,orginalBoardId:u.originalBoardId||u.boardId||c.id,pinIds:n,selectedPinIds:s,inSelectAll:o,isCollaborative:c.is_collaborative,onAddNewSection:r.onAddNewSectionNavigate,history:a,onRepinToBoardWithSections:r.onRepinToBoardWithSectionsNavigate,hideBoardPickerRow:!0,url:c.url||""}):null}),k(E(r),"renderAddSectionScreen",function(){var e=r.state.name,t=r.getSelectedPinIds();return(0,O.jsx)(b.Z,{onNameChange:r.onNameChange,onNextButtonTouch:r.onCreateSection,name:e,selectedPinIds:t})}),r}return x(o.prototype,[{key:"render",value:function(){var e=this.props.board;return null!=e&&e.id?(0,O.jsxs)(i.rs,{children:[(0,O.jsx)(i.AW,{exact:!0,path:"/board/".concat(e.id,"/organize/"),render:this.renderBulkSelectPinsScreen}),(0,O.jsx)(i.AW,{exact:!0,path:e.url&&"".concat(decodeURIComponent(e.url),"_tools/organize/"),render:this.renderBulkSelectPinsScreen}),(0,O.jsx)(i.AW,{exact:!0,path:"/board/".concat(e.id,"/organize/repin"),render:this.renderRepinScreen}),(0,O.jsx)(i.AW,{exact:!0,path:"/board/".concat(e.id,"/organize/add"),render:this.renderAddSectionScreen})]}):null}}]),r&&x(o,r),Object.defineProperty(o,"prototype",{writable:!1}),o}(n.PureComponent);function $(e){var t=(0,s.ZP)(),r=(0,o.useDispatch)(),n=(0,i.k6)(),c=(0,i.TH)(),l=(0,p.Z)(),b=(0,a.Z)(),v=(0,f.F9)().showToast,h=e.match.params,S=h.id,w=h.slug,C=h.username,j="/".concat(C||"","/").concat((0,m.X)(w||""),"/"),x=(0,o.useSelector)(function(e){return(0,_.Z)(e)[j]}),R=(0,P.gC)()(null!=S?S:""),E=x||R,D=(0,o.useSelector)(function(e){var t;return(null!==(t=e.feeds["boardfeed:".concat(!!E&&E.id||"")])&&void 0!==t?t:[]).filter(function(e){return"pin"===e.type}).map(function(e){return e.id})}),k=(0,y.Z)().isAuth,N=(0,d.ZP)();return k&&"desktop"!==N?l?E?(0,O.jsx)(i.l_,{to:E.url}):null:(0,O.jsx)(I,A(A({},e),{},{board:E,createSection:function(e,t,o,i,c){r(i?(0,g.ET)(e,o,t,void 0,b):(0,g.Nv)(e,t,o,b)).then(function(){v(function(e){var t=e.hideToast;return(0,O.jsx)(u.ZP,{text:c._('Section added!', ' - ', ' -- '),onHide:t})}),n.go(-3)}).catch(function(e){v(function(t){var r=t.hideToast;return(0,O.jsx)(u.ZP,{text:e.message||c._('Sorry! Something went wrong on our end.', 'error creating board section', 'error creating board section'),type:"error",onHide:r})})})},feedPinIds:D,history:n,i18n:t,location:c,logContextEvent:b})):(0,O.jsx)(i.l_,{to:"/"})}function L(){var e=(0,i.$B)(),t=e.params,r=t.id,n=t.slug,o=t.username,c=r?{field_set_key:"profile_grid_item",board_id:r}:{field_set_key:"profile_grid_item",slug:(0,m.$)(n||""),username:o};return(0,l.Z)({name:"BoardResource",options:c}),(0,O.jsx)($,{match:e})}},823434:function(e,t,r){"use strict";r.d(t,{$:function(){return o},X:function(){return i}});var n=r(492563),o=function(e){return decodeURIComponent(e)},i=function(e){return encodeURIComponent((0,n.t)(e))}},492563:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){var o;return(o=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===n(o)?o:String(o))in e)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){if(!e)return e;var t=e.replace(/%26/gi,"&");return(t=(t=(t=(t=(t=(t=(t=(t=(t=t.replace(/%3F/gi,"?")).replace(/%23/gi,"#")).replace(/%2B/gi,"+")).replace(/%3B/gi,";")).replace(/%2C/gi,",")).replace(/%2F/gi,"/")).replace(/%3A/gi,":")).replace(/%40/gi,"@")).replace(/%3D/gi,"=")).replace(/%24/gi,"$")}function u(e){return Object.keys(e).reduce(function(t,r){var n;return i(i({},t),{},c({},r,a(null!==(n=e[r])&&void 0!==n?n:"")))},{})}r.d(t,{Z:function(){return u},t:function(){return a}})},10693:function(e,t,r){"use strict";var n=(0,r(904202).P1)(function(e){return e.boards},function(e){return Object.keys(e).reduce(function(t,r){var n,o=e[r];t[null!==(n=o.url)&&void 0!==n?n:""]=o;var i=o.oldSlugUrl;return i&&(t[i]=o),t},{})});t.Z=n},45615:function(e,t,r){"use strict";var n=r(295017);t.Z=n.default},291781:function(e,t,r){"use strict";var n=r(295017);t.Z=n.default},741282:function(e,t,r){"use strict";var n=r(295017);t.Z=n.default},167678:function(e,t,r){"use strict";r.d(t,{TA:function(){return C}});var n=r(76911),o=r(742897),i=r(539439),c=r(744702),a=r(811602),u=r(727460),s=r(349424),l=r.n(s);function f(e){console.warn("loadable: "+e)}var d=n.createContext(),p={initialChunks:{}},y="PENDING",m="REJECTED",b=function(e){return e};function v(e){var t=e.defaultResolveComponent,r=void 0===t?b:t,s=e.render,f=e.onLoad;function v(e,t){void 0===t&&(t={});var b,v="function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e,h={};function S(e){return t.cacheKey?t.cacheKey(e):v.resolve?v.resolve(e):"static"}function g(e,n,o){var i=t.resolveComponent?t.resolveComponent(e,n):r(e);if(t.resolveComponent&&!(0,u.isValidElementType)(i))throw Error("resolveComponent returned something that is not a React component!");return l()(o,i,{preload:!0}),i}var _=(b=function(e){function r(r){var n;return((n=e.call(this,r)||this).state={result:null,error:null,loading:!0,cacheKey:S(r)},function(e,t){if(!e){var r=Error("loadable: "+t);throw r.framesToPop=1,r.name="Invariant Violation",r}}(!r.__chunkExtractor||v.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),r.__chunkExtractor)?(!1===t.ssr||(v.requireAsync(r).catch(function(){return null}),n.loadSync(),r.__chunkExtractor.addChunk(v.chunkName(r))),(0,c.Z)(n)):(!1!==t.ssr&&(v.isReady&&v.isReady(r)||v.chunkName&&p.initialChunks[v.chunkName(r)])&&n.loadSync(),n)}(0,a.Z)(r,e),r.getDerivedStateFromProps=function(e,t){var r=S(e);return(0,i.Z)({},t,{cacheKey:r,loading:t.loading||t.cacheKey!==r})};var n=r.prototype;return n.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===m&&this.setCache(),this.state.loading&&this.loadAsync()},n.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},n.componentWillUnmount=function(){this.mounted=!1},n.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},n.getCacheKey=function(){return S(this.props)},n.getCache=function(){return h[this.getCacheKey()]},n.setCache=function(e){void 0===e&&(e=void 0),h[this.getCacheKey()]=e},n.triggerOnLoad=function(){var e=this;f&&setTimeout(function(){f(e.state.result,e.props)})},n.loadSync=function(){if(this.state.loading)try{var e=v.requireSync(this.props),t=g(e,this.props,P);this.state.result=t,this.state.loading=!1}catch(e){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:v.resolve(this.props),chunkName:v.chunkName(this.props),error:e?e.message:e}),this.state.error=e}},n.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then(function(t){var r=g(t,e.props,{Loadable:P});e.safeSetState({result:r,loading:!1},function(){return e.triggerOnLoad()})}).catch(function(t){return e.safeSetState({error:t,loading:!1})}),t},n.resolveAsync=function(){var e=this,t=this.props,r=(t.__chunkExtractor,t.forwardedRef,(0,o.Z)(t,["__chunkExtractor","forwardedRef"])),n=this.getCache();return n||((n=v.requireAsync(r)).status=y,this.setCache(n),n.then(function(){n.status="RESOLVED"},function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:v.resolve(e.props),chunkName:v.chunkName(e.props),error:t?t.message:t}),n.status=m})),n},n.render=function(){var e=this.props,r=e.forwardedRef,n=e.fallback,c=(e.__chunkExtractor,(0,o.Z)(e,["forwardedRef","fallback","__chunkExtractor"])),a=this.state,u=a.error,l=a.loading,f=a.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===y)throw this.loadAsync();if(u)throw u;var d=n||t.fallback||null;return l?d:s({fallback:d,result:f,options:t,props:(0,i.Z)({},c,{ref:r})})},r}(n.Component),function(e){return n.createElement(d.Consumer,null,function(t){return n.createElement(b,Object.assign({__chunkExtractor:t},e))})}),P=n.forwardRef(function(e,t){return n.createElement(_,Object.assign({forwardedRef:t},e))});return P.preload=function(e){v.requireAsync(e)},P.load=function(e){return v.requireAsync(e)},P}return{loadable:v,lazy:function(e,t){return v(e,(0,i.Z)({},t,{suspense:!0}))}}}var h=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,r=e.props;return n.createElement(t,r)}}),S=h.loadable,g=h.lazy,_=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,r=e.props;return r.children?r.children(t):null}}),P=_.loadable,w=_.lazy,O="undefined"!=typeof window;function C(e,t){void 0===e&&(e=function(){});var r=(void 0===t?{}:t).namespace;if(!O)return f("`loadableReady()` must be called in browser only"),e(),Promise.resolve();var n=null;if(O){var o=""+(void 0===r?"":r)+"__LOADABLE_REQUIRED_CHUNKS__",i=document.getElementById(o);if(i){n=JSON.parse(i.textContent);var c=document.getElementById(o+"_ext");if(c)JSON.parse(c.textContent).namedChunks.forEach(function(e){p.initialChunks[e]=!0});else throw Error("loadable-component: @loadable/server does not match @loadable/component")}}if(!n)return f("`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side"),e(),Promise.resolve();var a=!1;return new Promise(function(e){window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[];var t=window.__LOADABLE_LOADED_CHUNKS__,r=t.push.bind(t);function o(){n.every(function(e){return t.some(function(t){return t[0].indexOf(e)>-1})})&&!a&&(a=!0,e())}t.push=function(){r.apply(void 0,arguments),o()},o()}).then(e)}S.lib=P,g.lib=w,t.ZP=S},349424:function(e,t,r){"use strict";var n=r(916731),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function u(e){return n.isMemo(e)?c:a[e.$$typeof]||o}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=c;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(y){var o=p(r);o&&o!==y&&e(t,o,n)}var c=l(r);f&&(c=c.concat(f(r)));for(var a=u(t),m=u(r),b=0;b<c.length;++b){var v=c[b];if(!i[v]&&!(n&&n[v])&&!(m&&m[v])&&!(a&&a[v])){var h=d(r,v);try{s(t,v,h)}catch(e){}}}}return t}},468278:function(e,t){"use strict";/** @license React v16.8.4
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116;function v(e){if("object"===r(e)&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case c:case u:case a:case y:return e;default:switch(e=e&&e.$$typeof){case l:case p:case s:return e;default:return t}}case b:case m:case i:return t}}}function h(e){return v(e)===d}t.typeOf=v,t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=s,t.Element=o,t.ForwardRef=p,t.Fragment=c,t.Lazy=b,t.Memo=m,t.Portal=i,t.Profiler=u,t.StrictMode=a,t.Suspense=y,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===u||e===a||e===y||"object"===r(e)&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===p)},t.isAsyncMode=function(e){return h(e)||v(e)===f},t.isConcurrentMode=h,t.isContextConsumer=function(e){return v(e)===l},t.isContextProvider=function(e){return v(e)===s},t.isElement=function(e){return"object"===r(e)&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return v(e)===p},t.isFragment=function(e){return v(e)===c},t.isLazy=function(e){return v(e)===b},t.isMemo=function(e){return v(e)===m},t.isPortal=function(e){return v(e)===i},t.isProfiler=function(e){return v(e)===u},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===y}},916731:function(e,t,r){"use strict";e.exports=r(468278)},401426:function(e,t){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,c=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,l=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,b=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,S=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,_=n?Symbol.for("react.scope"):60119;function P(e){if("object"===r(e)&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case d:case c:case u:case a:case y:return e;default:switch(e=e&&e.$$typeof){case l:case p:case v:case b:case s:return e;default:return t}}case i:return t}}}function w(e){return P(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=l,t.ContextProvider=s,t.Element=o,t.ForwardRef=p,t.Fragment=c,t.Lazy=v,t.Memo=b,t.Portal=i,t.Profiler=u,t.StrictMode=a,t.Suspense=y,t.isAsyncMode=function(e){return w(e)||P(e)===f},t.isConcurrentMode=w,t.isContextConsumer=function(e){return P(e)===l},t.isContextProvider=function(e){return P(e)===s},t.isElement=function(e){return"object"===r(e)&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return P(e)===p},t.isFragment=function(e){return P(e)===c},t.isLazy=function(e){return P(e)===v},t.isMemo=function(e){return P(e)===b},t.isPortal=function(e){return P(e)===i},t.isProfiler=function(e){return P(e)===u},t.isStrictMode=function(e){return P(e)===a},t.isSuspense=function(e){return P(e)===y},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===d||e===u||e===a||e===y||e===m||"object"===r(e)&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===s||e.$$typeof===l||e.$$typeof===p||e.$$typeof===S||e.$$typeof===g||e.$$typeof===_||e.$$typeof===h)},t.typeOf=P},727460:function(e,t,r){"use strict";e.exports=r(401426)},744702:function(e,t,r){"use strict";function n(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})},539439:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},811602:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(967809);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,n.Z)(e,t)}},742897:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})},967809:function(e,t,r){"use strict";function n(e,t){return(n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[97270,8390,99689,26067,17492,48327,16117,13254,17197,87072,99961,57709,76596,23019,28090,42506,43203,25680,48806,94138,60953,12345],function(){return t(150326),t(162730),t(477641)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/board/[id]/organize-2e05834d8f067b2c.js.map