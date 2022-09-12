"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{6397:function(t,e,n){n.d(e,{Zb:function(){return U},$_:function(){return W},h4:function(){return I},xB:function(){return R},NP:function(){return T},lL:function(){return f},$0:function(){return O},O9:function(){return i},sq:function(){return r}});var i={primary:"#2D2D2D",accent:"#BFD838",success:"#18A80C",error:"#F37272",grayLight:"#FAFAFA",gray:"#E3E5E8",grayDark:"#565F67",light:"#FFFFFF",shadow:"#000000",link:"#125A95"},r={h1:{fontSize:48,fontWeight:700,color:i.primary,lineHeight:"130%",fontFamily:"Poppins",marginBottom:16},h2:{fontSize:48,fontWeight:400,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},h3:{fontSize:36,fontWeight:600,color:i.primary,lineHeight:"130%",fontFamily:"Poppins",marginBottom:16},subtitle:{fontSize:24,fontWeight:300,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},link:{fontSize:24,fontWeight:700,color:i.link,lineHeight:"130%",fontFamily:"Poppins"},button:{fontSize:32,fontWeight:300,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},title:{fontSize:24,fontWeight:500,letterSpacing:"1%",color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},body:{fontSize:16,fontWeight:300,letterSpacing:"1%",color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},label:{fontSize:20,fontWeight:300,letterSpacing:"1%",color:i.grayDark,fontFamily:"Poppins"},card:{fontSize:32,fontWeight:300,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},menuItem:{default:{fontSize:20,fontWeight:300,color:i.primary,fontFamily:"Poppins"},active:{fontSize:20,fontWeight:500,color:i.primary,fontFamily:"Poppins",letterSpacing:"1%"}}},o=n(7294),s=n(9057),a=n.n(s),l=n(8174),c=n.n(l),d=n(4099),h=n.n(d),u=h().create({container:{flex:1,backgroundColor:i.light},content:{paddingHorizontal:120,paddingBottom:300,paddingTop:50}}),g=n(5893),f=function(t){var e=t.children,n=t.isHome,i=t.isProject,r=t.isAbout;return(0,g.jsxs)(c(),{style:u.container,stickyHeaderIndices:[0],children:[(0,g.jsx)(I,{isHome:n,isProject:i,isAbout:r}),(0,g.jsx)(a(),{style:u.content,children:e}),(0,g.jsx)(W,{})]})},p=n(8409),m=n.n(p),x=n(696),y=n.n(x),j=(n(1993),h().create({container:{zIndex:1,alignItems:"center",flexDirection:"row",height:74,backgroundColor:i.light,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7,paddingHorizontal:120,justifyContent:"space-between"},contentStart:{paddingTop:24,flexDirection:"row",alignSelf:"flex-start"},contentEnd:{justifyContent:"center",alignItems:"center"},menuItem:{width:100,fontSize:16,marginRight:88,alignItems:"center"},button:{backgroundColor:i.accent,paddingHorizontal:24,paddingVertical:12,borderRadius:4}})),w=n(5675),b=n.n(w),S=n(1472),v=function(t){var e=t.title,n=t.content,i=(0,o.useState)(!0),s=i[0],l=i[1],c=(0,o.useState)(!1),d=c[0],h=c[1],u=(0,S.useSpring)({from:{x:0},x:s?1:.5,config:{duration:500}}).x,f=(0,S.animated)(a());return(0,g.jsx)(g.Fragment,{children:d?(0,g.jsx)(f,{style:{opacity:u.to({range:[0,1],output:[.3,1]}),scale:u.to({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]})},children:(0,g.jsx)(m(),{style:r.menuItem.default,children:n})}):(0,g.jsx)(y(),{style:j.button,onPress:function(){l(!s),h(!d)},children:(0,g.jsx)(m(),{style:r.menuItem.default,children:e})})})},k="elene.uxdesign@gmail.com",I=function(t){var e=t.isHome,n=t.isProject,i=t.isAbout,s=e?r.menuItem.active:r.menuItem.default,l=n?r.menuItem.active:r.menuItem.default,c=i?r.menuItem.active:r.menuItem.default,d=(0,o.useState)(!1);d[0],d[1];return(0,g.jsxs)(a(),{style:j.container,children:[(0,g.jsxs)(a(),{style:j.contentStart,children:[(0,g.jsxs)(y(),{style:j.menuItem,accessibilityRole:"link",href:"/",children:[(0,g.jsx)(m(),{style:s,children:"Home"}),e&&(0,g.jsx)(a(),{style:{alignItems:"center"},children:(0,g.jsx)(b(),{src:"/assets/active-menu.svg",width:131,height:16})})]}),(0,g.jsxs)(y(),{style:j.menuItem,children:[(0,g.jsx)(m(),{style:l,children:"Projects"}),n&&(0,g.jsx)(a(),{style:{alignItems:"center"},children:(0,g.jsx)(b(),{src:"/assets/active-menu.svg",width:131,height:16})})]}),(0,g.jsxs)(y(),{style:j.menuItem,accessibilityRole:"link",href:"/about",children:[(0,g.jsx)(m(),{style:c,children:"About"}),i&&(0,g.jsx)(a(),{style:{alignItems:"center"},children:(0,g.jsx)(b(),{src:"/assets/active-menu.svg",width:131,height:16})})]})]}),(0,g.jsx)(a(),{style:j.contentEnd,children:(0,g.jsx)(v,{title:"Contact",content:k})})]})},C=n(29),z=n(7794),F=n.n(z),P=n(8346),H=n.n(P),E=h().create({container:{zIndex:1,alignItems:"center",flexDirection:"row",height:104,backgroundColor:i.grayLight,paddingHorizontal:160,justifyContent:"space-between",borderTopColor:i.gray,borderWidth:1},leftContainer:{flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},rightContainer:{width:"357",alignItems:"flex-start",justifyContent:"flex-start"},title:{fontSize:16,marginHorizontal:44},icon:{paddingHorizontal:16}}),W=function(){var t=function(){var t=(0,C.Z)(F().mark((function t(){return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H().openURL("https://www.linkedin.com/in/elene-zed/");case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e=function(){var t=(0,C.Z)(F().mark((function t(){return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H().openURL("https://twitter.com/EleneZed");case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=function(){var t=(0,C.Z)(F().mark((function t(){return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H().openURL("https://www.facebook.com/elene.zed/");case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,g.jsxs)(a(),{style:E.container,children:[(0,g.jsxs)(a(),{style:E.leftContainer,children:[(0,g.jsx)(y(),{style:E.icon,onPress:t,children:(0,g.jsx)(b(),{src:"/assets/linkedin.svg",width:40,height:40,alt:"Linkedin icon"})}),(0,g.jsx)(y(),{style:E.icon,onPress:e,children:(0,g.jsx)(b(),{src:"/assets/twitter.svg",width:40,height:40,alt:"Twitter icon"})}),(0,g.jsx)(y(),{style:E.icon,onPress:n,children:(0,g.jsx)(b(),{src:"/assets/facebook.svg",width:40,height:40,alt:"Facebook icon"})})]}),(0,g.jsxs)(a(),{style:E.rightContainer,children:[(0,g.jsx)(m(),{style:r.body,children:"Copyright \xa9 2022 Elene Zedginidze."}),(0,g.jsx)(m(),{style:r.body,children:"All rights reserved."})]})]})},D=h().create({container:{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingBottom:100},contentStart:{alignItems:"flex-start",justifyContent:"flex-start",paddingRight:24},contentEnd:{flex:1}}),R=function(){return(0,g.jsxs)(a(),{style:D.container,children:[(0,g.jsx)(a(),{style:D.contentStart,children:(0,g.jsx)(b(),{src:"/assets/author.png",width:150,height:150})}),(0,g.jsxs)(a(),{style:D.contentEnd,children:[(0,g.jsx)(m(),{style:r.h3,children:"Hi, I\u2019m Elene \ud83d\udc4b"}),(0,g.jsx)(m(),{style:r.subtitle,children:"Google certified UX/UI Designer with a mission to create delightful experiences and lovable products for people!"})]})]})},B=h().create({container:{flexDirection:"row",marginBottom:80},containerStart:{flexBasis:"55%",justifyContent:"center",paddingHorizontal:36},containerEnd:{justifyContent:"center",flexBasis:"45%",paddingEnd:80}}),A=h().create({container:{paddingHorizontal:32,paddingVertical:16,backgroundColor:i.accent,borderRadius:8,justifyContent:"center",alignSelf:"flex-start"}}),L=function(t){var e=t.label,n=t.onPress,i=t.topSpace,o=t.bottomSpace;return(0,g.jsx)(y(),{onPress:n,style:[A.container,{marginTop:i,marginBottom:o}],children:(0,g.jsx)(m(),{style:r.button,children:e})})},T=function(t){var e=t.link,n=t.imagePath,i=t.imageWidth,o=t.imageHeight,s=t.title,l=t.description,c=function(){var t=(0,C.Z)(F().mark((function t(){return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H().openURL(e);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,g.jsxs)(a(),{style:B.container,children:[(0,g.jsxs)(a(),{style:B.containerStart,children:[(0,g.jsx)(m(),{style:r.h1,children:s}),(0,g.jsx)(m(),{style:r.card,children:l}),(0,g.jsx)(L,{label:"View Prototype",onPress:c,topSpace:42})]}),(0,g.jsx)(a(),{style:B.containerEnd,children:(0,g.jsx)(b(),{src:n,width:i,height:o})})]})},Z=h().create({container:{backgroundColor:i.light,height:489,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7,borderRadius:24,flexDirection:"row",marginBottom:24,paddingVertical:48,paddingEnd:100,paddingStart:50},containerStart:{flex:1,justifyContent:"center",alignItems:"center"},containerEnd:{flex:1,justifyContent:"center",alignItems:"flex-start",marginStart:70},link:{paddingTop:80,alignSelf:"flex-end"},divider:{paddingVertical:16}}),U=function(t){var e=t.link,n=t.imagePath,i=t.imageWidth,o=t.imageHeight,s=t.label,l=t.title,c=t.description;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(a(),{style:Z.container,accessibilityRole:"link",href:e,children:[(0,g.jsx)(a(),{style:Z.containerStart,children:(0,g.jsx)(b(),{src:n,width:i,height:o})}),(0,g.jsxs)(a(),{style:Z.containerEnd,children:[(0,g.jsx)(m(),{style:r.label,children:s}),(0,g.jsx)(m(),{style:r.h2,children:l}),(0,g.jsx)(a(),{style:Z.divider,children:(0,g.jsx)(b(),{src:"/assets/card-divider.svg",width:637,height:5})}),(0,g.jsx)(m(),{style:r.card,children:c}),(0,g.jsx)(m(),{style:[r.link,Z.link],children:"View More"})]})]})})},V=h().create({container:{alignItems:"flex-start",justifyContent:"center",marginBottom:32},underline:{marginTop:4,marginBottom:20}}),O=function(t){var e=t.title,n=t.text,i=14*e.length;return(0,g.jsxs)(a(),{style:V.container,children:[(0,g.jsx)(m(),{style:r.title,children:e}),(0,g.jsx)(a(),{style:V.underline,children:(0,g.jsx)(b(),{src:"/assets/underline.svg",width:i,height:6})}),(0,g.jsx)(m(),{style:r.body,children:n})]})}}}]);