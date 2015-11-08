var keystone = require('keystone');
var Types = keystone.Field.Types;

var WorkExperience = new keystone.List('WorkExperience', {
  map: { name: 'company' },
  defaultSort: '-dateEnd'
});

WorkExperience.add({
  company: { type: String },
  logo: { type: Types.CloudinaryImage },
  title: { type: String },
  dateStart: { type: Types.Date },
  dateEnd: { type: Types.Date, index: true },
  description: { type: String }
});

WorkExperience.defaultColumns = 'company, title|20%, dateEnd|20%';
WorkExperience.register();
