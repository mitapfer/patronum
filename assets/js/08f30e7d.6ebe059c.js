"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[222],{3433:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var n=r(2685),a=r(1244),i=(r(7378),r(5318)),l=["components"],o={},s="every",u={unversionedId:"every/readme",id:"every/readme",title:"every",description:"every({ predicate: Function, stores })",source:"@site/../src/every/readme.md",sourceDirName:"every",slug:"/every/",permalink:"/methods/every/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/every/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"equals (experimental)",permalink:"/methods/equals/"},next:{title:"format",permalink:"/methods/format/"}},p={},m=[{value:"<code>every({ predicate: Function, stores })</code>",id:"every-predicate-function-stores-",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Return",id:"return",level:3},{value:"Example",id:"example",level:3},{value:"<code>every({ predicate: value, stores })</code>",id:"every-predicate-value-stores-",level:2},{value:"Motivation",id:"motivation-1",level:3},{value:"Formulae",id:"formulae-1",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"Return",id:"return-1",level:3},{value:"Example",id:"example-1",level:3},{value:"<code>every({ predicate: Store, stores })</code>",id:"every-predicate-store-stores-",level:2},{value:"Motivation",id:"motivation-2",level:3},{value:"Formulae",id:"formulae-2",level:3},{value:"Arguments",id:"arguments-2",level:3},{value:"Return",id:"return-2",level:3},{value:"Example",id:"example-2",level:3},{value:"Shorthands",id:"shorthands",level:2},{value:"Arguments",id:"arguments-3",level:3}],c={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"every"},"every"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { every } from 'patronum/every';\n")),(0,i.kt)("h2",{id:"every-predicate-function-stores-"},(0,i.kt)("inlineCode",{parentName:"h2"},"every({ predicate: Function, stores })")),(0,i.kt)("h3",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Method calculates boolean value if each store satisfies the condition in ",(0,i.kt)("inlineCode",{parentName:"p"},"predicate"),".\nIt is useful to check that user has correct values in each state."),(0,i.kt)("h3",{id:"formulae"},"Formulae"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"$result = every({ predicate: fn, stores });\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if each call ",(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," on each store value from ",(0,i.kt)("inlineCode",{parentName:"li"},"values")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", otherwise it will be ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," ",(0,i.kt)("inlineCode",{parentName:"li"},"((value: T) => boolean)")," \u2014 Function to check store value"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"stores")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Array<Store<T>>)")," \u2014 List of stores")),(0,i.kt)("h3",{id:"return"},"Return"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if each store corresponds to ",(0,i.kt)("inlineCode",{parentName:"li"},"predicate"))),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const $width = createStore(440);\nconst $height = createStore(780);\n\nconst $fitsSquare = every({\n  predicate: (size) => size < 800,\n  stores: [$width, $height],\n});\n\nconsole.assert(true === $fitsSquare.getState());\n")),(0,i.kt)("h2",{id:"every-predicate-value-stores-"},(0,i.kt)("inlineCode",{parentName:"h2"},"every({ predicate: value, stores })")),(0,i.kt)("h3",{id:"motivation-1"},"Motivation"),(0,i.kt)("p",null,"This overload compares each store to specific value in ",(0,i.kt)("inlineCode",{parentName:"p"},"predicate"),".\nIt is useful when you write ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"&&")," very often, for example to create a pending state or a form valid flag."),(0,i.kt)("h3",{id:"formulae-1"},"Formulae"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"$result = every({ predicate: value, stores });\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if each value in ",(0,i.kt)("inlineCode",{parentName:"li"},"stores")," equals ",(0,i.kt)("inlineCode",{parentName:"li"},"value"),", otherwise it will be ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h3",{id:"arguments-1"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(T)")," \u2014 Data to compare stores values with"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"stores")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Array<Store<T>>)")," \u2014 List of stores to compare with ",(0,i.kt)("inlineCode",{parentName:"li"},"value")),(0,i.kt)("li",{parentName:"ol"},"type of ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stores")," should be the same")),(0,i.kt)("h3",{id:"return-1"},"Return"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if each store contains ",(0,i.kt)("inlineCode",{parentName:"li"},"value"))),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const $isPasswordCorrect = createStore(true);\nconst $isEmailCorrect = createStore(true);\n\nconst $isFormCorrect = every({\n  predicate: true,\n  stores: [$isPasswordCorrect, $isEmailCorrect],\n});\n\nconsole.assert(true === $isFormCorrect.getState());\n")),(0,i.kt)("h2",{id:"every-predicate-store-stores-"},(0,i.kt)("inlineCode",{parentName:"h2"},"every({ predicate: Store, stores })")),(0,i.kt)("h3",{id:"motivation-2"},"Motivation"),(0,i.kt)("p",null,"This overload compares each store to specific value in the store ",(0,i.kt)("inlineCode",{parentName:"p"},"predicate"),".\nIt is useful when you write ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"&&")," very often, for example to create a pending state or a form valid flag."),(0,i.kt)("h3",{id:"formulae-2"},"Formulae"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"$result = every({ predicate: $value, stores });\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if each value in ",(0,i.kt)("inlineCode",{parentName:"li"},"stores")," equals value in the ",(0,i.kt)("inlineCode",{parentName:"li"},"$value"),", otherwise it will be ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("h3",{id:"arguments-2"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<T>)")," \u2014 Store contains value to compare values from ",(0,i.kt)("inlineCode",{parentName:"li"},"stores")," with"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"stores")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Array<Store<T>>)")," \u2014 List of stores to compare with ",(0,i.kt)("inlineCode",{parentName:"li"},"$value")," store"),(0,i.kt)("li",{parentName:"ol"},"type of ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stores")," should be the same")),(0,i.kt)("h3",{id:"return-2"},"Return"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$result")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<boolean>)")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if each store contains value from the ",(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," store")),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const $allowToCompare = createStore(true);\n\nconst $isPasswordCorrect = createStore(true);\nconst $isEmailCorrect = createStore(true);\n\nconst $isFormCorrect = every({\n  predicate: $allowToCompare,\n  stores: [$isPasswordCorrect, $isEmailCorrect],\n});\n\nconsole.assert(true === $isFormCorrect.getState());\n")),(0,i.kt)("h2",{id:"shorthands"},"Shorthands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"$result = every(stores, value);\n$result = every(stores, (value) => false);\n$result = every(stores, $predicate);\n")),(0,i.kt)("p",null,"Shorthand have the same rules as the main overrides, just it uses positional arguments instead of object-form."),(0,i.kt)("h3",{id:"arguments-3"},"Arguments"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"stores")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Array<Store<T>>)")," \u2014 List of stores to compare with predicate in the second argument"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"predicate")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(Store<T> | (value: T) => boolean | T)")," \u2014 Predicate to compare with")))}d.isMDXComponent=!0},5318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);