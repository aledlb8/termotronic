import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Termotronic'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

export const footerLinks = [
  {
    title: "Compañia",
    items: [
      { title: "Acerca", href: "#" },
      { title: "Socios", href: "#" },
      { title: "Trabajos", href: "#" },
      { title: "FAQ", href: "#" },
    ],
  },
  {
    title: "Producto",
    items: [
      { title: "Seguirdad", href: "#" },
      { title: "Distribuidores", href: "#" },
      { title: "Fabricacion", href: "#" },
      { title: "Especificaciones", href: "#" },
    ],
  },
  {
    title: "Blog",
    items: [
      { title: "Instalacion Termotronic", href: "#" },
      { title: "Instalacion CBX", href: "#" },
      { title: "Utilizacion del KIT", href: "#" },
      { title: "Experiencia", href: "#" },
    ],
  },
];

export const collections = {
  'blog': blogCollection,
};