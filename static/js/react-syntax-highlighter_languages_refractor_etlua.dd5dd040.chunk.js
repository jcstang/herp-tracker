(this["webpackJsonpherpa-tracker"]=this["webpackJsonpherpa-tracker"]||[]).push([[58,119,123],{118:function(e,n,t){"use strict";function a(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,s=i.length;-1!==t.code.indexOf(r=n(a,s));)++s;return i[s]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function i(s){for(var u=0;u<s.length&&!(r>=o.length);u++){var l=s[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var c=o[r],p=t.tokenStack[c],g="string"===typeof l?l:l.content,f=n(a,c),d=g.indexOf(f);if(d>-1){++r;var k=g.substring(0,d),m=new e.Token(a,e.tokenize(p,t.grammar),"language-"+a,p),h=g.substring(d+f.length),b=[];k&&b.push.apply(b,i([k])),b.push(m),h&&b.push.apply(b,i([h])),"string"===typeof l?s.splice.apply(s,[u,1].concat(b)):l.content=b}}else l.content&&i(l.content)}return s}(t.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]},143:function(e,n,t){"use strict";function a(e){e.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}}e.exports=a,a.displayName="lua",a.aliases=[]},224:function(e,n,t){"use strict";var a=t(143),r=t(118);function o(e){e.register(a),e.register(r),function(e){e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"etlua",/<%[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"etlua")}))}(e)}e.exports=o,o.displayName="etlua",o.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_etlua.dd5dd040.chunk.js.map