typeof _richemontCareers!="object"&&(_richemontCareers={}),_richemontCareers.ParallaxPosition=function(e,t,n,r){this.top=e,this.bottom=t,this.speed=n,this.pageHeightLower=this.bottom-this.top<r,this.maxDelta=t+t-e,this.bottomReached=function(e){return this.bottom<=e},this.topAboveView=function(e){return this.top<=e},this.bottomAboveView=function(e){return e>=this.bottom},this.needChange=function(e,t){return this.bottomReached(t)&&this.topAboveView(e)&&!this.bottomAboveView(e)},this.getDelta=function(e,t){return this.pageHeightLower?e-this.top:t-this.bottom},this.getTop=function(e,t,n){var i=this.pageHeightLower?0:r+this.top-this.bottom;return i+=n,this.speed?i-this.getDelta(e,t)*this.speed:i}},_richemontCareers.ParallaxRelEl=function(e,t){e.css("position","relative"),this.speed=e.data("speed"),this.speed||(this.speed=.2),this.scroll=function(n){e.css("top",(t-n)*this.speed)}},_richemontCareers.ParallaxEl=function(e,t,n,r){var i=this;this.el=e,this.top=t,this.bottom=t+e.outerHeight(),this.position=new _richemontCareers.ParallaxPosition(t,this.bottom,e.data("speed"),n),this.relEls=e.find(".rel_position"),this.relParallex=[],this.relEls.each(function(e,t){var n=new _richemontCareers.ParallaxRelEl($(t),i.top);n.scroll(0),i.relParallex.push(n)}),this.posChanged=!1,this.init=function(){this.el.css({position:"absolute",top:this.top})},this.scrollToMe=function(){$("html,body").animate({scrollTop:this.top-r},1e3)},this.updatePos=function(e,t,n){this.position.needChange(e,t)?(this.el.css({top:this.position.getTop(e,t,n),position:"fixed"}),this.posChanged=!0):this.posChanged&&(this.el.css({top:this.top,position:"absolute"}),this.posChanged=!1),this.el.data("type")=="background"&&this.el.css("background-position","50% "+this.position.getDelta(e,t)+"px");for(var r=0;r<this.relParallex.length;r++)this.relParallex[r].scroll(e)}},_richemontCareers.Parallax=function(e,t){var n=this,r=$(e),i=$(window);if(i.width()<1024||Modernizr.touch){this.init=function(){},this.totalHeight="auto";return}this.init=function(){this.parallexEls=[];var e=t;r.each(function(){var r=new _richemontCareers.ParallaxEl($(this),e,_richemontCareers.getWindowSize().height-t,t);n.parallexEls.push(r),$(this).data("parallexel",r),e+=$(this).outerHeight(),r.init()}),this.totalHeight=e,i.trigger("scroll")},this.init(),i.on("scroll",function(){var e=i.scrollTop()+t,r=i.scrollTop()+_richemontCareers.getWindowSize().height;for(var s=0;s<n.parallexEls.length;s++)n.parallexEls[s].updatePos(e,r,t)})},_richemontCareers.getWindowSize=function(){var e=0,t=0;return typeof window.innerWidth=="number"?(e=window.innerWidth,t=window.innerHeight):document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?(e=document.documentElement.clientWidth,t=document.documentElement.clientHeight):document.body&&(document.body.clientWidth||document.body.clientHeight)&&(e=document.body.clientWidth,t=document.body.clientHeight),{height:t,width:e}};