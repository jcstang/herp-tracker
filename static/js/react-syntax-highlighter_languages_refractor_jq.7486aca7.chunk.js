(this["webpackJsonpherp-tracker"]=this["webpackJsonpherp-tracker"]||[]).push([[99],{345:function(e,t,n){"use strict";function r(e){!function(e){var t=/\\\((?:[^()]|\([^()]*\))*\)/.source,n=RegExp(/"(?:[^"\r\n\\]|\\[^\r\n(]|__)*"/.source.replace(/__/g,(function(){return t}))),r={interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+t),lookbehind:!0,inside:{content:{pattern:/^(\\\()[\s\S]+(?=\)$)/,lookbehind:!0,inside:null},punctuation:/^\\\(|\)$/}}},a=e.languages.jq={comment:/#.*/,property:{pattern:RegExp(n.source+/(?=\s*:(?!:))/.source),greedy:!0,inside:r},string:{pattern:n,greedy:!0,inside:r},function:{pattern:/(\bdef\s+)[a-z_]\w+/i,lookbehind:!0},variable:/\B\$\w+/,"property-literal":{pattern:/\b[a-z_]\w*(?=\s*:(?!:))/i,alias:"property"},keyword:/\b(?:as|break|catch|def|elif|else|end|foreach|if|import|include|label|module|modulemeta|null|reduce|then|try|while)\b/,boolean:/\b(?:true|false)\b/,number:/(?:\b\d+\.|\B\.)?\b\d+(?:[eE][+-]?\d+)?\b/,operator:[{pattern:/\|=?/,alias:"pipe"},/\.\.|[!=<>]?=|\?\/\/|\/\/=?|[-+*/%]=?|[<>?]|\b(?:and|or|not)\b/],"c-style-function":{pattern:/\b[a-z_]\w*(?=\s*\()/i,alias:"function"},punctuation:/::|[()\[\]{},:;]|\.(?=\s*[\[\w$])/,dot:{pattern:/\./,alias:"important"}};r.interpolation.inside.content.inside=a}(e)}e.exports=r,r.displayName="jq",r.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jq.7486aca7.chunk.js.map