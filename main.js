(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(n){e(1,arguments);var a=Object.prototype.toString.call(n);return n instanceof Date||"object"===t(n)&&"[object Date]"===a?new Date(n.getTime()):"number"==typeof n||"[object Number]"===a?new Date(n):("string"!=typeof n&&"[object String]"!==a||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o(t){e(1,arguments);var a=n(t),o=a.getUTCDay(),r=(o<1?7:0)+o-1;return a.setUTCDate(a.getUTCDate()-r),a.setUTCHours(0,0,0,0),a}function r(t){e(1,arguments);var a=n(t),r=a.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var s=o(i),d=new Date(0);d.setUTCFullYear(r,0,4),d.setUTCHours(0,0,0,0);var c=o(d);return a.getTime()>=s.getTime()?r+1:a.getTime()>=c.getTime()?r:r-1}var i={};function s(){return i}function d(t,o){var r,i,d,c,u,l,m,h;e(1,arguments);var g=s(),p=a(null!==(r=null!==(i=null!==(d=null!==(c=null==o?void 0:o.weekStartsOn)&&void 0!==c?c:null==o||null===(u=o.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==d?d:g.weekStartsOn)&&void 0!==i?i:null===(m=g.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==r?r:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=n(t),v=f.getUTCDay(),T=(v<p?7:0)+v-p;return f.setUTCDate(f.getUTCDate()-T),f.setUTCHours(0,0,0,0),f}function c(t,o){var r,i,c,u,l,m,h,g;e(1,arguments);var p=n(t),f=p.getUTCFullYear(),v=s(),T=a(null!==(r=null!==(i=null!==(c=null!==(u=null==o?void 0:o.firstWeekContainsDate)&&void 0!==u?u:null==o||null===(l=o.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==c?c:v.firstWeekContainsDate)&&void 0!==i?i:null===(h=v.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==r?r:1);if(!(T>=1&&T<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(f+1,0,T),w.setUTCHours(0,0,0,0);var k=d(w,o),y=new Date(0);y.setUTCFullYear(f,0,T),y.setUTCHours(0,0,0,0);var b=d(y,o);return p.getTime()>=k.getTime()?f+1:p.getTime()>=b.getTime()?f:f-1}function u(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const l=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return u("yy"===e?a%100:a,e.length)},m=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):u(n+1,2)},h=function(t,e){return u(t.getUTCDate(),e.length)},g=function(t,e){return u(t.getUTCHours()%12||12,e.length)},p=function(t,e){return u(t.getUTCHours(),e.length)},f=function(t,e){return u(t.getUTCMinutes(),e.length)},v=function(t,e){return u(t.getUTCSeconds(),e.length)},T=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return u(Math.floor(a*Math.pow(10,n-3)),e.length)};var w={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),o=a>0?a:1-a;return n.ordinalNumber(o,{unit:"year"})}return l(t,e)},Y:function(t,e,n,a){var o=c(t,a),r=o>0?o:1-o;return"YY"===e?u(r%100,2):"Yo"===e?n.ordinalNumber(r,{unit:"year"}):u(r,e.length)},R:function(t,e){return u(r(t),e.length)},u:function(t,e){return u(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return u(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return u(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return m(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return u(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,o,r,i){var l=function(t,o){e(1,arguments);var r=n(t),i=d(r,o).getTime()-function(t,n){var o,r,i,u,l,m,h,g;e(1,arguments);var p=s(),f=a(null!==(o=null!==(r=null!==(i=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(l=n.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==i?i:p.firstWeekContainsDate)&&void 0!==r?r:null===(h=p.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==o?o:1),v=c(t,n),T=new Date(0);return T.setUTCFullYear(v,0,f),T.setUTCHours(0,0,0,0),d(T,n)}(r,o).getTime();return Math.round(i/6048e5)+1}(t,i);return"wo"===o?r.ordinalNumber(l,{unit:"week"}):u(l,o.length)},I:function(t,a,i){var s=function(t){e(1,arguments);var a=n(t),i=o(a).getTime()-function(t){e(1,arguments);var n=r(t),a=new Date(0);return a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0),o(a)}(a).getTime();return Math.round(i/6048e5)+1}(t);return"Io"===a?i.ordinalNumber(s,{unit:"week"}):u(s,a.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):h(t,e)},D:function(t,a,o){var r=function(t){e(1,arguments);var a=n(t),o=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var r=o-a.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===a?o.ordinalNumber(r,{unit:"dayOfYear"}):u(r,a.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var o=t.getUTCDay(),r=(o-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(r);case"ee":return u(r,2);case"eo":return n.ordinalNumber(r,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var o=t.getUTCDay(),r=(o-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(r);case"cc":return u(r,e.length);case"co":return n.ordinalNumber(r,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),o=0===a?7:a;switch(e){case"i":return String(o);case"ii":return u(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,o=t.getUTCHours();switch(a=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,o=t.getUTCHours();switch(a=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return g(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):p(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):f(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):v(t,e)},S:function(t,e){return T(t,e)},X:function(t,e,n,a){var o=(a._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return y(o);case"XXXX":case"XX":return b(o);default:return b(o,":")}},x:function(t,e,n,a){var o=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return y(o);case"xxxx":case"xx":return b(o);default:return b(o,":")}},O:function(t,e,n,a){var o=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+k(o,":");default:return"GMT"+b(o,":")}},z:function(t,e,n,a){var o=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+k(o,":");default:return"GMT"+b(o,":")}},t:function(t,e,n,a){var o=a._originalDate||t;return u(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,a){return u((a._originalDate||t).getTime(),e.length)}};function k(t,e){var n=t>0?"-":"+",a=Math.abs(t),o=Math.floor(a/60),r=a%60;if(0===r)return n+String(o);var i=e||"";return n+String(o)+i+u(r,2)}function y(t,e){return t%60==0?(t>0?"-":"+")+u(Math.abs(t)/60,2):b(t,e)}function b(t,e){var n=e||"",a=t>0?"-":"+",o=Math.abs(t);return a+u(Math.floor(o/60),2)+n+u(o%60,2)}const P=w;var j=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},D=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},E={p:D,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],o=a[1],r=a[2];if(!r)return j(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",j(o,e)).replace("{{time}}",D(r,e))}};const C=E;var M=["D","DD"],L=["YY","YYYY"];function S(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var x={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function N(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var B,I={date:N({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:N({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:N({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},W={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function A(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,r=null!=n&&n.width?String(n.width):o;a=t.formattingValues[r]||t.formattingValues[o]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[s]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function U(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,o=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],r=e.match(o);if(!r)return null;var i,s=r[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(d);return i=t.valueCallback?t.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(s.length)}}}const O={code:"en-US",formatDistance:function(t,e,n){var a,o=x[t];return a="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:I,formatRelative:function(t,e,n,a){return W[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:A({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:A({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:A({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:A({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:A({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(B={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(B.matchPattern);if(!n)return null;var a=n[0],o=t.match(B.parsePattern);if(!o)return null;var r=B.valueCallback?B.valueCallback(o[0]):o[0];return{value:r=e.valueCallback?e.valueCallback(r):r,rest:t.slice(a.length)}}),era:U({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:U({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:U({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:U({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:U({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var Y=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,q=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,H=/^'([^]*?)'?$/,F=/''/g,z=/[a-zA-Z]/;function R(o,r,i){var d,c,u,l,m,h,g,p,f,v,T,w,k,y,b,j,D,E;e(2,arguments);var x=String(r),N=s(),B=null!==(d=null!==(c=null==i?void 0:i.locale)&&void 0!==c?c:N.locale)&&void 0!==d?d:O,I=a(null!==(u=null!==(l=null!==(m=null!==(h=null==i?void 0:i.firstWeekContainsDate)&&void 0!==h?h:null==i||null===(g=i.locale)||void 0===g||null===(p=g.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==m?m:N.firstWeekContainsDate)&&void 0!==l?l:null===(f=N.locale)||void 0===f||null===(v=f.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==u?u:1);if(!(I>=1&&I<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=a(null!==(T=null!==(w=null!==(k=null!==(y=null==i?void 0:i.weekStartsOn)&&void 0!==y?y:null==i||null===(b=i.locale)||void 0===b||null===(j=b.options)||void 0===j?void 0:j.weekStartsOn)&&void 0!==k?k:N.weekStartsOn)&&void 0!==w?w:null===(D=N.locale)||void 0===D||null===(E=D.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==T?T:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!B.localize)throw new RangeError("locale must contain localize property");if(!B.formatLong)throw new RangeError("locale must contain formatLong property");var A=n(o);if(!function(a){if(e(1,arguments),!function(n){return e(1,arguments),n instanceof Date||"object"===t(n)&&"[object Date]"===Object.prototype.toString.call(n)}(a)&&"number"!=typeof a)return!1;var o=n(a);return!isNaN(Number(o))}(A))throw new RangeError("Invalid time value");var U=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(A),R=function(t,o){return e(2,arguments),function(t,o){e(2,arguments);var r=n(t).getTime(),i=a(o);return new Date(r+i)}(t,-a(o))}(A,U),Q={firstWeekContainsDate:I,weekStartsOn:W,locale:B,_originalDate:A};return x.match(q).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,C[e])(t,B.formatLong):t})).join("").match(Y).map((function(t){if("''"===t)return"'";var e,n,a=t[0];if("'"===a)return(n=(e=t).match(H))?n[1].replace(F,"'"):e;var s,d=P[a];if(d)return null!=i&&i.useAdditionalWeekYearTokens||(s=t,-1===L.indexOf(s))||S(t,r,String(o)),null!=i&&i.useAdditionalDayOfYearTokens||!function(t){return-1!==M.indexOf(t)}(t)||S(t,r,String(o)),d(R,t,B.localize,Q);if(a.match(z))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}function Q(t){e(1,arguments);var a=n(t);return a.setHours(0,0,0,0),a}function G(t,o){var r,i,d,c,u,l,m,h;e(1,arguments);var g=s(),p=a(null!==(r=null!==(i=null!==(d=null!==(c=null==o?void 0:o.weekStartsOn)&&void 0!==c?c:null==o||null===(u=o.locale)||void 0===u||null===(l=u.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==d?d:g.weekStartsOn)&&void 0!==i?i:null===(m=g.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==r?r:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=n(t),v=f.getDay(),T=(v<p?7:0)+v-p;return f.setDate(f.getDate()-T),f.setHours(0,0,0,0),f}class X{constructor(t){this.name=t,this.tasks=[]}setName(t){this.name=t}getName(){return this.name}setTasks(t){this.tasks=t}getTasks(){return this.tasks}getTask(t){return this.tasks.find((e=>e.getName()===t))}contains(t){return this.tasks.some((e=>e.getName()===t))}addTask(t){this.tasks.find((e=>e.getName()===t.name))||this.tasks.push(t)}deleteTask(t){this.tasks=this.tasks.filter((e=>e.name!==t))}getTasksToday(){return this.tasks.filter((t=>function(t){return e(1,arguments),function(t,n){e(2,arguments);var a=Q(t),o=Q(n);return a.getTime()===o.getTime()}(t,Date.now())}(n(new Date(t.getDateFormatted())))))}getTasksThisWeek(){return this.tasks.filter((t=>function(t,n){return e(1,arguments),function(t,n,a){e(2,arguments);var o=G(t,a),r=G(n,a);return o.getTime()===r.getTime()}(t,Date.now(),n)}(function(t,o){return e(2,arguments),function(t,o){e(2,arguments);var r=n(t),i=a(o);return isNaN(i)?new Date(NaN):i?(r.setDate(r.getDate()+i),r):r}(t,-a(o))}(n(new Date(t.getDateFormatted())),1))))}}class ${constructor(t,e="No Date"){this.name=t,this.dueDate=e}setName(t){this.name=t}getName(){return this.name}setDate(t){this.dueDate=t}getDate(){return this.dueDate}getDateFormatted(){const t=this.dueDate.split("/")[0];return`${this.dueDate.split("/")[1]}/${t}/${this.dueDate.split("/")[2]}`}}class J{constructor(){this.projects=[],this.projects.push(new X("All")),this.projects.push(new X("Today")),this.projects.push(new X("This week"))}setProjects(t){this.projects=t}getProjects(){return this.projects}getProject(t){return this.projects.find((e=>e.getName()===t))}contains(t){return this.projects.some((e=>e.getName()==t))}addProject(t){this.projects.find((e=>e.name===t.name))||this.projects.push(t)}deleteProject(t){const e=this.projects.find((e=>e.getName()===t));this.projects.splice(this.projects.indexOf(e),1)}updateTodayProject(){this.getProject("Today").tasks=[],this.projects.forEach((t=>{"Today"!==t.getName()&&"This week"!==t.getName()&&t.getTasksToday().forEach((e=>{const n=`${e.getName()} (${t.getName()})`;this.getProject("Today").addTask(new $(n,e.getDate()))}))}))}updateWeekProject(){this.getProject("This week").tasks=[],this.projects.forEach((t=>{"Today"!==t.getName()&&"This week"!==t.getName()&&t.getTasksThisWeek().forEach((e=>{const n=`${e.getName()} (${t.getName()})`;this.getProject("This week").addTask(new $(n,e.getDate()))}))})),this.getProject("This week").setTasks(this.getProject("This week").getTasks().sort(((t,a)=>function(t,a){e(2,arguments);var o=n(t),r=n(a),i=o.getTime()-r.getTime();return i<0?-1:i>0?1:i}(n(new Date(t.getDateFormatted())),n(new Date(a.getDateFormatted()))))))}}class _{static saveTodoList(t){localStorage.setItem("todoList",JSON.stringify(t))}static getTodoList(){const t=Object.assign(new J,JSON.parse(localStorage.getItem("todoList")));return t.setProjects(t.getProjects().map((t=>Object.assign(new X,t)))),t.getProjects().forEach((t=>t.setTasks(t.getTasks().map((t=>Object.assign(new $,t)))))),t}static addProject(t){const e=_.getTodoList();e.addProject(t),_.saveTodoList(e)}static deleteProject(t){const e=_.getTodoList();e.deleteProject(t),_.saveTodoList(e)}static addTask(t,e){const n=_.getTodoList();n.getProject(t).addTask(e),_.saveTodoList(n)}static deleteTask(t,e){const n=_.getTodoList();n.getProject(t).deleteTask(e),_.saveTodoList(n)}static renameTask(t,e,n){const a=_.getTodoList();a.getProject(t).getTask(e).setName(n),_.saveTodoList(a)}static setTaskDate(t,e,n){const a=_.getTodoList();a.getProject(t).getTask(e).setDate(n),_.saveTodoList(a)}static updateTodayProject(){const t=_.getTodoList();t.updateTodayProject(),_.saveTodoList(t)}static updateWeekProject(){const t=_.getTodoList();t.updateWeekProject(),_.saveTodoList(t)}}class K{static loadHomepage(){K.loadProjects(),K.initProjectButtons(),K.openProject("All",document.getElementById("button-all-projects")),document.addEventListener("keydown",K.handleKeyboardInput)}static loadProjects(){_.getTodoList().getProjects().forEach((t=>{"All"!==t.name&&"Today"!==t.name&&"This week"!==t.name&&K.createProject(t.name)})),K.initAddProjectButtons()}static loadTasks(t){_.getTodoList().getProject(t).getTasks().forEach((t=>K.createTask(t.name,t.dueDate))),"Today"!==t&&"This week"!==t&&K.initAddTaskButtons()}static loadProjectContent(t){const e=document.getElementById("project-preview");e.innerHTML=`\n            <h1 id="project-name">${t}</h1>\n            <div class="tasks-list id="tasks-list"></div>`,"Today"!==t&&"This week"!==t&&(e.innerHTML+='\n            <button class="button-add-task" id="button-add-task">\n            <img id="taskicon" src="images/plus.svg" />\n                Add Task\n            </button>\n            <div class="add-task-popup" id="add-task-popup">\n                <input\n                    class="input-add-task-popup"\n                    id="input-add-task-popup"\n                    type="text"\n            />\n            <div class="add-task-popup-buttons">\n                <button class="button-add-task-popup" id="button-add-task-popup">\n                    Add\n                </button>\n                <button\n                    class="button-cancel-task-popup"\n                     id="button-cancel-task-popup"\n                >\n                    Cancel\n                </button>\n            </div>\n        </div>'),K.loadTasks(t)}static createProject(t){document.getElementById("projects-list").innerHTML+=`\n            <button class="button-project" data-project-button>\n                <div class="left-project-panel">\n                    <span>${t}</span>\n                </div>\n                <div class="right-project-panel">\n                <img class="deleteThis"  aria-hidden="true" id="taskicon" src="images/x.svg" />\n                </div>\n            </button>`,K.initProjectButtons()}static createTask(t,e){document.getElementById("tasks-list").innerHTML+=`\n            <button class="button-tasks" data-task-button>\n                <div class="left-task-panel">\n                    <p class="task-content">${t}</p>\n                    <input type="text" class="input-task-name" data-input-task-name>\n                </div>\n                <div class="right-task-panel">\n                    <p class="due-date" id="due-date">${e}</p>\n                    <input type="date" class="input-due-date" data-input-due-date>\n                </div>\n            </button>`,K.initTaskButtons()}static clear(){K.clearProjectPreview(),K.clearProjects(),K.clearTasks()}static clearProjectPreview(){document.getElementById("project-preview").textContent=""}static clearProjects(){document.getElementById("projects-list").textContent=""}static clearTasks(){document.getElementById("tasks-list").textContent=""}static closeAllPopups(){K.closeAddProjectPopup(),document.getElementById("button-add-task")&&K.closeAddTaskPopup(),document.getElementById("tasks-list")&&""!==document.getElementById("tasks-list").innerHTML&&K.closeAllInputs()}static closeAllInputs(){document.querySelectorAll("[data-task-button]").forEach((t=>{K.closeRenameInput(t),K.closeSetDateInput(t)}))}static handleKeyboardInput(t){"Escape"===t.key&&K.closeAllPopups()}static initAddProjectButtons(){const t=document.getElementById("button-add-project"),e=document.getElementById("button-add-project-popup"),n=document.getElementById("button-cancel-project-popup"),a=document.getElementById("input-add-project-popup");t.addEventListener("click",K.openAddProjectPopup),e.addEventListener("click",K.addProject),n.addEventListener("click",K.closeAddProjectPopup),a.addEventListener("keypress",K.handleAddProjectPopupInput)}static openAddProjectPopup(){const t=document.getElementById("add-project-popup"),e=document.getElementById("button-add-project");K.closeAllPopups(),t.classList.add("active"),e.classList.add("active")}static closeAddProjectPopup(){const t=document.getElementById("add-project-popup"),e=document.getElementById("button-add-project"),n=document.getElementById("input-add-project-popup");t.classList.remove("active"),e.classList.remove("active"),n.value=""}static addProject(){const t=document.getElementById("input-add-project-popup"),e=t.value;if(""!==e){if(_.getTodoList().contains(e))return t.value="",void alert("Project names must be different");_.addProject(new X(e)),K.createProject(e),K.closeAddProjectPopup()}else alert("Project name can't be empty")}static handleAddProjectPopupInput(t){"Enter"===t.key&&K.addProject()}static initProjectButtons(){const t=document.getElementById("button-all-projects"),e=document.getElementById("button-today-projects"),n=document.getElementById("button-week-projects"),a=document.querySelectorAll("[data-project-button]");t.addEventListener("click",K.openInboxTasks),e.addEventListener("click",K.openTodayTasks),n.addEventListener("click",K.openWeekTasks),a.forEach((t=>t.addEventListener("click",K.handleProjectButton)))}static openInboxTasks(){K.openProject("All",this)}static openTodayTasks(){_.updateTodayProject(),K.openProject("Today",this)}static openWeekTasks(){_.updateWeekProject(),K.openProject("This week",this)}static handleProjectButton(t){let e=t.target.closest(".right-project-panel"),n=t.target.closest(".button-project");e&&n.remove(),K.openProject(projectName,this)}static openProject(t,e){[...document.querySelectorAll(".button-default-project"),...document.querySelectorAll(".button-project")].forEach((t=>t.classList.remove("active"))),e.classList.add("active"),K.closeAddProjectPopup(),K.loadProjectContent(t)}static deleteProject(t,e){e.classList.contains("active")&&K.clearProjectPreview(),_.deleteProject(t),K.clearProjects(),K.loadProjects()}static openNav(){const t=document.getElementById("nav");K.closeAllPopups(),t.classList.toggle("active")}static initAddTaskButtons(){const t=document.getElementById("button-add-task"),e=document.getElementById("button-add-task-popup"),n=document.getElementById("button-cancel-task-popup"),a=document.getElementById("input-add-task-popup");t.addEventListener("click",K.openAddTaskPopup),e.addEventListener("click",K.addTask),n.addEventListener("click",K.closeAddTaskPopup),a.addEventListener("keypress",K.handleAddTaskPopupInput)}static openAddTaskPopup(){const t=document.getElementById("add-task-popup"),e=document.getElementById("button-add-task");K.closeAllPopups(),t.classList.add("active"),e.classList.add("active")}static closeAddTaskPopup(){const t=document.getElementById("add-task-popup"),e=document.getElementById("button-add-task"),n=document.getElementById("input-add-task-popup");t.classList.remove("active"),e.classList.remove("active"),n.value=""}static addTask(){const t=document.getElementById("project-name").textContent,e=document.getElementById("input-add-task-popup"),n=e.value;if(""!==n){if(_.getTodoList().getProject(t).contains(n))return alert("Task names must be different"),void(e.value="");_.addTask(t,new $(n)),K.createTask(n,"No date"),K.closeAddTaskPopup()}else alert("Task name can't be empty")}static handleAddTaskPopupInput(t){"Enter"===t.key&&K.addTask()}static initTaskButtons(){const t=document.querySelectorAll("[data-task-button]"),e=document.querySelectorAll("[data-input-task-name"),n=document.querySelectorAll("[data-input-due-date");t.forEach((t=>t.addEventListener("click",K.handleTaskButton))),e.forEach((t=>t.addEventListener("keypress",K.renameTask))),n.forEach((t=>t.addEventListener("change",K.setTaskDate)))}static handleTaskButton(t){t.target.classList.contains("fa-circle")?K.setTaskCompleted(this):t.target.classList.contains("fa-times")?K.deleteTask(this):t.target.classList.contains("task-content")?K.openRenameInput(this):t.target.classList.contains("due-date")&&K.openSetDateInput(this)}static setTaskCompleted(t){const e=document.getElementById("project-name").textContent,n=t.children[0].children[1].textContent;if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0];_.deleteTask(t,n.split(" ")[0]),"Today"===e?_.updateTodayProject():_.updateWeekProject()}else _.deleteTask(e,n);K.clearTasks(),K.loadTasks(e)}static deleteTask(t){const e=document.getElementById("project-name").textContent,n=t.children[0].children[1].textContent;if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0];_.deleteTask(t,n)}_.deleteTask(e,n),K.clearTasks(),K.loadTasks(e)}static openRenameInput(t){const e=t.children[0].children[1];let n=e.textContent;const a=t.children[0].children[2],o=t.parentNode.parentNode.children[0].textContent;"Today"!==o&&"This week"!==o||([n]=n.split(" (")),K.closeAllPopups(),e.classList.add("active"),a.classList.add("active"),a.value=n}static closeRenameInput(t){const e=t.children[0].children[1],n=t.children[0].children[2];e.classList.remove("active"),n.classList.remove("active"),n.value=""}static renameTask(t){if("Enter"!==t.key)return;const e=document.getElementById("project-name").textContent,n=this.previousElementSibling.textContent,a=this.value;if(""!==a){if(_.getTodoList().getProject(e).contains(a))return this.value="",void alert("Task names must be different");if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0],o=n.split(" ")[0];_.renameTask(e,n,`${a} (${t})`),_.renameTask(t,o,a)}else _.renameTask(e,n,a);K.clearTasks(),K.loadTasks(e),K.closeRenameInput(this.parentNode.parentNode)}else alert("Task name can't be empty")}static openSetDateInput(t){const e=t.children[1].children[0],n=t.children[1].children[1];K.closeAllPopups(),e.classList.add("active"),n.classList.add("active")}static closeSetDateInput(t){const e=t.children[1].children[0],n=t.children[1].children[1];e.classList.remove("active"),n.classList.remove("active")}static setTaskDate(){const t=this.parentNode.parentNode,e=document.getElementById("project-name").textContent,n=t.children[0].children[1].textContent,a=R(new Date(this.value),"dd/MM/yyyy");if("Today"===e||"This week"===e){const t=n.split("(")[1].split(")")[0],o=n.split(" (")[0];_.setTaskDate(e,n,a),_.setTaskDate(t,o,a),"Today"===e?_.updateTodayProject():_.updateWeekProject()}else _.setTaskDate(e,n,a);K.clearTasks(),K.loadTasks(e),K.closeSetDateInput(t)}}console.log("⭐"),document.addEventListener("DOMContentLoaded",K.loadHomepage)})();