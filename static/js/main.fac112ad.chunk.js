(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(5),r=(n(18),n(19),n(2)),s=(n(20),n(4)),i=n(1);function j(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var l=n(0),o=function(){return Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})},b=(n(22),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),h=function(){return Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})},d=n(6),u=n.n(d),O=function(e){var t,n,c=e.person,a=e.onFindPerson,s=Object(r.h)().personSlug;return Object(l.jsxs)("tr",{"data-cy":"person",className:u()({"has-background-warning":s===c.slug}),children:[Object(l.jsx)("td",{children:Object(l.jsx)("a",{href:"#/people/".concat(c.slug),className:u()({"has-text-danger":"f"===c.sex}),children:c.name})}),Object(l.jsx)("td",{children:c.sex}),Object(l.jsx)("td",{children:c.born}),Object(l.jsx)("td",{children:c.died}),Object(l.jsx)("td",{children:c.motherName?a(c.motherName)?Object(l.jsx)("a",{className:"has-text-danger",href:"#/people/".concat((null===(t=a(c.motherName))||void 0===t?void 0:t.slug)||""),children:c.motherName}):c.motherName:"-"}),Object(l.jsx)("td",{children:c.fatherName?a(c.fatherName)?Object(l.jsx)("a",{href:"#/people/".concat((null===(n=a(c.fatherName))||void 0===n?void 0:n.slug)||""),children:c.fatherName}):c.fatherName:"-"})]})},x=function(e){var t=e.people,n=function(e){return t.find((function(t){return t.name===e}))};return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsx)(O,{person:e,onFindPerson:n},e.slug)}))})]})},m=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),r=Object(s.a)(a,2),d=r[0],u=r[1],O=Object(i.useState)(!0),m=Object(s.a)(O,2),p=m[0],f=m[1];return Object(i.useEffect)((function(){j().then((function(e){f(!0),c(e)})).catch((function(e){throw u(!0),e})).finally((function(){f(!1)}))}),[]),Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"box table-container",children:p?Object(l.jsx)(b,{}):Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(h,{}),0===n.length&&!p&&Object(l.jsx)(o,{}),Object(l.jsx)(x,{people:n})]})})]})},p=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},f=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},v=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(a.b,{className:function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(l.jsx)(a.b,{className:function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},g=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(v,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{path:"/",element:Object(l.jsx)(p,{})}),Object(l.jsx)(r.b,{path:"/people",element:Object(l.jsx)(m,{}),children:Object(l.jsx)(r.b,{path:":personSlug",element:Object(l.jsx)(m,{})})}),Object(l.jsx)(r.b,{path:"/home",element:Object(l.jsx)(r.a,{to:"/",replace:!0})}),Object(l.jsx)(r.b,{path:"*",element:Object(l.jsx)(f,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(g,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.fac112ad.chunk.js.map