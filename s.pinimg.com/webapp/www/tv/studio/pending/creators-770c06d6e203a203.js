(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[82917],{241645:function(e,t,r){(window.__PWS_LOADED_HANDLERS__=window.__PWS_LOADED_HANDLERS__||{})["www/tv/studio/pending/creators"]=function(){return r(804329).Z}},273712:function(e,t,r){"use strict";r.d(t,{$J:function(){return o},Ct:function(){return _},Dm:function(){return u},Ff:function(){return d},Md:function(){return s},My:function(){return n},Rp:function(){return l},ak:function(){return a},d0:function(){return h},gs:function(){return f},jm:function(){return c},oo:function(){return i},vw:function(){return p}});var o={SMALL:"SMALL",MEDIUM:"MEDIUM",LARGE:"LARGE",MOBILE_SMALL:"MOBILE_SMALL",MOBILE_LARGE:"MOBILE_LARGE"},i=2,a=6,n=3,l=1.5,s=16,c=8,p=16/9,d=25,u="Includes Paid Promotion #Ad",_={PRE_LIVE:1,OFFLINE:2,LIVE:3,POST_LIVE:4},h={TRUE:!0,FALSE:!1,UNKNOWN:void 0},f=["AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","EU"]},697335:function(e,t,r){"use strict";r.d(t,{c:function(){return i},t:function(){return a}});var o=r(883521);function i(e){return(0,e.children)((0,o.J)().height)}function a(){return(0,o.J)().height}},366022:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var o,i,a=r(599689),n=r(908390),l=r(121151),s=r(499128),c=r(898781),p=r(349700),d=r(343341),u=r(409692),_=r(186656);function h(e,t,r,o,i,a,n){try{var l=e[a](n),s=l.value}catch(e){r(e);return}l.done?t(s):Promise.resolve(s).then(o,i)}var f=(o=regeneratorRuntime.mark(function e(t){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.episodeId,e.next=3,(0,_.Z)({url:"/v3/classes/instances/".concat(r,"/"),method:"DELETE"});case 3:if(!(o=e.sent.resource_response)){e.next=7;break}return e.abrupt("return",o.data);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}),i=function(){var e=this,t=arguments;return new Promise(function(r,i){var a=o.apply(e,t);function n(e){h(a,r,i,n,l,"next",e)}function l(e){h(a,r,i,n,l,"throw",e)}n(void 0)})},function(e){return i.apply(this,arguments)}),v=r(515198);function x(e,t,r,o,i,a,n){try{var l=e[a](n),s=l.value}catch(e){r(e);return}l.done?t(s):Promise.resolve(s).then(o,i)}var b=function(e){var t,r,o=e.episodeId,i=e.onDismiss,_=e.isVisible,h=e.episodeTitle,b=(0,c.ZP)(),A=(0,a.k6)().replace,m=(0,a.$B)({path:"/tv/studio/episodes/:episodeId/",exact:!1,strict:!1}),g=(0,d.F9)(),j=(t=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f({episodeId:o});case 3:if(i(),(null==m?void 0:null===(t=m.params)||void 0===t?void 0:t.episodeId)!==o){e.next=7;break}return A((0,u.Z)("EPISODES")),e.abrupt("return");case 7:g.showToast(function(e){var t=e.hideToast;return(0,v.jsx)(s.ZP,{duration:2e3,onHide:t,text:(0,p.Wc)(b._('Deleted episode "{{episodeTitle}}" successfully', 'webapp.app.pinTv.creatorStudio.episode.deleteModal.success', 'success notification that an episode was deleted, episodeTitle: title of the episode the was deleted'),{episodeTitle:h})})}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),i(),g.showToast(function(e){var t=e.hideToast;return(0,v.jsx)(s.ZP,{duration:2e3,onHide:t,type:"error",text:b._('Unable to delete episode, please try again later', 'webapp.app.pinTv.creatorStudio.episode.deleteModal.error', 'Error that we are unable to delete an episode at this time')})});case 14:case"end":return e.stop()}},e,null,[[0,10]])}),r=function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function n(e){x(a,o,i,n,l,"next",e)}function l(e){x(a,o,i,n,l,"throw",e)}n(void 0)})},function(){return r.apply(this,arguments)});return _?(0,v.jsx)(l.ZP,{accessibilityModalLabel:(0,p.Wc)(b._('Delete episode "{{episodeTitle}}"', 'webapp.app.pinTv.creatorStudio.episode.deleteModal.a11yLabel', 'accessibility label for a deletion confirmation modal, episodeTitle: title of the episode being deleted'),{episodeTitle:h}),heading:(0,p.Wc)(b._('Are you sure you want to delete "{{episodeTitle}}"?', 'webapp.app.pinTv.creatorStudio.episode.deleteModal.heading', 'header for delete confirmation modal, episodeTitle: title of the episode being deleted'),{episodeTitle:h}),onDismiss:function(){return i()},footer:(0,v.jsxs)(n.kC,{justifyContent:"end",gap:2,children:[(0,v.jsx)(n.zx,{color:"gray",text:b._('Cancel', 'webapp.app.pinTv.creatorStudio.episode.deleteModal.cancel', 'Cancel button for deletion modal'),onClick:function(){return i()}}),(0,v.jsx)(n.zx,{color:"red",text:b._('Delete forever', 'webapp.app.pinTv.creatorStudio.episode.deleteModal.confirmation', 'Confirm button for deletion modal'),onClick:function(){j()}})]}),children:(0,v.jsx)(n.xu,{padding:8,children:(0,v.jsx)(n.xv,{align:"center",size:"300",children:b._('Once you delete an episode, you cannot undo it!', 'webapp.app.pinTv.creatorStudio.episode.deleteModal.helpText', 'Modal text for deleting an episode')})})}):null}},361741:function(e,t,r){"use strict";var o=r(908390),i=r(898781),a=r(409692),n=r(515198);t.Z=function(){var e=(0,i.ZP)(),t=new o.Ry(1e3);return(0,n.jsx)(o.hU,{accessibilityLabel:e._('Back to episodes', 'webapp.app.pinTv.creatorStudio.navigation.backToEpisodes', 'Back to Pinterest TV Episodes'),icon:"arrow-back",iconColor:"darkGray",size:"sm",onClick:function(e){e.event.preventDefault(),window.location=(0,a.Z)("EPISODES")},tooltip:{idealDirection:"up",text:e._('Back to episodes', 'webapp.app.pinTv.creatorStudio.navigation.backToEpisodes', 'Back to Pinterest TV Episodes'),zIndex:t}})}},613982:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var o=r(76911),i=r(908390),a=r(356997),n=r(19121),l=r(697335),s=r(326857),c=r(898781),p=r(273712),d=r(366022),u=r(878987),_=r(409692),h=r(985453),f=r(515198);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}var x=function(e){var t,r,a,l,x,b,A=e.shouldHideEdit,m=(0,h.F)().data,g=(0,c.ZP)(),j=(0,n.Z)(),w=function(e){if(Array.isArray(e))return e}(t=(0,o.useState)(!1))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,i,a,n,l=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(o=a.call(r)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=r.return&&(n=r.return(),Object(n)!==n))return}finally{if(c)throw i}}return l}}(t,2)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),P=w[0],y=w[1],T=(null!==(r=null==m?void 0:null===(a=m.creator_class)||void 0===a?void 0:a.creator)&&void 0!==r?r:{}).id===(j.isAuth?j.id:""),S=(null==m?void 0:m.live_status)===p.Ct.POST_LIVE,z=(null==m?void 0:m.admin_approval_status)===u.oF.APPROVED,E=(0,s.Z)(new Date(null!==(l=null==m?void 0:m.ends_at)&&void 0!==l?l:"")),C=!E&&!(void 0!==A&&A);return!m||!T||S||z&&E?null:C?(0,f.jsx)(o.Fragment,{children:(0,f.jsxs)(i.kC,{direction:"row",children:[C&&(0,f.jsx)(i.I_,{accessibilityLabel:g._('Edit episode', 'webapp.app.pinTv.creatorStudio.navigation.episodeActions.edit', 'accessibility label for episode edit button'),href:(0,_.Z)("EDIT_EPISODE",m.id),icon:"edit",size:"lg",tooltip:{text:g._('Edit episode', 'webapp.app.pinTv.creatorStudio.navigation.episodeActions.edit.tooltip', 'tooltip text for episode edit button')}}),(0,f.jsx)(i.hU,{accessibilityLabel:g._('Delete episode', 'webapp.app.pinTv.creatorStudio.navigation.episodeActions.delete', 'accessibility label for episode delete button'),icon:"trash-can",onClick:function(){y(!0)},size:"lg",tooltip:{text:g._('Delete episode', 'webapp.app.pinTv.creatorStudio.navigation.episodeActions.delete.tooltip', 'tooltip text for episode delete button')}}),(0,f.jsx)(d.Z,{episodeTitle:null!==(x=m.title)&&void 0!==x?x:"",episodeId:null!==(b=m.id)&&void 0!==b?b:"",onDismiss:function(){return y(!1)},isVisible:P})]})}):null},b=r(499128),A=r(343341),m=function(e){var t=e.link,r=(0,A.F9)(),o=(0,c.ZP)(),a=o._('Copy link to episode', 'webapp.app.pinTv.creatorStudio.shareableLink.tooltip', 'tooltip for getting a shareable link to an episode'),n=new i.Ry(2);return(0,f.jsx)(i.hU,{size:"md",icon:"link",tooltip:{zIndex:n,text:a},iconColor:"darkGray",accessibilityLabel:a,onClick:function(){navigator.clipboard.writeText(t).then(function(){r.showToast(function(e){var t=e.hideToast;return(0,f.jsx)(b.ZP,{onHide:t,text:o._('Link copied to clipboard!', 'webapp.app.pinTv.creatorStudio.shareableLink.tooltip', 'informs the user that a link has been copied to their clipboard')})})})}})},g=function(e){var t=e.actions,r=e.pageTitle,s=e.subTitle,c=e.showAvatar,p=e.badge,d=e.backButton,_=e.shareLink,h=e.pageType,v=(0,n.Z)(),b=new i.Ry(2),A=(0,l.t)();return(0,f.jsx)(o.Fragment,{children:(0,f.jsx)(i.Le,{top:A,zIndex:b,children:(0,f.jsxs)(i.xu,{height:u.aj,marginEnd:u.CY,color:"default",display:"flex",marginStart:u.CY,justifyContent:"between",children:[(0,f.jsxs)(i.kC,{alignItems:"center",gap:{row:2,column:0},children:[(0,f.jsx)(i.xu,{marginStart:-2,children:d}),void 0!==c&&c&&v.isAuth&&(0,f.jsx)(i.xu,{marginEnd:2,children:(0,f.jsx)(a.qE,{size:"md",name:v.fullName||v.firstName||v.username,src:v.imageMediumUrl})}),(0,f.jsxs)(i.kC,{direction:"column",gap:1,children:[(0,f.jsxs)(i.kC,{direction:"row",gap:2,children:[(0,f.jsx)(i.X6,{size:"500",lineClamp:1,accessibilityLevel:1,children:r}),p||null]}),s&&(0,f.jsx)(i.xv,{size:"300",children:s})]})]}),(0,f.jsxs)(i.kC,{alignItems:"center",gap:{row:2,column:0},flex:"none",children:[t,_&&(0,f.jsx)(m,{link:_}),"EPISODE"===h&&(0,f.jsx)(x,{}),"EDIT_EPISODE"===h&&(0,f.jsx)(x,{shouldHideEdit:!0})]})]})})})}},335035:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(76911),i=r(695524),a=r(908390),n=r(898781),l=r(349700),s=r(515198),c=function(e){var t=e.label,r=e.text,o=e.boldText,i=e.children;return(0,s.jsxs)(a.kC,{direction:"column",gap:{row:0,column:2},children:[(0,s.jsx)(a.xv,{size:"100",children:t}),void 0!==r&&(0,s.jsx)(a.xv,{size:"300",weight:void 0!==o&&o?"bold":"normal",children:r}),void 0===i?null:i]})},p=r(356997),d=function(e){var t=e.username,r=e.name,o=e.imageUrl,i=e.isVerified,l=(0,n.ZP)();return(0,s.jsx)(c,{label:l._('Applicant', 'webapp.app.pinTv.creatorStudio.creatorApproval.applicant', 'label for the section about the applicants info'),children:(0,s.jsxs)(a.kC,{direction:"row",gap:{row:2,column:0},alignItems:"center",children:[(0,s.jsx)(a.xu,{children:(0,s.jsx)(p.qE,{size:"lg",name:r,src:o})}),(0,s.jsxs)(a.kC,{direction:"column",gap:{row:0,column:2},children:[(0,s.jsxs)(a.kC,{direction:"row",gap:{row:2,column:0},children:[(0,s.jsx)(a.xv,{weight:"bold",children:r}),void 0!==i&&i&&(0,s.jsx)(a.JO,{icon:"check-circle",color:"info",accessibilityLabel:l._('verified user', 'webapp.app.pinTv.creatorStudio.creatorApproval.userIsVerified', 'accessability label if a user is verified')})]}),(0,s.jsx)(a.kC,{direction:"row",gap:{row:2,column:0},children:(0,s.jsx)(a.xv,{color:"subtle",children:(0,s.jsxs)(a.rU,{href:"http://pinterest.com/".concat(t,"/"),target:"blank",children:["@",t]})})})]})]})})},u=r(878987),_=function(e){var t,r=e.format,o=(0,n.ZP)();switch(r){case u.Ym.TRENDSETTER:t=o._('Trendsetter', 'webapp.app.pinTv.creatorStudio.creatorApplication.format.trendsetterLabel', 'Trendsetter label');break;case u.Ym.IMMERSIVE:t=o._('Immersive', 'webapp.app.pinTv.creatorStudio.creatorApplication.format.immersiveLabel', 'Immersive label');break;case u.Ym.HOW_TO:t=o._('How-to', 'webapp.app.pinTv.creatorStudio.creatorApplication.howToLabel', 'How-to label');break;case u.Ym.TRANSFORMATIVE:t=o._('Transformative', 'webapp.app.pinTv.creatorStudio.creatorApplication.format.transformativesLabel', 'Transformative label');break;case u.Ym.LIVE_EVENT:t=o._('Live Event', 'webapp.app.pinTv.creatorStudio.creatorApplication.format.liveEventLabel', 'Live Event label');break;default:return null}return(0,s.jsx)(a.xu,{rounding:"pill",color:"successWeak",padding:2,marginTop:2,marginBottom:2,children:(0,s.jsx)(a.xv,{weight:"bold",size:"200",children:t})})},h=function(e){var t=e.interests,r=(0,n.ZP)(),i={BEAUTY:r._('Beauty', 'webapp.app.pinTv.creatorStudio.creatorApplication.category.beautyLabel', 'Beauty label'),WOMENS_FASHION:r._('Women\'s fashion', 'webapp.app.pinTv.creatorStudio.creatorApplication.category.womensFashionLabel', 'Women\'s fashion label'),FOOD_AND_DRINKS:r._('Food and drinks', 'webapp.app.pinTv.creatorStudio.creatorApplication.category.foodAndDrinksLabel', 'Food and Drinks label'),HOME:r._('Home', 'webapp.app.pinTv.creatorStudio.creatorApplication.category.homeLabel', 'Home label'),OTHER:r._('Other', 'webapp.app.pinTv.creatorStudio.creatorApplication.otherLabel', 'Other label')};return t?(0,s.jsx)(o.Fragment,{children:t.map(function(e){return(0,s.jsx)(a.xu,{rounding:"pill",color:i[e]?"infoWeak":"errorWeak",padding:2,margin:2,children:i[e]&&"OTHER"!==e?(0,s.jsx)(a.xv,{weight:"bold",size:"200",children:i[e]}):(0,s.jsx)(a.u,{text:r._('This is not a supported interest, producers will have to manually set them for this creator once approved.', 'webapp.app.pinTv.creatorStudio.creatorApplication.unsupportedInterests', 'Tooltip for unsupported interests appearing in a creator application.'),children:(0,s.jsxs)(a.xv,{weight:"bold",size:"200",children:["OTHER"===e?i[e]:e,"\xa0",(0,s.jsx)(a.JO,{icon:"alert",accessibilityLabel:r._('Warning about this interest', 'webapp.app.pinTv.creatorStudio.creatorApplication.unsupporteInterestsIcon', 'Accessibility label for an alert/error icon'),inline:!0})]})})},e)})}):null};function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,i,a,n,l=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(o=a.call(r)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=r.return&&(n=r.return(),Object(n)!==n))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}var x=function(e){var t=e.id,r=e.name,p=e.applicationSource,v=e.userId,x=e.format,b=e.username,A=e.showBrief,m=e.isPending,g=e.userImage,j=e.interests,w=e.isRejected,P=e.isVerified,y=e.previewVideo,T=e.exampleVideo,S=e.followerCount,z=e.dateSubmitted,E=e.liveExperience,C=e.isBusinessAccount,k=e.onReject,I=e.onApprove,L=e.onUnreject,R=e.userCountry,D=e.rejectionReason,O=(0,n.ZP)(),Z=((null==T?void 0:T.video_list)||{}).V_720P,M=(null==Z?void 0:Z.url)||"",N=(null==Z?void 0:Z.width)||0,B=(null==Z?void 0:Z.height)||0,H=f((0,o.useState)(0),2),U=H[0],V=H[1],F=f((0,o.useState)(!1),2),W=F[0],G=F[1];return(0,o.useEffect)(function(){V(W?1:0)},[W]),(0,s.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{boxShadow:"rgba(0,0,0,0.1) 0px 1px 10px 0px"}},marginBottom:4,marginTop:2,rounding:4,width:"100%",display:"flex",padding:4,children:(0,s.jsxs)(a.kC,{direction:"row",width:"100%",alignContent:"start",children:[(0,s.jsx)(a.sg,{span:4,children:(0,s.jsxs)(a.kC,{direction:"column",justifyContent:"start",gap:{row:0,column:5},children:[(0,s.jsx)(d,{username:b,name:r,imageUrl:g||"",isVerified:P}),(0,s.jsx)(c,{label:O._('Application source', 'webapp.app.pinTv.creatorStudio.creatorApproval.applicationSource', 'label for user\'s application source'),text:function(e){switch(e){case u.S7.CREATOR_STUDIO:return O._('Creator Studio Web', 'webapp.app.pinTv.creatorStudio.creatorApproval.creatorStudioWeb', 'Source is Creator Studio web');case u.S7.PINTEREST_APP:return O._('Pinterest App', 'webapp.app.pinTv.creatorStudio.creatorApproval.pinterestApp', 'Source is Pinterest app');case u.S7.MANAGED:return O._('Admin Tool', 'webapp.app.pinTv.creatorStudio.creatorApproval.adminTool', 'Source is Admin tool');default:return e}}(p),boldText:!0}),(0,s.jsx)(c,{label:O._('User country', 'webapp.app.pinTv.creatorStudio.creatorApproval.userCountry', 'label for users\'s country'),text:(0,l.nk)(O._('{{userCountry}}', 'webapp.app.pinTv.creatorStudio.creatorApproval.userCountry.text', 'userCountry: text with user\'s country'),{userCountry:R}),boldText:!0}),(0,s.jsx)(c,{label:O._('Followers', 'webapp.app.pinTv.creatorStudio.creatorApproval.followers', 'label for users followers count'),text:S,boldText:!0}),(0,s.jsx)(c,{label:O._('Business account', 'webapp.app.pinTv.creatorStudio.creatorApproval.businessAccount', 'Label if a user has a business account'),text:C?O._('Yes', 'webapp.app.pinTv.creatorStudio.creatorApproval.isBusinessAccount.yes', 'The creator is a business account'):O._('No', 'webapp.app.pinTv.creatorStudio.creatorApproval.isBusinessAccount.no', 'The creator is not a business account'),boldText:!0}),(0,s.jsx)(c,{label:O._('Date submitted', 'webapp.app.pinTv.creatorStudio.creatorApproval.dateSubmitted', 'label for the date an application was submitted'),text:(0,i.Z)(new Date(z),u.yd,"eeee, MMMM do"),boldText:!0}),(0,s.jsxs)(a.kC,{direction:"column",gap:2,children:[(0,s.jsx)(a.xv,{size:"100",children:O._('Application link', 'webapp.app.pinTv.creatorStudio.creatorApproval.applicationLink', 'label for the application link')}),(0,s.jsx)(a.rU,{href:"/tv/application/".concat(t,"/"),onClick:function(e){e.event.stopPropagation()},children:(0,s.jsx)(a.xv,{size:"300",weight:"bold",children:t})})]})]})}),(0,s.jsxs)(a.sg,{span:8,children:[T&&M&&(0,s.jsx)(c,{label:O._('Example video', 'webapp.app.pinTv.creatorStudio.creatorApproval.exampleVideo', 'label for the example video'),children:(0,s.jsx)(a.xu,{width:u.Lc,height:u.S2,children:(0,s.jsx)(a.xu,{id:"video-box",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"hidden",rounding:3,width:"100%",dangerouslySetInlineStyle:{__style:{backgroundColor:"black"}},children:(0,s.jsx)(a.nk,{aspectRatio:N/B,captions:"",controls:!0,loop:!0,playing:W,onPlayError:function(){return G(!1)},onPlay:function(){return G(!0)},onControlsPlay:function(){return G(!0)},onControlsPause:function(){return G(!1)},src:M,onVolumeChange:function(e){return V(e.volume)},volume:U})})})}),(0,s.jsxs)(a.kC,{direction:"column",justifyContent:"start",gap:{row:0,column:5},children:[y&&(0,s.jsx)(c,{label:O._('Preview video', 'webapp.app.pinTv.creatorStudio.creatorApproval.previewVideo', 'label for section about the users preview video'),text:(0,s.jsx)(a.rU,{display:"inlineBlock",href:y,children:y})}),A&&(0,s.jsx)(c,{label:O._('Show brief', 'webapp.app.pinTv.creatorStudio.creatorApproval.showBrief', 'label for a section about a summary of what the user wants to do on pinterest tv'),children:(0,s.jsx)(a.xv,{children:A})}),E&&(0,s.jsx)(c,{label:O._('Experience with live content', 'webapp.app.pinTv.creatorStudio.creatorApproval.experienceWithLiveContent', 'label for a section about a users experience with live content'),children:(0,s.jsx)(a.xv,{children:E})}),j&&j.length>0&&(0,s.jsx)(a.kC,{direction:"row",gap:{row:2,column:0},justifyContent:"between",children:(0,s.jsx)(c,{label:O._('Categories', 'webapp.app.pinTv.creatorStudio.creatorApproval.categories', 'label for a section of the users categories'),children:(0,s.jsxs)(a.xu,{display:"flex",margin:-2,direction:"row",wrap:!0,children:[(0,s.jsx)(h,{interests:j}),(0,s.jsx)(_,{format:x})]})})}),w&&(0,s.jsxs)(a.kC,{justifyContent:"end",alignItems:"center",gap:2,children:[(0,s.jsx)(a.xu,{children:(0,s.jsx)(a.xv,{weight:"bold",children:D})}),(0,s.jsx)(a.zx,{onClick:function(){L(t)},text:O._('Unreject', 'webapp.app.pinTv.creatorStudio.creatorApproval.unrejectButton', 'Unreject button')})]}),m&&(0,s.jsx)(a.kC,{justifyContent:"end",children:(0,s.jsxs)(a.hE,{children:[(0,s.jsx)(a.zx,{onClick:function(){k(t)},text:O._('Reject', 'webapp.app.pinTv.creatorStudio.creatorApproval.rejectButton', 'Reject button')}),(0,s.jsx)(a.zx,{color:"red",onClick:function(){I(t,v,r,j)},text:O._('Approve', 'webapp.app.pinTv.creatorStudio.creatorApproval.approveButton', 'Approve button')})]})})]})]})]})})}},674588:function(e,t,r){"use strict";var o,i,a=r(186656),n=r(878987);function l(e,t,r,o,i,a,n){try{var l=e[a](n),s=l.value}catch(e){r(e);return}l.done?t(s):Promise.resolve(s).then(o,i)}var s=(o=regeneratorRuntime.mark(function e(t){var r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.applicationId,o=t.status,e.next=3,(0,a.Z)({url:"/v3/classes/applications/".concat(r,"/status/"),method:"PUT",data:{status:n.oZ[o]}});case 3:if(!(i=e.sent.resource_response)){e.next=7;break}return e.abrupt("return",i.data);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}),i=function(){var e=this,t=arguments;return new Promise(function(r,i){var a=o.apply(e,t);function n(e){l(a,r,i,n,s,"next",e)}function s(e){l(a,r,i,n,s,"throw",e)}n(void 0)})},function(e){return i.apply(this,arguments)});t.Z=s},804329:function(e,t,r){"use strict";r.d(t,{Z:function(){return E}});var o=r(76911),i=r(599689),a=r(908390),n=r(898781),l=r(19121),s=r(883521),c=r(761413),p=r(361741),d=r(613982),u=r(499128),_=r(718368),h=r(784590),f=r(343341),v=r(335035),x=r(878987),b=r(674588),A=r(515198);function m(e,t,r,o,i,a,n){try{var l=e[a](n),s=l.value}catch(e){r(e);return}l.done?t(s):Promise.resolve(s).then(o,i)}function g(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=e.apply(t,r);function n(e){m(a,o,i,n,l,"next",e)}function l(e){m(a,o,i,n,l,"throw",e)}n(void 0)})}}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,i,a,n,l=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(o=a.call(r)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=r.return&&(n=r.return(),Object(n)!==n))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}var P=function(){var e,t,r,i=(0,n.ZP)(),l=(0,f.F9)(),s=j((0,o.useState)(0),2),c=s[0],p=s[1],d=j((0,o.useState)([]),2),m=d[0],w=d[1],P=j((0,o.useState)(),2),y=P[0],T=P[1],S=(0,h.Z)({name:"ApiResource",options:{url:"/v3/classes/applications/",data:{status:c,add_fields:["livecreatorapplication.{user(),example_video(),rejection_reason}","user.{full_name,verified_identity,follower_count,is_partner}","video.{id,cover_image_url,duration,signature,title,video_list,video_urls}"]}}}),z=S.data,E=S.error,C=S.fetchMore,k=S.isAtEnd,I=S.isFetching,L=S.isLoaded,R=S.refresh,D=S.nextBookmark,O=(0,h.Z)({name:"ApiResource",options:{url:"/v3/classes/applications/count/"}}),Z=O.data,M=O.refresh;(0,o.useEffect)(function(){z&&(w(z),T(D))},[D,z]);var N=function(){I||k||C()};(0,o.useEffect)(function(){R()},[R,c]);var B=(e=g(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.Z)({applicationId:t,status:"HIDDEN"});case 3:w(m.filter(function(e){return e.id!==t})),M&&M(),l.showToast(function(e){var t=e.hideToast;return(0,A.jsx)(u.ZP,{duration:2e3,onHide:t,type:"default",text:i._('Success! The application has been successfully rejected.', 'webapp.app.pinTv.studio.pending.application.rejected.successMsg', 'Success message when application has been rejected')})}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l.showToast(function(e){var t=e.hideToast;return(0,A.jsx)(u.ZP,{duration:2e3,onHide:t,type:"error",text:i._('Error! There was an error. Please try again.', 'webapp.app.pinTv.studio.pending.application.errorMsg', 'Error message of rejecting, approving, or unrejecting fails')})});case 12:case"end":return e.stop()}},e,null,[[0,9]])})),function(t){return e.apply(this,arguments)}),H=(t=g(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.Z)({applicationId:t,status:"APPROVED"});case 3:w(m.filter(function(e){return e.id!==t})),M&&M(),l.showToast(function(e){var t=e.hideToast;return(0,A.jsx)(u.ZP,{duration:2e3,onHide:t,type:"default",text:i._('Success! The application has been successfully approved.', 'webapp.app.pinTv.studio.pending.application.approved.successMsg', 'Success message when application has been approved')})}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l.showToast(function(e){var t=e.hideToast;return(0,A.jsx)(u.ZP,{duration:2e3,onHide:t,type:"error",text:i._('Error! There was an error. Please try again.', 'webapp.app.pinTv.studio.pending.application.errorMsg', 'Error message of rejecting, approving, or unrejecting fails')})});case 12:case"end":return e.stop()}},e,null,[[0,9]])})),function(e){return t.apply(this,arguments)}),U=(r=g(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.Z)({applicationId:t,status:"PENDING"});case 3:w(m.filter(function(e){return e.id!==t})),M&&M(),l.showToast(function(e){var t=e.hideToast;return(0,A.jsx)(u.ZP,{duration:2e3,onHide:t,type:"default",text:i._('Success! The application has been successfully unrejected.', 'webapp.app.pinTv.studio.pending.application.unrejected.successMsg', 'Success message when application has been unrejected')})}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l.showToast(function(e){var t=e.hideToast;return(0,A.jsx)(u.ZP,{duration:2e3,onHide:t,type:"error",text:i._('Error! There was an error. Please try again.', 'webapp.app.pinTv.studio.pending.application.errorMsg', 'Error message of rejecting, approving, or unrejecting fails')})});case 12:case"end":return e.stop()}},e,null,[[0,9]])})),function(e){return r.apply(this,arguments)});return(0,A.jsx)(o.Fragment,{children:(0,A.jsxs)(a.xu,{marginStart:8,marginEnd:8,children:[(0,A.jsxs)(a.xu,{marginTop:4,marginBottom:4,children:[(0,A.jsx)(a.X6,{children:i._('Creator applications', 'webapp.app.pinTv.creatorStudio.creators.applications.header', 'Heading for creator applications')}),(0,A.jsxs)(a.kC,{gap:8,children:[(0,A.jsx)(a.kC.Item,{flex:"grow",children:(0,A.jsx)(a.xu,{marginTop:6,marginBottom:4,children:(0,A.jsx)(a.xv,{children:i._('We accept organic creator applications from desktop web (Pinterest TV Studio), community creator applications from the native mobile apps (iOS and Android Pinterest apps) and managed creator applications from the admin tool.', 'webapp.app.pinTv.creatorStudio.creators.applications.subtext', 'Subtext for creator applications')})})}),Z&&(0,A.jsxs)(a.kC.Item,{children:[(0,A.jsx)(a.xu,{minWidth:500,rounding:4,borderStyle:"shadow",marginBottom:2,children:(0,A.jsxs)(a.iA,{accessibilityLabel:"Sticky header",maxHeight:200,children:[(0,A.jsx)(a.iA.Header,{sticky:!0,children:(0,A.jsxs)(a.iA.Row,{children:[(0,A.jsx)(a.iA.HeaderCell,{children:(0,A.jsx)(a.xv,{weight:"bold",children:i._('Creator applications', 'webapp.app.pinTv.creatorStudio.creators.applications.theader', 'Heading for applications table')})}),(0,A.jsx)(a.iA.HeaderCell,{children:(0,A.jsx)(a.xv,{weight:"bold",children:i._('Total', 'webapp.app.pinTv.creatorStudio.creators.applications.total.theader', 'Heading for applications total count')})})]})}),(0,A.jsxs)(a.iA.Body,{children:[(0,A.jsxs)(a.iA.Row,{children:[(0,A.jsx)(a.iA.Cell,{children:(0,A.jsx)(a.xv,{children:i._('Approved', 'webapp.app.pinTv.creatorStudio.creators.applications.approved', 'Text for approved applications total count')})}),(0,A.jsx)(a.iA.Cell,{children:(0,A.jsx)(a.xv,{children:Z.approved})})]}),(0,A.jsxs)(a.iA.Row,{children:[(0,A.jsx)(a.iA.Cell,{children:(0,A.jsx)(a.xv,{children:i._('Rejected', 'webapp.app.pinTv.creatorStudio.creators.applications.rejected', 'Text for rejected applications total count')})}),(0,A.jsx)(a.iA.Cell,{children:(0,A.jsx)(a.xv,{children:Z.hidden})})]}),(0,A.jsxs)(a.iA.Row,{children:[(0,A.jsx)(a.iA.Cell,{children:(0,A.jsx)(a.xv,{children:i._('Pending', 'webapp.app.pinTv.creatorStudio.creators.applications.pending', 'Text for pending applications total count')})}),(0,A.jsx)(a.iA.Cell,{children:(0,A.jsx)(a.xv,{children:Z.pending})})]})]})]})}),(0,A.jsx)(a.xu,{children:(0,A.jsx)(a.xv,{size:"100",color:"subtle",children:i._('Note: You may see the \'Pending\' count > 0 even if there are no applications in the feed. The pending feed filters out applications from users with deactivated accounts.', 'webapp.app.pinTv.creatorStudio.creators.applications.pending.note', 'Note for pending applications total count')})})]})]})]}),(0,A.jsx)(a.kC,{direction:"row",children:(0,A.jsx)(a.kC.Item,{flex:"grow",children:(0,A.jsxs)(a.xu,{marginStart:8,"data-test-id":"pending-creators-list",children:[(0,A.jsx)(a.Le,{top:140,children:(0,A.jsx)(a.xu,{color:"default",marginStart:-8,paddingX:6,children:(0,A.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{paddingBottom:"12px"}},children:(0,A.jsx)(a.mQ,{onChange:function(e){var t=e.event,r=e.activeTabIndex,o=e.dangerouslyDisableOnNavigation;t.preventDefault(),o(),p(r)},activeTabIndex:c,tabs:[{href:"",id:"needs-review",text:i._('Needs review', 'webapp.app.pinTv.creatorStudio.creatorApprove.needsReview', 'tab for seeing applications that need review'),indicator:0===c?"dot":void 0},{href:"",id:"approved",text:i._('Approved', 'webapp.app.pinTv.creatorStudio.creatorApprove.approved', 'tab for seeing applications that are approved'),indicator:1===c?"dot":void 0},{href:"",id:"rejected",text:i._('Rejected', 'webapp.app.pinTv.creatorStudio.creatorApprove.rejected', 'tab for seeing applications that are rejected'),indicator:2===c?"dot":void 0}]})})})}),(0,A.jsxs)(a.kC,{direction:"column",gap:{row:0,column:4},children:[E&&E.message&&(0,A.jsx)(a.ci,{type:"error",message:E.message,iconAccessibilityLabel:i._('Error occurred', 'webapp.app.pinTv.creatorStudio.creators.applicationLoadError', 'Accessibility lable for error callout'),title:i._('An error has occurred, please try again later.', 'webapp.app.pinTv.creatorStudio.creators.errorTitle', 'Error occurred when retrieving applications')}),m&&m.map(function(e){var t=e.id,r=e.class_format,o=e.class_summary,i=e.interests_list,a=e.created_at,n=e.example_video,l=e.user,s=l.id,c=l.username,p=l.last_name,d=l.full_name,u=l.first_name,_=l.image_large_url,h=l.follower_count,f=l.is_partner,b=e.example_video_url,m=e.approval_status,g=e.previous_experience_summary,j=e.application_source,w=e.user_country,P=e.rejection_reason;return(0,A.jsx)(v.Z,{id:t,applicationSource:j,userId:s,format:r,isVerified:!1,username:c,showBrief:o,userImage:_,interests:i,previewVideo:b,exampleVideo:n,followerCount:h,dateSubmitted:a,liveExperience:g,isBusinessAccount:f,name:d||"".concat(u," ").concat(p),isPending:m===x.oZ.PENDING,isRejected:m===x.oZ.HIDDEN,onReject:B,onApprove:H,onUnreject:U,userCountry:w,rejectionReason:P},t)}),m&&0===m.length&&L&&k&&(0,A.jsx)(a.xu,{marginTop:4,marginBottom:4,display:"flex",justifyContent:"center",children:(0,A.jsx)(a.xv,{size:"300",children:i._('No applications found.', 'webapp.app.pinTv.creatorStudio.creators.noApps', 'No applications found text')})}),(0,A.jsx)(a.$j,{size:"md",show:I,accessibilityLabel:i._('Loading more applications', 'webapp.app.pinTv.creatorStudio.creators.loadingIndicator', 'Accessibility label for loading indicator')}),y&&y!==_.q&&(0,A.jsx)(a.xu,{marginTop:4,marginBottom:8,display:"flex",justifyContent:"center",children:(0,A.jsx)(a.zx,{onClick:function(){N()},text:i._('Load more', 'webapp.app.pinTv.creatorStudio.creators.loadMore', 'load more applications button'),color:"blue"})})]})]})})})]})})},y=r(985453),T=r(50596),S=r(863664);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}var E=function(){var e,t=(0,n.ZP)(),r=(0,S.Z)("PINTEREST_TV_CREATOR_STUDIO_PENDING_PAGE"),u=(0,l.Z)(),_=function(e){if(Array.isArray(e))return e}(e=(0,o.useState)(1))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,i,a,n,l=[],s=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(o=a.call(r)).done)&&(l.push(o.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=r.return&&(n=r.return(),Object(n)!==n))return}finally{if(c)throw i}}return l}}(e,2)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return z(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),h=_[0],f=_[1];return((0,o.useEffect)(function(){r({eventName:"PINTEREST_TV_CREATOR_STUDIO_PAGE_VIEW"})},[r]),u.isAuth)?(0,A.jsx)(T.Z,{children:(0,A.jsx)(s.Z,{children:(0,A.jsxs)(y.x,{children:[(0,A.jsx)(c.Z,{}),(0,A.jsx)(d.Z,{pageTitle:t._('Pending', 'creatorStudio.session.nav.pending.heading', 'Text indicating the pending episodes heading'),backButton:(0,A.jsx)(p.Z,{})}),(0,A.jsx)(a.kC,{height:"100%",width:"100%",alignItems:"center",justifyContent:"center",children:(0,A.jsx)(a.mQ,{activeTabIndex:h,onChange:function(e){var t=e.activeTabIndex;e.event.preventDefault(),f(t)},tabs:[{href:"/tv/studio/pending/",text:t._('Episodes', 'creatorStudio.pending.tabs.episodes', 'Text indicating the episodes pending tab')},{href:"/tv/studio/pending/creators/",text:t._('Creators', 'creatorStudio.pending.tabs.creators', 'Text indicating the creators pending tab')}],wrap:!0})}),(0,A.jsx)(a.kC,{justifyContent:"center",children:(0,A.jsx)(a.kC,{direction:"column",maxWidth:x.RZ,children:(0,A.jsx)(a.xu,{marginTop:6,children:(0,A.jsx)(P,{})})})})]})})}):(0,A.jsx)(i.l_,{to:"/login?next=".concat(encodeURIComponent("/tv/studio"))})}},76170:function(e,t,r){"use strict";function o(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:function(){return o}})},326857:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var o=r(393248),i=r(76170);function a(e){return(0,i.Z)(1,arguments),(0,o.Z)(e).getTime()<Date.now()}},393248:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var o=r(76170);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){(0,o.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===i(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(Error().stack)),new Date(NaN))}}},function(e){e.O(0,[97270,8390,99689,26067,17492,48327,83521,31574,85453,62374,35429],function(){return e(e.s=241645)}),e.O()}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/www/tv/studio/pending/creators-770c06d6e203a203.js.map