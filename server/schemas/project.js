export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(3).error('A title of min. 3 characters is required'),
        Rule.max(60).warning('Shorter titles are usually better'),
      ],
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(10).error('A title of min. 10 characters is required'),
        Rule.max(160).warning('Shorter titles are usually better'),
      ],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }],
    },
    {
      name: 'githubUrl',
      title: 'Github Url',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(10).error('A title of min. 10 characters is required'),
      ],
    },
    {
      name: 'demoUrl',
      title: 'Demo Url',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(10).error('A title of min. 10 characters is required'),
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
