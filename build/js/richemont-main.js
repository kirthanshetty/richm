document.body.scrollTop=document.documentElement.scrollTop=0,$(function(){parallex=new Parallex(".page",$("header").outerHeight()),$(".container.main").height(parallex.totalHeight),Navigation();var e=MaisonBox($(".maisons_lists"),function(){parallex.init(),$(".container.main").height(parallex.totalHeight)});$(window).resize(function(){parallex.init(),$(".container.main").height(parallex.totalHeight)});var t=WhyworkUs($(".page_4 .section_main")),n=CareerPath($(".page_5 .inner_content"))});