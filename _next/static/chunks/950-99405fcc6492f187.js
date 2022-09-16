"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[950],{9950:function(e,t,n){n.d(t,{Zb:function(){return O},$_:function(){return B},h4:function(){return k},xB:function(){return D},HH:function(){return U},NP:function(){return L},lL:function(){return f},$0:function(){return N},O9:function(){return i},sq:function(){return r}});var i={primary:"#2D2D2D",accent:"#BFD838",success:"#18A80C",error:"#F37272",grayLight:"#FAFAFA",gray:"#E3E5E8",grayDark:"#565F67",light:"#FFFFFF",shadow:"#000000",link:"#125A95"},r={h1:{fontSize:48,fontWeight:700,color:i.primary,lineHeight:"130%",fontFamily:"Poppins",marginBottom:16},h2:{fontSize:48,fontWeight:400,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},h3:{fontSize:36,fontWeight:600,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},subtitle:{fontSize:24,fontWeight:300,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},link:{fontSize:24,fontWeight:700,color:i.link,lineHeight:"130%",fontFamily:"Poppins"},button:{fontSize:32,fontWeight:300,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},title:{fontSize:24,fontWeight:500,letterSpacing:"1%",color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},body:{fontSize:16,fontWeight:300,letterSpacing:"1%",color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},label:{fontSize:20,fontWeight:300,letterSpacing:"1%",color:i.grayDark,fontFamily:"Poppins"},card:{fontSize:32,fontWeight:300,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},menuItem:{default:{fontSize:20,fontWeight:300,color:i.primary,fontFamily:"Poppins"},active:{fontSize:20,fontWeight:500,color:i.primary,fontFamily:"Poppins",letterSpacing:"1%"}}},s=n(7294),o=n(9057),a=n.n(o),l=n(8174),c=n.n(l),d=n(4099),h=n.n(d),u=h().create({container:{flex:1,backgroundColor:i.light},content:{paddingHorizontal:120,paddingBottom:300,paddingTop:50}}),g=n(5893),f=function(e){var t=e.children,n=e.isHome,i=e.isProject,r=e.isAbout;return(0,g.jsxs)(c(),{style:u.container,stickyHeaderIndices:[0],children:[(0,g.jsx)(k,{isHome:n,isProject:i,isAbout:r}),(0,g.jsx)(a(),{style:u.content,children:t}),(0,g.jsx)(B,{})]})},p=n(8409),m=n.n(p),x=n(696),y=n.n(x),j=(n(1993),h().create({container:{zIndex:1,alignItems:"center",flexDirection:"row",height:74,backgroundColor:i.light,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7,paddingEnd:120,paddingStart:100,justifyContent:"space-between"},contentStart:{paddingTop:24,flexDirection:"row",alignSelf:"flex-start"},contentEnd:{justifyContent:"center",alignItems:"center"},menuItem:{width:100,fontSize:16,marginRight:88,alignItems:"center"},button:{backgroundColor:i.accent,paddingHorizontal:24,paddingVertical:12,borderRadius:4}})),w=n(5675),b=n.n(w),v=n(1472),I=function(e){var t=e.title,n=e.content,i=(0,s.useState)(!0),o=i[0],l=i[1],c=(0,s.useState)(!1),d=c[0],h=c[1],u=(0,v.useSpring)({from:{x:0},x:o?1:.5,config:{duration:500}}).x,f=(0,v.animated)(a());return(0,g.jsx)(g.Fragment,{children:d?(0,g.jsx)(f,{style:{opacity:u.to({range:[0,1],output:[.3,1]}),scale:u.to({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]})},children:(0,g.jsx)(m(),{style:r.menuItem.default,children:n})}):(0,g.jsx)(y(),{style:j.button,onPress:function(){l(!o),h(!d)},children:(0,g.jsx)(m(),{style:r.menuItem.default,children:t})})})},S="elene.uxdesign@gmail.com",k=function(e){var t=e.isHome,n=e.isProject,i=e.isAbout,o=t?r.menuItem.active:r.menuItem.default,l=n?r.menuItem.active:r.menuItem.default,c=i?r.menuItem.active:r.menuItem.default,d=(0,s.useState)(!1);d[0],d[1];return(0,g.jsxs)(a(),{style:j.container,children:[(0,g.jsxs)(a(),{style:j.contentStart,children:[(0,g.jsxs)(y(),{style:j.menuItem,accessibilityRole:"link",href:"/",children:[(0,g.jsx)(m(),{style:o,children:"Home"}),t&&(0,g.jsx)(a(),{style:{alignItems:"center"},children:(0,g.jsx)(b(),{src:"/assets/active-menu.svg",width:131,height:16})})]}),(0,g.jsxs)(y(),{style:j.menuItem,children:[(0,g.jsx)(m(),{style:l,children:"Projects"}),n&&(0,g.jsx)(a(),{style:{alignItems:"center"},children:(0,g.jsx)(b(),{src:"/assets/active-menu.svg",width:131,height:16})})]}),(0,g.jsxs)(y(),{style:j.menuItem,accessibilityRole:"link",href:"/about",children:[(0,g.jsx)(m(),{style:c,children:"About"}),i&&(0,g.jsx)(a(),{style:{alignItems:"center"},children:(0,g.jsx)(b(),{src:"/assets/active-menu.svg",width:131,height:16})})]})]}),(0,g.jsx)(a(),{style:j.contentEnd,children:(0,g.jsx)(I,{title:"Contact",content:S})})]})},C=n(29),F=n(7794),P=n.n(F),H=n(8346),z=n.n(H),E=h().create({container:{zIndex:1,alignItems:"center",flexDirection:"row",height:104,backgroundColor:i.grayLight,paddingHorizontal:120,justifyContent:"space-between",borderTopColor:i.gray,borderWidth:1},leftContainer:{flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},rightContainer:{width:"357",alignItems:"flex-start",justifyContent:"flex-start"},title:{fontSize:16,marginHorizontal:44},icon:{paddingEnd:28}}),B=function(){var e=function(){var e=(0,C.Z)(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z().openURL("https://www.linkedin.com/in/elene-zed/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,C.Z)(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z().openURL("https://twitter.com/EleneZed");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=(0,C.Z)(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z().openURL("https://www.facebook.com/elene.zed/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,g.jsxs)(a(),{style:E.container,children:[(0,g.jsxs)(a(),{style:E.leftContainer,children:[(0,g.jsx)(y(),{style:E.icon,onPress:e,children:(0,g.jsx)(b(),{src:"/assets/linkedin.svg",width:40,height:40,alt:"Linkedin icon"})}),(0,g.jsx)(y(),{style:E.icon,onPress:t,children:(0,g.jsx)(b(),{src:"/assets/twitter.svg",width:40,height:40,alt:"Twitter icon"})}),(0,g.jsx)(y(),{style:E.icon,onPress:n,children:(0,g.jsx)(b(),{src:"/assets/facebook.svg",width:40,height:40,alt:"Facebook icon"})})]}),(0,g.jsxs)(a(),{style:E.rightContainer,children:[(0,g.jsx)(m(),{style:r.body,children:"Copyright \xa9 2022 Elene Zedginidze."}),(0,g.jsx)(m(),{style:r.body,children:"All rights reserved."})]})]})},W=h().create({container:{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingBottom:100},contentStart:{alignItems:"flex-start",justifyContent:"flex-start",paddingRight:24},contentEnd:{flex:1}}),D=function(){return(0,g.jsxs)(a(),{style:W.container,children:[(0,g.jsx)(a(),{style:W.contentStart,children:(0,g.jsx)(b(),{src:"/assets/author.png",width:150,height:150})}),(0,g.jsxs)(a(),{style:W.contentEnd,children:[(0,g.jsx)(m(),{style:r.h3,children:"Hi, I\u2019m Elene \ud83d\udc4b"}),(0,g.jsx)(m(),{style:r.subtitle,children:"Google certified UX/UI Designer with a mission to create delightful experiences and lovable products for people!"})]})]})},R=h().create({container:{flexDirection:"row",marginBottom:64},containerStart:{flexBasis:"55%",justifyContent:"center",paddingEnd:36,alignItems:"flex-start"},containerEnd:{justifyContent:"center",flexBasis:"45%",alignItems:"flex-end"}}),T=h().create({container:{paddingHorizontal:32,paddingVertical:16,backgroundColor:i.accent,borderRadius:8,justifyContent:"center"}}),A=function(e){var t=e.label,n=e.onPress,i=e.topSpace,s=e.bottomSpace;return(0,g.jsx)(y(),{onPress:n,style:[T.container,{marginTop:i,marginBottom:s}],children:(0,g.jsx)(m(),{style:r.button,children:t})})},L=function(e){var t=e.link,n=e.image,i=e.imageWidth,s=e.imageHeight,o=e.title,l=e.description,c=function(){var e=(0,C.Z)(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z().openURL(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,g.jsxs)(a(),{style:R.container,children:[(0,g.jsxs)(a(),{style:R.containerStart,children:[(0,g.jsx)(m(),{style:r.h1,children:o}),(0,g.jsx)(m(),{style:r.card,children:l}),(0,g.jsx)(A,{label:"View Prototype",onPress:c,topSpace:42})]}),(0,g.jsx)(a(),{style:R.containerEnd,children:(0,g.jsx)(b(),{src:"/assets/".concat(n),width:i,height:s})})]})},Z=h().create({container:{flex:1,justifyContent:"center",alignItems:"center",marginTop:100}}),U=function(e){var t=e.link,n=function(){var e=(0,C.Z)(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z().openURL(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,g.jsxs)(a(),{style:Z.container,children:[(0,g.jsx)(m(),{style:r.h3,children:"Thank you!"}),(0,g.jsx)(m(),{style:[r.subtitle,{marginTop:16}],children:"Click on the button if you\u2019d like to check the prototype!"}),(0,g.jsx)(A,{label:"View Prototype",onPress:n,topSpace:64})]})},V=h().create({container:{backgroundColor:i.light,height:489,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7,borderRadius:24,flexDirection:"row",marginBottom:24,paddingVertical:48,paddingEnd:100,paddingStart:50},containerStart:{flex:1,justifyContent:"center",alignItems:"center"},containerEnd:{flex:1,justifyContent:"center",alignItems:"flex-start",marginStart:70},link:{paddingTop:80,alignSelf:"flex-end"},divider:{paddingVertical:16}}),O=function(e){var t=e.link,n=e.imagePath,i=e.imageWidth,s=e.imageHeight,o=e.label,l=e.title,c=e.description;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(a(),{style:V.container,accessibilityRole:"link",href:t,children:[(0,g.jsx)(a(),{style:V.containerStart,children:(0,g.jsx)(b(),{src:n,width:i,height:s})}),(0,g.jsxs)(a(),{style:V.containerEnd,children:[(0,g.jsx)(m(),{style:r.label,children:o}),(0,g.jsx)(m(),{style:r.h2,children:l}),(0,g.jsx)(a(),{style:V.divider,children:(0,g.jsx)(b(),{src:"/assets/card-divider.svg",width:637,height:5})}),(0,g.jsx)(m(),{style:r.card,children:c}),(0,g.jsx)(m(),{style:[r.link,V.link],children:"View More"})]})]})})},_=h().create({wrapper:{},container:{flexDirection:"row",alignItems:"flex-start",justifyContent:"space-start",marginBottom:32},underline:{marginTop:4,marginBottom:20,alignItems:"flex-start"},headline:{marginTop:4,marginBottom:32},content:{marginEnd:77},list:{flexDirection:"row",marginBottom:10,alignItems:"flex-start"},icon:{marginEnd:8,marginTop:4},description:{paddingBottom:24,width:940}}),N=function(e){var t=e.headline,n=e.description,i=e.content,s=e.fullImage,o=e.fullImageHeight,l=e.fullImageWidth,c=e.fullImageTopSpace,d=e.fullImageBottomSpace,h=e.topSpace;return(0,g.jsxs)(a(),{style:[_.wrapper,{marginTop:h}],children:[t&&(0,g.jsx)(a(),{style:_.headline,children:(0,g.jsx)(m(),{style:r.h3,children:t})}),n&&(0,g.jsx)(a(),{style:_.description,children:(0,g.jsx)(m(),{style:r.body,children:n})}),(0,g.jsx)(a(),{style:_.container,children:i&&(null===i||void 0===i?void 0:i.map((function(e){var t=e.title,n=e.body,i=e.width,s=e.list,o=e.image,l=e.imageWidth,c=e.imageHeight,d=t?15*t.length:100;return(0,g.jsxs)(a(),{style:[_.content,{width:i}],children:[t&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m(),{style:r.title,children:t}),(0,g.jsx)(a(),{style:_.underline,children:(0,g.jsx)(b(),{src:"/assets/underline.svg",width:d,height:6})})]}),n&&(0,g.jsx)(m(),{style:r.body,children:n}),s&&(null===s||void 0===s?void 0:s.map((function(e){var t=e.text,n=e.icon;return(0,g.jsxs)(a(),{style:_.list,children:[(0,g.jsx)(a(),{style:_.icon,children:n&&(0,g.jsx)(b(),{src:"/assets/".concat(n),width:15,height:12})}),(0,g.jsx)(m(),{style:r.body,children:t})]})}))),o&&(0,g.jsx)(b(),{src:"/assets/".concat(o),width:l,height:c})]})})))}),s&&(0,g.jsx)(a(),{style:{marginTop:c,marginBottom:d},children:(0,g.jsx)(b(),{src:"/assets/".concat(s),width:l,height:o})})]})}}}]);