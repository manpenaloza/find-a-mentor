(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,a,t){e.exports=t(318)},175:function(e,a,t){},178:function(e,a,t){},180:function(e,a,t){},312:function(e,a,t){},318:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),r=t(38),o=t.n(r),s=(t(175),t(27)),c=t(28),l=t(30),m=t(29),d=t(31),p=(t(178),t(96)),u=t(327),h=t(328),v=t(145),g=t(4),y=t.n(g),b=(t(180),t(326)),f=t(146),k=t.n(f),w=t(147),j=t.n(w),S=t(92),E=t.n(S),C=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).resetComponent=function(){t.setState({isLoading:!1,results:[],value:""}),t.props.onReset()},t.handleResultSelect=function(e,a){var i=a.result;t.setState({value:i.title}),t.props.handleResultSelect(i)},t.handleSearchChange=function(e,a){var i=a.value,n=t.props.source;t.setState({isLoading:!0,value:i}),setTimeout(function(){if(t.state.value.length<1)return t.resetComponent();var e=new RegExp(j()(t.state.value),"i");t.setState({isLoading:!1,results:E()(n,function(a){return e.test(a.title)})})},300)},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentWillMount",value:function(){this.resetComponent()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.value,i=e.results;return n.a.createElement("div",{className:"search-wrapper"},n.a.createElement(b.a,{input:"search",loading:a,onResultSelect:this.handleResultSelect,onSearchChange:k()(this.handleSearchChange,500,{leading:!0}),results:i,value:t,placeholder:this.props.placeholder,className:"search-input"}))}}]),a}(i.Component),I=(t(312),t(144)),N=t(325),A={slack:{icon:"slack",url:"https://coding-coach.slack.com/team/{id}"},email:{icon:"at",url:"mailto:{id}"},linkedin:{icon:"linkedin",url:"https://www.linkedin.com/in/{id}"},facebook:{icon:"facebook",url:"https://www.facebook.com/{id}"},twitter:{icon:"twitter",url:"https://twitter.com/{id}"}};var O=t(158),U=t.n(O);function H(){return JSON.parse(localStorage.getItem("favs")||"[]")}var L=function(e,a,t){return e.map(function(e,i){return n.a.createElement(N.a,{className:"mentor-card",key:i},n.a.createElement("header",null,n.a.createElement(I.a,{as:"button",corner:"right",onClick:t.bind(null,e)},n.a.createElement(v.a,{name:"heart",color:a.indexOf(e.id)>-1?"red":"black"})),n.a.createElement("img",{src:e.avatar,alt:"".concat(e.name,"'s avatar")}),n.a.createElement("div",{className:"details"},n.a.createElement(N.a.Header,null,e.name),n.a.createElement(N.a.Meta,null,e.title),n.a.createElement("div",{className:"tags"},e.tags.map(function(e,a){return n.a.createElement(I.a,{className:"mentor-tag",key:a},e)})))),n.a.createElement("div",{className:"details"},n.a.createElement(N.a.Description,null,n.a.createElement(v.a,{className:"mentor-quote",name:"quote left"}),e.description)),n.a.createElement(u.a.Group,{attached:"bottom"},e.channels.map(function(e){var a=function(e){var a=e.type,t=e.id,i=A[a];return{icon:i.icon,url:i.url.replace("{id}",t)}}(e),t=a.icon,i=a.url;return n.a.createElement("a",{className:"ui black basic button channel-link",key:e.type,href:i,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(v.a,{name:t}),n.a.createElement("span",null,e.type))})))})},D=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={page:1,favs:H()},t.loadMore=function(){t.setState({page:t.state.page+1})},t.onToggleFav=function(e){var a=function(e){var a=H(),t=a.indexOf(e.id);return t>-1?a.splice(t,1):a.push(e.id),localStorage.setItem("favs",JSON.stringify(a)),a}(e);t.setState({favs:a})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.mentors!==this.props.mentors&&this.setState({page:1})}},{key:"render",value:function(){var e=this.props,a=e.mentors,t=e.className,i=this.state,r=i.page,o=i.favs,s=a.slice(0,10*r);return n.a.createElement("div",{className:y()(["mentors-wrapper",t])},n.a.createElement(N.a.Group,{centered:!0,className:"mentors-cards"},n.a.createElement(U.a,{className:"ui centered cards mentors-cards",loadMore:this.loadMore,hasMore:s.length<a.length},L(s,o,this.onToggleFav))))}}]),a}(i.Component),F=function(e){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width||628,height:e.height||348,viewBox:"0 0 628 348"},n.a.createElement("g",{fill:e.color||"#FFF",fillRule:"evenodd"},n.a.createElement("polygon",{points:"407 46.595 534.639 174 407 301.405 453.681 348 628 174 453.681 0"}),n.a.createElement("path",{d:"M388,301.404983 L260.309746,174 L388,46.5950165 L341.243142,0 L213.395634,127.404983 L166.796029,174 L137.337112,203.35695 C125.387266,215.421113 107.308026,219.09616 91.5713583,212.659957 C75.8346911,206.223754 65.5586778,190.951578 65.5586778,174 C65.5586778,157.048422 75.8346911,141.776246 91.5713583,135.340043 C107.308026,128.90384 125.387266,132.578887 137.337112,144.64305 L151.909317,159.164815 L198.666175,112.569799 L184.09397,98.0480336 C153.262621,67.3014871 106.879638,58.0944242 66.5791953,74.7212474 C26.2787524,91.3480705 0,130.533311 0,174 C0,217.466689 26.2787524,256.651929 66.5791953,273.278753 C106.879638,289.905576 153.262621,280.698513 184.09397,249.951966 L213.552888,220.595017 L341.400396,348 L388,301.404983 Z"})))},P=t(159),x=t.n(P),R=t(142);var M=function(e){for(var a={tags:[],countries:[]},t=0;t<e.length;t++){var i;(i=a.tags).push.apply(i,Object(R.a)(e[t].tags||[])),a.countries.push(e[t].country)}return a.tags=Object(R.a)(new Set(a.tags)),a.countries=Object(R.a)(new Set(a.countries)),a}(p),T=M.tags,G=M.countries,J=function(e){return{title:e}},z=T.map(J),W=G.map(J),B=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={mentors:x()(p)},t.handleTagSelect=function(e){t.setState({tag:e.title})},t.handleCountrySelect=function(e){t.setState({country:e.title})},t.filterMentors=function(e){var a=t.state,i=a.tag,n=a.country;return(!i||e.tags.includes(i))&&(!n||e.country===n)},t.resetTag=function(){t.setState({tag:""})},t.resetCountry=function(){t.setState({country:""})},t.toggleFields=function(){t.setState({fieldsIsActive:!t.state.fieldsIsActive})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state,a=e.mentors,t=e.fieldsIsActive,i=a.filter(this.filterMentors);return n.a.createElement("div",{className:"app"},n.a.createElement("header",{className:"main-header"},n.a.createElement("a",{className:"logo",href:"/"},n.a.createElement(F,{width:110,height:50,color:"#68d5b1"}),n.a.createElement("span",null,"CODING COACH ALPHA")),n.a.createElement("div",{className:"social"},n.a.createElement(u.a,{role:"link",circular:!0,size:"mini",as:"a",icon:"github",color:"black",href:"https://github.com/Coding-Coach/find-a-mentor",target:"_blank"}),n.a.createElement(u.a,{role:"link",circular:!0,size:"mini",as:"a",icon:"twitter",color:"twitter",href:"https://twitter.com/codingcoach_io",target:"_blank"}),n.a.createElement(u.a,{role:"link",circular:!0,size:"mini",as:"a",icon:"facebook",color:"facebook",href:"https://www.facebook.com/codingcoachio/",target:"_blank"}),n.a.createElement(u.a,{role:"link",circular:!0,size:"mini",as:"a",icon:"slack",color:"purple",href:"https://coding-coach.slack.com/join/shared_invite/enQtNTE2NDY4NTczNzE0LTMyOTAyZTFiYjE4OTUzYjgwYzk5MzlmYjgwNjUyNDZlZGY3NGVhYmU1NjdmZDQ3MmQ3YjRhYjJkMjM4OTYwNDA",target:"_blank"}))),n.a.createElement("div",{className:"filters-outer"},n.a.createElement("div",{className:"filters"},n.a.createElement(h.a,{as:"h1"},n.a.createElement("div",null,"Find a mentor",n.a.createElement(u.a,{size:"huge",floated:"right",className:"tertiary mobile",icon:!0,onClick:this.toggleFields},n.a.createElement(v.a,{name:"filter"}))),n.a.createElement(h.a.Subheader,null,a.length," mentors available")),n.a.createElement("div",{className:"fields"},n.a.createElement(C,{placeholder:"Language or Technology",source:z,handleResultSelect:this.handleTagSelect,onReset:this.resetTag}),n.a.createElement(C,{placeholder:"Country",source:W,handleResultSelect:this.handleCountrySelect,onReset:this.resetCountry})))),n.a.createElement(D,{className:y()({active:t}),mentors:i}))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=t(329),q=function(e){function a(){var e,t;Object(s.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={width:0},t.handleOnUpdate=function(e,a){var i=a.width;return t.setState({width:i})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state.width<=Y.a.onlyMobile.maxWidth;return n.a.createElement(Y.a,{className:"device-".concat(e?"mobile":"desktop"),fireOnMount:!0,onUpdate:this.handleOnUpdate},this.props.children)}}]),a}(i.Component);o.a.render(n.a.createElement(q,null,n.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},96:function(e){e.exports=[{id:"moshfeu@gmail.com",name:"Mosh Feuchtwanger",avatar:"https://avatars3.githubusercontent.com/u/3723951?s=460&v=4",title:"Frontend at @wix",description:"Hi, I'm Mosh and I will love to help! \ud83e\udd2a",country:"Israel",tags:["frontend","javascript","reactjs","html","css"],channels:[{type:"email",id:"moshfeu@gmail.com"},{type:"slack",id:"UFL4N8ETE"},{type:"linkedin",id:"moshfeu"}]},{id:"crysfel@bleext.com",name:"Crysfel Villa",avatar:"https://avatars0.githubusercontent.com/u/219207?s=88&v=4",title:"Sr. Engineer at @invisionapp",description:"Hi, I'm Crysfel! Let me know how can I help \ud83d\udc68\u200d\ud83d\udcbb",country:"USA",tags:["frontend","javascript","react","native","css"],channels:[{type:"email",id:"crysfel@bleext.com"},{type:"slack",id:"UCQ9GL8UB"}]},{id:"me@ahmadsantarissy.com",name:"Ahmad Santarissy",avatar:"https://avatars0.githubusercontent.com/u/522352?s=460&v=4",title:"co-CEO @RelativelyFund",description:"Passionate coder and tech advisor",country:"Jordan",tags:["javascript","react","web","php"],channels:[{type:"email",id:"me@ahmadsantarissy.com"},{type:"facebook",id:"asantarissy"},{type:"linkedin",id:"asantarissy"}]},{id:"asjas@outlook.com",name:"A-J Roos",avatar:"https://avatars0.githubusercontent.com/u/3828967?s=400&v=4",title:"JavaScript Web Developer",description:"I'm a JavaScript Web Developer. Ask me any questions that you have.",country:"South Africa",tags:["javascript","reactjs","gatsby","nodejs","express"],channels:[{type:"email",id:"asjas@outlook.com"},{type:"twitter",id:"_asjas"},{type:"slack",id:"UCQHCSC3F"}]},{id:"dhanjalbhavdeep@gmail.com",name:"Bhavdeep Dhanjal",avatar:"https://avatars3.githubusercontent.com/u/19860968?s=400&v=4",title:"Software Engineer",description:"Hi! I am BD. Would love to help in any way \ud83d\ude42",country:"India",tags:["javascript","react","node","fp"],channels:[{type:"email",id:"dhanjalbhavdeep@gmail.com"},{type:"linkedin",id:"bhavdeep-dhanjal"},{type:"twitter",id:"bhavdeepdhanjal"}]},{id:"tommy@sapid.com",name:"Tommy Williams",avatar:"https://avatars2.githubusercontent.com/u/1378042?v=4",title:"Full Stack .NET Web Developer",description:"28-year career in software. Would love to share what I know.",country:"USA",tags:["csharp","aspnet","backend","build","powershell"],channels:[{type:"email",id:"tommy@sapid.com"},{type:"linkedin",id:"twwilliams"},{type:"twitter",id:"twwilliams"}]},{id:"nickfoden@gmail.com",name:"Nick Foden",avatar:"https://avatars3.githubusercontent.com/u/8321838?s=460&v=4",title:"Developer at @wallplaynetwork",description:"Hola ! Let's solve some problems.",country:"USA",tags:["reactjs","firebase","javascript","node","redux"],channels:[{type:"email",id:"nickfoden@gmail.com"},{type:"slack",id:"UGTLF9ERZ"},{type:"twitter",id:"nickfoden"}]},{id:"me@andrewmiracle.com",name:"Andrew Miracle",avatar:"https://avatars2.githubusercontent.com/u/6226591",title:"Software Developer at @sendboxng",description:"When the journey looks rough, I promise you won't have to do it alone",country:"Nigeria",tags:["javascript","reactjs","web","frontend","ux"],channels:[{type:"email",id:"me@andrewmiracle.com"},{type:"slack",id:"UCT87M68N"},{type:"linkedin",id:"salzzyandrewmiracle"}]},{id:"alsoicode@gmail.com",name:"Brandon Taylor",avatar:"https://s.gravatar.com/avatar/9bed82f5b46890bf247d2bf7ca558ef7?s=80&r=g",title:"Full Stack Web Developer / Designer",description:"23 year web development veteran specializing in Angular, Node and TypeScript",country:"USA",tags:["angular","django","node","typescript","javascript"],channels:[{type:"email",id:"alsoicode@gmail.com"},{type:"linkedin",id:"alsoicode"}]},{id:"gregorifaroux@gmail.com",name:"Gregori Faroux",avatar:"https://avatars0.githubusercontent.com/gregorifaroux",title:"CTO @ Catalytic DS",description:"Coding since I was 7 and still loving it. Looking forward to help you if I can!",country:"USA",tags:["javascript","react","redux"],channels:[{type:"twitter",id:"gregorifaroux"},{type:"slack",id:"UGPPXCKB2"},{type:"linkedin",id:"gregorifaroux"}]},{id:"chouandrewo@gmail.com",name:"Andrew Chou",avatar:"https://avatars3.githubusercontent.com/u/18542095?s=460&v=4",title:"Software Engineer",description:"Open web enthusiast. Come explore the various corners of the internet with me!",country:"USA",tags:["javascript","css","html","web","p2p"],channels:[{type:"email",id:"chouandrewo@gmail.com"},{type:"twitter",id:"botherchou"}]},{id:"ambatikirankumar4@gmail.com",name:"Kirankumar Ambati",avatar:"https://avatars0.githubusercontent.com/u/9110567?s=460&v=4",title:"Senior Software Engineer @ValueLabs",description:"Hi, I'm Kirankumar Ambati! Let me know if you need any help.\ud83d\udc68\u200d\ud83d\udcbb",country:"India",tags:["frontend","javascript","reactjs","redux","fullstack"],channels:[{type:"email",id:"ambatikirankumar4@gmail.com"},{type:"linkedin",id:"ambatikirankumar"},{type:"slack",id:"kirankumarambati"}]},{id:"hello@artofcode.co.uk",name:"Owen Jenkins",avatar:"https://avatars2.githubusercontent.com/u/10406565?s=460&v=4",title:"Generalist; Python/Ruby/Web",description:"Hi! Here for general help; specialise in Python, Ruby/Rails, and web projects.",country:"United Kingdom",tags:["python","ruby","rails","javascript"],channels:[{type:"email",id:"hello@artofcode.co.uk"},{type:"slack",id:"UCRJPEC4S"},{type:"twitter",id:"_ArtOfCode"}]},{id:"victor.ribero3@gmail.com",name:"Victor Ribero",avatar:"https://avatars1.githubusercontent.com/u/16169890?s=460&v=4",title:"Frontend Engineer at @Schibsted",description:"Pragmatic, efficient and happy to help\ud83d\ude00. Focus on one thing at the time\ud83e\udd13.",country:"Spain",tags:["frontend","javascript","react","html","css"],channels:[{type:"email",id:"victor.ribero3@gmail.com"},{type:"slack",id:"victorribero"},{type:"twitter",id:"JS_TUREEY"}]},{id:"gogia.prateek@hotmail.com",name:"Prateek Gogia",avatar:"https://avatars0.githubusercontent.com/u/21155917?s=460&v=4",title:"Product Engineer at @whitepanda",description:"Hi, I'm Prateek. I mostly code in JavaScript. Shoot your queries at me.",country:"India",tags:["frontend","javascript","react","node","redux"],channels:[{type:"email",id:"gogia.prateek@hotmail.com"},{type:"twitter",id:"reeversedev"},{type:"slack",id:"UCPP0S9PB"}]},{id:"jjprevite@gmail.com",name:"JavaScript Joe",avatar:"https://avatars1.githubusercontent.com/u/3806031?s=460&v=4",title:"Front End at Digial Air Strike",description:"Hi! Happy to help you level up \ud83e\udd20",country:"USA",tags:["frontend","javascript","reactjs","html","css"],channels:[{type:"twitter",id:"jsjoeio"}]},{id:"me@robertwpearce.com",name:"Robert Pearce",avatar:"https://avatars0.githubusercontent.com/u/592876?s=460&v=4",title:"Full stack developer",description:"Hey there! Happy to help in whatever aspect is needed!",country:"New Zealand",tags:["nodejs","a11y","css","fp","rails"],channels:[{type:"email",id:"me@robertwpearce.com"},{type:"twitter",id:"RobertWPearce"},{type:"linkedin",id:"robertwpearce"}]},{id:"vsareen24@gmail.com",name:"Vinamra Sareen",avatar:"https://avatars2.githubusercontent.com/u/24828008?s=400&v=4",title:"Software Developer",description:"Hi, I'm Vinamra and I am excited to help you !",country:"India",tags:["java","android","javascript"],channels:[{type:"email",id:"vsareen24@gmail.com"},{type:"twitter",id:"VinamraSareen"},{type:"linkedin",id:"vinamra-sareen"}]},{id:"chanangae@gmail.com",name:"Joseph Myalla",avatar:"https://avatars2.githubusercontent.com/u/5945067?v=4",title:"Full Stack Developer",description:"We can learn together, just ask or suggest.",country:"Tanzania",tags:["javascript","nodejs","reactjs","react native","express"],channels:[{type:"email",id:"chanangae@gmail.com"},{type:"twitter",id:"chanangae"},{type:"slack",id:"UCSSLPNFQ"}]},{id:"gulshan.saini@gmail.com",name:"Gulshan Saini",avatar:"https://avatars0.githubusercontent.com/u/8197984?s=460&v=4",title:"Staff Software Engineer",description:"Hi, I'm Gulshan and I am happy to share my knowledge!",country:"India",tags:["javascript","reactjs","css","api"],channels:[{type:"email",id:"gulshan.saini@gmail.com"},{type:"twitter",id:"gulshansainis"},{type:"linkedin",id:"gulshansainis"}]},{id:"cristian.echeverri4@gmail.com",name:"Cristian Echeverria",avatar:"https://avatars2.githubusercontent.com/u/6706729?s=400&v=4",title:"Software Developer",description:"Hola, I'm Cristian and I'm happy to help!",country:"Sweden",tags:["html","css","javascript","react","node"],channels:[{type:"email",id:"cristian.echeverri4@gmail.com"},{type:"twitter",id:"cecheverri4"},{type:"linkedin",id:"cristian-echeverria-martinez"}]},{id:"inmarelibero@gmail.com",name:"Emanuele Gaspari Castelletti",avatar:"https://www.libravatar.org/gravatarproxy/d02f7988d633a63ec4f1f1f936e46178?s=80&default=None",title:"PHP/Symfony Developer",description:"I am an enthusiastic PHP/Symfony developer and trainer.",country:"Italy",tags:["php","Symfony","web","html","git"],channels:[{type:"email",id:"inmarelibero@gmail.com"},{type:"twitter",id:"inmarelibero"},{type:"linkedin",id:"emanuelegaspari"}]},{id:"smith@pooteeweet.org",name:"Lukas Kahwe Smith (he/him)",avatar:"https://secure.gravatar.com/avatar/54787afbd0e7c30936101c2fa84bd89b",title:"PHP/Symfony Developer",description:"PHP since 1998, co-RM for PHP 5.3, Symfony core team/lead diversity initiative.",country:"Switzerland",tags:["php","Symfony","opensource","databases","speaking"],channels:[{type:"email",id:"smith@pooteeweet.org"},{type:"twitter",id:"lsmith"},{type:"slack",id:"UG89SDP2Q"}]},{id:"zhivko.siderov@gmail.com",name:"Zhivko Siderov",avatar:"https://avatars2.githubusercontent.com/u/11786608?v=4",title:"Software Developer at AND Digital",description:"Hi, I am a front-end developer. Let me know if you want to have a chat.",country:"United Kingdom",tags:["frontend","javascript","react"],channels:[{type:"email",id:"zhivko.siderov@gmail.com"},{type:"slack",id:"UE025ELRF"}]},{id:"meta.author@gersonnino.me",name:"Gerson Ni\xf1o",avatar:"https://avatars0.githubusercontent.com/u/2708687?v=4",title:"Senior Fullstack Developer @Globant",description:"Hi, I am Gerson and I'll be happy to learn with you.",country:"Per\xfa",tags:["nodejs","javascript","fullstack","frontend","serverless"],channels:[{type:"email",id:"meta.author@gersonnino.me"},{type:"slack",id:"UGVQBPEBZ"},{type:"twitter",id:"07Gond"}]},{id:"carlos@carlostrinidad.me",name:"Carlos Trinidad",avatar:"https://avatars3.githubusercontent.com/u/18605964?v=4",title:"Full Stack Cloud Developer at @IBM",description:"Hi! I'm a Cloud Developer working at IBM. Ask me anything! spanish & english",country:"Uruguay",tags:["nodejs","watson","ibm cloud","javascript","angular"],channels:[{type:"email",id:"carlos@carlostrinidad.me"},{type:"twitter",id:"ctrinidad_"},{type:"linkedin",id:"carlostrinidad"}]},{id:"kamponistullar@gmail.com",name:"Ogundiji Bolade",avatar:"https://avatars1.githubusercontent.com/u/19638388?s=460&v=4",title:"Full Stack Web Developer",description:"Hi, I'm AdroitCode! Let me know if you need any help.",country:"Nigeria",tags:["php","frontend","javascript","html","css"],channels:[{type:"email",id:"kamponistullar@gmail.com"},{type:"slack",id:"UCR2WLA8Y"},{type:"twitter",id:"bollybkampo"}]},{id:"corinnealing@gmail.com",name:"Corinne Ling",avatar:"https://avatars1.githubusercontent.com/u/31801723?s=460&v=4",title:"Full Stack Developer @Sparkbox",description:"Hi! I'm happy to help in anyway I can. Ask me anything! \ud83d\udc69\u200d\ud83d\udcbb",country:"USA",tags:["javascript","sass","markup","a11y","php"],channels:[{type:"email",id:"corinnealing@gmail.com"},{type:"twitter",id:"corinnealing"}]},{id:"analista.carlosh@gmail.com",name:"Carlos H. Fructuoso",avatar:"https://avatars2.githubusercontent.com/u/2495963?s=400&v=4",title:"Team Leader at QuickTech.no",description:"Hey! Let me know if you need any help.",country:"Brazil",tags:["ionic","react native","javascript","angular","git"],channels:[{type:"email",id:"analista.carlosh@gmail.com"},{type:"twitter",id:"analistacarlos"},{type:"linkedin",id:"analistacarlosh"}]},{id:"thewebdevcoach@gmail.com",name:"Aryan Jabbari",avatar:"https://avatars3.githubusercontent.com/u/8263430",title:"Full Stack Developer",description:"Feel free to ask me any question, big or small!",country:"USA",tags:["react","angular","node"],channels:[{type:"email",id:"thewebdevcoach@gmail.com"},{type:"twitter",id:"aryanjabbari"}]},{id:"memonjabbar2@gmail.com",name:"Jabbar Memon",avatar:"https://avatars.githubusercontent.com/jabbar86",title:"Software Engineer @Jump360",description:"Hi, I'm Jabbar and I will be happy to solve your {bug}",country:"India",tags:["backend","javascript","nodejs","firebase","mongodb"],channels:[{type:"email",id:"memonjabbar2@gmail.com"},{type:"slack",id:"UEU31AM32"},{type:"linkedin",id:"jabbar-memon-4ab5347a"}]},{id:"bayoopesanya@gmail.com",name:"Adebayo Opesanya",avatar:"https://avatars0.githubusercontent.com/u/18659878?s=460&v=4",title:"Backend Developer",description:"Hello, I'm a backend developer interested in all things Javascript!",country:"Nigeria",tags:["nodejs","javascript","ibm cloud","watson","angular"],channels:[{type:"email",id:"bayoopesanya.@gmail.com"},{type:"twitter",id:"onejsninja"}]},{id:"davisokoth@gmail.com",name:"Davis Okoth",avatar:"https://avatars3.githubusercontent.com/u/12512405?v=4",title:"Fullstack Developer",description:"Hi, am leveling up on Angular and Nodejs :)",country:"Kenya",tags:["nodejs","javascript","angular"],channels:[{type:"twitter",id:"davisokoth"},{type:"slack",id:"UGPGRH2RY"}]},{id:"zacharybraddy@gmail.com",name:"Zac Braddy",avatar:"https://avatars0.githubusercontent.com/u/794241",title:"Lead Fullstack Javascript Developer",description:"I'm a lead developer and budding architect. I love talking about tech!",country:"United Kingdom",tags:["nodejs","microservices","kubernetes","C#","react"],channels:[{type:"twitter",id:"zackerthehacker"},{type:"slack",id:"UGWA4UG21"},{type:"linkedin",id:"zac-braddy-17a81b22"}]},{id:"eda-qa@disemia.com",name:"Edaqa Mortoray",avatar:"https://avatars3.githubusercontent.com/u/1308999",title:"Programmer, Writer, Monster Slayer",description:"I'm an adventurous programmer with an extensive range of experience.",country:"Germany",tags:["programming","ux","management","quality","automation"],channels:[{type:"email",id:"eda-qa@disemia.com"},{type:"twitter",id:"edaqa"},{type:"linkedin",id:"edaqa"}]},{id:"silverjillian@gmail.com",name:"Jillian Silver",avatar:"https://avatars0.githubusercontent.com/u/5667054?s=460&v=4",title:"Javascript developer",description:"Hi! Here to relieve you of your Javascript woes",country:"USA",tags:["javascript","react","node","fp"],channels:[{type:"email",id:"silverjillian@gmail.com"},{type:"linkedin",id:"jsilve"}]}]}},[[170,2,1]]]);
//# sourceMappingURL=main.fa8e41cf.chunk.js.map