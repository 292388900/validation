/*!
 * Validation.js v0.1.0
 * http://snandy.github.io/validation
 * Original idea: www.livevalidation.com (Copyright 2007-2010 Alec Hill)
 * @snandy 2013-12-04 11:05:53
 *
 */
~function(e,t,i){function a(){}function n(t){return e.jQuery?e.jQuery(t):query(t)}function s(e){return n(e)[0]}function l(e){this.message=e,this.name="ValidationError"}function r(e,t){if(e){if(this.element=e.nodeName?e:s(e),!this.element)throw Error("element is not exits");this.initialize(t)}}function o(e){this.initialize(e)}var u=Object.prototype.toString,d={},h=d.forEach=function(e,t,i){if(e.length===+e.length){for(var a=0;e.length>a;a++)if(t.call(i,e[a],a,e)===!0)return}else for(var n in e)if(t.call(i,e[n],n,e)===!0)return};h(["Array","Boolean","Function","Object","String","Number"],function(e){d["is"+e]=function(t){return u.call(t)==="[object "+e+"]"}});var c={textarea:1,text:2,password:3,checkbox:4,select:5,file:6};d.$=n;var f={presence:function(e,t){var t=t||{},a=t.failureMsg||"不能为空!";return(""===e||null===e||e===i)&&f.fail(a),!0},numericality:function(e,t){var i=e,e=Number(e),t=t||{},a=t.min||0===t.min?t.min:null,n=t.max||0===t.max?t.max:null,s=t.is||0===t.is?t.is:null,l=t.notANumberMsg||"必须是数字!",r=t.notAnIntegerMsg||"必须为整数!",o=t.wrongNumberMsg||"必须为"+s+"!",u=t.tooLowMsg||"不能小于"+a+"!",d=t.tooHighMsg||"不能大于"+n+"!";switch(isFinite(e)||f.fail(l),t.onlyInteger&&(/\.0+$|\.$/.test(i+"")||e!=parseInt(e))&&f.fail(r),!0){case null!==s:e!=Number(s)&&f.fail(o);break;case null!==a&&null!==n:f.numericality(e,{tooLowMsg:u,min:a}),f.numericality(e,{tooHighMsg:d,max:n});break;case null!==a:Number(a)>e&&f.fail(u);break;case null!==n:e>Number(n)&&f.fail(d)}return!0},format:function(e,t){var e=e+"",t=t||{},i=t.failureMsg||"格式不对!",a=t.pattern||/./,n=t.negate||!1;return n||a.test(e)||f.fail(i),n&&a.test(e)&&f.fail(i),!0},email:function(e,t){var t=t||{},i=/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i,a=t.failureMsg||"必须为一个有效的电子邮箱地址!";return f.format(e,{failureMsg:a,pattern:i}),!0},size:function(e,t){var e=e+"",t=t||{},i=t.min||0==t.min?t.min:null,a=t.max||0==t.max?t.max:null,n=t.is||0==t.is?t.is:null,s=t.wrongSizeMsg||"必须是"+n+"个字符长度!",l=t.tooShortMsg||"不能小于"+i+"个字符长度!",r=t.tooLongMsg||"不能大于"+a+"个字符长度!";switch(!0){case null!==n:e.length!=Number(n)&&f.fail(s);break;case null!==i&&null!==a:f.size(e,{tooShortMsg:l,min:i}),f.size(e,{tooLongMsg:r,max:a});break;case null!==i:e.length<Number(i)&&f.fail(l);break;case null!==a:e.length>Number(a)&&f.fail(r);break;default:throw Error("Validate::size - size(s) to validate against must be provided!")}return!0},inclusion:function(e,t){var t=t||{},i=t.failureMsg||"必须是列表中指定的元素!",a=t.caseSensitive===!1?!1:!0;if(t.allowNull&&null==e)return!0;t.allowNull||null!=e||f.fail(i);var n=t.within||[];if(!a){for(var s=[],l=0,r=n.length;r>l;++l){var o=n[l];d.isString(o)&&(o=o.toLowerCase()),s.push(o)}n=s,d.isString(e)&&(e=e.toLowerCase())}var u=!1;return h(n,function(i){i===e&&(u=!0),t.partialMatch&&-1!==e.indexOf(i)&&(u=!0)}),(!t.negate&&!u||t.negate&&u)&&f.fail(i),!0},exclusion:function(e,t){var t=t||{};return t.failureMsg=t.failureMsg||"不能输入列表中的元素!",t.negate=!0,f.inclusion(e,t),!0},chinese:function(e,t){var t=t||{},i=t.failureMsg||"请输入中文!",a=/^[\u4E00-\u9FA5]+$/;return a.test(e)||f.fail(i),!0},mobile:function(e,t){var t=t||{},i=t.failureMsg||"请输入正确的手机号!";11===e.length;var a=/^1(?:[38]\d|4[57]|5[012356789])\d{8}$/;return a.test(e)||f.fail(i),!0},confirmation:function(e,t){if(!t.match)throw Error("Error validating confirmation: Id of element to match must be provided");var t=t||{},i=t.failureMsg||"两次输入不一致!",a=t.match.nodeName?t.match:s(t.match);if(!a)throw Error("There is no reference with name of, or element with id of "+t.match);return e!=a.value&&f.fail(i),!0},acceptance:function(e,t){var t=t||{},i=t.failureMsg||"必须同意!";return e||f.fail(i),!0},custom:function(e,t){var t=t||{},i=t.against||function(){return!0},a=t.args||{},n=t.failureMsg||"Not valid!";return i(e,a)||f.fail(n),!0},fail:function(e){throw new l(e)}};r.add=function(e,t,i,a){var n=new r(e,i);return n.add(t,a),n},r.init=function(e){var t=n("[data-validate]",e);d.forEach(t,function(e){var t=new r(e);t.add(e.getAttribute("data-validate"))})},r.prototype={validClass:"ZV_valid",invalidClass:"ZV_invalid",messageClass:"ZV_validation_msg",validFieldClass:"ZV_valid_field",invalidFieldClass:"ZV_invalid_field",initialize:function(e){var t=this.element;this.validations=[],this.elemType=this.getType(),this.form=t.form;var e=e||{};this.validMsg=e.validMsg||t.getAttribute("data-validate-succ")||"填写正确";var i=e.insertAfterWhatNode||t;this.insertAfterWhatNode=i.nodeType?i:s(i),this.onlyOnBlur=e.onlyOnBlur||!1,this.wait=e.wait||0,this.onlyOnSubmit=e.onlyOnSubmit||!1,this.beforeValidate=e.beforeValidate||a,this.beforeValid=e.beforeValid||a,this.onValid=e.onValid||function(){this.insertMessage(this.createMessage()),this.addFieldClass()},this.afterValid=e.afterValid||a,this.beforeInvalid=e.beforeInvalid||a,this.onInvalid=e.onInvalid||function(){this.insertMessage(this.createMessage()),this.addFieldClass()},this.afterInvalid=e.afterInvalid||a,this.afterValidate=e.afterValidate||a,this.form&&(this.formObj=o.getInstance(this.form),this.formObj.addField(this)),this.oldOnFocus=t.onfocus||a,this.oldOnBlur=t.onblur||a,this.oldOnClick=t.onclick||a,this.oldOnChange=t.onchange||a,this.oldOnKeyup=t.onkeyup||a;var n=this;if(t.onfocus=function(e){return n.doOnFocus(e),n.oldOnFocus.call(this,e)},!this.onlyOnSubmit)switch(this.elemType){case c.checkbox:t.onclick=function(e){return n.validate(),n.oldOnClick.call(this,e)};case c.select:case c.file:t.onchange=function(e){return n.validate(),n.oldOnChange.call(this,e)};break;default:this.onlyOnBlur||(t.onkeyup=function(e){return n.deferValidation(),n.oldOnKeyup.call(this,e)}),t.onblur=function(e){return n.doOnBlur(e),n.oldOnBlur.call(this,e)}}},destroy:function(){if(this.formObj&&(this.formObj.removeField(this),this.formObj.destroy()),this.element.onfocus=this.oldOnFocus,!this.onlyOnSubmit)switch(this.elemType){case c.checkbox:this.element.onclick=this.oldOnClick;case c.select:case c.file:this.element.onchange=this.oldOnChange;break;default:this.onlyOnBlur||(this.element.onkeyup=this.oldOnKeyup),this.element.onblur=this.oldOnBlur}this.validations=[],this.removeMessageAndFieldClass()},add:function(e,t){var i=this;t=t||{},t.failureMsg||(t.failureMsg=i.element.getAttribute("data-validate-err")),d.isString(e)&&h(e.split(" "),function(e){i.validations.push({validateFunc:f[e],params:t})})},remove:function(e,t){var i=this.validations,a=[];h(i,function(i){i.type!=e&&i.params!=t&&a.push(i)}),this.validations=a},deferValidation:function(){var e=this;this.wait>=300&&this.removeMessageAndFieldClass(),this.timeout&&clearTimeout(e.timeout),this.timeout=setTimeout(function(){e.validate()},e.wait)},doOnBlur:function(e){this.focused=!1,this.validate(e)},doOnFocus:function(){this.focused=!0,this.removeMessageAndFieldClass()},getType:function(){var e=this.element,t=e.type.toUpperCase(),i=e.nodeName.toUpperCase();switch(!0){case"TEXTAREA"==i:return c.textarea;case"INPUT"==i&&"TEXT"==t:return c.text;case"INPUT"==i&&"PASSWORD"==t:return c.password;case"INPUT"==i&&"CHECKBOX"==t:return c.checkbox;case"INPUT"==i&&"FILE"==t:return c.file;case"SELECT"==i:return c.select;case"INPUT"==i:throw Error("Cannot use Validation on an "+t.toLowerCase()+" input");default:throw Error("Element must be an input/select/textarea - "+i.toLowerCase()+" was given")}},doValidations:function(){var e=this.validations,t=e.length;this.validateFailed=!1;for(var i=0;t>i;++i){var a=e[i];if(this.validateFailed=!this.perform(a.validateFunc,a.params),this.validateFailed)return!1}return this.message=this.validMsg,!0},perform:function(e,t){switch(e){case f.presence:case f.confirmation:case f.acceptance:this.showMessageWhenEmpty=!0;break;case f.custom:t.showMessageWhenEmpty&&(this.showMessageWhenEmpty=!0)}var i=this.element,a=this.elemType,n=a===c.select?i.options[i.selectedIndex].value:i.value;if(e==f.acceptance){if(a!=c.checkbox)throw Error("Element to validate acceptance must be a checkbox");n=i.checked}var s=!0;try{e(n,t)}catch(r){if(!(r instanceof l))throw r;(""!==n||""===n&&this.showMessageWhenEmpty)&&(this.validateFailed=!0,this.message=r.message.split("\n")[0],s=!1)}finally{return s}},validate:function(){if(this.element.disabled)return!0;this.beforeValidate();var e=this.doValidations();return e?(this.beforeValid(),this.onValid(),this.afterValid(),!0):(this.beforeInvalid(),this.onInvalid(),this.afterInvalid(),!1)},enable:function(){return this.element.disabled=!1,this},disable:function(){return this.element.disabled=!0,this.removeMessageAndFieldClass(),this},createMessage:function(){var e=t.createElement("span"),i=t.createTextNode(this.message);return e.appendChild(i),e},insertMessage:function(e){if(this.removeMessage(),this.validateFailed||this.validMsg){var t=this.element.value,i=this.insertAfterWhatNode;if(this.showMessageWhenEmpty&&(this.elemType===c.checkbox||""===t)||""!==t){var a=this.validateFailed?this.invalidClass:this.validClass;e.className+=" "+this.messageClass+" "+a;var n=i.parentNode;i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e)}}},addFieldClass:function(){var e=this.element,t=this.validFieldClass,i=this.invalidFieldClass;this.removeFieldClass(),this.validateFailed?-1===e.className.indexOf(i)&&(e.className+=" "+i):(this.showMessageWhenEmpty||""!==e.value)&&-1===e.className.indexOf(t)&&(e.className+=" "+t)},removeMessage:function(){for(var e,t=this.insertAfterWhatNode;t.nextSibling;){if(1===t.nextSibling.nodeType){e=t.nextSibling;break}t=t.nextSibling}e&&-1!=e.className.indexOf(this.messageClass)&&this.insertAfterWhatNode.parentNode.removeChild(e)},removeFieldClass:function(){var e=this.element.className;-1!==e.indexOf(this.invalidFieldClass)&&(this.element.className=e.split(this.invalidFieldClass).join("")),-1!==e.indexOf(this.validFieldClass)&&(this.element.className=e.split(this.validFieldClass).join(" "))},removeMessageAndFieldClass:function(){this.removeMessage(),this.removeFieldClass()}},r.Util=d;var m=1,v={};o.getInstance=function(e){if(e){var t=e.nodeName?e:s(e);return t.id||(t.id="formId_"+m++),v[t.id]||(v[t.id]=new o(t)),v[t.id]}},o.prototype={beforeValidate:a,onValid:a,onInvalid:a,afterValidate:a,initialize:function(t){this.name=t.id,this.element=t,this.fields=[],this.oldOnSubmit=this.element.onsubmit||a;var n=this;this.element.onsubmit=function(t){var a=!1;return n.beforeValidate(),n.valid=n.execValidate(n.fields),n.valid?n.onValid():n.onInvalid(),n.afterValidate(),n.valid&&(a=n.oldOnSubmit.call(this,t||e.event)!==!1),a?i:a}},addField:function(e){this.fields.push(e)},removeField:function(e){var t=[],i=this.fields;h(i,function(i){i!==e&&t.push(i)}),this.fields=t},execValidate:function(){var e=!0;return h(this.fields,function(t){var i=t.validate();e&&(e=i)}),e},destroy:function(e){return 0==this.fields.length||e?(this.element.onsubmit=this.oldOnSubmit,v[this.name]=null,!0):!1}},~function(){var t=e.onload;e.onload=function(){var i=s("script[data-run=true]");if(i){var a=i.getAttribute("data-container"),l=n(a);r.init(l),t&&t.call(e)}}}(),"function"==typeof define&&define.amd?define("Validation",[],function(){return r}):e.Validation=r}(this,document);