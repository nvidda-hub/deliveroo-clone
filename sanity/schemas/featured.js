import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured Category Name',
      type: 'string',
      validation:Rule => Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation:Rule => Rule.max(200)
    },
    {
      name: 'restaurents',
      title: 'Restaurents',
      type: 'array',
      of:[{type:'reference',to:[{type:"restaurent"}]}]
    },
  ],
})