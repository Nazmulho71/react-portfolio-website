(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{17:function(e,a,t){e.exports=t(36)},22:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t.n(c),s=t(1),m=t(2),i=t(13),o=(t(22),["btn--primary","btn--outline","btn--test"]),E=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,r=e.buttonSize,m=o.includes(c)?c:o[0],i=E.includes(r)?r:E[0];return l.a.createElement(s.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(m," ").concat(i),onClick:n,type:t},a))};t(31);var b=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!0),m=Object(i.a)(r,2),o=m[0],E=m[1],b=function(){return c(!1)},p=function(){window.innerWidth<=960?E(!1):E(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(s.b,{to:"/",className:"navbar-logo",onClick:b},"SMR",l.a.createElement("i",{className:"fab fa-typo3"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/",className:"nav-links",onClick:b},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/services",className:"nav-links",onClick:b},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/products",className:"nav-links",onClick:b},"About Me")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/sign-up",className:"nav-links-mobile",onClick:b},"Sign Up"))),o&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))};t(8),t(32);var p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement("div",{className:"cards__item__link"},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Portfolio Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};t(33);var f=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Check out these BEST React Projects"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement("a",{href:"https://netflix-clone-2-3ab58.web.app"},l.a.createElement(p,{src:"images/img-9.jpg",text:"Netflix Clone | My first Project... Like the real Netflix",label:"Movie",path:"/"})),l.a.createElement("a",{href:"https://covid-19-tracker-1f703.web.app"},l.a.createElement(p,{src:"images/img-2.jpg",text:"Covid 19 Tracker App | Really track Covid 19 in this app.",label:"Tracker",path:"/"}))),l.a.createElement("ul",{className:"cards__items"},l.a.createElement("a",{href:"https://twitter-clone-d5bca.web.app"},l.a.createElement(p,{src:"images/img-3.jpg",text:"Twitter Clone | Fully made with React JS looking like the real one",label:"Social",path:"/"})),l.a.createElement("a",{href:"https://clone-a5d06.web.app"},l.a.createElement(p,{src:"images/img-4.jpg",text:"Full Stack Amazon Clone | You can also buy product's on this amazon-clone",label:"Ecommerce",path:"/"})),l.a.createElement("a",{href:"https://imessage-clone-17697.web.app"},l.a.createElement(p,{src:"images/img-8.jpg",text:"Instagram Clone | Post, Comment, Sign up/in, message and more",label:"Social",path:"/"}))))))};t(34);var d=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"THE BEST PROJECTS"),l.a.createElement("p",null,"What are you waiting for?"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"HIRE ME"),l.a.createElement(u,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey")},"ABOUT ME ",l.a.createElement("i",{className:"far fa-play-circle"}))))};t(35);var N=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join the React newsletter to receive the best builds"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"About Me"),l.a.createElement(s.b,{to:"/"},"How it works"),l.a.createElement(s.b,{to:"/"},"Testimonials"),l.a.createElement(s.b,{to:"/"},"Careers"),l.a.createElement(s.b,{to:"/"},"Investors"),l.a.createElement(s.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Contact Me"),l.a.createElement(s.b,{to:"/"},"Contact"),l.a.createElement(s.b,{to:"/"},"Support"),l.a.createElement(s.b,{to:"/"},"Destinations"),l.a.createElement(s.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(s.b,{to:"/"},"Submit Video"),l.a.createElement(s.b,{to:"/"},"Ambassadors"),l.a.createElement(s.b,{to:"/"},"Agency"),l.a.createElement(s.b,{to:"/"},"Influencer")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(s.b,{to:"/"},"Instagram"),l.a.createElement(s.b,{to:"/"},"Facebook"),l.a.createElement(s.b,{to:"/"},"Youtube"),l.a.createElement(s.b,{to:"/"},"Twitter")))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(s.b,{to:"/",className:"social-logo"},"SMR",l.a.createElement("i",{className:"fab fa-typo3"}))),l.a.createElement("small",{className:"website-rights"},"\xa9 2020 SMR. All Rights Reserve"),l.a.createElement("div",{className:"social-icons"},l.a.createElement(s.b,{className:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement(s.b,{className:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement(s.b,{className:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{className:"fab fa-youtube"})),l.a.createElement(s.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement(s.b,{className:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{className:"fab fa-linkedin"}))))))};var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(f,null),l.a.createElement(N,null))};function g(){return l.a.createElement("h1",{className:"services"},"SERVICES")}function h(){return l.a.createElement("h1",{className:"products"},"ABOUT ME")}function k(){return l.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE")}var _=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(b,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:v}),l.a.createElement(m.a,{path:"/services",component:g}),l.a.createElement(m.a,{path:"/products",component:h}),l.a.createElement(m.a,{path:"/sign-up",component:k}))))};r.a.render(l.a.createElement(_,null),document.getElementById("root"))},8:function(e,a,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.b3e9e150.chunk.js.map