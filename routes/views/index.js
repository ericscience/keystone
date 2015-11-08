var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		caseStudies: [],
		educations: [],
		workExperiences: []
	};

	// Load the Case Studies
	view.on('init', function(next) {

		var CaseStudy = keystone.list('CaseStudy');

		CaseStudy.model.find()
			.limit(3)
			.where('state', 'published')
			.populate('tools')
			.exec(function(err, results) {
				locals.data.caseStudies = results;
				next(err);
			});

	});

	// Load the Educations
	view.on('init', function(next) {

		var Education = keystone.list('Education');

		Education.model.find()
			.exec(function(err, results) {
				locals.data.educations = results;
				next(err);
			});

	});

	// Load the WorkExperiences
	view.on('init', function(next) {

		var WorkExperience = keystone.list('WorkExperience');

		WorkExperience.model.find()
			.exec(function(err, results) {
				locals.data.workExperiences = results;
				next(err);
			});

	});

	// Load the Publications
	view.on('init', function(next) {

		var Publication = keystone.list('Publication');

		Publication.model.find()
			.exec(function(err, results) {
				locals.data.publications = results;
				next(err);
			});

	});

	// Render the view
	view.render('index');

};
