var keystone = require('keystone');
var Types = keystone.Field.Types;

var Testimonial = new keystone.List('Testimonial', {
  map: { name: 'name' },
  defaultSort: 'order'
});

Testimonial.add({
  name: { type: String },
  company: { type: String },
  title: { type: String },
  photo: {
    type: Types.LocalFile,
    dest: './public/images/people',
    prefix: '/images/people',
    filename: function(item, file){
      var name = item.name.replace(/\s+/g, '-').toLowerCase();
      return  name + '.' + file.extension;
    },
    format: function(item, file){
  		return '<img src="/images/people/'+file.filename+'" style="width: 100px; border-radius: 100%;">';
  	}
  },
  quote: { type: Types.Textarea },
  order: { type: Number }
});

Testimonial.defaultColumns = 'photo|140px, name, company, quote';
Testimonial.register();
