require.config({
    paths: {
        jquery: 'vendor/jquery-1.9.1.min',
    }
});

require([
    'jquery', 'navigations', 'search', 'customselect', 'jobs_pagination'
],function($){
	_richemontCareers.Navigation();
});