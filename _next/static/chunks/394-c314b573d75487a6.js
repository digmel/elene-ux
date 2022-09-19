"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[394],{6593:function(e,t,n){n.d(t,{Zb:function(){return G},$_:function(){return A},h4:function(){return k},xB:function(){return D},HH:function(){return U},NP:function(){return V},lL:function(){return m},$0:function(){return $},O9:function(){return i},sq:function(){return r}});var i={primary:"#2D2D2D",accent:"#BFD838",success:"#18A80C",error:"#F37272",grayLight:"#FAFAFA",gray:"#E3E5E8",grayDark:"#565F67",grayHover:"#F5F5F5",light:"#FFFFFF",shadow:"#000000",link:"#125A95"},r={h1:{fontSize:48,lineHeight:"130%",fontWeight:700,color:i.primary,fontFamily:"Poppins"},h2:{fontSize:36,lineHeight:"130%",fontWeight:600,color:i.primary,fontFamily:"Poppins"},h3:{fontSize:28,lineHeight:"130%",fontWeight:500,color:i.primary,fontFamily:"Poppins"},subtitle:{fontSize:24,fontWeight:300,color:i.primary,lineHeight:"130%",fontFamily:"Poppins"},link:{fontSize:24,lineHeight:"130%",fontWeight:700,color:i.link,fontFamily:"Poppins"},button:{fontSize:32,lineHeight:"130%",fontWeight:300,color:i.primary,fontFamily:"Poppins"},title:{fontSize:20,lineHeight:"130%",fontWeight:500,letterSpacing:"1%",color:i.primary,fontFamily:"Poppins"},body:{fontSize:16,lineHeight:"130%",fontWeight:300,letterSpacing:"1%",color:i.primary,fontFamily:"Poppins"},label:{fontSize:20,fontWeight:300,letterSpacing:"1%",color:i.grayDark,fontFamily:"Poppins"},card:{fontSize:20,lineHeight:"130%",fontWeight:300,color:i.primary,fontFamily:"Poppins"},menuItem:{default:{fontSize:20,lineHeight:"130%",fontWeight:300,color:i.primary,fontFamily:"Poppins"},active:{fontSize:20,lineHeight:"130%",fontWeight:500,color:i.primary,fontFamily:"Poppins",letterSpacing:"1%"}}},o=n(7294),s=n(9057),a=n.n(s),l=n(8174),c=n.n(l),d=n(1472),h=n(4099),u=n.n(h),g=u().create({container:{flex:1,backgroundColor:i.light},content:{paddingHorizontal:120,paddingBottom:300,paddingTop:50}}),f=n(945),p=n(5893),m=function(e){var t=e.children,n=e.isHome,i=e.isProject,r=e.isAbout,o=(0,d.animated)(a()),s=(0,d.useSpring)({to:{opacity:1},from:{opacity:0},config:{duration:1e3}}),l=(0,f.F)().isMobile?{paddingHorizontal:32,paddingBottom:100}:{};return(0,p.jsxs)(c(),{style:g.container,stickyHeaderIndices:[0],children:[(0,p.jsx)(k,{isHome:n,isProject:i,isAbout:r}),(0,p.jsx)(o,{style:s,children:(0,p.jsx)(a(),{style:[g.content,l],children:t})}),(0,p.jsx)(A,{})]})},y=n(8409),x=n.n(y),j=n(696),w=n.n(j),b=u().create({container:{zIndex:1,alignItems:"center",flexDirection:"row",height:74,backgroundColor:i.light,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7,paddingEnd:120,paddingStart:100,justifyContent:"space-between"},contentStart:{paddingTop:24,flexDirection:"row",alignSelf:"flex-start"},contentEnd:{justifyContent:"center",alignItems:"center"},menuItem:{width:100,fontSize:16,marginRight:88,alignItems:"center"},button:{backgroundColor:i.accent,paddingHorizontal:24,paddingVertical:12,borderRadius:4},dropdownMenuContainer:{flex:1,zIndex:10,width:180,backgroundColor:i.light,borderRadius:4,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7},dropdownMenuItem:{flex:1,justifyContent:"center",paddingHorizontal:24,paddingVertical:16,alignItems:"flex-start",borderBottomWidth:1,borderBottomColor:i.accent},dropdownMenuItemHover:{backgroundColor:i.grayHover}}),v=n(5675),I=n.n(v),S=n(1993),F=n.n(S),H=function(e){var t=e.title,n=e.content,i=(0,o.useState)(!0),s=i[0],l=i[1],c=(0,o.useState)(!1),h=c[0],u=c[1],g=(0,d.useSpring)({from:{x:0},x:s?1:.5,config:{duration:500}}).x,f=(0,d.animated)(a());return(0,p.jsx)(p.Fragment,{children:h?(0,p.jsx)(f,{style:{opacity:g.to({range:[0,1],output:[.3,1]}),scale:g.to({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]})},children:(0,p.jsx)(x(),{style:r.menuItem.default,children:n})}):(0,p.jsx)(w(),{style:b.button,onPress:function(){l(!s),u(!h),F().setString(n)},children:(0,p.jsx)(x(),{style:r.menuItem.default,children:t})})})},C=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],i=(0,o.useState)(!1),s=i[0],l=i[1],c=(0,o.useState)(!1),d=c[0],h=c[1],u=t?b.dropdownMenuItemHover:{},g=s?b.dropdownMenuItemHover:{},f=d?b.dropdownMenuItemHover:{};return(0,p.jsxs)(a(),{style:b.dropdownMenuContainer,children:[(0,p.jsx)(w(),{href:"/GlutenFreeApp",accessibilityRole:"link",style:[b.dropdownMenuItem,u],onHoverIn:function(){return n(!0)},onHoverOut:function(){return n(!1)},children:(0,p.jsx)(x(),{style:r.body,children:"Gluten Free App"})}),(0,p.jsx)(w(),{href:"/FoodWasteApp",accessibilityRole:"link",style:[b.dropdownMenuItem,g],onHoverIn:function(){return l(!0)},onHoverOut:function(){return l(!1)},children:(0,p.jsx)(x(),{style:r.body,children:"Food Waste App"})}),(0,p.jsx)(w(),{href:"FirstAidApp",accessibilityRole:"link",style:[b.dropdownMenuItem,f],onHoverIn:function(){return h(!0)},onHoverOut:function(){return h(!1)},children:(0,p.jsx)(x(),{style:r.body,children:"First Aid App"})})]})},k=function(e){var t=e.isHome,n=e.isProject,i=e.isAbout,s=(0,o.useState)(!1),l=s[0],c=s[1],h=(0,f.F)().isMobile,u=function(){c(!l)},g=n?{marginTop:10}:{marginTop:22},m=t?r.menuItem.active:r.menuItem.default,y=n?r.menuItem.active:r.menuItem.default,j=i?r.menuItem.active:r.menuItem.default,v=(0,d.animated)(a()),S=(0,d.useSpring)({to:{opacity:1},from:{opacity:0},config:{duration:1100}});return(0,p.jsx)(p.Fragment,{children:h?(0,p.jsx)(a(),{style:{alignSelf:"flex-end",paddingTop:8,marginEnd:8},children:(0,p.jsx)(I(),{src:"/assets/mobile-menu.svg",width:45,height:45})}):(0,p.jsxs)(a(),{style:b.container,children:[(0,p.jsxs)(a(),{style:b.contentStart,children:[(0,p.jsxs)(w(),{style:b.menuItem,accessibilityRole:"link",href:"/",children:[(0,p.jsx)(x(),{style:m,children:"Home"}),t&&(0,p.jsx)(v,{style:S,children:(0,p.jsx)(a(),{style:{alignItems:"center"},children:(0,p.jsx)(I(),{src:"/assets/active-menu.svg",width:131,height:16})})})]}),(0,p.jsxs)(w(),{style:b.menuItem,onHoverIn:u,onHoverOut:u,children:[(0,p.jsxs)(a(),{style:{flexDirection:"row"},children:[(0,p.jsx)(x(),{style:y,children:"Projects"}),(0,p.jsx)(a(),{style:{marginStart:8,alignSelf:"center"},children:(0,p.jsx)(v,{style:S,children:(0,p.jsx)(I(),{src:"/assets/dropdown.svg",width:17,height:11})})})]}),n&&(0,p.jsx)(v,{style:S,children:(0,p.jsx)(a(),{style:{alignItems:"center"},children:(0,p.jsx)(I(),{src:"/assets/active-menu.svg",width:131,height:16})})}),l&&(0,p.jsx)(a(),{style:g,children:(0,p.jsx)(C,{})})]}),(0,p.jsxs)(w(),{style:b.menuItem,accessibilityRole:"link",href:"/about",children:[(0,p.jsx)(x(),{style:j,children:"About"}),i&&(0,p.jsx)(v,{style:S,children:(0,p.jsx)(a(),{style:{alignItems:"center"},children:(0,p.jsx)(I(),{src:"/assets/active-menu.svg",width:131,height:16})})})]})]}),(0,p.jsx)(a(),{style:b.contentEnd,children:(0,p.jsx)(H,{title:"Contact",content:"elene.uxdesign@gmail.com"})})]})})},z=n(29),P=n(7794),E=n.n(P),R=n(8346),W=n.n(R),B=u().create({container:{zIndex:1,alignItems:"center",flexDirection:"row",height:104,backgroundColor:i.grayLight,paddingHorizontal:120,justifyContent:"space-between",borderTopColor:i.gray,borderWidth:1},leftContainer:{flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},rightContainer:{width:"357",alignItems:"flex-start",justifyContent:"flex-start"},title:{fontSize:16,marginHorizontal:44},icon:{paddingEnd:28}}),A=function(){var e=(0,f.F)().isMobile,t=function(){var e=(0,z.Z)(E().mark((function e(){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W().openURL("https://www.linkedin.com/in/elene-zed/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=(0,z.Z)(E().mark((function e(){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W().openURL("https://twitter.com/EleneZed");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsx)(a(),{style:B.container,children:e?(0,p.jsx)(a(),{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(a(),{style:B.leftContainer,children:[(0,p.jsx)(w(),{style:B.icon,onPress:t,children:(0,p.jsx)(I(),{src:"/assets/linkedin.svg",width:40,height:40,alt:"Linkedin icon"})}),(0,p.jsx)(w(),{style:B.icon,onPress:n,children:(0,p.jsx)(I(),{src:"/assets/twitter.svg",width:40,height:40,alt:"Twitter icon"})})]}),(0,p.jsxs)(a(),{style:B.rightContainer,children:[(0,p.jsx)(x(),{style:r.body,children:"Copyright \xa9 2022 Elene Zedginidze."}),(0,p.jsx)(x(),{style:r.body,children:"All rights reserved."})]})]})})},T=u().create({container:{flex:1,flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingVertical:48,paddingStart:32,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7,borderRadius:24,marginBottom:48},contentStart:{alignItems:"flex-start",justifyContent:"flex-start",paddingRight:24},contentEnd:{flex:1}}),D=function(){var e=(0,f.F)().isMobile;return(0,p.jsx)(p.Fragment,{children:e?(0,p.jsx)(a(),{}):(0,p.jsxs)(a(),{style:T.container,accessibilityRole:"link",href:"/about",children:[(0,p.jsx)(a(),{style:T.contentStart,children:(0,p.jsx)(I(),{src:"/assets/author.svg",width:100,height:100})}),(0,p.jsxs)(a(),{style:T.contentEnd,children:[(0,p.jsx)(x(),{style:r.h3,children:"Hi, I\u2019m Elene \ud83d\udc4b"}),(0,p.jsx)(x(),{style:r.subtitle,children:"Google certified UX/UI Designer with a mission to create delightful experiences and lovable products!"})]})]})})},M=u().create({container:{flexDirection:"row",marginBottom:64},containerStart:{flexBasis:"55%",justifyContent:"center",paddingEnd:36,alignItems:"flex-start"},containerEnd:{justifyContent:"center",flexBasis:"45%",alignItems:"flex-end"}}),O=u().create({container:{paddingHorizontal:32,paddingVertical:16,backgroundColor:i.accent,borderRadius:8,justifyContent:"center"}}),L=function(e){var t=e.label,n=e.onPress,i=e.topSpace,o=e.bottomSpace;return(0,p.jsx)(w(),{onPress:n,style:[O.container,{marginTop:i,marginBottom:o}],children:(0,p.jsx)(x(),{style:r.button,children:t})})},V=function(e){var t=e.link,n=e.image,i=e.imageWidth,o=e.imageHeight,s=e.title,l=e.description,c=function(){var e=(0,z.Z)(E().mark((function e(){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W().openURL(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)(a(),{style:M.container,children:[(0,p.jsxs)(a(),{style:M.containerStart,children:[(0,p.jsx)(x(),{style:r.h1,children:s}),(0,p.jsx)(x(),{style:r.card,children:l}),(0,p.jsx)(L,{label:"View Prototype",onPress:c,topSpace:42})]}),(0,p.jsx)(a(),{style:M.containerEnd,children:(0,p.jsx)(I(),{src:"/assets/".concat(n),width:i,height:o})})]})},Z=u().create({container:{flex:1,justifyContent:"center",alignItems:"center",marginTop:100}}),U=function(e){var t=e.link,n=function(){var e=(0,z.Z)(E().mark((function e(){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W().openURL(t);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)(a(),{style:Z.container,children:[(0,p.jsx)(x(),{style:r.h3,children:"Thank you!"}),(0,p.jsx)(x(),{style:[r.subtitle,{marginTop:16}],children:"Click on the button if you\u2019d like to check the prototype!"}),(0,p.jsx)(L,{label:"View Prototype",onPress:n,topSpace:64})]})},_=u().create({container:{height:485,width:460,shadowColor:i.shadow,shadowOffset:{width:1,height:1},shadowOpacity:.2,shadowRadius:7,borderRadius:24,marginEnd:29,justifyContent:"center",alignItems:"center",paddingHorizontal:32,alignContent:"center"},containerImage:{justifyContent:"center",alignItems:"center",marginBottom:24},divider:{paddingVertical:16}}),G=function(e){var t=e.link,n=e.image,i=e.imageWidth,o=e.title,s=e.description,l=(0,f.F)().isMobile;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(a(),{style:[_.container,{alignSelf:"center",marginEnd:l?0:29,marginVertical:l?-36:0,transform:[{scale:l?.8:1}]}],accessibilityRole:"link",href:t,children:[(0,p.jsx)(a(),{style:_.containerImage,children:(0,p.jsx)(I(),{src:"/assets/".concat(n),width:i,height:250})}),(0,p.jsx)(x(),{style:r.h3,children:o}),(0,p.jsx)(a(),{style:_.divider,children:(0,p.jsx)(I(),{src:"/assets/card-divider.svg",width:637,height:5})}),(0,p.jsx)(x(),{style:r.card,children:s})]})})},N=u().create({wrapper:{},container:{flexDirection:"row",alignItems:"flex-start",justifyContent:"space-start",marginBottom:32},underline:{marginTop:4,marginBottom:12,alignItems:"flex-start"},headline:{marginTop:4,marginBottom:32},content:{marginEnd:77},list:{flexDirection:"row",marginBottom:10,alignItems:"flex-start"},icon:{marginEnd:8,marginTop:4},description:{paddingBottom:24,width:940}}),$=function(e){var t=e.headline,n=e.description,i=e.content,o=e.fullImage,s=e.fullImageHeight,l=e.fullImageWidth,c=e.fullImageTopSpace,d=e.fullImageBottomSpace,h=e.topSpace;return(0,p.jsxs)(a(),{style:[N.wrapper,{marginTop:h}],children:[t&&(0,p.jsx)(a(),{style:N.headline,children:(0,p.jsx)(x(),{style:r.h3,children:t})}),n&&(0,p.jsx)(a(),{style:N.description,children:(0,p.jsx)(x(),{style:r.body,children:n})}),(0,p.jsx)(a(),{style:N.container,children:i&&(null===i||void 0===i?void 0:i.map((function(e){var t=e.title,n=e.body,i=e.width,o=e.list,s=e.image,l=e.imageWidth,c=e.imageHeight,d=t?15*t.length:100,h="".concat(t)+1;return(0,p.jsxs)(a(),{style:[N.content,{width:i}],children:[t&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(x(),{style:r.title,children:t}),(0,p.jsx)(a(),{style:N.underline,children:(0,p.jsx)(I(),{src:"/assets/underline.svg",width:d,height:6})})]}),n&&(0,p.jsx)(x(),{style:r.body,children:n}),o&&(null===o||void 0===o?void 0:o.map((function(e){var t=e.text,n=e.icon;return(0,p.jsxs)(a(),{style:N.list,children:[(0,p.jsx)(a(),{style:N.icon,children:n&&(0,p.jsx)(I(),{src:"/assets/".concat(n),width:15,height:12})}),(0,p.jsx)(x(),{style:r.body,children:t})]})}))),s&&(0,p.jsx)(I(),{src:"/assets/".concat(s),width:l,height:c})]},h)})))}),o&&(0,p.jsx)(a(),{style:{marginTop:c,marginBottom:d},children:(0,p.jsx)(I(),{src:"/assets/".concat(o),width:l,height:s})})]})}},945:function(e,t,n){n.d(t,{F:function(){return s}});var i=n(7294),r=n(5390),o=n.n(r),s=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1],r=o()().width;return(0,i.useEffect)((function(){n(r<1400)}),[]),{isMobile:t}}}}]);