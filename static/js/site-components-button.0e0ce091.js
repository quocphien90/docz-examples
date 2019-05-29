(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./site/components/button.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),r=t.n(i),a=t("./node_modules/@mdx-js/react/dist/index.es.js"),A=t("./node_modules/docz/dist/index.esm.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),c=t("./node_modules/styled-components/dist/styled-components.browser.esm.js");function l(){var e=Object(s.a)(["\n  ",";\n  ",";\n  cursor: pointer;\n  margin: 3px 5px;\n  border: none;\n  border-radius: 3px;\n"]);return l=function(){return e},e}var u={small:"\n    padding: 5px 10px;\n    font-size: 14px;\n  ",normal:"\n    padding: 10px 20px;\n    font-size: 16px;\n  ",big:"\n    padding: 20px 30px;\n    font-size: 18px;\n  "},m=Object(c.d)("button")(l(),function(e){var n=e.kind,t=void 0===n?"primary":n,o=e.outline;return function(e){var n=function(e){return function(n,t){var o=e?n:"transparent";return"\n    background: ".concat(e?"transparent":n,";\n    box-shadow: inset 0 0 0 1px ").concat(o,";\n    color: ").concat(e?n:t,";\n    transition: all .3s;\n\n    &:hover {\n      box-shadow: inset 0 0 0 1000px ").concat(o,";\n      color: ").concat(t,";\n    }\n  ")}}(e);return{primary:n("#1FB6FF","white"),secondary:n("#5352ED","white"),cancel:n("#FF4949","white"),dark:n("#273444","white"),gray:n("#8492A6","white")}}(void 0!==o&&o)[t]},function(e){var n=e.scale;return u[void 0===n?"normal":n]}),b=function(e){var n=e.children,t=Object(o.a)(e,["children"]);return r.a.createElement(m,t,n)};b.defaultProps={scales:"normal",kind:"primary",outline:!1};var d=b;b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/button.js"}});var f={default:["#ebedf0","#d8dce1","#c4cad3"],primary:["#217EE7","#166dd0","#135db1"],danger:["#b5202c","#981b25"],transparent:"transparent",grey:["#576374"],black:"#000",white:"#fff"},g=[12,14,16,20,24,32,48,64,72],p=[0,4,8,16,32,64,128,256,512],B=[18,24,32,56,84],h={space:p,fontSizes:g,avatarSizes:B,fontWeight:{normal:400,bold:700},colors:f,fonts:{mono:'"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace',sans:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif'}};"undefined"!==typeof fonts&&fonts&&fonts===Object(fonts)&&Object.isExtensible(fonts)&&Object.defineProperty(fonts,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fonts",filename:"src/theme/default.js"}}),"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"colors",filename:"src/theme/default.js"}}),"undefined"!==typeof fontWeight&&fontWeight&&fontWeight===Object(fontWeight)&&Object.isExtensible(fontWeight)&&Object.defineProperty(fontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fontWeight",filename:"src/theme/default.js"}}),"undefined"!==typeof B&&B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"avatarSizes",filename:"src/theme/default.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"fontSizes",filename:"src/theme/default.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"space",filename:"src/theme/default.js"}});var j=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),O=function(e){return function(n){return n.theme[e]}};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"themed",filename:"src/utils.js"}});var w=function(e){return e&&"object"===typeof e&&!Array.isArray(e)};w&&w===Object(w)&&Object.isExtensible(w)&&Object.defineProperty(w,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isObject",filename:"src/utils.js"}});var y=function e(n){for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];if(!o.length)return n;var r=o.shift();if(w(n)&&w(r))for(var a in r)w(r[a])?(n[a]||Object.assign(n,Object(j.a)({},a,{})),e(n[a],r[a])):Object.assign(n,Object(j.a)({},a,r[a]));return e.apply(void 0,[n].concat(o))};y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeDeep",filename:"src/utils.js"}});var k=function(e,n){var t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3===(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x".concat(t.join("")),"rgba(".concat([t>>16&255,t>>8&255,255&t].join(","),", ").concat(n,")");throw new Error("Bad Hex")};function E(){var e=Object(s.a)(["\n  html {\n    height: 100%;\n    box-sizing: border-box;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n  a {\n    text-decoration: none;\n    color: ",";\n    font-size: inherit;\n  }\n  body {\n    position: relative;\n    min-height: 100%;\n    margin: 0;\n    padding-bottom: 0;\n    font-family: ",";\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n  }\n  html, body {\n    background-color: ",";\n    color: ",";\n  }\n"]);return E=function(){return e},e}k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hexToRgbA",filename:"src/utils.js"}});var C=Object(c.b)(E(),function(e){return e.theme.colors.primary[0]},function(e){return e.theme.fonts.sans},function(e){return e.theme.colors.white},function(e){return e.theme.colors.black}),x=function(e){var n=e.children,t=e.theme,o=y(h,t);return r.a.createElement(c.a,{theme:o},r.a.createElement(i.Fragment,null,r.a.createElement(C,null),n))};x.defaultProps={theme:{}};var Y=x;x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/theme.js"}});"undefined"!==typeof Y&&Y&&Y===Object(Y)&&Object.isExtensible(Y)&&Object.defineProperty(Y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"__DOCZ_DUMMY_EXPORT_DEFAULT",filename:"src/theme/index.js"}}),"undefined"!==typeof Button&&Button&&Button===Object(Button)&&Object.isExtensible(Button)&&Object.defineProperty(Button,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/index.js"}}),"undefined"!==typeof ThemeProvider&&ThemeProvider&&ThemeProvider===Object(ThemeProvider)&&Object.isExtensible(ThemeProvider)&&Object.defineProperty(ThemeProvider,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/index.js"}}),t.d(n,"default",function(){return S});var v={},D="wrapper";function S(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(D,Object.assign({},v,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"button"},"Button"),Object(a.b)(A.d,{of:d,mdxType:"Props"}),Object(a.b)("h2",{id:"basic-usage"},"Basic usage"),Object(a.b)(A.c,{__position:1,__code:'<Button>Click me</Button>\n<Button kind="secondary">Click me</Button>',__scope:{props:this?this.props:t,Playground:A.c,Props:A.d,Button:d},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwJZoIHOx5FdY12gPAAvP1-TtSD2GvcIInMTCjVldoPTgARyAIiD2EDSUsOo01FTBVBdBRY5Tlw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZzkgAWFT2AANhUtT1jAYCADFvWgRI5P4ZxDgRB1MBgoR-CWIhqEoOBNIRUzq3MmhnAgXDLnYABGXT1PkLieKmABBOZRPYCMoPIGwoHQMN2HkDlRLEFLoxkdgUWEmBuGAPDBLKuB5C3GtgHS6AsuCAAyVrxkSeZKGaJrMuy7hBrlMBkMlAZUHadgAH4NmasMIzyq4-pa1AYurKQZCrN8zBhdVjhgMAwigKYFvywr1sS5dqwTFiCBwCzMhSK8CHqmta1Im5qFTKBYl2I8pA-8jXprRhAeZbZVD4EA4C2ah0FcAREnEewfp2dh_skMHUGBqRbvux7nvqqRLq2swv2h-jJFUbB_y0ChgP0BhdvtKDMEO0JjpCOwsZytj3QBdN9DgSQPDI6h2h2rAiPE_b2c5_wrE2I80MoVguAyXmqP5iYYCPCXUHJujyAF9caGF0XPtQWnAN0ECDDAwi9tuvn5TNfXHftUrYByLX2i97JzU-U2CDgd2mKlN12n7SgZnNIT5lD2LqF4uA4hEsSJOrOAogSK5ihXTTOwKK4AFYDPC-SVJVa7DWA818lCq5Iqr9ZinUixUCFHO84LrTi4iyufAAJkH6u3sCi0G7C8LjKwMf2Db9YPAgFIe5rwvtNX9gR4MpNR5XCf65C6eAA4W-rRfVqT1BeIhjBkv2H7nTOiMPBSJYqCgIU8u4ArM4sOK7BqjOD8CcEYjgv5HDEo_NA3QZpv3YHJVE7gfII30PrABycpgeAlNsRCbQMAQKFA_cIT84FymQTfTSYYXyIKAYUf01YugED6OYfONccE7HwchdAVwAAkwBOF4KQoQygkD5DzwsNUeuoDRhXDQDDKYillERQMgI4BsjwFiKFBIlcn8hT8OADA5-8DZxLW0QIXRNdKH5G7LJEICR2A4CTHAauK5WqIGGKwDW_83pAO8DIjscjOA31HOwFRikK7yUHuwdR3gQFBK0eIyRNZ9FlliY1CxVi3prRKGYNaZhAF33QHYaBpDYFnV8YA08yVikRmMTAbaTDRysPEgXfoUlbIjgII-AAxOFCy15DIWQsmpOUIwbC0FfO3GsMNdDw0RlcU8fSS5JhLkPM8WoxntAmS8GA0y9HuARFAJZo4-kjN0gATiuds3ZUyOQzIsAs7YpyentF6UPAA7EmXSvzbmTP2Q8lciF4KvL6SfK5Q94qGX-Xsg51Y1oFO4lg7pzg07dDEqlEq6LkrtE7gIHOk1cpnVTvEeAABtUlsAAC6hSUWngANKqGSli4puL-z8gRokMZDTkqHSgDDHKP8CrFLgPU8pzoOTkuKbSxhgCsbVW9slf2D52gW3Iq-dhFgBGMtUNkjJp40Vkv1b0AQcADF9koGgWgAh55SRklcZSPgy5zyXkKKcVxO7Onnl4AQU5zSZBYHkR1592F0pvlMHmmK0oZRWksHACbo6DmJb_c6CYFVCSVcABNOAk21TEI1WNYZ5AAzFqgRV2RSaMKxrmgclgurwGSr44wphrpGEVrYTgdhXB9mYUJVIwgcjlHIP0GYdja5HAmJ2pN8YeTrCpfAK4d1qAwB1GACM5K_Y5ygNs_FhKlhqpXu0alQLqzFKXTgFda6N1Rw6Vy7Zcy4b3oPXEbi85tnPO2SC7lJ6ZkNIvV4MROBbBigAI6hAgF0RY-SuI1rZkdAgKtBwZ3nei-4co93xH8hYc9coOWdOw3sCVYV-Uw2ipLaW8GOaRrLWTJQFNjY6yPFTcMGg6ZAT0KBEAzNiJUc5pRSOHomP7Lo8oI2khhMSaVn-AC2hbaMwdkxW6SwoIPVcE9F0AnsIcRfLaPaSH60JxdkmuODbE6oA9sRawusYAqzVlOD-ppaAAHEv44KgBWzWkcVWB0dCus2YdpbCa1AdBDLsPR8d0xZpiUEjzSRgCFmAMwvPYQTZIcI0BzPht4q5yg7nPNiRHeKFzbn4gVq1dcEgbSa6bBXoQJu0SACkKTpEN37r6_11R565PYEYGZRhECBHMl0friBXBgBtdVt6rWQr9zQJsfoBBuvrB7b4iwtAsAWkwFQTIdjPUrpSWkwxWLhNCrOsJj4Fi4C1s5Yjcl8lqX6osIfKe8jUALZeMt6sXh0DJDW5a2x40rhdDgjEbxKSiBoHNLVlI9WB7yWayue1aArjyRSRvAo5ovCfSIKjlJh9DqQ6SMdqCp2U0FQuxPa7RJaopI2xaScGR-4xxiJD0KAAZGAzxl4_SEik80IwYAeAhhaF7nkRA2B0iEGgEB4iy5hugL7FhCAkCWD9v7K4hHcIwL5yBJP8Q2bO6mi7aTrt3JgE9wseuMknek0bin0nLuQOux4OCOx9VrTDciiNitDfRtmv1OgSwyfCqm4WH3wnHCoEgLOMScW0iJZmBGYLoXqPB-k00iwzDWlRhrowazyshD2Y1sJiqkfqAx7qiuBMamNM0GBm9RguX8uZu6JuavDVlrFo71IWvhMVxSAL7Zov6sBD1TfEioftaY6GcbSh6sXe6BXAM2ZnAndMDAbgGBiDUGZnCeX3W1feX1BbAIORxhU_ItIdKWH_f4klAwcYTx2WYWh-iYY1Jmz0hU_HWtnJhmXGgCpuTa6wLas61wtwDwkgIwMBOA8kEQQ8JcJcl2RAs6vI1YkWVwm6vSQu2QYA8k2yvS6AJ86ACI4UhB5AukcQ6ASYx6My-GXKWB7yQ84UnyZ4Z4nyhBM8hknYBBB6_SayVQ5B1KMy8MM4GQTBvSHg6y8kQ8DE_BlyJ84UHgiBdB6wNi1C-gSCmQVCaCNAhGiEMAXS2BJcnyhkSYnyukah32buLycovS0SfB6w5uckvSYA7h_ka0gCE8wUoUN-5K4UQ8SwkUwRhkSwI84RUUSkQR7AukJ8SwhkURnyQ8sqgCqCTkYk92SwUR8REUYR0RCRURgRuRiB-RJcgRqRKKrgrA0QCMvhc-7AARJRURSYMRJc-REKsqFGe0kWYe6RMAMyPhx8cAMy1RtRAg9RIxZkwEAA6jAHVgQFcFBJhicrEdEmrmIrwuwJ8tEjlDMqboMcBOhv9p5J3IgB3hLCAM4BZOwHqF5O5OwPZFzpQN0AAKoNC3H3EgBLD8Aih5YiDDh3GdwPH8CvGiw0BQhAmUAPF6h0BfxLCOB9AQAZAeReT9GEYWA07nE1wWDtDmizBkgwD1yJAoi6xLDXhPzbB6gSjOAkm0BEAWTAQ_FXHPFvENAgkgB_HY7QnfGPEgAAByAJ7AbgN8HJYJyELCHJWoQgXAwpKCHJAAEvON4jEHEOwPyTAAyA8TTvXEzmAIRg_lfAbPRuJhlgKn_vTJxvbNxlLHtIAsJjkGJNsEYWdHmq6ehDgMJtKkYbKs_oArYDqB4CfqxGJHsrKL_OsGGewO1J1N1M0FGYNGJO0MfqfpNDGQAITxQCCZCJCb5Zk5kRhhlvh-korx4JZBDJaYoEAIynjxoJrmp9AIhwCh6-IQDNARjpkNn0TwA4CwAzgTB5TZ4CDmDVnxaiAL4opdkZElSOQ9lwA2ATYLRcQWBtkpQBlBmn7J41mjh5QxnrnBk9JTmNJ5T_bGDQhwBPxba2CuCu7dBzo1zDYpRFIuloAzmNmNJh5vSrmFlwCBkHkRhHnemJAnonkd4rntnpmjmnhAUnrsB_mn44D-D5ApCoBbljkqaNHOnAVLGYS5RgXowZAJ4VloXQVYUiFvndkwVvh-K8zziCr_ZvTwWSiIVwDIWoVQWjgYUwVXCAVkVCod49YWCCXsBnnwCXnmh0A3mwC9boFCXLkTgtLDkEXxaJ4kWcVOL1mznNmP4lk-6bBYCWCUAigpAeDxQsr6VLCzB-AtnrCwBTDkDyXfmSAAB6vSG68U5oVk5o-B5oly1KwASYuUwA4UigQ88gfCkgnp8APS-lHIoFNc5AyU-lOA9IHgKI04KQEY4UHIKVZILwj4r4K4355AvZdAKQBYiZSk8VNFiVmR5A925F9VD2H8ARjVrVLVKRHV1KsqOSeiyUxQ8kWAAiJV6gVqqF7Qr48gFWFgjw554lLAFQt55ozom25oZCK4Q5bC0kOCEYAi5KEYiVYgBUM8u528SBSwB17AR17AJ8p1iBJcH80ZZ1Jc1K_4Y1ueNFakGCNYHISgGSVlrguUFWPWEwQgYwzoYwZ42ZQoj414HY7ASpqkE-7-vk2w6mMm5qBs_-VpDAvi_AqA3ojISAfJPwxY1QGQElWA3ohJ7k6w_A3iZq40_AVw_A8kcBcBtN1Y_Aw6o6dizNfJZl-Qv40IVNwtmAZIlAiQuYeQBQClZovm5QfwpYnNFg_AUQaA_N_A1MbGKtfJ4tdAmA3EyJcA_N_23N_EmtIAzl4UOAQ8HN3xK4_AOmlt1thkOAbtSYutqt0Mre6AvmgsZsLtuktt9tjyfJJm8c8ALt4UyBbtQ8XtfJOmlokQ0dbtHt_A6wiKhsStuAugMetM1ANsAB1pEkIA9JZIWQzN_ARWWQAamo-Jcw_A8gCg8g8gQAA",mdxType:"Playground"},Object(a.b)(d,{mdxType:"Button"},"Click me"),Object(a.b)(d,{kind:"secondary",mdxType:"Button"},"Click me")))}S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"site/components/button.mdx"}}),S.isMDXComponent=!0}}]);
//# sourceMappingURL=site-components-button.032dcc5e53a5476647a5.js.map