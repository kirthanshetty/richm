function ParallexPosition(e,t,n,r){this.top=e,this.bottom=t,this.speed=n,this.pageHeightLower=this.bottom-this.top<r,this.maxDelta=t+t-e,this.bottomReached=function(e){return this.bottom<=e},this.topAboveView=function(e){return this.top<=e},this.bottomAboveView=function(e){return e>=this.bottom},this.needChange=function(e,t){return this.bottomReached(t)&&this.topAboveView(e)&&!this.bottomAboveView(e)},this.getTop=function(e,t,n){var i=this.pageHeightLower?0:r+this.top-this.bottom;return this.speed?i-(e-this.top)*this.speed:i}}function ParallexRelEl(e,t){e.css("position","relative"),this.speed=e.data("speed"),this.speed||(this.speed=.2),this.scroll=function(n){e.css("top",(t-n)*this.speed)}}function ParallexEl(e,t,n){var r=this;this.el=e,this.top=t,this.bottom=t+e.outerHeight(),this.position=new ParallexPosition(t,this.bottom,e.data("speed"),n),this.relEls=e.find(".rel_position"),this.relParallex=[],this.relEls.each(function(e,t){var n=new ParallexRelEl($(t),r.top);n.scroll(0),r.relParallex.push(n)}),this.posChanged=!1,this.init=function(){this.el.css({position:"absolute",top:this.top})},this.scrollToMe=function(){$("html").animate({scrollTop:this.top},500)},this.updatePos=function(e,t,n){this.position.needChange(e,t)?(this.el.css({top:this.position.getTop(e,t,n),position:"fixed"}),this.posChanged=!0):this.posChanged&&(this.el.css({top:this.top,position:"absolute"}),this.posChanged=!1);for(var r=0;r<this.relParallex.length;r++)this.relParallex[r].scroll(e)}}function Parallex(e,t){var n=this,r=$(e),i=$(window);this.init=function(){this.parallexEls=[];var e=0;r.each(function(){var r=new ParallexEl($(this),e,screen.height-t);n.parallexEls.push(r),r.init(),$(this).data("parallexel",r),e+=$(this).outerHeight()}),this.totalHeight=e},this.init(),i.on("scroll",function(){var e=i.scrollTop()-t,r=e+screen.height-t;for(var s=0;s<n.parallexEls.length;s++)n.parallexEls[s].updatePos(e,r,t)})};