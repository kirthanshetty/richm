/*!
 * jQuery Placeholder plugin
 *
 * This plugin is used to support the HTML5 placeholder attribute on most non-HTML5-compliant browsers.
 * 
 * Usage: $.Placeholder.init({ color : "rgb(0,0,0)" });
 * 
 * Date: Sept 2011
 * Author: Otacon (byf1987_at_gmail.com)
 * Project page: https://code.google.com/p/jquery-placeholder-js/
 * Version: 1.3
 * Changelog: 
    1.3 Added cleanBeforeSubmit global function, so that user can call before submitting form by JS. thanks to Krzysztof (kot**********ztof_at_gmail.com) for contributing this idea and some codes.
    1.2 Added semicolons to the end of function, so that the min version work. thanks to Tony (ty*****_at_gmail.com) for pointing this out and providing fix.
	1.1	Updated the code to meet jQuery plugin format. Added parameterized init. 
 	1.0 Initial release.
 * Tested on: Chrome (latest dev version); IE6 (IETester); IE8 (IETester)
 * Known Issues: 
 * 	Placeholder for Password is currently not supported
 */

define(["jquery"],function(){(function(e){e.Placeholder={settings:{color:"rgb(169,169,169)",dataName:"original-font-color"},init:function(t){t&&e.extend(e.Placeholder.settings,t);var n=function(t){return e(t).val()},r=function(t,n){e(t).val(n)},i=function(t){return e(t).attr("placeholder")},s=function(e){var t=n(e);return t.length===0||t==i(e)},o=function(t){e(t).data(e.Placeholder.settings.dataName,e(t).css("color")),e(t).css("color",e.Placeholder.settings.color)},u=function(t){e(t).css("color",e(t).data(e.Placeholder.settings.dataName)),e(t).removeData(e.Placeholder.settings.dataName)},a=function(e){r(e,i(e)),o(e)},f=function(t){e(t).data(e.Placeholder.settings.dataName)&&(r(t,""),u(t))},l=function(){s(this)&&f(this)},c=function(){s(this)&&a(this)},h=function(){s(this)&&f(this)};return e("textarea, input[type='text']").each(function(t,n){e(n).attr("placeholder")&&(e(n).focus(l),e(n).blur(c),e(n).bind("parentformsubmitted",h),e(n).trigger("blur"),e(n).parents("form").submit(function(){e(n).trigger("parentformsubmitted")}))}),this},cleanBeforeSubmit:function(t){return t||(t=e("form")),e(t).find("textarea, input[type='text']").trigger("parentformsubmitted"),t}}})(jQuery),$(function(){$.Placeholder.init()})});