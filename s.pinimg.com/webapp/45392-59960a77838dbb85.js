"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[45392],{558017:function(e,t,o){o.d(t,{OY:function(){return d},ix:function(){return u}});var n=o(908390),l=o(326884),i=o(15099),r=o(499128),a=o(898781),c=o(343341),s=o(515198),d=Object.freeze({AD_ACCOUNT_ID:"AD_ACCOUNT_ID",BUSINESS_ID:"BUSINESS_ID",HIERARCHY_ID:"HIERARCHY_ID",TAG_ID:"TAG_ID",ASSET_GROUP_ID:"ASSET_GROUP_ID",AUDIENCE_ID:"AUDIENCE_ID",EMAIL:"EMAIL",OWNER_EMAIL:"OWNER_EMAIL",ADMIN_EMAIL:"ADMIN_EMAIL"}),u=function(e,t){switch(e){case d.AD_ACCOUNT_ID:return{elementId:"copy-ad-account-id",accessibilityLabel:t._('Copy ad account ID to clipboard', '[m10n].bizAccess.copyToClipBoardIcon.adAccount.a11y', 'a11y for icon button to copy ad account id'),tooltipText:t._('Copy ad account ID', '[m10n].bizAccess.copyToClipBoardIcon.adAccount', 'tooltip text for icon button to copy ad account id')};case d.BUSINESS_ID:return{elementId:"copy-business-id",accessibilityLabel:t._('Copy business ID to clipboard', '[m10n].bizAccess.copyToClipBoardIcon.businessId.a11y', 'a11y for icon button to copy business id'),tooltipText:t._('Copy business ID', '[m10n].bizAccess.copyToClipBoardIcon.businessId', 'tooltip text for icon button to copy business id')};case d.HIERARCHY_ID:return{elementId:"copy-hierarchy-id",accessibilityLabel:t._('Copy hierarchy ID to clipboard', '[m10n].bizAccess.copyToClipBoardIcon.hierarchyId.a11y', 'a11y for icon button to copy hierarchy id'),tooltipText:t._('Copy hierarchy ID', '[m10n].bizAccess.copyToClipBoardIcon.hierarchyId', 'tooltip text for icon button to copy hiearchy id')};case d.TAG_ID:return{elementId:"copy-tag-id",accessibilityLabel:t._('Copy tag ID to clipboard', '[m10n].bizAccess.copyToClipBoardIcon.tag.a11y', 'a11y for icon button to copy tag id'),tooltipText:t._('Copy tag ID', '[m10n].bizAccess.copyToClipBoardIcon.tag', 'tooltip text for icon button to copy tag id')};case d.ASSET_GROUP_ID:return{elementId:"copy-asset-group-id",accessibilityLabel:t._('Copy asset group ID to clipboard', '[m10n].bizAccess.copyToClipBoardIcon.assetGroup.a11y', 'a11y for icon button to copy asset group id'),tooltipText:t._('Copy asset group ID', '[m10n].bizAccess.copyToClipBoardIcon.assetGroup', 'tooltip text for icon button to copy asset group id')};case d.AUDIENCE_ID:return{elementId:"copy-audience-id",accessibilityLabel:t._('Copy ad audience ID to clipboard', '[m10n].bizAccess.copyToClipBoardIcon.audience.a11y', 'a11y for icon button to copy audience id'),tooltipText:t._('Copy audience ID', '[m10n].bizAccess.copyToClipBoardIcon.audience', 'tooltip text for icon button to copy audience id')};case d.EMAIL:return{elementId:"copy-email",accessibilityLabel:t._('Copy email address to clipboard', '[m10n].bizAccess.copyToClipBoardIcon.email.a11y', 'a11y for icon button to copy email address'),tooltipText:t._('Copy email address', '[m10n].bizAccess.copyToClipBoardIcon.email', 'tooltip text for icon button to copy email address')};case d.OWNER_EMAIL:return{elementId:"copy-owner-email",accessibilityLabel:t._('Copy email address to clipboard', '[m10n].bizAccess.copyToClipBoardIcon.emailOwner.a11y', 'a11y for icon button to copy email address'),tooltipText:t._('Copy email address', '[m10n].bizAccess.copyToClipBoardIcon.emailOwner', 'tooltip text for icon button to copy email address')};case d.ADMIN_EMAIL:return{elementId:"copy-admin-email",accessibilityLabel:t._('Copy email address to clipboard', '[m10n].bizAccess.copyToClipBoardIcon.emailAdmin.a11y', 'a11y for icon button to copy email address'),tooltipText:t._('Copy email address', '[m10n].bizAccess.copyToClipBoardIcon.emailAdmin', 'tooltip text for icon button to copy email address')};default:return{elementId:"",accessibilityLabel:"",tooltipText:""}}};t.ZP=function(e){var t=e.text,o=e.page,d=e.tooltipText,u=e.accessibilityLabel,_=e.elementId,p=e.dangerouslySetSmallMarginTop,y=e.dangerouslySetSmallMarginBottom,h=(0,i.ZP)((0,i.QK)(o)),f=(0,c.F9)().showToast,b=(0,a.ZP)();return(0,s.jsx)(n.xu,{dangerouslySetInlineStyle:y||p?{__style:{marginTop:p,marginBottom:y,marginLeft:2}}:void 0,children:(0,s.jsx)(n.hU,{accessibilityLabel:u,icon:"copy-to-clipboard",iconColor:"gray",onClick:function(){navigator.clipboard.writeText(t),h({eventName:"BUSINESS_ACCESS_ACTION",component:"BUSINESS_ACCESS_FORM",componentId:"copy-to-clip-board-icon",element:"BUSINESS_ACCESS_BUTTON",elementId:_}),f(function(e){var t=e.hideToast;return(0,s.jsx)(r.ZP,{duration:l.QE,onHide:t,text:b._('Copied!', '[m10n].bizAccess.copyToClipBoardIcon.toast', 'message in toast after text copied'),type:"success"})})},size:"xs",tooltip:{text:d,accessibilityLabel:u}})})}},440018:function(e,t,o){o.d(t,{h:function(){return v},Z:function(){return T}});var n=o(76911),l=o(506979),i=o(908390),r=o(852260),a=o(898781),c=o(773285),s=o(515198);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}var u=function(e){var t,o=e.label,l=e.description,r=e.initialState,a=e.onChangeCallBack,c=e.id,u=function(e){if(Array.isArray(e))return e}(t=(0,n.useState)(r))||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,l,i,r,a=[],c=!0,s=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=i.call(o)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){s=!0,l=e}finally{try{if(!c&&null!=o.return&&(r=o.return(),Object(r)!==r))return}finally{if(s)throw l}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return d(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),_=u[0],p=u[1];return(0,s.jsx)(i.XZ,{checked:_,helperText:l,id:c,label:o,name:o,onChange:function(){p(!_),a()},size:"md"})},_=o(611711),p=o(215026),y=o(912997),h=o(721344),f=o(977558);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(Object(o),!0).forEach(function(t){var n,l;n=t,l=o[t],(n=function(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!==b(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===b(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,l,i,r,a=[],c=!0,s=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;c=!1}else for(;!(c=(n=i.call(o)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){s=!0,l=e}finally{try{if(!c&&null!=o.return&&(r=o.return(),Object(r)!==r))return}finally{if(s)throw l}}return a}}(e,t)||x(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"==typeof e)return S(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return S(e,t)}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}var C=new i.Ry(f.fe),I=new i.H3([C]),v={MULTISELECT:"MULTISELECT"},T=function(e){var t=e.pageType,o=e.columnDefs,d=e.searchPlaceholder,f=e.emptyState,b=e.fetchData,m=e.data,C=e.isLoading,T=e.searchTermSelector,z=e.currentPageSelector,P=e.totalCountSelector,j=e.pageSizeSelector,E=e.onRowClick,w=e.filters,D=e.filtersError,L=(0,a.ZP)(),O=(0,h.YZ)(),B=A((0,n.useState)(""),2),k=B[0],U=B[1],M=A((0,n.useState)(!1),2),N=M[0],R=M[1],Z=A((0,n.useState)(!1),2),H=Z[0],F=Z[1],Y=A((0,n.useState)({}),2),W=Y[0],G=Y[1],X=A((0,n.useState)({}),2),K=X[0],Q=X[1],$=A((0,n.useState)(null),2),J=$[0],V=$[1],q=A((0,n.useState)(""),2),ee=q[0],et=q[1],eo=(0,l.useSelector)(null!=T?T:function(){}),en=(0,p.Z)(!0),el=(0,c.F)().checkExperiment("business_access_assets_and_history_api_v4_migration").anyEnabled,ei=(0,n.useCallback)(function(e,t,o,n){var l,i="TEMP"===n?g({},K):g({},W);o===v.MULTISELECT&&(i[e]?i[e].includes(t)?i[e]=i[e].filter(function(e){return e!==t}):i[e]=[].concat(function(e){if(Array.isArray(e))return S(e)}(l=i[e])||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(l)||x(l)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[t]):i[e]=[t],i[e].length<1&&delete i[e]),"TEMP"===n?Q(i):G(i)},[K,W]),er=(0,n.useCallback)(function(e,t,o){ei(e,t,o,"PERM")},[ei]),ea=(0,n.useCallback)(function(){return w?Object.keys(W).map(function(e){var t=w.find(function(t){return t.name===e});return t?(0,s.jsxs)(i.xu,{direction:"row",display:"flex",marginBottom:2,children:[(0,s.jsx)(i.xu,{marginEnd:3,paddingY:2,children:(0,s.jsxs)(i.xv,{inline:!0,size:"100",children:[t.label,":"]})}),(0,s.jsx)(i.kC,{direction:"row",gap:2,children:t.responseType===v.MULTISELECT&&W[e]&&W[e].map(function(o){var n,l=null===(n=t.options)||void 0===n?void 0:n.find(function(e){return e.value===o});return l?(0,s.jsx)(i.xu,{children:(0,s.jsx)(i.Vp,{onRemove:function(){er(e,o,v.MULTISELECT)},text:l.label})},"".concat(t.label,"-").concat(o)):null})})]},"filter-".concat(t.label)):null}):null},[W,w,er]),ec=(0,n.useCallback)(function(){var e=Object.keys(W).length>0?JSON.stringify(W):"";ee!==e&&(V(ea()),Q(W),b({filtersPayload:W},el),et(e))},[W,ee,b,ea,el]);if((0,n.useEffect)(function(){ec()},[W,ec]),(0,_.Z)(function(){b({searchTerm:k},el)},y.I.debounceTimeOut,[k]),O||C&&!N)return(0,s.jsx)(i.$j,{accessibilityLabel:L._('Loading data table info', '[m10n]DataTable.loading', 'message shown when loading data'),delay:!1,show:!0});if(!C&&!m.length&&!eo&&0===Object.keys(W).length)return f;var es=L._('Filters', '[m10n]DataTable.accessibility.overlay.filter', 'button to open filter overlay data table'),ed=L._('Filter', '[m10n]DataTable.overlay.title', 'Title for filter overlay'),eu=L._('Sorry, something went wrong', '[m10n]DataTable.overlay.error', 'Error message header for overlay'),e_=en&&w&&w.length>0;return(0,s.jsxs)(i.kC,{direction:"column",children:[(0,s.jsxs)(i.xu,{direction:"row",display:"flex",marginBottom:2,children:[d&&(0,s.jsx)(i.sg,{span:e_?11:12,children:(0,s.jsx)(i.Um,{accessibilityLabel:d,id:"data-table-search",onChange:function(e){var t=e.value;N||R(!0),U(t)},placeholder:d,value:k})}),e_&&(0,s.jsx)(i.sg,{span:1,children:(0,s.jsx)(i.xu,{marginStart:3,children:(0,s.jsx)(i.hU,{accessibilityExpanded:H,accessibilityHaspopup:!0,accessibilityLabel:es,icon:"filter",onClick:function(){return F(function(e){return!e})},selected:H,size:"md",tooltip:{text:es,idealDirection:"up"}})})})]}),J,(0,s.jsx)(y.Z,{columnDefs:o,currentPageSelector:z,id:"data-table",isLoading:C,isPaginationOptional:!0,onPageChange:function(e){return b({page:e},el)},onRowClick:E,onRowCountChange:function(e){return b({limit:e},el)},onSortChange:function(e,t){return b({sortBy:e,sortDirection:t},el)},pageSizeSelector:j,pageType:t,rowData:m,totalCountSelector:P}),H&&(0,s.jsx)(i.mh,{zIndex:I,children:(0,s.jsx)(i.To,{accessibilityDismissButtonLabel:L._('Close filter overlay', '[m10n]DataTable.accessibility.closefilteroverlay', 'button for closing filter overlay'),accessibilityLabel:D?eu:ed,footer:!D&&(0,s.jsx)(i.kC,{alignItems:"center",justifyContent:"end",children:(0,s.jsx)(i.zx,{color:"red",onClick:function(){G(K),F(!1)},text:L._('Apply', '[m10n]DataTable.filters.apply', 'Button to apply filter')})}),heading:D?eu:ed,onDismiss:function(){return F(!1)},size:"md",children:D?(0,s.jsx)(i.kC,{justifyContent:"center",children:(0,s.jsx)(i.xv,{inline:!0,size:"400",children:(0,r.sQ)(L)})}):(0,s.jsx)(i.kC,{direction:"column",gap:{row:0,column:12},children:w&&w.map(function(e){return(0,s.jsxs)(i.kC,{direction:"column",gap:{row:1,column:4},children:[(0,s.jsx)(i.xu,{children:(0,s.jsx)(i.xv,{inline:!0,size:"400",weight:"bold",children:e.label})}),(0,s.jsx)(i.xv,{children:e.description}),(0,s.jsx)(i.pg,{legend:e.description,legendDisplay:"hidden",children:(0,s.jsx)(i.kC,{direction:"column",gap:{row:0,column:3},children:e.responseType===v.MULTISELECT&&e.options&&e.options.map(function(t){return(0,s.jsx)(u,{description:t.description,id:"".concat(e.name,"-option-").concat(t.value),initialState:!!W[e.name]&&W[e.name].includes(t.value),label:t.label,onChangeCallBack:function(){ei(e.name,t.value,v.MULTISELECT,"TEMP")}},"".concat(e.name,"-option-").concat(t.value))})})})]},"filterLine-".concat(e.label))})})})})]})}},229424:function(e,t,o){var n=o(908390),l=o(515198);t.Z=function(e){var t=e.image,o=e.header,i=e.description;return(0,l.jsx)(n.xu,{borderStyle:"shadow",display:"flex",justifyContent:"center",rounding:4,children:(0,l.jsxs)(n.xu,{margin:9,children:[(0,l.jsx)(n.xu,{marginTop:9,children:t}),(0,l.jsx)(n.xu,{marginBottom:1,marginTop:4,children:(0,l.jsx)(n.xv,{align:"center",size:"300",children:o})}),(0,l.jsx)(n.xu,{marginBottom:9,children:(0,l.jsx)(n.xv,{align:"center",color:"subtle",size:"200",children:i})})]})})}},790039:function(e,t,o){o.d(t,{Z:function(){return r}});var n=o(76911),l=o(908390),i=o(515198);function r(e){var t=e.items,o=e.fitToWindow;return(0,i.jsx)(l.xu,{borderStyle:"sm",dangerouslySetInlineStyle:{__style:{borderColor:"#e9e9e9"}},direction:"column",display:"flex",height:o?"100%":void 0,rounding:4,children:t.map(function(e,o){return o<t.length-1?(0,i.jsxs)(n.Fragment,{children:[e,(0,i.jsx)(l.xu,{borderStyle:"sm",dangerouslySetInlineStyle:{__style:{borderBottom:"none",borderColor:"#e9e9e9"}}})]},o):e})})}},917567:function(e,t,o){o.d(t,{Z:function(){return a}});var n=o(908390),l=o(858472),i=o(773285),r=o(515198);function a(e){var t,o,a=e.pageProps,c=e.sidebarContent,s=e.mainContent,d=e.fitToWindow,u=e.style,_=(0,(0,i.F)().checkExperiment)("exp_ia_navigation_mega_nav_m1").anyEnabled?"calc(100vh - 169px)":"calc(100vh - 249px)",p=a||{},y=p.title,h=p.infoTooltip;return(0,r.jsxs)(n.xu,{direction:"column",display:"flex",overflow:"visible",padding:6,children:[!!y&&(0,r.jsxs)(n.xu,{alignItems:"center",display:"flex",height:"100%",justifyContent:"start",marginBottom:4,marginStart:2,width:"100%",children:[(0,r.jsx)(n.kC.Item,{flex:h?void 0:"grow",children:(0,r.jsx)(n.X6,{size:"500",children:y})}),h&&(0,r.jsx)(n.xu,{marginStart:1,children:(0,r.jsx)(n.hU,{accessibilityLabel:h.accessibilityLabel,bgColor:"transparent",icon:"info-circle",iconColor:"gray",onClick:h.onClick,size:"xs",tooltip:h.text?{text:h.text,accessibilityLabel:h.text}:void 0})})]}),(0,r.jsxs)(n.kC,{height:d?_:void 0,minHeight:d?void 0:_,overflow:d?"hidden":"visible",width:"100%",children:[(0,r.jsx)(n.xu,{borderStyle:"sm",color:"light",dangerouslySetInlineStyle:{__style:{borderColor:l.cO}},height:d?"100%":void 0,marginEnd:2,minWidth:280,overflow:d?"hidden":"visible",paddingX:2,paddingY:4,rounding:4,width:280,children:c}),(0,r.jsx)(n.xu,{borderStyle:"sm",color:"light",dangerouslySetInlineStyle:{__style:{borderColor:l.cO}},display:null==u?void 0:null===(t=u.content)||void 0===t?void 0:t.display,flex:"grow",minWidth:660,paddingY:4,rounding:4,width:"grow",children:(0,r.jsxs)(n.xu,{display:null==u?void 0:null===(o=u.content)||void 0===o?void 0:o.display,flex:d?void 0:"grow",height:d?"100%":void 0,overflow:d?"auto":"visible",paddingX:4,children:[s,(0,r.jsx)(n.xu,{height:2})]})})]})]})}},479831:function(e,t,o){var n=o(76911),l=o(908390),i=o(898781),r=o(905325),a=o(440018),c=o(229424),s=o(515198);function d(){var e=(0,i.ZP)();return(0,s.jsx)(c.Z,{description:e._('You can manage permissions to your ad accounts', '[m10n]AdAccountsTable.emptyState.description', 'Description explaining what you can do on ad accounts table'),header:e._('Your ad accounts list will appear here', '[m10n]AdAccountsTable.emptyState.title', 'Header explaining where ad accounts will go once added'),image:(0,s.jsx)(l.Ee,{alt:e._('Example of ad accounts', '[m10n]AdAccountsTable.emptyState.image', 'Alternate text for image that shows an example of ad accounts'),color:"#FFF",naturalHeight:112,naturalWidth:418,src:r})})}t.Z=function(e){var t=e.pageType,o=e.adAccounts,l=e.adAccountsIsLoading,r=e.adAccountsCurrentPageSelector,c=e.adAccountsTotalCountSelector,u=e.adAccountsPageSizeSelector,_=e.adAccountsSearchTermSelector,p=e.adAccountsFetchData,y=e.adAccountsColumnDefs,h=e.adAccountsTableConfiguration,f=e.adAccountsOnRowClick,b=e.owners,m=e.ownersError,g=e.searchFieldText,A=e.emptyState,x=(0,i.ZP)(),S=(0,n.useMemo)(function(){return b?[{name:"owner",label:x._('Owners', '[m10n]AdAccountsTable.filter.owner', 'Name for owners filter'),description:x._('Select which owners ad accounts you would like to see', '[m10n]AdAccountsTable.filter.ownerdescription', 'describe owner filter'),options:b,responseType:a.h.MULTISELECT}]:[]},[b,x]);return(0,s.jsx)(a.Z,{columnDefs:y,currentPageSelector:r||(null==h?void 0:h.dataCurrentPageSelector),data:o,emptyState:A||(0,s.jsx)(d,{}),fetchData:null!=p?p:function(){},filters:S,filtersError:m,isLoading:l,onRowClick:f,pageSizeSelector:u||(null==h?void 0:h.dataPageSizeSelector),pageType:t,searchPlaceholder:null!=g?g:x._('Search ad accounts', '[m10n]AdAccountsTable.search', 'Placeholder text to hint user to search for ad accounts by name or by business ID'),searchTermSelector:_||(null==h?void 0:h.dataSearchTermSelector),totalCountSelector:c||(null==h?void 0:h.dataTotalCountSelector)})}},977558:function(e,t,o){o.d(t,{L1:function(){return i},Rz:function(){return c},WZ:function(){return r},cI:function(){return l},fe:function(){return a},hu:function(){return n}});var n=64,l=80,i=22,r="HeaderContent",a=671,c={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}},905325:function(e){e.exports="https://s.pinimg.com/webapp/empty-state-ad-accounts-2x-6fe6a9c7.png"}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/45392-59960a77838dbb85.js.map