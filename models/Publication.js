var keystone = require('keystone');
var Types = keystone.Field.Types;

var Publication = new keystone.List('Publication', {
  map: { name: 'title' },
  defaultSort: '-date'
});

Publication.add({
  venue: { type: String },
  title: { type: String },
  date: { type: Types.Date,  index: true },
  description: { type: Types.Textarea  },
  file: {
  	type: Types.LocalFile,
  	dest: './public/files',
  	prefix: '/files/',
  	filename: function(item, file){
      var name = item.title.replace(/\s+/g, '-').toLowerCase();
      name = item._.date.format('YYYY') + '-' + name;
  		return  name + '.' + file.extension;
  	}
  }
});

Publication.defaultColumns = 'title, venue|30%, date|20%';
Publication.register();
