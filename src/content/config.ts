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
    title: "Quienes Somos",
    items: [
      { title: "Acerca", href: "/nosotros" },
      { title: "Contactos", href: "/contact" },
    ],
  },
  {
    title: "Producto",
    items: [
      { title: "Termotronic", href: "/products/termotronic" },
      { title: "CBX", href: "/products/cbx" },
      { title: "Información", href: "/información" },
    ],
  },
  {
    title: "Blog",
    items: [
      { title: "Instalando un Termotronic", href: "/blog/instalando-un-termotronic" },
      { title: "Uso e instalación de kit de plomería", href: "/blog/uso-kit-plomeria" },
      { title: "Experiencia", href: "/blog/experiencia" },
    ],
  },
];

export const collections = {
  'blog': blogCollection,
};