(this["webpackJsonpherp-tracker"]=this["webpackJsonpherp-tracker"]||[]).push([[46],{295:function(e,n,a){"use strict";function s(e){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach((function(a){var s=n[a],i=[];/^\w+$/.test(a)||i.push(/\w+/.exec(a)[0]),"diff"===a&&i.push("bold"),e.languages.diff[a]={pattern:RegExp("^(?:["+s+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:i,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(a)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:n})}(e)}e.exports=s,s.displayName="diff",s.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_diff.4e9375c3.chunk.js.map