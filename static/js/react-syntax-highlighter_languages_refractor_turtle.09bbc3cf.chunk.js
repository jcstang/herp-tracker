(this["webpackJsonpherp-tracker"]=this["webpackJsonpherp-tracker"]||[]).push([[204],{229:function(e,t,n){"use strict";function a(e){e.languages.turtle={comment:{pattern:/#.*/,greedy:!0},"multiline-string":{pattern:/"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/,greedy:!0,alias:"string",inside:{comment:/#.*/}},string:{pattern:/"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/,greedy:!0},url:{pattern:/<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/,greedy:!0,inside:{punctuation:/[<>]/}},function:{pattern:/(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,inside:{"local-name":{pattern:/([^:]*:)[\s\S]+/,lookbehind:!0},prefix:{pattern:/[\s\S]+/,inside:{punctuation:/:/}}}},number:/[+-]?\b\d+\.?\d*(?:e[+-]?\d+)?/i,punctuation:/[{}.,;()[\]]|\^\^/,boolean:/\b(?:true|false)\b/,keyword:[/(?:\ba|@prefix|@base)\b|=/,/\b(?:graph|base|prefix)\b/i],tag:{pattern:/@[a-z]+(?:-[a-z\d]+)*/i,inside:{punctuation:/@/}}},e.languages.trig=e.languages.turtle}e.exports=a,a.displayName="turtle",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_turtle.09bbc3cf.chunk.js.map