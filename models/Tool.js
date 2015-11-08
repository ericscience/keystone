var keystone = require('keystone');

var Tool = new keystone.List('Tool', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Tool.add({
	name: { type: String, required: true }
});

Tool.relationship({ ref: 'CaseStudy', path: 'tools' });

Tool.register();
