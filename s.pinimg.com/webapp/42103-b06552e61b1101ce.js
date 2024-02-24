"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[42103],{918301:function(e,t,o){o.d(t,{CB:function(){return y},y9:function(){return h}});var r=o(76911),n=o(425288),i=o(908390),l=o(186656),a=o(121151),s=o(898781),c=o(515198);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}var f=function(e){var t,o=e.onConfirm,n=(0,s.ZP)(),f=function(e){if(Array.isArray(e))return e}(t=(0,r.useState)(!1))||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,n,i,l,a=[],s=!0,c=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;s=!1}else for(;!(s=(r=i.call(o)).done)&&(a.push(r.value),a.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(c)throw n}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return u(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),d=f[0],p=f[1],_=function(){p(!0),(0,l.Z)({url:"/v3/users/email/verify/resend/",method:"POST"})};return(0,c.jsx)(a.ZP,{accessibilityModalLabel:n._('Verify your email', 'Accessible label for email verification being required', 'Accessible label for email verification being required'),footer:(0,c.jsxs)(i.kC,{gap:{row:2,column:0},justifyContent:"end",children:[d?(0,c.jsx)(i.zx,{color:"gray",disabled:d,fullWidth:!0,onClick:_,size:"lg",text:n._('Email sent', 'Button text for verification email being sent', 'Button text for verification email being sent')}):(0,c.jsx)(i.zx,{color:"gray",disabled:d,fullWidth:!0,onClick:_,size:"lg",text:n._('Resend email', 'Button text for resending email verification email', 'Button text for resending email verification email')}),(0,c.jsx)(i.zx,{color:"red",fullWidth:!0,onClick:o,size:"lg",text:n._('Got it', 'Button text for acknowledging email verificaiton is required', 'Button text for acknowledging email verificaiton is required')})]}),heading:n._('Verify your email', 'Accessible label for email verification being required', 'Accessible label for email verification being required'),onDismiss:o,role:"alertdialog",children:(0,c.jsx)(i.xu,{padding:8,children:(0,c.jsx)(i.xv,{align:"center",size:"300",children:n._('Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.', 'Inform users that they need to verify their email to keep their account secure and continue using Pinterest', 'Inform users that they need to verify their email to keep their account secure and continue using Pinterest')})})})};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}var p=(0,n.Z)("EmailVerificationReminderModal"),_=p.Provider,h=p.useHook;function y(e){var t,o=e.children,n=function(e){if(Array.isArray(e))return e}(t=(0,r.useState)(!1))||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,n,i,l,a=[],s=!0,c=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;s=!1}else for(;!(s=(r=i.call(o)).done)&&(a.push(r.value),a.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(c)throw n}}return a}}(t,2)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return d(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=n[0],l=n[1],a=(0,r.useMemo)(function(){return{showEmailVerificationReminderModal:function(){l(!0)}}},[]);return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(_,{value:a,children:o}),i&&(0,c.jsx)(f,{onConfirm:function(){l(!1)}})]})}},142103:function(e,t,o){o.d(t,{Z:function(){return I}});var r=o(76911),n=o(506979),i=o(908390),l=o(407043),a=o(11363),s=o(946984),c=o(918301),u=o(898781),f=o(349700),d=o(584595),p=o(957161),_=o(343341),h=o(829407),y=o(694379),v=o(515198),m=function(e){var t=e.followText,o=e.followerCount,r=e.userFollowed,n=(0,u.ZP)();return(0,f.nk)(n._('{{ followCount }} {{ followText }}', ' - ', ' -- '),{followCount:(0,v.jsx)(i.xu,{"data-test-id":"followCount",paddingX:1,opacity:r?void 0:.8,children:(0,v.jsx)(i.xv,{color:r?"subtle":"inverse",children:(0,v.jsx)(y.Z,{value:o,shortform:!0,shortformMaximumFractionDigits:0})})},"followCount"),followText:(0,v.jsx)(i.xu,{"data-test-id":"followText",paddingX:1,children:(0,v.jsx)(i.xv,{color:r?"default":"inverse",weight:"bold",children:t})},"followText")})},b=o(807532),w=o(461773),g=o(698330),P=o(201155),x=o(709113);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function O(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?A(Object(o),!0).forEach(function(t){k(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function C(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E(r.key),r)}}function z(e,t){return(z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function T(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,o){return(t=E(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function E(e){var t=function(e,t){if("object"!==j(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==j(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===j(t)?t:String(t)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(l,e);var t,o,r,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,o=S(l);if(t){var r=S(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return T(e)}(this,e)});function l(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,l);for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return k(T(e=n.call.apply(n,[this].concat(o))),"handleButtonClick",function(t){var o=t.event,r=e.props,n=r.requireAuth,i=r.i18n,l=r.userFollowed;if(n){o.stopPropagation(),n({loginModalHeader:(0,a.N4)({i18n:i,toFollow:!l})});return}var s=e.props,c=s.shouldStopEventPropagation,u=s.loggingData;c&&(o.preventDefault(),o.stopPropagation()),e.props.logContextEvent(O({event_type:101,component:13672,element:11951,object_id_str:e.props.id,view_type:e.props.viewType,view_parameter:e.props.viewParameter,clientTrackingParams:e.props.clientTrackingParams},u||Object.freeze({}))),e.toggleFollowUnfollow()}),k(T(e),"handleClick",function(t){var o=t.event,r=e.props.requireAuth;if((r||e.props.shouldStopEventPropagation)&&o.stopPropagation(),r){r();return}e.toggleFollowUnfollow()}),k(T(e),"toggleFollowUnfollow",function(){var t=e.props,o=t.id,r=t.mostRecentPinId,n=t.loggingData,i=t.userFollowed,l=t.viewType,a=t.viewParameter,s=t.clientTrackingParams;i?(e.props.logContextEvent(O({event_type:46,object_id_str:o,view_type:l,view_parameter:a,aux_data:{pin_id:r},clientTrackingParams:s},n||Object.freeze({}))),e.unfollow()):(e.props.logContextEvent(O({event_type:45,object_id_str:o,view_type:l,view_parameter:a,aux_data:{pin_id:r},clientTrackingParams:s},n||Object.freeze({}))),e.follow())}),k(T(e),"follow",function(){var t=e.props,o=t.follow,r=t.id,n=t.onUserFollow,i=t.mostRecentPinId,l=t.setMostRecentPinId,a=t.inviteCode,s=t.handleFollowSuccessFromInvite,c=t.loggingData,u=t.viewType,f=t.viewParameter;o(r,i,function(){a?(null==s||s(),e.props.logContextEvent(O({event_type:14858,object_id_str:r,view_type:u,view_parameter:f},c||Object.freeze({})))):e.showConfirmation()},e.showError),n&&n(!0),l(null)}),k(T(e),"showToast",function(t){var o=e.props,r=o.id,n=o.imageUrl,i=o.profileUrl,l=o.toastManagerContext;o.suppressToasts||l.showOneToast(function(e){var o=e.hideToast;return(0,v.jsx)(P.Z,{href:i,userId:r,imageUrl:n,handleHide:o,text:t})})}),k(T(e),"showConfirmation",function(){var t=(0,v.jsx)(i.xv,{children:e.props.i18n._('Following! Their created Pins will show up in your home feed!', 'userFollowButton.informationalToastText2', 'Text explaining that a creator\'s Pins will show up in home feed after follow')});e.showToast(t)}),k(T(e),"showError",function(t){var o=e.props,r=o.fullName,n=o.userFollowed,l=o.showEmailVerificationReminderModal,a=o.loggingData,s=o.inviteCode,c=o.id,u=o.viewParameter,p=o.viewType,_=n?e.props.i18n._('Error unfollowing {{ usernameComponent }}.', 'UserFollowButton.error.unfollowing', 'When there is an API error when unfollowing a user'):e.props.i18n._('Error following {{ usernameComponent }}.', 'UserFollowButton.error.following', 'When there is an API error when following a user');if(t&&t.api_error_code===d.H9){l();return}var h=(0,v.jsx)(i.xv,{children:(0,f.nk)(_,{usernameComponent:(0,v.jsx)(i.xv,{weight:"bold",inline:!0,children:r})})});e.showToast(h),!n&&s&&e.props.logContextEvent(O({event_type:14859,object_id_str:c,view_type:p,view_parameter:u},a||Object.freeze({})))}),k(T(e),"unfollow",function(){var t=e.props,o=t.id,r=t.onUserFollow,n=t.unfollow,i=t.mostRecentPinId,l=t.setMostRecentPinId;n(o,i,function(){},e.showError),r&&r(!1),l(null)}),e}return o=[{key:"renderButton",value:function(){var e=this.props,t=e.button,o=e.followerCount,r=e.inline,n=e.isOwnProfile,l=e.invertButtonColor,a=e.isSecondaryButton,s=e.size,c=e.showFollowerCount,u=e.userFollowed,f=u?this.props.i18n._('Following', 'User follow button', 'User follow button'):this.props.i18n._('Follow', 'User follow button', 'User follow button');if(t)return t({followText:f,onClick:this.handleButtonClick,userFollowed:u});if(n)return(0,v.jsx)(i.zx,{fullWidth:!0,disabled:!0,text:this.props.i18n._('This is you', 'Button label to note that this is your Profile', 'Button label to note that this is your Profile')});if(!c)return(0,v.jsx)(i.xu,{display:"inlineBlock","data-test-id":"user-".concat(u?"unfollow":"follow","-button"),children:(0,v.jsx)(i.zx,{accessibilityLabel:u?this.props.i18n._('Unfollow', 'userUnfollowButton.button.accessibilityLabel', 'Accessibility label for the unfollow button'):this.props.i18n._('Follow', 'userFollowButton.button.accessibilityLabel', 'Accessibility label for the follow button'),color:a||u?"gray":"red",selected:l?!u:!!u,fullWidth:void 0!==r&&r,onClick:this.handleButtonClick,size:null!=s?s:void 0,text:f})});var d="number"==typeof o?(0,v.jsx)(m,{followerCount:o,userFollowed:u,followText:f}):f;return(0,v.jsx)(i.iP,{onTap:this.handleClick,children:(0,v.jsx)(i.xu,{color:u?"secondary":"primary",rounding:2,paddingX:3,paddingY:3,children:(0,v.jsx)(i.kC,{alignItems:"center",justifyContent:"start",children:d})})})}},{key:"render",value:function(){var e=this.props,t=e.showPulsar,o=e.userFollowed;return(0,v.jsxs)(i.xu,{position:"relative",display:"flex",children:[this.renderButton(),t&&(0,v.jsx)(i.iP,{onTap:this.handleClick,children:(0,v.jsx)(i.xu,{position:"absolute",display:"inlineBlock",dangerouslySetInlineStyle:{__style:{marginLeft:-86,marginTop:-28}},children:(0,v.jsx)(i.o3,{paused:o||!1})})})]})}}],C(l.prototype,o),r&&C(l,r),Object.defineProperty(l,"prototype",{writable:!1}),l}(r.PureComponent);function I(e){var t=(0,l.v)().logContextEvent,o=(0,u.ZP)(),r=(0,b.f)(),i=r.id,a=r.setMostRecentPinId,f=(0,s.Z)(),d=(0,n.useDispatch)(),y=(0,c.y9)().showEmailVerificationReminderModal,m=(0,g.mN)()(e.id),P=null==m?void 0:m.follower_count,j=m?m.explicitly_followed_by_me:e.userFollowed;return(0,h.Z)(function(){var t=e.id,o=p.Z.getItem(x.AG)||"";o&&o===t&&(p.Z.removeItem(x.AG),d((0,w.ZN)(o,e.clientTrackingParams)))}),(0,v.jsx)(F,O(O({},e),{},{follow:function(t,o,r,n){d((0,w.yA)(t,o,e.clientTrackingParams,e.inviteCode)).then(r).catch(function(e){n(e)})},followerCount:P,i18n:o,logContextEvent:t,mostRecentPinId:i,requireAuth:f,setMostRecentPinId:a,showEmailVerificationReminderModal:y,toastManagerContext:(0,_.F9)(),unfollow:function(t,o,r,n){d((0,w.KF)(t,o,e.clientTrackingParams)).then(r,n)},userFollowed:j}))}},807532:function(e,t,o){o.d(t,{C:function(){return f},f:function(){return u}});var r=o(76911),n=o(425288),i=o(515198);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,n,i,l,a=[],s=!0,c=!1;try{if(i=(o=o.call(e)).next,0===t){if(Object(o)!==o)return;s=!1}else for(;!(s=(r=i.call(o)).done)&&(a.push(r.value),a.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(c)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return a(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=Array(t);o<t;o++)r[o]=e[o];return r}var s=(0,n.Z)("MostRecentPin"),c=s.Provider,u=s.useHook;function f(e){var t=e.children,o=l((0,r.useState)(),2),n=o[0],a=o[1],s=l((0,r.useState)(),2),u=s[0],f=s[1],d=(0,r.useCallback)(function(e){f([e].concat((u?u.slice(0,10):[]).filter(function(t){return t!==e})))},[u]),p=(0,r.useMemo)(function(){return{id:n,plpImageSignatures:u,setMostRecentPinId:a,setMostRecentPinImage:d}},[n,u,d]);return(0,i.jsx)(c,{value:p,children:t})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/42103-b06552e61b1101ce.js.map