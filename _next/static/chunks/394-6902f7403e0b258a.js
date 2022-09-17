"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{6593:function(e,t,n){n.d(t,{Zb:function(){return _},$_:function(){return B},h4:function(){return C},xB:function(){return D},HH:function(){return Z},NP:function(){return L},lL:function(){return p},$0:function(){return N},O9:function(){return i},sq:function(){return r}});var i={primary:"#2D2D2D",accent:"#BFD838",success:"#18A80C",error:"#F37272",grayLight:"#FAFAFA",gray:"#E3E5E8",grayDark:"#565F67",grayHover:"#F5F5F5",light:"#FFFFFF",shadow:"#000000",link:"#125A95"},r={h1:{fontSize:48,fontWeight:700,color:i.primary,lineHeight:"130%",fontFamily:"Poppins",marginBottom:16},h2:{fontSize:48,fontWeight:400,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},h3:{fontSize:36,fontWeight:600,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},subtitle:{fontSize:24,fontWeight:300,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},link:{fontSize:24,fontWeight:700,color:i.link,lineHeight:"130%",fontFamily:"Poppins"},button:{fontSize:32,fontWeight:300,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},title:{fontSize:24,fontWeight:500,letterSpacing:"1%",color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},body:{fontSize:16,fontWeight:300,letterSpacing:"1%",color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},label:{fontSize:20,fontWeight:300,letterSpacing:"1%",color:i.grayDark,fontFamily:"Poppins"},card:{fontSize:32,fontWeight:300,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},menuItem:{default:{fontSize:20,fontWeight:300,color:i.primary,fontFamily:"Poppins"},active:{fontSize:20,fontWeight:500,color:i.primary,fontFamily:"Poppins",letterSpacing:"1%"}}},o=n(7294),s=n(9057),l=n.n(s),a=n(8174),c=n.n(a),d=n(1472),h=n(4099),u=n.n(h),g=u().create({container:{flex:1,backgroundColor:i.light},content:{paddingHorizontal:120,paddingBottom:300,paddingTop:50}}),f=n(5893),p=function(e){var t=e.children,n=e.isHome,i=e.isProject,r=e.isAbout,o=(0,d.animated)(l()),s=(0,d.useSpring)({to:{opacity:1},from:{opacity:0},config:{duration:1e3}});return(0,f.jsxs)(c(),{style:g.container,stickyHeaderIndices:[0],children:[(0,f.jsx)(C,{isHome:n,isProject:i,isAbout:r}),(0,f.jsx)(o,{style:s,children:(0,f.jsx)(l(),{style:g.content,children:t})}),(0,f.jsx)(B,{})]})},m=n(8409),y=n.n(m),x=n(696),j=n.n(x),w=u().create({container:{zIndex:1,alignItems:"center",flexDirection:"row",height:74,backgroundColor:i.light,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7,paddingEnd:120,paddingStart:100,justifyContent:"space-between"},contentStart:{paddingTop:24,flexDirection:"row",alignSelf:"flex-start"},contentEnd:{justifyContent:"center",alignItems:"center"},menuItem:{width:100,fontSize:16,marginRight:88,alignItems:"center"},button:{backgroundColor:i.accent,paddingHorizontal:24,paddingVertical:12,borderRadius:4},dropdownMenuContainer:{flex:1,zIndex:10,width:180,backgroundColor:i.light,borderRadius:4,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7},dropdownMenuItem:{flex:1,justifyContent:"center",paddingHorizontal:24,paddingVertical:16,alignItems:"flex-start",borderBottomWidth:1,borderBottomColor:i.accent},dropdownMenuItemHover:{backgroundColor:i.grayHover}}),v=n(5675),b=n.n(v),I=n(1993),S=n.n(I),k=function(e){var t=e.title,n=e.content,i=(0,o.useState)(!0),s=i[0],a=i[1],c=(0,o.useState)(!1),h=c[0],u=c[1],g=(0,d.useSpring)({from:{x:0},x:s?1:.5,config:{duration:500}}).x,p=(0,d.animated)(l());return(0,f.jsx)(f.Fragment,{children:h?(0,f.jsx)(p,{style:{opacity:g.to({range:[0,1],output:[.3,1]}),scale:g.to({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]})},children:(0,f.jsx)(y(),{style:r.menuItem.default,children:n})}):(0,f.jsx)(j(),{style:w.button,onPress:function(){a(!s),u(!h),S().setString(n)},children:(0,f.jsx)(y(),{style:r.menuItem.default,children:t})})})},H=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],i=(0,o.useState)(!1),s=i[0],a=i[1],c=(0,o.useState)(!1),d=c[0],h=c[1],u=t?w.dropdownMenuItemHover:{},g=s?w.dropdownMenuItemHover:{},p=d?w.dropdownMenuItemHover:{};return(0,f.jsxs)(l(),{style:w.dropdownMenuContainer,children:[(0,f.jsx)(j(),{href:"/GlutenFreeApp",accessibilityRole:"link",style:[w.dropdownMenuItem,u],onHoverIn:function(){return n(!0)},onHoverOut:function(){return n(!1)},children:(0,f.jsx)(y(),{style:r.body,children:"Gluten Free App"})}),(0,f.jsx)(j(),{href:"/FoodWasteApp",accessibilityRole:"link",style:[w.dropdownMenuItem,g],onHoverIn:function(){return a(!0)},onHoverOut:function(){return a(!1)},children:(0,f.jsx)(y(),{style:r.body,children:"Food Waste App"})}),(0,f.jsx)(j(),{href:"FirstAidApp",accessibilityRole:"link",style:[w.dropdownMenuItem,p],onHoverIn:function(){return h(!0)},onHoverOut:function(){return h(!1)},children:(0,f.jsx)(y(),{style:r.body,children:"First Aid App"})})]})},C=function(e){var t=e.isHome,n=e.isProject,i=e.isAbout,s=(0,o.useState)(!1),a=s[0],c=s[1],h=function(){c(!a)},u=n?{marginTop:10}:{marginTop:22},g=t?r.menuItem.active:r.menuItem.default,p=n?r.menuItem.active:r.menuItem.default,m=i?r.menuItem.active:r.menuItem.default,x=(0,d.animated)(l()),v=(0,d.useSpring)({to:{opacity:1},from:{opacity:0},config:{duration:1100}});return(0,f.jsxs)(l(),{style:w.container,children:[(0,f.jsxs)(l(),{style:w.contentStart,children:[(0,f.jsxs)(j(),{style:w.menuItem,accessibilityRole:"link",href:"/",children:[(0,f.jsx)(y(),{style:g,children:"Home"}),t&&(0,f.jsx)(x,{style:v,children:(0,f.jsx)(l(),{style:{alignItems:"center"},children:(0,f.jsx)(b(),{src:"/assets/active-menu.svg",width:131,height:16})})})]}),(0,f.jsxs)(j(),{style:w.menuItem,onHoverIn:h,onHoverOut:h,children:[(0,f.jsxs)(l(),{style:{flexDirection:"row"},children:[(0,f.jsx)(y(),{style:p,children:"Projects"}),(0,f.jsx)(l(),{style:{marginStart:8,alignSelf:"center"},children:(0,f.jsx)(x,{style:v,children:(0,f.jsx)(b(),{src:"/assets/dropdown.svg",width:17,height:11})})})]}),n&&(0,f.jsx)(x,{style:v,children:(0,f.jsx)(l(),{style:{alignItems:"center"},children:(0,f.jsx)(b(),{src:"/assets/active-menu.svg",width:131,height:16})})}),a&&(0,f.jsx)(l(),{style:u,children:(0,f.jsx)(H,{})})]}),(0,f.jsxs)(j(),{style:w.menuItem,accessibilityRole:"link",href:"/about",children:[(0,f.jsx)(y(),{style:m,children:"About"}),i&&(0,f.jsx)(x,{style:v,children:(0,f.jsx)(l(),{style:{alignItems:"center"},children:(0,f.jsx)(b(),{src:"/assets/active-menu.svg",width:131,height:16})})})]})]}),(0,f.jsx)(l(),{style:w.contentEnd,children:(0,f.jsx)(k,{title:"Contact",content:"elene.uxdesign@gmail.com"})})]})},F=n(29),P=n(7794),z=n.n(P),E=n(8346),R=n.n(E),W=u().create({container:{zIndex:1,alignItems:"center",flexDirection:"row",height:104,backgroundColor:i.grayLight,paddingHorizontal:120,justifyContent:"space-between",borderTopColor:i.gray,borderWidth:1},leftContainer:{flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},rightContainer:{width:"357",alignItems:"flex-start",justifyContent:"flex-start"},title:{fontSize:16,marginHorizontal:44},icon:{paddingEnd:28}}),B=function(){var e=function(){var e=(0,F.Z)(z().mark((function e(){return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R().openURL("https://www.linkedin.com/in/elene-zed/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,F.Z)(z().mark((function e(){return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R().openURL("https://twitter.com/EleneZed");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=(0,F.Z)(z().mark((function e(){return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R().openURL("https://www.facebook.com/elene.zed/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(l(),{style:W.container,children:[(0,f.jsxs)(l(),{style:W.leftContainer,children:[(0,f.jsx)(j(),{style:W.icon,onPress:e,children:(0,f.jsx)(b(),{src:"/assets/linkedin.svg",width:40,height:40,alt:"Linkedin icon"})}),(0,f.jsx)(j(),{style:W.icon,onPress:t,children:(0,f.jsx)(b(),{src:"/assets/twitter.svg",width:40,height:40,alt:"Twitter icon"})}),(0,f.jsx)(j(),{style:W.icon,onPress:n,children:(0,f.jsx)(b(),{src:"/assets/facebook.svg",width:40,height:40,alt:"Facebook icon"})})]}),(0,f.jsxs)(l(),{style:W.rightContainer,children:[(0,f.jsx)(y(),{style:r.body,children:"Copyright \xa9 2022 Elene Zedginidze."}),(0,f.jsx)(y(),{style:r.body,children:"All rights reserved."})]})]})},A=u().create({container:{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingBottom:100},contentStart:{alignItems:"flex-start",justifyContent:"flex-start",paddingRight:24},contentEnd:{flex:1}}),D=function(){return(0,f.jsxs)(l(),{style:A.container,children:[(0,f.jsx)(l(),{style:A.contentStart,children:(0,f.jsx)(b(),{src:"/assets/author.png",width:150,height:150})}),(0,f.jsxs)(l(),{style:A.contentEnd,children:[(0,f.jsx)(y(),{style:r.h3,children:"Hi, I\u2019m Elene \ud83d\udc4b"}),(0,f.jsx)(y(),{style:r.subtitle,children:"Google certified UX/UI Designer with a mission to create delightful experiences and lovable products for people!"})]})]})},T=u().create({container:{flexDirection:"row",marginBottom:64},containerStart:{flexBasis:"55%",justifyContent:"center",paddingEnd:36,alignItems:"flex-start"},containerEnd:{justifyContent:"center",flexBasis:"45%",alignItems:"flex-end"}}),M=u().create({container:{paddingHorizontal:32,paddingVertical:16,backgroundColor:i.accent,borderRadius:8,justifyContent:"center"}}),O=function(e){var t=e.label,n=e.onPress,i=e.topSpace,o=e.bottomSpace;return(0,f.jsx)(j(),{onPress:n,style:[M.container,{marginTop:i,marginBottom:o}],children:(0,f.jsx)(y(),{style:r.button,children:t})})},L=function(e){var t=e.link,n=e.image,i=e.imageWidth,o=e.imageHeight,s=e.title,a=e.description,c=function(){var e=(0,F.Z)(z().mark((function e(){return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R().openURL(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(l(),{style:T.container,children:[(0,f.jsxs)(l(),{style:T.containerStart,children:[(0,f.jsx)(y(),{style:r.h1,children:s}),(0,f.jsx)(y(),{style:r.card,children:a}),(0,f.jsx)(O,{label:"View Prototype",onPress:c,topSpace:42})]}),(0,f.jsx)(l(),{style:T.containerEnd,children:(0,f.jsx)(b(),{src:"/assets/".concat(n),width:i,height:o})})]})},V=u().create({container:{flex:1,justifyContent:"center",alignItems:"center",marginTop:100}}),Z=function(e){var t=e.link,n=function(){var e=(0,F.Z)(z().mark((function e(){return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R().openURL(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(l(),{style:V.container,children:[(0,f.jsx)(y(),{style:r.h3,children:"Thank you!"}),(0,f.jsx)(y(),{style:[r.subtitle,{marginTop:16}],children:"Click on the button if you\u2019d like to check the prototype!"}),(0,f.jsx)(O,{label:"View Prototype",onPress:n,topSpace:64})]})},U=u().create({container:{backgroundColor:i.light,height:489,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7,borderRadius:24,flexDirection:"row",marginBottom:24,paddingVertical:48,paddingEnd:100,paddingStart:50},containerStart:{flex:1,justifyContent:"center",alignItems:"center"},containerEnd:{flex:1,justifyContent:"center",alignItems:"flex-start",marginStart:70},link:{paddingTop:80,alignSelf:"flex-end"},divider:{paddingVertical:16}}),_=function(e){var t=e.link,n=e.imagePath,i=e.imageWidth,o=e.imageHeight,s=e.label,a=e.title,c=e.description;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(l(),{style:U.container,accessibilityRole:"link",href:t,children:[(0,f.jsx)(l(),{style:U.containerStart,children:(0,f.jsx)(b(),{src:n,width:i,height:o})}),(0,f.jsxs)(l(),{style:U.containerEnd,children:[(0,f.jsx)(y(),{style:r.label,children:s}),(0,f.jsx)(y(),{style:r.h2,children:a}),(0,f.jsx)(l(),{style:U.divider,children:(0,f.jsx)(b(),{src:"/assets/card-divider.svg",width:637,height:5})}),(0,f.jsx)(y(),{style:r.card,children:c}),(0,f.jsx)(y(),{style:[r.link,U.link],children:"View More"})]})]})})},G=u().create({wrapper:{},container:{flexDirection:"row",alignItems:"flex-start",justifyContent:"space-start",marginBottom:32},underline:{marginTop:4,marginBottom:20,alignItems:"flex-start"},headline:{marginTop:4,marginBottom:32},content:{marginEnd:77},list:{flexDirection:"row",marginBottom:10,alignItems:"flex-start"},icon:{marginEnd:8,marginTop:4},description:{paddingBottom:24,width:940}}),N=function(e){var t=e.headline,n=e.description,i=e.content,o=e.fullImage,s=e.fullImageHeight,a=e.fullImageWidth,c=e.fullImageTopSpace,d=e.fullImageBottomSpace,h=e.topSpace;return(0,f.jsxs)(l(),{style:[G.wrapper,{marginTop:h}],children:[t&&(0,f.jsx)(l(),{style:G.headline,children:(0,f.jsx)(y(),{style:r.h3,children:t})}),n&&(0,f.jsx)(l(),{style:G.description,children:(0,f.jsx)(y(),{style:r.body,children:n})}),(0,f.jsx)(l(),{style:G.container,children:i&&(null===i||void 0===i?void 0:i.map((function(e){var t=e.title,n=e.body,i=e.width,o=e.list,s=e.image,a=e.imageWidth,c=e.imageHeight,d=t?15*t.length:100;return(0,f.jsxs)(l(),{style:[G.content,{width:i}],children:[t&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(y(),{style:r.title,children:t}),(0,f.jsx)(l(),{style:G.underline,children:(0,f.jsx)(b(),{src:"/assets/underline.svg",width:d,height:6})})]}),n&&(0,f.jsx)(y(),{style:r.body,children:n}),o&&(null===o||void 0===o?void 0:o.map((function(e){var t=e.text,n=e.icon;return(0,f.jsxs)(l(),{style:G.list,children:[(0,f.jsx)(l(),{style:G.icon,children:n&&(0,f.jsx)(b(),{src:"/assets/".concat(n),width:15,height:12})}),(0,f.jsx)(y(),{style:r.body,children:t})]})}))),s&&(0,f.jsx)(b(),{src:"/assets/".concat(s),width:a,height:c})]})})))}),o&&(0,f.jsx)(l(),{style:{marginTop:c,marginBottom:d},children:(0,f.jsx)(b(),{src:"/assets/".concat(o),width:a,height:s})})]})}}}]);