/*!
 * jquery.customSelect() - v0.4.2
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-22
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License 
 */

(function(e){e.fn.extend({customSelect:function(t){if(typeof document.body.style.maxHeight=="undefined")return this;var n={customClass:"customSelect",mapClass:!0,mapStyle:!0},t=e.extend(n,t),r=t.customClass,i=function(t,n){var r=t.find(":selected"),i=n.children(":first"),o=r.html()||"&nbsp;";i.html(o),r.attr("disabled")?n.addClass(s("DisabledOption")):n.removeClass(s("DisabledOption")),setTimeout(function(){n.removeClass(s("Open")),e(document).off("mouseup."+s("Open"))},60)},s=function(e){return r+e};return this.each(function(){var n=e(this),o=e("<span />").addClass(s("Inner")),u=e("<span />"),a=n.position();n.after(u.append(o)),u.addClass(r),t.mapClass&&u.addClass(n.attr("class")),t.mapStyle&&u.attr("style",n.attr("style")),n.addClass("hasCustomSelect").on("update",function(){i(n,u);var e=parseInt(n.outerWidth(),10)-(parseInt(u.outerWidth(),10)-parseInt(u.width(),10));u.css({display:"inline-block"});var t=u.outerHeight();n.attr("disabled")?u.addClass(s("Disabled")):u.removeClass(s("Disabled")),o.css({width:e,display:"inline-block"}),n.css({"-webkit-appearance":"menulist-button",width:u.outerWidth(),position:"absolute",opacity:0,height:t,fontSize:u.css("font-size"),left:a.left,top:a.top})}).on("change",function(){u.addClass(s("Changed")),i(n,u)}).on("keyup",function(e){u.hasClass(s("Open"))?(e.which==13||e.which==27||e.which==9)&&i(n,u):(n.blur(),n.focus())}).on("mousedown",function(e){u.removeClass(s("Changed"))}).on("mouseup",function(t){u.hasClass(s("Open"))||(e("."+s("Open")).not(u).length>0&&typeof InstallTrigger!="undefined"?n.focus():(u.addClass(s("Open")),t.stopPropagation(),e(document).one("mouseup."+s("Open"),function(t){t.target!=n.get(0)&&e.inArray(t.target,n.find("*").get())<0?n.blur():i(n,u)})))}).focus(function(){u.removeClass(s("Changed")).addClass(s("Focus"))}).blur(function(){u.removeClass(s("Focus")+" "+s("Open"))}).hover(function(){u.addClass(s("Hover"))},function(){u.removeClass(s("Hover"))}).trigger("update")})}})})(jQuery),$(".header_right .first_row select, .tab_content_left select, .inner_block div select.styled, .form_submission select").customSelect();