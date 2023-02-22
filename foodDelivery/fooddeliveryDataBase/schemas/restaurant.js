import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200)
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'image of restaurant',
    }),

    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of restaurant',
    }),

    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude of restaurant',
    }),


    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'rating',
      type: 'string',
      title: 'Enter a string from (1-5 Stars)',
      validation: (Rule) => Rule.required().min(1).max(5).error('Please enter a value between 1 and 5')
    }),

    defineField({
      name: 'type',
      type: 'reference',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      to: [{ type: 'category' }]
    }),

    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }]
    }),
  ],
})
