!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("electron")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";n.r(t);var o,r=n(1),i=n.n(r),a=n(2),l=n.n(a),c=n(0);console.log("Hello"),console.log(i.a.join(__dirname,"addTitleBar.js"));var d=i.a.join(__dirname,"assets/icons/mac/");console.log(d),l.a.readdir(d,function(e,t){console.log(t);for(var n=0;n<t.length;n++)console.log(t[n])});var u=function(){(o=new c.BrowserWindow({width:1280,height:720,minWidth:800,minHeight:480,backgroundColor:"#f7f7f7",titleBarStyle:"hidden",show:!1,webPreferences:{nodeIntegration:!1},icon:i.a.join(__dirname,"assets/icons/png/64x64.png")})).loadURL("https://app.streamlineicons.com"),o.setTitle("Streamline Icons"),o.on("page-title-updated",function(e){e.preventDefault()}),o.webContents.on("did-finish-load",function(){o.webContents.insertCSS(".Icon_Menu, .Icons_Container { padding-top: 10px; !important; } .IconSideMenu { padding-top: calc(1vh + 10px) !important; }")}),o.webContents.on("dom-ready",function(){o.webContents.executeJavaScript("\n\t\t\t\tlet titleBar = document.createElement('div');\n\t\t\t\ttitleBar.style='-webkit-app-region: drag; position: fixed; z-index: 99999999; top: 0; left: 0; width: 100vw; height: 24px;'\n\t\t\t\tdocument.body.appendChild(titleBar);\n\t\t\t")}),o.once("ready-to-show",function(){o.show()})};c.app.on("ready",u),c.app.on("window-all-closed",function(){console.log("window is all closed"),"darwin"!==process.platform&&c.app.quit()}),c.app.on("activate",function(){null===o&&u()})}]);