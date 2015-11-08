var keystone = require('keystone');

var Education = new keystone.List('Education', {
	map: { name: 'degree' },
	autokey: { path: 'slug', from: 'degree', unique: true },
	defaultSort: 'order'
});

Education.add({
  order: { type: Number, index: true },
	degree: { type: String, required: true },
  institution: {type: String},
  dates: { type: String },
	focus: { type: String },
	thesis: { type: String },
  advisor: { type: String },
  gpa: { type: String }
});

Education.defaultColumns = 'degree, institution|20%';
Education.register();
