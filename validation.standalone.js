/*!
 * Validation.js v0.1.0
 * http://snandy.github.io/validation
 * Original idea: www.livevalidation.com (Copyright 2007-2010 Alec Hill)
 * @snandy 2014-08-29 16:45:38
 *
 */
~function(e,t,i){function a(){}function n(t){return e.jQuery?e.jQuery(t):g!==i?g(t):i}function r(e){return n(e)[0]}function s(t,a){return e.jQuery?e.jQuery(t).addClass(a):v!==i?v.add(t,a):i}function l(t,a){return e.jQuery?e.jQuery(t).removeClass(a):v!==i?v.remove(t,a):i}function o(e){this.message=e,this.name="ValidationError"}function u(e,t){if(e){if(this.elem=e.nodeName?e:r(e),!this.elem)throw Error("element is not exits");this.initialize(t)}}function c(e){var t=e.type.toUpperCase(),i=e.nodeName.toUpperCase();switch(!0){case"TEXTAREA"==i:return p.textarea;case"INPUT"==i&&"TEXT"==t:return p.text;case"INPUT"==i&&"PASSWORD"==t:return p.password;case"INPUT"==i&&"CHECKBOX"==t:return p.checkbox;case"INPUT"==i&&"FILE"==t:return p.file;case"SELECT"==i:return p.select;case"INPUT"==i:throw Error("Cannot use Validation on an "+t.toLowerCase()+" input");default:throw Error("Element must be an input/select/textarea - "+i.toLowerCase()+" was given")}}function f(t){this.name=t.id,this.elem=t,this.fields=[],this.oldOnSubmit=this.elem.onsubmit||a;var n=this;this.elem.onsubmit=function(t){var a=!1;return n.valid=n.execValidate(),n.valid&&(a=n.oldOnSubmit.call(this,t||e.event)!==!1),a?i:a}}var h=Object.prototype.toString,d={},m=d.forEach=function(e,t,i){if(e.length===+e.length){for(var a=0;e.length>a;a++)if(t.call(i,e[a],a,e)===!0)return}else for(var n in e)if(t.call(i,e[n],n,e)===!0)return};m(["Array","Boolean","Function","Object","String","Number"],function(e){d["is"+e]=function(t){return h.call(t)==="[object "+e+"]"}});var g=function(e,t,i){function a(e){return t.getElementById(e)}function n(e,t,i){var a=RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)"),n="className"===e?i.className:i.getAttribute(e);if(n){if(!t)return!0;if(a.test(n))return!0}return!1}function r(e,t,i){for(var a,r=[],s=0,l=0;a=e[s++];)n(t,i,a)&&(r[l++]=a);return r}var s=Array.prototype.slice,l=/^#[\w\-]+/,o=/^([\w\*]+)$/,u=/^([\w\-]+)?\.([\w\-]+)/,c=/^([\w]+)?\[([\w]+-?[\w]+?)(=(\w+))?\]/,f=function(e){return s.call(e,0)};try{s.call(t.documentElement.childNodes,0)[0].nodeType}catch(h){f=function(e){for(var t=[],i=0,a=e.length;a>i;i++)t[i]=e[i];return t}}return function(e,n){var s=e,h=[],n=n===i?t:"string"==typeof n?g(n)[0]:n;if(!e)return h;if(l.test(s))return h[0]=a(s.substr(1,s.length)),h;if(o.test(s))return f(n.getElementsByTagName(s));if(n.querySelectorAll){if(1===n.nodeType){var d=n.id,m=n.id="__ZZ__";try{return n.querySelectorAll("#"+m+" "+s)}catch(v){throw Error("querySelectorAll: "+v)}finally{d?n.id=d:n.removeAttribute("id")}}return f(n.querySelectorAll(s))}if(u.test(s)){var p=s.split("."),b=p[0],y=p[1];if(n.getElementsByClassName){var w=n.getElementsByClassName(y);if(b){for(var E=0,M=w.length;M>E;E++){var N=w[E];N.tagName.toLowerCase()===b&&h.push(N)}return h}return f(w)}var S=n.getElementsByTagName(b||"*");return r(S,"className",y)}if(c.test(s)){var C=c.exec(s),S=n.getElementsByTagName(C[1]||"*");return r(S,C[2],C[4])}}}(e,t),v=function(){function e(e,t){return 1!==e.nodeType||"string"!=typeof t?!1:!0}var t,i,a,n,r=function(){var e=document.createElement("div");return e.className="a",!!e.classList}();return r?(t=function(t,i){return e(t,i)?t.classList.contains(i):!1},i=function(t,i){var a,n=0;if(e(t,i))for(i=i.split(" ");a=i[n++];)t.classList.add(a)},a=function(t,i){var a,n=0;if(e(t,i))for(i=i.split(" ");a=i[n++];)t.classList.remove(a)},n=function(t,i){e(t,i)&&t.classList.toggle(i)}):(t=function(t,i){return e(t,i)?-1!=(" "+t.className+" ").indexOf(" "+i+" "):!1},i=function(i,a){e(i,a)&&!t(i,a)&&(i.className+=(i.className?" ":"")+a)},a=function(t,i){e(t,i)&&(t.className=t.className.replace(RegExp("\\b"+i+"\\b","g"),""))},n=function(e,n){t(e,n)?a(e,n):i(e,n)}),{has:t,add:i,remove:a,toggle:n}}(),p={textarea:1,text:2,password:3,checkbox:4,select:5,file:6};d.$=n;var b={presence:function(e,t){var t=t||{},a=t.failureMsg||"不能为空!";return(""===e||null===e||e===i)&&b.fail(a),!0},numericality:function(e,t){var i=e,e=Number(e),t=t||{},a=t.min||0===t.min?t.min:null,n=t.max||0===t.max?t.max:null,r=t.is||0===t.is?t.is:null,s=t.notANumberMsg||"必须是数字!",l=t.notAnIntegerMsg||"必须为整数!",o=t.wrongNumberMsg||"必须为"+r+"!",u=t.tooLowMsg||"不能小于"+a+"!",c=t.tooHighMsg||"不能大于"+n+"!";switch(isFinite(e)||b.fail(s),t.onlyInteger&&(/\.0+$|\.$/.test(i+"")||e!=parseInt(e))&&b.fail(l),!0){case null!==r:e!=Number(r)&&b.fail(o);break;case null!==a&&null!==n:b.numericality(e,{tooLowMsg:u,min:a}),b.numericality(e,{tooHighMsg:c,max:n});break;case null!==a:Number(a)>e&&b.fail(u);break;case null!==n:e>Number(n)&&b.fail(c)}return!0},format:function(e,t){var e=e+"",t=t||{},i=t.failureMsg||"格式不对!",a=t.pattern||/./,n=t.negate||!1;return n||a.test(e)||b.fail(i),n&&a.test(e)&&b.fail(i),!0},email:function(e,t){var t=t||{},i=/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i,a=t.failureMsg||"必须为一个有效的电子邮箱地址!";return b.format(e,{failureMsg:a,pattern:i}),!0},size:function(e,t){var e=e+"",t=t||{},i=t.min||0==t.min?t.min:null,a=t.max||0==t.max?t.max:null,n=t.is||0==t.is?t.is:null,r=t.wrongSizeMsg||"必须是"+n+"个字符长度!",s=t.tooShortMsg||"不能小于"+i+"个字符长度!",l=t.tooLongMsg||"不能大于"+a+"个字符长度!";switch(!0){case null!==n:e.length!=Number(n)&&b.fail(r);break;case null!==i&&null!==a:b.size(e,{tooShortMsg:s,min:i}),b.size(e,{tooLongMsg:l,max:a});break;case null!==i:e.length<Number(i)&&b.fail(s);break;case null!==a:e.length>Number(a)&&b.fail(l);break;default:throw Error("Validate::size - size(s) to validate against must be provided!")}return!0},inclusion:function(e,t){var t=t||{},i=t.failureMsg||"必须是列表中指定的元素!",a=t.caseSensitive===!1?!1:!0;if(t.allowNull&&null==e)return!0;t.allowNull||null!=e||b.fail(i);var n=t.within||[];if(!a){for(var r=[],s=0,l=n.length;l>s;++s){var o=n[s];d.isString(o)&&(o=o.toLowerCase()),r.push(o)}n=r,d.isString(e)&&(e=e.toLowerCase())}var u=!1;return m(n,function(i){i===e&&(u=!0),t.partialMatch&&-1!==e.indexOf(i)&&(u=!0)}),(!t.negate&&!u||t.negate&&u)&&b.fail(i),!0},exclusion:function(e,t){var t=t||{};return t.failureMsg=t.failureMsg||"不能输入列表中的元素!",t.negate=!0,b.inclusion(e,t),!0},chinese:function(e,t){var t=t||{},i=t.failureMsg||"请输入中文!",a=/^[\u4E00-\u9FA5]+$/;return a.test(e)||b.fail(i),!0},mobile:function(e,t){var t=t||{},i=t.failureMsg||"请输入正确的手机号!",a=/^1(?:[38]\d|4[57]|5[012356789]|70)\d{8}$/;return a.test(e)||b.fail(i),!0},identity:function(e,t){var t=t||{},i=t.failureMsg||"请输入正确的身份证号码!",a=/^[1-9]\d{14}(\d{2}[0-9X])?$/;return a.test(e)||b.fail(i),!0},confirmation:function(e,t){if(!t.match)throw Error("Error validating confirmation: Id of element to match must be provided");var t=t||{},i=t.failureMsg||"两次输入不一致!",a=t.match.nodeName?t.match:r(t.match);if(!a)throw Error("There is no reference with name of, or element with id of "+t.match);return e!=a.value&&b.fail(i),!0},acceptance:function(e,t){var t=t||{},i=t.failureMsg||"必须同意!";return e||b.fail(i),!0},custom:function(e,t){var t=t||{},i=t.against||function(){return!0},a=t.args||{},n=t.failureMsg||"Not valid!";return i(e,a)||b.fail(n),!0},fail:function(e){throw new o(e)}};u.prototype={initialize:function(e){var i=this.elem;e=e||{},this.rules=[],this.elemType=c(i),this.form=i.form,this.fieldSuccClass=e.fieldSuccClass||"zv_succ_field",this.fieldFailClass=e.fieldFailClass||"zv_fail_field",this.msgValidClass=e.msgValidClass||"zv_valid_msg",this.msgInvalidClass=e.msgInvalidClass||"zv_invalid_msg";var n=e.afterWhatNode||i;if(this.afterWhatNode=n.nodeType?n:r(n),e.msg=e.msg||i.getAttribute("name"),this.elemMsg=r("[data-zvmsg="+e.msg+"]",this.form),!this.elemMsg){this.elemMsg=t.createElement("span");var l=n.parentNode;n.nextSibling?l.insertBefore(this.elemMsg,n.nextSibling):l.appendChild(this.elemMsg)}var o=this,u=this.elemMsg,e=e||{};if(this.succMsg=e.succMsg||i.getAttribute("data-succ-msg")||"填写正确",this.onlyOnBlur=e.onlyOnBlur||!1,this.onlyOnSubmit=e.onlyOnSubmit||!1,this.beforeValidate=e.beforeValidate||a,this.beforeSucc=e.beforeSucc||a,this.onSucc=e.onSucc||function(){(""!==i.value||this.showMessageWhenEmpty)&&(u.innerHTML=this.message,u.className=this.msgValidClass,u.style.display="",s(this.elem,this.fieldSuccClass))},this.afterSucc=e.afterSucc||a,this.beforeError=e.beforeError||a,this.onError=e.onError||function(){(""!==i.value||this.showMessageWhenEmpty)&&(u.innerHTML=this.message,u.className=this.msgInvalidClass,u.style.display="",s(this.elem,this.fieldFailClass))},this.afterError=e.afterError||a,this.afterValidate=e.afterValidate||a,this.form&&(this.formObj=f.getInstance(this.form),this.formObj.addField(this)),this.oldOnfocus=i.onfocus||a,this.oldOnBlur=i.onblur||a,this.oldOnClick=i.onclick||a,this.oldOnChange=i.onchange||a,this.oldOnKeyup=i.onkeyup||a,i.onfocus=function(e){o.reset(),o.oldOnfocus.call(this,e)},!this.onlyOnSubmit)switch(this.elemType){case p.checkbox:i.onclick=function(e){return o.validate(),o.oldOnClick.call(this,e)};case p.select:case p.file:i.onchange=function(e){return o.validate(),o.oldOnChange.call(this,e)};break;default:this.onlyOnBlur||(i.onkeyup=function(e){return o.validate(e),o.oldOnKeyup.call(this,e)}),i.onblur=function(e){return o.validate(e),o.oldOnBlur.call(this,e)}}},add:function(e,t){var i=this;t=t||{},t.failureMsg||(t.failureMsg=i.elem.getAttribute("data-error-msg")),d.isString(e)&&m(e.split(" "),function(e){i.rules.push({validateFunc:b[e],params:t})})},remove:function(e,t){var i=this.rules,a=[];m(i,function(i){i.type!=e&&i.params!=t&&a.push(i)}),this.rules=a},doValidation:function(){var e=this.rules,t=e.length;this.validateFailed=!1;for(var i=0;t>i;++i){var a=e[i];if(this.validateFailed=!this.perform(a.validateFunc,a.params),this.validateFailed)return!1}return this.message=this.succMsg,!0},perform:function(e,t){switch(e){case b.presence:case b.confirmation:case b.acceptance:this.showMessageWhenEmpty=!0;break;case b.custom:t.showMessageWhenEmpty&&(this.showMessageWhenEmpty=!0)}var i=this.elem,a=this.elemType,n=a===p.select?i.options[i.selectedIndex].value:i.value;if(e==b.acceptance){if(a!=p.checkbox)throw Error("Element to validate acceptance must be a checkbox");n=i.checked}var r=!0;try{e(n,t)}catch(s){if(!(s instanceof o))throw s;(""!==n||""===n&&this.showMessageWhenEmpty)&&(this.validateFailed=!0,r=!1,this.message=s.message)}finally{return r}},validate:function(){if(this.elem.disabled)return!0;this.beforeValidate();var e=this.doValidation();return e?(this.beforeSucc(),this.onSucc(),this.afterSucc()):(this.beforeError(),this.onError(),this.afterError()),this.afterValidate(),e},reset:function(){this.elemMsg.style.display="none",l(this.elem,this.fieldSuccClass),l(this.elem,this.fieldFailClass)}},u.add=function(e,t,i,a){var n=new u(e,i);return n.add(t,a),n},u.Util=d;var y=1,w={};f.getInstance=function(e){if(e){var t=e.nodeName?e:r(e);return t.id||(t.id="zv_form_"+y++),w[t.id]||(w[t.id]=new f(t)),t.valiObj=w[t.id]}},f.prototype={addField:function(e){this.fields.push(e)},removeField:function(e){var t=[],i=this.fields;m(i,function(i){i!==e&&t.push(i)}),this.fields=t},execValidate:function(){var e=!0;return m(this.fields,function(t){var i=t.validate();e&&(e=i)}),e}};var E=e.onload;e.onload=function(){var t=r("script[data-run=true]");if(t){var i=t.getAttribute("data-container"),a=$(i),n=$("[data-validate]",a);d.forEach(n,function(e){var t=new u(e);t.add(e.getAttribute("data-validate"))}),E&&E.call(e)}},"function"==typeof define&&define.amd?define("Validation",[],function(){return u}):e.Validation=u}(this,document);