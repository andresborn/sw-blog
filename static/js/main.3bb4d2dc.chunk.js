(this["webpackJsonpsw-blog"]=this["webpackJsonpsw-blog"]||[]).push([[0],{32:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(20),c=a.n(r),i=(a(18),a(31),a(32),a(7)),o=a(2),l=a(24),d=a(23),m=a(11),j=a(15),u=a.n(j),b=a(21),p=function(e){var t=e.getStore,a=e.setStore;e.getActions;return{store:{favorites:JSON.parse(localStorage.getItem("favorites"))||[],planetImages:[{name:"Tatooine",url:"https://img.unocero.com/2020/01/nasa-descubre-planeta-tatooine.jpg"},{name:"Alderaan",url:"https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C780"},{name:"Yavin IV",url:"https://starwarsblog.starwars.com/wp-content/uploads/2014/09/Image-1-2400x1200-562320997426.jpg"},{name:"Hoth",url:"https://blog.playstation.com/tachyon/2015/11/unnamed-file-26.jpg?resize=1088,600&crop_strategy=smart"},{name:"Dagobah",url:"https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C630"},{name:"Bespin",url:"https://lumiere-a.akamaihd.net/v1/images/databank_cloudcity_01_169_e589ba2c.jpeg?region=0%2C49%2C1560%2C780"},{name:"Endor",url:"https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C49%2C1560%2C780"},{name:"Naboo",url:"https://media.contentapi.ea.com/content/dam/walrus/images/2018/11/mapvista-theed-grid.jpg.adapt.crop191x100.628p.jpg"},{name:"Coruscant",url:"https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C96%2C1536%2C768"},{name:"Kamino",url:"https://lumiere-a.akamaihd.net/v1/images/databank_kamino_01_169_f9027822.jpeg?region=0%2C49%2C1560%2C780"}],peopleImages:[{name:"Luke Skywalker",url:"https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png"},{name:"C-3PO",url:"https://img.cinemablend.com/quill/7/c/f/8/0/7/7cf807bf58f88c639eddc8fbe6fa65fb9463d9bd.png"},{name:"R2-D2",url:"https://upload.wikimedia.org/wikipedia/en/thumb/3/39/R2-D2_Droid.png/220px-R2-D2_Droid.png"},{name:"Darth Vader",url:"https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=960"},{name:"Leia Organa",url:"https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg"},{name:"Owen Lars",url:"https://cheesecake.articleassets.meaww.com/236213/uploads/51b951d0-da71-11e9-b283-c7eec0a6c282_800_420.jpeg"},{name:"Beru Whitesun lars",url:"https://i2.wp.com/thefutureoftheforce.com/wp-content/uploads/2018/01/aunt-beru-header.jpg?resize=672%2C372&ssl=1"},{name:"R5-D4",url:"https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=114%2C0%2C1332%2C666"},{name:"Biggs Darklighter",url:"https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-08-10_at_3_4e1a4edf.jpeg?region=106%2C0%2C1348%2C674&width=960"},{name:"Obi-Wan Kenobi",url:"https://clonecorridor.files.wordpress.com/2019/08/obi-wan-lightsaber-header.jpg?w=1400&h=700&crop=1}"}]},actions:{fetchAndSetData:function(){(function(){var e=Object(b.a)(u.a.mark((function e(){var t,s,n,r,c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/planets");case 2:return t=e.sent,e.next=5,fetch("https://swapi.dev/api/people");case 5:return s=e.sent,e.next=8,t.json();case 8:return n=e.sent,e.next=11,s.json();case 11:r=e.sent,c=n.results,i=r.results,a({planets:c,people:i});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},addFavorite:function(e){var s=t().favorites;if(!s.some((function(t){return t.created===e.created}))){var n=s.concat(e);localStorage.setItem("favorites",JSON.stringify(Object(m.a)(n))),a({favorites:Object(m.a)(n)})}},removeFavorite:function(e){var s=t().favorites.filter((function(t){return t!==e}));localStorage.setItem("favorites",JSON.stringify(Object(m.a)(s))),a({favorites:Object(m.a)(s)})},getPersonImage:function(e){return t().peopleImages.filter((function(t){return t.name===e.name})).map((function(e){return e.url}))[0]},getPlanetImage:function(e){return t().planetImages.filter((function(t){return t.name===e.name})).map((function(e){return e.url}))[0]}}}},h=a(0),g=Object(s.createContext)(null),x=function(){var e=Object(s.useContext)(g),t=e.store,a=e.actions,n=function(e){e.stopPropagation()};return Object(h.jsxs)("div",{className:"btn-group",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-dark dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Favorites"}),Object(h.jsx)("div",{className:"dropdown-menu dropdown-menu-right",children:t.favorites.map((function(e,t){return Object(h.jsxs)("div",{onClick:n,className:"dropdown-item d-flex flex-row justify-content-between",type:"button",children:[e.name,Object(h.jsx)("button",{onClick:function(){return function(e){a.removeFavorite(e)}(e)},type:"button",className:"close","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]},t)}))})]})},f=function(){return Object(h.jsxs)("nav",{className:"navbar sticky-top navbar-dark bg-dark px-auto",children:[Object(h.jsx)("div",{className:"col-6 d-flex flex-row sw-font",children:Object(h.jsx)("span",{children:"StarWars"})}),Object(h.jsxs)("div",{className:"col-6 d-flex flex-row justify-content-end",children:[Object(h.jsx)(i.b,{to:"/sw-blog/",children:Object(h.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Home"})}),Object(h.jsx)(x,{})]})]})},O=function(e){var t=e.person,a=Object(s.useContext)(g),n=(a.store,a.actions);return Object(h.jsx)("div",{className:"col-xs-6 py-1 px-0",children:Object(h.jsxs)("div",{className:"card",style:{width:"12rem",height:"24rem"},children:[Object(h.jsx)("img",{style:{height:"10rem",objectFit:"cover",objectPosition:"top"},src:"".concat(n.getPersonImage(t)),className:"card-img-top",alt:"A picture of Yoda"}),Object(h.jsxs)("div",{className:"card-body d-flex flex-column justify-content-around",children:[Object(h.jsx)("h5",{className:"card-title",children:t.name}),Object(h.jsxs)("p",{className:"card-text",children:["Born: ",t.birth_year]}),Object(h.jsxs)("div",{className:"d-flex flex-row",children:[Object(h.jsx)(i.b,{to:"/sw-blog/person/".concat(t.created),children:Object(h.jsx)("button",{style:{width:"6rem",height:"3rem",fontSize:"12px"},className:"btn btn-warning",children:"Open Bio"})}),Object(h.jsx)("button",{onClick:function(){n.addFavorite(t)},style:{width:"6rem"},className:"btn btn-warning mx-1",children:Object(h.jsx)("i",{className:"bi bi-star-fill"})})]})]})]})})},v=function(e){var t=e.planet,a=Object(s.useContext)(g).actions;return Object(h.jsx)("div",{className:"col-xs-6 py-1",children:Object(h.jsxs)("div",{className:"card",style:{width:"12rem",height:"32rem"},children:[Object(h.jsx)("img",{style:{height:"10rem",objectFit:"cover",objectPosition:"top"},src:"".concat(a.getPlanetImage(t)),className:"card-img-top",alt:"A picture of the planet of the Wookies"}),Object(h.jsxs)("div",{className:"card-body d-flex flex-column justify-content-around",children:[Object(h.jsx)("h4",{className:"card-title",children:t.name}),Object(h.jsxs)("p",{children:["Population:",Object(h.jsxs)("small",{className:"text-muted",children:[" ",t.population," "]})]}),Object(h.jsxs)("p",{children:["Gravity: ",Object(h.jsxs)("small",{className:"text-muted",children:[" ",t.gravity," "]})]}),Object(h.jsxs)("p",{children:["Climate: ",Object(h.jsxs)("small",{className:"text-muted",children:[" ",t.climate," "]})]}),Object(h.jsxs)("p",{children:["Terrain: ",Object(h.jsxs)("small",{className:"text-muted",children:[" ",t.terrain," "]})]}),Object(h.jsx)(i.b,{to:"/sw-blog/planet/".concat(t.created),children:Object(h.jsx)("button",{className:"btn btn-warning",children:"View description"})})]})]})})},w=function(){var e=Object(s.useContext)(g),t=e.store;e.actions;return Object(h.jsxs)("div",{className:"container my-2",children:[Object(h.jsx)("h2",{className:"text-white",children:"Characters"}),Object(h.jsx)("div",{className:"row my-3 d-flex flex-row mx-auto justify-content-between",children:t.people&&t.people.map((function(e,t){return Object(h.jsx)(O,{person:e},t)}))}),Object(h.jsx)("h2",{className:"text-white",children:"Planets"}),Object(h.jsx)("div",{className:"row my-3 d-flex flex-row mx-auto justify-content-between",children:t.planets&&t.planets.map((function(e,t){return Object(h.jsx)(v,{planet:e},t)}))})]})},N=function(e){var t=e.match,a=Object(s.useContext)(g),n=a.store,r=a.actions,c=n.people.filter((function(e){return e.created===t.params.id}))[0],i=n.planets.filter((function(e){return c.homeworld===e.url}))[0];return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"breadcrumb",children:c.name}),"Obi-Wan Kenobi"===c.name?null:Object(h.jsxs)("h6",{className:"breadcrumb bg-warning",children:["Homeworld: ",i.name]}),Object(h.jsxs)("div",{className:"row d-flex flex-column",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("img",{className:"pb-5",style:{maxWidth:"100%",objectFit:"cover",objectPosition:"top"},src:"".concat(r.getPersonImage(c)),alt:""})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsxs)("ul",{className:"list-group",style:{listStyle:"none"},children:[Object(h.jsxs)("li",{className:"list-group-item",children:["Birth year: ",c.birth_year]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Eye color: ",c.eye_color]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Gender: ",c.gender]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Hair color: ",c.hair_color]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Height: ",c.height]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Mass: ",c.mass]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Skin color: ",c.skin_color]})]})})]})]})},y=function(e){var t=e.match;console.log(t.params.id);var a=Object(s.useContext)(g),n=a.store,r=a.actions,c=n.planets.filter((function(e){return e.created===t.params.id}))[0];return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"breadcrumb",children:c.name}),Object(h.jsxs)("h6",{className:"breadcrumb bg-warning",children:["Gravity: ",c.gravity]}),Object(h.jsxs)("div",{className:"d-flex flex-column",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("img",{className:"pb-5",style:{maxWidth:"100%",objectFit:"cover",objectPosition:"top"},src:"".concat(r.getPlanetImage(c)),alt:""})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsxs)("ul",{className:"list-group",style:{listStyle:"none"},children:[Object(h.jsxs)("li",{className:"list-group-item",children:["Population: ",c.population]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Climate: ",c.climate]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Terrain: ",c.terrain]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Surface water: ",c.surface_water]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Diameter: ",c.diameter]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Orbital Period: ",c.orbital_period]}),Object(h.jsxs)("li",{className:"list-group-item",children:["Rotation Period: ",c.rotation_period]})]})})]})]})},C=function(e){return function(t){var a=Object(s.useState)(p({getStore:function(){return r.store},setStore:function(e){c({store:Object.assign(r.store,e),actions:r.actions})},getActions:function(){return r.actions}})),n=Object(d.a)(a,2),r=n[0],c=n[1];return Object(s.useEffect)((function(){r.actions.fetchAndSetData()}),[]),Object(h.jsx)(g.Provider,{value:r,children:Object(h.jsx)(e,Object(l.a)({},t))})}}((function(){return Object(h.jsx)("div",{style:{backgroundImage:"url('https://cdn.dribbble.com/users/4937419/screenshots/10664554/dribble_twin_suns_red_4x.png')"},children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(f,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/sw-blog/",component:w}),Object(h.jsx)(o.a,{exact:!0,path:"/sw-blog/person/:id",component:N}),Object(h.jsx)(o.a,{exact:!0,path:"/sw-blog/planet/:id",component:y})]})]})})})),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};c.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),_()}},[[42,1,2]]]);
//# sourceMappingURL=main.3bb4d2dc.chunk.js.map