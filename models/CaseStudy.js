var keystone = require('keystone');
var Types = keystone.Field.Types;

var CaseStudy = new keystone.List('CaseStudy', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	defaultSort: '-publishedDate'
});

CaseStudy.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	goal: { type: String },
	length: { type: String },
	description: { type: Types.Textarea },
	tools: { type: Types.Relationship, ref: 'Tool', many: true }
});

CaseStudy.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

CaseStudy.defaultColumns = 'title, state|20%, publishedDate|20%';
CaseStudy.register();
