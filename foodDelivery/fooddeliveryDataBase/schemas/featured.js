import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (rule) => rule.required()
    }),

    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (rule) => rule.max(200)
    }),

    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'restaurant' }] }]
    }),
  ],
})
