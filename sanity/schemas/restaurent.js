import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurent',
  title: 'Restaurent',
  type: 'document',
  fields: [
    {
      name:'restaurent_name',
      type:'string',
      title:'Restaurent Name',
      validation:Rule => Rule.required()
    },
    {
      name:'short_description',
      type:'string',
      title:'Short Description',
      validation:Rule => Rule.max(200)
    },
    {
      name:'image',
      type:'image',
      title:'Image for Restaurent',
    },
    {
      name:'lat',
      type:'number',
      title:'Latitude of Restaurent',
    },
    {
      name:'long',
      type:'number',
      title:'Longitude of Restaurent',
    },
    {
      name:'address',
      type:'string',
      title:'Address of Restaurent',
    },
    {
      name:'rating',
      type:'number',
      title:'Rating of Restaurent',
      validation:Rule => Rule.required().min(1).max(5).error("Please enter a value between 1 and 5")
    },
    {
      name:'type',
      title:'Cateogry',
      validation:Rule => Rule.required(),
      type:'reference',
      to:[{type:"category"}]
    },
    {
      name:'dishes',
      title:'Dishes',
      type:'array',
      of:[{type:"reference", to:[{type:'dish'}]}]
    },
  ],

})
