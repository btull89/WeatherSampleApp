({
	appDir: '../Scripts',
	baseUrl: './',
	mainConfigFile: '../Scripts/common.js',
	dir: '../Scripts/app-built',
	modules: [
		{
			name: 'common',
			include: [
				'jquery',
				'knockout',
				'knockoutMapping',
				'jsHelper',
				'bootstrap'
			]
		},
			{
			name: './app/views/home/home',
			exclude: ['common']
		},
			{
			name: './app/views/weatherSearch/weatherSearch',
			exclude: ['common']
		},
		],
	onBuildRead: function (moduleName, path, contents) {
		if (moduleName === 'common') {
			return contents.replace('/Scripts','/Scripts/app-built');
		}
		return contents;
	},
	optimize: 'uglify2',
	generateSourceMaps: true,
	preserveLicenseComments: false,
	wrapShim: true
})

