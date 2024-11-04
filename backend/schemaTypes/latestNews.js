import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'latestNews',
  title: 'LatestNews',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'types',
      title: 'Types',
      type: 'string',
      initialValue: () => 'latestNews',
      readOnly: false, // Make the field non-editable
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Launch Scheduled At',
      name: 'launchAt',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    }),
  ],
  preview: {
      select: {
        title: 'title',
        types:'type',
        media: 'image',
      },
    },
})
