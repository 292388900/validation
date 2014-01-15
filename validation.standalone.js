/*!
 * Validation.js v0.1.0
 * http://snandy.github.io/validation
 * Original idea: www.livevalidation.com (Copyright 2007-2010 Alec Hill)
 * @snandy 2014-01-15 18:17:36
 *
 */
~function(e,t,i){function n(){}function a(t){return e.jQuery?e.jQuery(t):m!==i?m(t):i}function r(e){return a(e)[0]}function s(e){this.message=e,this.name="ValidationError"}function l(e,t){if(e){if(this.elem=e.nodeName?e:r(e),!this.elem)throw Error("element is not exits");this.initialize(t)}}function o(e){var t=e.type.toUpperCase(),i=e.nodeName.toUpperCase();switch(!0){case"TEXTAREA"==i:return v.textarea;case"INPUT"==i&&"TEXT"==t:return v.text;case"INPUT"==i&&"PASSWORD"==t:return v.password;case"INPUT"==i&&"CHECKBOX"==t:return v.checkbox;case"INPUT"==i&&"FILE"==t:return v.file;case"SELECT"==i:return v.select;case"INPUT"==i:throw Error("Cannot use Validation on an "+t.toLowerCase()+" input");default:throw Error("Element must be an input/select/textarea - "+i.toLowerCase()+" was given")}}function u(e,i){var n=t.createElement(e||"span"),a=t.createTextNode(i);return n.appendChild(a),n}function c(t){this.name=t.id,this.elem=t,this.fields=[],this.oldOnSubmit=this.elem.onsubmit||n;var a=this;this.elem.onsubmit=function(t){var n=!1;return a.valid=a.execValidate(),a.valid&&(n=a.oldOnSubmit.call(this,t||e.event)!==!1),n?i:n}}var f=Object.prototype.toString,h={},d=h.forEach=function(e,t,i){if(e.length===+e.length){for(var n=0;e.length>n;n++)if(t.call(i,e[n],n,e)===!0)return}else for(var a in e)if(t.call(i,e[a],a,e)===!0)return};d(["Array","Boolean","Function","Object","String","Number"],function(e){h["is"+e]=function(t){return f.call(t)==="[object "+e+"]"}});var m=function(e,t,i){function n(e){return t.getElementById(e)}function a(e,t,i){var n=RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)"),a="className"===e?i.className:i.getAttribute(e);if(a){if(!t)return!0;if(n.test(a))return!0}return!1}function r(e,t,i){for(var n,r=[],s=0,l=0;n=e[s++];)a(t,i,n)&&(r[l++]=n);return r}var s=Array.prototype.slice,l=/^#[\w\-]+/,o=/^([\w\*]+)$/,u=/^([\w\-]+)?\.([\w\-]+)/,c=/^([\w]+)?\[([\w]+-?[\w]+?)(=(\w+))?\]/,f=function(e){return s.call(e,0)};try{s.call(t.documentElement.childNodes,0)[0].nodeType}catch(h){f=function(e){for(var t=[],i=0,n=e.length;n>i;i++)t[i]=e[i];return t}}return function(e,a){var s=e,h=[],a=a===i?t:"string"==typeof a?m(a)[0]:a;if(!e)return h;if(l.test(s))return h[0]=n(s.substr(1,s.length)),h;if(o.test(s))return f(a.getElementsByTagName(s));if(a.querySelectorAll){if(1===a.nodeType){var d=a.id,v=a.id="__ZZ__";try{return a.querySelectorAll("#"+v+" "+s)}catch(g){throw Error("querySelectorAll: "+g)}finally{d?a.id=d:a.removeAttribute("id")}}return f(a.querySelectorAll(s))}if(u.test(s)){var p=s.split("."),b=p[0],y=p[1];if(a.getElementsByClassName){var w=a.getElementsByClassName(y);if(b){for(var N=0,E=w.length;E>N;N++){var M=w[N];M.tagName.toLowerCase()===b&&h.push(M)}return h}return f(w)}var O=a.getElementsByTagName(b||"*");return r(O,"className",y)}if(c.test(s)){var x=c.exec(s),O=a.getElementsByTagName(x[1]||"*");return r(O,x[2],x[4])}}}(e,t),v={textarea:1,text:2,password:3,checkbox:4,select:5,file:6};h.$=a;var g={presence:function(e,t){var t=t||{},n=t.failureMsg||"不能为空!";return(""===e||null===e||e===i)&&g.fail(n),!0},numericality:function(e,t){var i=e,e=Number(e),t=t||{},n=t.min||0===t.min?t.min:null,a=t.max||0===t.max?t.max:null,r=t.is||0===t.is?t.is:null,s=t.notANumberMsg||"必须是数字!",l=t.notAnIntegerMsg||"必须为整数!",o=t.wrongNumberMsg||"必须为"+r+"!",u=t.tooLowMsg||"不能小于"+n+"!",c=t.tooHighMsg||"不能大于"+a+"!";switch(isFinite(e)||g.fail(s),t.onlyInteger&&(/\.0+$|\.$/.test(i+"")||e!=parseInt(e))&&g.fail(l),!0){case null!==r:e!=Number(r)&&g.fail(o);break;case null!==n&&null!==a:g.numericality(e,{tooLowMsg:u,min:n}),g.numericality(e,{tooHighMsg:c,max:a});break;case null!==n:Number(n)>e&&g.fail(u);break;case null!==a:e>Number(a)&&g.fail(c)}return!0},format:function(e,t){var e=e+"",t=t||{},i=t.failureMsg||"格式不对!",n=t.pattern||/./,a=t.negate||!1;return a||n.test(e)||g.fail(i),a&&n.test(e)&&g.fail(i),!0},email:function(e,t){var t=t||{},i=/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i,n=t.failureMsg||"必须为一个有效的电子邮箱地址!";return g.format(e,{failureMsg:n,pattern:i}),!0},size:function(e,t){var e=e+"",t=t||{},i=t.min||0==t.min?t.min:null,n=t.max||0==t.max?t.max:null,a=t.is||0==t.is?t.is:null,r=t.wrongSizeMsg||"必须是"+a+"个字符长度!",s=t.tooShortMsg||"不能小于"+i+"个字符长度!",l=t.tooLongMsg||"不能大于"+n+"个字符长度!";switch(!0){case null!==a:e.length!=Number(a)&&g.fail(r);break;case null!==i&&null!==n:g.size(e,{tooShortMsg:s,min:i}),g.size(e,{tooLongMsg:l,max:n});break;case null!==i:e.length<Number(i)&&g.fail(s);break;case null!==n:e.length>Number(n)&&g.fail(l);break;default:throw Error("Validate::size - size(s) to validate against must be provided!")}return!0},inclusion:function(e,t){var t=t||{},i=t.failureMsg||"必须是列表中指定的元素!",n=t.caseSensitive===!1?!1:!0;if(t.allowNull&&null==e)return!0;t.allowNull||null!=e||g.fail(i);var a=t.within||[];if(!n){for(var r=[],s=0,l=a.length;l>s;++s){var o=a[s];h.isString(o)&&(o=o.toLowerCase()),r.push(o)}a=r,h.isString(e)&&(e=e.toLowerCase())}var u=!1;return d(a,function(i){i===e&&(u=!0),t.partialMatch&&-1!==e.indexOf(i)&&(u=!0)}),(!t.negate&&!u||t.negate&&u)&&g.fail(i),!0},exclusion:function(e,t){var t=t||{};return t.failureMsg=t.failureMsg||"不能输入列表中的元素!",t.negate=!0,g.inclusion(e,t),!0},chinese:function(e,t){var t=t||{},i=t.failureMsg||"请输入中文!",n=/^[\u4E00-\u9FA5]+$/;return n.test(e)||g.fail(i),!0},mobile:function(e,t){var t=t||{},i=t.failureMsg||"请输入正确的手机号!";11===e.length;var n=/^1(?:[38]\d|4[57]|5[012356789])\d{8}$/;return n.test(e)||g.fail(i),!0},confirmation:function(e,t){if(!t.match)throw Error("Error validating confirmation: Id of element to match must be provided");var t=t||{},i=t.failureMsg||"两次输入不一致!",n=t.match.nodeName?t.match:r(t.match);if(!n)throw Error("There is no reference with name of, or element with id of "+t.match);return e!=n.value&&g.fail(i),!0},acceptance:function(e,t){var t=t||{},i=t.failureMsg||"必须同意!";return e||g.fail(i),!0},custom:function(e,t){var t=t||{},i=t.against||function(){return!0},n=t.args||{},a=t.failureMsg||"Not valid!";return i(e,n)||g.fail(a),!0},fail:function(e){throw new s(e)}},p="zv_valid",b="zv_invalid",y="zv_vali_msg",w="zv_succ_field",N="zv_fail_field";l.prototype={initialize:function(e){var t=this.elem;this.validations=[],this.elemType=o(t),this.form=t.form;var e=e||{};this.succMsg=e.succMsg||t.getAttribute("data-succ-msg")||"填写正确";var i=e.afterWhatNode||t;this.afterWhatNode=i.nodeType?i:r(i),this.onlyOnBlur=e.onlyOnBlur||!1,this.onlyOnSubmit=e.onlyOnSubmit||!1,this.beforeValidate=e.beforeValidate||n,this.beforeSucc=e.beforeSucc||n,this.onSucc=e.onSucc||function(){this.insertMessage(u("",this.message)),this.addFieldClass()},this.afterSucc=e.afterSucc||n,this.beforeError=e.beforeError||n,this.onError=e.onError||function(){this.insertMessage(u("",this.message)),this.addFieldClass()},this.afterError=e.afterError||n,this.afterValidate=e.afterValidate||n,this.form&&(this.formObj=c.getInstance(this.form),this.formObj.addField(this)),this.oldOnFocus=t.onfocus||n,this.oldOnBlur=t.onblur||n,this.oldOnClick=t.onclick||n,this.oldOnChange=t.onchange||n,this.oldOnKeyup=t.onkeyup||n;var a=this;if(t.onfocus=function(e){return a.reset(),a.oldOnFocus.call(this,e)},!this.onlyOnSubmit)switch(this.elemType){case v.checkbox:t.onclick=function(e){return a.validate(),a.oldOnClick.call(this,e)};case v.select:case v.file:t.onchange=function(e){return a.validate(),a.oldOnChange.call(this,e)};break;default:this.onlyOnBlur||(t.onkeyup=function(e){return a.validate(e),a.oldOnKeyup.call(this,e)}),t.onblur=function(e){return a.validate(e),a.oldOnBlur.call(this,e)}}},destroy:function(){if(this.formObj&&(this.formObj.removeField(this),this.formObj.destroy()),this.elem.onfocus=this.oldOnFocus,!this.onlyOnSubmit)switch(this.elemType){case v.checkbox:this.elem.onclick=this.oldOnClick;case v.select:case v.file:this.elem.onchange=this.oldOnChange;break;default:this.onlyOnBlur||(this.elem.onkeyup=this.oldOnKeyup),this.elem.onblur=this.oldOnBlur}this.validations=[],this.reset()},add:function(e,t){var i=this;t=t||{},t.failureMsg||(t.failureMsg=i.elem.getAttribute("data-error-msg")),h.isString(e)&&d(e.split(" "),function(e){i.validations.push({validateFunc:g[e],params:t})})},remove:function(e,t){var i=this.validations,n=[];d(i,function(i){i.type!=e&&i.params!=t&&n.push(i)}),this.validations=n},doValidation:function(){var e=this.validations,t=e.length;this.validateFailed=!1;for(var i=0;t>i;++i){var n=e[i];if(this.validateFailed=!this.perform(n.validateFunc,n.params),this.validateFailed)return!1}return this.message=this.succMsg,!0},perform:function(e,t){switch(e){case g.presence:case g.confirmation:case g.acceptance:this.showMessageWhenEmpty=!0;break;case g.custom:t.showMessageWhenEmpty&&(this.showMessageWhenEmpty=!0)}var i=this.elem,n=this.elemType,a=n===v.select?i.options[i.selectedIndex].value:i.value;if(e==g.acceptance){if(n!=v.checkbox)throw Error("Element to validate acceptance must be a checkbox");a=i.checked}var r=!0;try{e(a,t)}catch(l){if(!(l instanceof s))throw l;(""!==a||""===a&&this.showMessageWhenEmpty)&&(this.validateFailed=!0,this.message=l.message.split("\n")[0],r=!1)}finally{return r}},validate:function(){if(this.elem.disabled)return!0;this.beforeValidate();var e=this.doValidation();return e?(this.beforeSucc(),this.onSucc(),this.afterSucc()):(this.beforeError(),this.onError(),this.afterError()),this.afterValidate(),e},insertMessage:function(e){if(this.removeMessage(),this.validateFailed||this.succMsg){var t=this.elem.value,i=this.afterWhatNode;if(this.showMessageWhenEmpty&&(this.elemType===v.checkbox||""===t)||""!==t){var n=this.validateFailed?b:p;e.className+=" "+y+" "+n;var a=i.parentNode;i.nextSibling?a.insertBefore(e,i.nextSibling):a.appendChild(e)}}},addFieldClass:function(){var e=this.elem;this.removeFieldClass(),this.validateFailed?-1===e.className.indexOf(N)&&(e.className+=" "+N):(this.showMessageWhenEmpty||""!==e.value)&&-1===e.className.indexOf(w)&&(e.className+=" "+w)},removeMessage:function(){for(var e,t=this.afterWhatNode;t.nextSibling;){if(1===t.nextSibling.nodeType){e=t.nextSibling;break}t=t.nextSibling}e&&-1!=e.className.indexOf(y)&&this.afterWhatNode.parentNode.removeChild(e)},removeFieldClass:function(){var e=this.elem.className;-1!==e.indexOf(N)&&(this.elem.className=e.split(N).join("")),-1!==e.indexOf(w)&&(this.elem.className=e.split(w).join(" "))},reset:function(){this.removeMessage(),this.removeFieldClass()}},l.add=function(e,t,i,n){var a=new l(e,i);return a.add(t,n),a},l.init=function(e){var t=a("[data-validate]",e);h.forEach(t,function(e){var t=new l(e);t.add(e.getAttribute("data-validate"))})},l.Util=h;var E=1,M={};c.getInstance=function(e){if(e){var t=e.nodeName?e:r(e);return t.id||(t.id="zv_form_"+E++),M[t.id]||(M[t.id]=new c(t)),M[t.id]}},c.prototype={addField:function(e){this.fields.push(e)},removeField:function(e){var t=[],i=this.fields;d(i,function(i){i!==e&&t.push(i)}),this.fields=t},execValidate:function(){var e=!0;return d(this.fields,function(t){var i=t.validate();e&&(e=i)}),e},destroy:function(e){return 0==this.fields.length||e?(this.elem.onsubmit=this.oldOnSubmit,M[this.name]=null,!0):!1}},~function(){var t=e.onload;e.onload=function(){var i=r("script[data-run=true]");if(i){var n=i.getAttribute("data-container"),s=a(n);l.init(s),t&&t.call(e)}}}(),"function"==typeof define&&define.amd?define("Validation",[],function(){return l}):e.Validation=l}(this,document);