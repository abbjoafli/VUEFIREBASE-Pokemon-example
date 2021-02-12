(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a46e4c6"],{ae8d:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[n("v-img",{attrs:{src:e.pokemon.img,height:"200px"}}),n("v-card-title",{staticClass:"headline mb-1"},[e._v("\n    "+e._s(e.pokemon.name)+"\n  ")]),n("v-card-text",[e._v("\n    "+e._s(e.pokemon.description)+"\n  ")]),n("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:e.uid==e.pokemon.userId,expression:"uid == pokemon.userId"}]},[n("v-btn",{attrs:{color:"red lighten-2",text:""},on:{click:function(t){return e.removePokemon(e.pokemon.id)}}},[e._v("\n      Ta bort\n    ")]),n("v-btn",{attrs:{color:"orange lighten-2",text:""},on:{click:function(t){e.show=!e.show}}},[e._v(" Ändra ")]),n("v-spacer")],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-divider"),n("v-card-text",[n("v-container",[n("v-text-field",{attrs:{label:"Namn",required:""},model:{value:e.pokemon.name,callback:function(t){e.$set(e.pokemon,"name",t)},expression:"pokemon.name"}}),n("v-text-field",{attrs:{label:"Pokedex nummer",hint:"Pokemonens nummer i pokedexsystemet",type:"number",required:""},model:{value:e.pokemon.number,callback:function(t){e.$set(e.pokemon,"number",t)},expression:"pokemon.number"}}),n("v-text-field",{attrs:{label:"img url",hint:"Url till bild på pokemonen",required:""},model:{value:e.pokemon.img,callback:function(t){e.$set(e.pokemon,"img",t)},expression:"pokemon.img"}}),n("v-text-field",{attrs:{label:"Beskrivning",hint:"Beskriv din pokemon, helst från pokemon röd eller blå!",required:""},model:{value:e.pokemon.description,callback:function(t){e.$set(e.pokemon,"description",t)},expression:"pokemon.description"}}),n("v-select",{attrs:{items:[["Gräs","Grass"],["Gift","Poison"],["Eld","Fire"],["Elkraft","Electric"],["Vatten","Water"],["Spöke(Laban)","Ghost"],["Psykisk","Psychic"],["Jord","Ground"],["Draken","Dragon"],["Legendarisk","Legendary"]],"item-text":"[0]","item-value":"[1]",attach:"",chips:"",label:"Typ",hint:"Vad är det för typ av pokemon",multiple:""},model:{value:e.pokemon.type,callback:function(t){e.$set(e.pokemon,"type",t)},expression:"pokemon.type"}}),n("v-select",{attrs:{items:["Grass","Poison","Fire","Electric","Water","Ghost","Psychic","Ground","Dragon","Legendary"],"item-text":"[0]","item-value":"[1]",attach:"",chips:"",label:"Svaghet",hint:"Vad är pokemonens svaghet?",multiple:""},model:{value:e.pokemon.weakness,callback:function(t){e.$set(e.pokemon,"weakness",t)},expression:"pokemon.weakness"}}),n("v-btn",{attrs:{color:"green lighten-2",text:""},on:{click:function(t){return e.updatePokemon(e.pokemon)}}},[e._v("\n            Spara\n          ")]),e._v("\n          "+e._s(e.pokemon)+"\n        ")],1)],1)],1)])],1)},r=[],i=n("2f62");function a(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{show:!1}},props:{pokemon:Object,uid:String},methods:s({},Object(i["b"])("pokemons",["removePokemon","updatePokemon"]))},m=c,u=n("2877"),p=Object(u["a"])(m,o,r,!1,null,null,null);t["a"]=p.exports},b197:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.MypokemonsShow,function(t){return n("v-flex",{key:t.name,attrs:{xs4:""}},[n("Card",{attrs:{pokemon:t,uid:e.uid}})],1)}),1),n("Add",{attrs:{uid:e.uid}})],1)],1)},r=[],i=n("2f62"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Lägg till en ny pokemon")])]),n("v-card-text",[n("v-container",[n("v-text-field",{attrs:{label:"Namn",required:""},model:{value:e.newPokemon.name,callback:function(t){e.$set(e.newPokemon,"name",t)},expression:"newPokemon.name"}}),n("v-text-field",{attrs:{label:"Pokedex nummer",hint:"Pokemonens nummer i pokedexsystemet",type:"number",required:""},model:{value:e.newPokemon.number,callback:function(t){e.$set(e.newPokemon,"number",t)},expression:"newPokemon.number"}}),n("v-text-field",{attrs:{label:"img url",hint:"Url till bild på pokemonen",required:""},model:{value:e.newPokemon.img,callback:function(t){e.$set(e.newPokemon,"img",t)},expression:"newPokemon.img"}}),e.newPokemon.hasOwnProperty("img")?n("v-img",{attrs:{src:e.newPokemon.img,height:"200px"}}):e._e(),n("v-text-field",{attrs:{label:"Beskrivning",hint:"Beskriv din pokemon, helst från pokemon röd eller blå!",required:""},model:{value:e.newPokemon.description,callback:function(t){e.$set(e.newPokemon,"description",t)},expression:"newPokemon.description"}}),n("v-select",{attrs:{items:[["Gräs","Grass"],["Gift","Poison"],["Eld","Fire"],["Elkraft","Electric"],["Vatten","Water"],["Spöke(Laban)","Ghost"],["Psykisk","Psychic"],["Jord","Ground"],["Draken","Dragon"],["Legendarisk","Legendary"]],"item-text":"[0]","item-value":"[1]",attach:"",chips:"",label:"Typ",hint:"Vad är det för typ av pokemon",multiple:""},model:{value:e.newPokemon.type,callback:function(t){e.$set(e.newPokemon,"type",t)},expression:"newPokemon.type"}}),n("v-select",{attrs:{items:["Grass","Poison","Fire","Electric","Water","Ghost","Psychic","Ground","Dragon","Legendary"],"item-text":"[0]","item-value":"[1]",attach:"",chips:"",label:"Svaghet",hint:"Vad är pokemonens svaghet?",multiple:""},model:{value:e.newPokemon.weakness,callback:function(t){e.$set(e.newPokemon,"weakness",t)},expression:"newPokemon.weakness"}})],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{dark:"",color:"blue darken-1"},on:{click:function(t){e.dialog=!1}}},[e._v("\n          Stäng\n        ")]),n("v-btn",{attrs:{color:"green lighten-1",text:"",dark:""},on:{click:function(t){return e.createPokemonlocal()}}},[e._v("\n          Lägg till!\n        ")])],1)],1)],1),n("v-btn",{attrs:{dark:"",color:"green darken-1"},on:{click:function(t){e.dialog=!0}}},[e._v("\n    Lägg till en Pokemon\n  ")])],1)},s=[];function l(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{dialog:!1,newPokemon:{}}},props:{uid:String},methods:c({},Object(i["b"])("pokemons",["createPokemon"]),{createPokemonlocal:function(){console.log("Hej"),this.newPokemon.userId=this.uid,this.newPokemon.number=parseInt(this.newPokemon.number),this.createPokemon(this.newPokemon),this.dialog=!1,this.newPokemon={}}})},p=u,d=n("2877"),k=Object(d["a"])(p,a,s,!1,null,null,null),b=k.exports,v=n("ae8d");function f(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach(function(t){g(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P={components:{Card:v["a"],Add:b},props:{},data:function(){return{}},computed:h({},Object(i["c"])("pokemons",["MypokemonsShow","pokemons"]),{},Object(i["c"])(["uid"])),methods:h({},Object(i["b"])("pokemons",["initMyPokemons"])),created:function(){this.initMyPokemons(this.uid)}},w=P,y=Object(d["a"])(w,o,r,!1,null,null,null);t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-0a46e4c6.4423bc6d.js.map