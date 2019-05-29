(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./components/Button.mdx":function(n,e,o){"use strict";o.r(e);var t=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),A=o("./node_modules/react/index.js"),s=o.n(A),i=o("./node_modules/@mdx-js/react/dist/index.es.js"),r=o("./node_modules/docz/dist/index.esm.js"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),a=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");function d(){var n=Object(c.a)(["\n  ",";\n  ",";\n  cursor: pointer;\n  margin: 3px 5px;\n  border: none;\n  border-radius: 3px;\n"]);return d=function(){return n},n}var u={small:"\n    padding: 5px 10px;\n    font-size: 14px;\n  ",normal:"\n    padding: 10px 20px;\n    font-size: 16px;\n  ",big:"\n    padding: 20px 30px;\n    font-size: 18px;\n  "},p=Object(a.d)("button")(d(),function(n){var e=n.kind,o=void 0===e?"primary":e,t=n.outline;return function(n){var e=function(n){return function(e,o){var t=n?e:"transparent";return"\n    background: ".concat(n?"transparent":e,";\n    box-shadow: inset 0 0 0 1px ").concat(t,";\n    color: ").concat(n?e:o,";\n    transition: all .3s;\n\n    &:hover {\n      box-shadow: inset 0 0 0 1000px ").concat(t,";\n      color: ").concat(o,";\n    }\n  ")}}(n);return{primary:e("#1FB6FF","white"),secondary:e("#5352ED","white"),cancel:e("#FF4949","white"),dark:e("#273444","white"),gray:e("#8492A6","white")}}(void 0!==t&&t)[o]},function(n){var e=n.scale;return u[void 0===e?"normal":e]}),l=function(n){var e=n.children,o=Object(t.a)(n,["children"]);return s.a.createElement(p,o,e)};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"components/Button.jsx"}}),l.defaultProps={scales:"normal",kind:"primary",outline:!1},o.d(e,"default",function(){return m});var g={},B="wrapper";function m(n){var e=n.components,o=Object(t.a)(n,["components"]);return Object(i.b)(B,Object.assign({},g,o,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"button"},"Button"),Object(i.b)(r.d,{of:l,mdxType:"Props"}),Object(i.b)("h2",{id:"basic-usage"},"Basic usage"),Object(i.b)(r.c,{__position:1,__code:'<Button>Click me</Button>\n<Button kind="secondary">Click me</Button>',__scope:{props:this?this.props:o,Playground:r.c,Props:r.d,Button:l},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtSD2GvcIInMTCjVldoPU-dcaDgSRSJuagCIg9hA0lLDqNNRUwVQXQUWOU5cOcAhEixdhuHYYB1iiARnlQK52gABnYJMZiwdo92rGYOxYGdlIAFk09gADZNO09YwGAgAxb1oESZT-GcQ4EQdTAYKEfgliIahKDgPSESs6sbJoZwIFwy52AARiMnT5H4wSpgAQTmKT2AjKDyBsKB0DDdh5A5KSxEy6MZHYFEJJgbhgDwsTqrgeQtxrYAcugfLggAMi68ZEnmShmnavKCu4Ma5TAZDJQGVB2nYAB-DYOrDCNiquYbOtQRLqykGQqzfMwYXVY4YDAMIoCmVaSrKna0uXasE04ggcFszIUivAgWprWtmPI1MoFiXYjykX7qC-mtGFB8xtlUPgQDgLZqHQVwBEScR7ABnZ2GBpiyLBlcpCel63o-lqpDu_azC_ID030Riof_OAsEA3QQIMMDCOOp7uJNTV2ltY6qtgHIqLlIXsnNOjqDp_nUE5-0pTddp-0oGZzXE-Y4FlsxksquJJOk2TqzgKIEiuYoVz0zsCiuABWUyYpUzSVQew1gPNfIoquOLnfWYodIsVAhVN83Lf0m3YqdnwACYo5d76wotT3opiiysHj9h_fWDwIBSUPXatgy8_YWPTKTOOV0Tj3IpTgAOX3qyzrakuoISYYwDL9gB51rojDwUiWKgoCFYruFKo2LF16pnD8E4RkcYejmkru0G6Rb-_YZTUXcQKUf0WXJ9bqYPAlbZELaDAF6FTvwm7te5W31Bd7DF9N_Yfv-IsLoCD6cwLddk-Oxz7IXQFcAAJMAQBZ8kKX0oIveQGcLDVA9rPUYVw0AIymGpbBsVTIQOnqg-ecChQIJXEPIU4DgArx7uvWc61iECFIa7R--RuxKRCAkdgOAkxwBdiuLqiBhisAyDJFcSDvAoI7GgzgT9RzsBwWpR2Kko7sHwd4GeUiiHwMQTWchZZVFtQYUw7620ShmG2jrI-7B27oDsMvW-q9roT0LE_KYp4Mo2IjNQmAB1qzf1_qIgu_R5JORHAQR8ABiGKtlrxmVsrZbScoRg2FoK-AONYEa6GRqjK4p5Im2yTLbaOZ4tSJPaMkl4MA0lkPcAiKAuTRyRPiUZAAnK0spFTUkcnSRYbJ2wGnhPaBE6OAB2JMRkJkdJSVU7pK5ELwQGZE2urTo4pTMlMyp1TqzbQsQJKxp5nD626NJLKet4jHLlEHAQps5pFWunAI5cAADaDzzkAF1LGuLCQAaVUBlU5NiMrK2CSjRIiTvEZTOlABGhVR6lRsXALxDjnQcieTYj5_o9lfKhg1YWGVxYPnaB4PGs0OT_wsBA08vyMDGIMQco5tLegCDgBQvslA0C0AEBneSikrgaR8PbdO2chRTiuEHZ0GcvACCnOaTILA8h8obv_Q6WAiIuKElDf52VcqbSWDgfVKtBx3LHjdBMOLxJ4uAPqnAhqmpiDajqsM8gQYktxdkSmmKGaGssP1eAGVnHGFMA9IwVgCScDsK4Ps39xKpGEDkco5B-gzDYW7I4ExbBRtVvGHk6xXlYiuM9aWOowARiee0E28QoBlKuTcpYRLc7tDebM6sNiC04CLSWst_Z-SgrKZkpGva61xAEvOMpfSynzLBU29J3i21eDgTgWwYoACOoQIBdEWOY_iDNMBnVCBdNCqs7GBIsHm-Ayka3xBChYVtcpu0hOvXsZF0UoUIwSlTJQIAgrbFcGkRm1AWbAX0AwZx_BUDekZEgdg_AfjFmqBkc0P4ySQfSfwYRzKZr8CuPwFSOBcMqR8usfgCak1sKw9BkAKVKqEVgNCLA3pkMnTJJQRIuY8gFAnJqSWRY_ilkI9WfgUQ0Dkf4KobAjN-MWGIzAeY4YBIQHgOR5xUmQB4REyAAAejFHA0c8OSZrPwXiogoP8C02ZHA5mkz6ZUwS7jtMGLqY00ZHTemQA9Io4a9Wvq4COZirbCzOnrMUaM5aSIvnzOWf4OsHZ1M4PeA-NQSAKR_2oEA3oUCIBZIgFoD6LIWGYOmloLKrjswZj8HkAoeQ8ggA",mdxType:"Playground"},Object(i.b)(l,{mdxType:"Button"},"Click me"),Object(i.b)(l,{kind:"secondary",mdxType:"Button"},"Click me")))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"components/Button.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=components-button.61504ce7be0f3b767a67.js.map