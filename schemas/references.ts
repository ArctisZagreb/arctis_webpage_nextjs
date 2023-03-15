import { defineField, defineType } from "sanity";

export default defineType({
  name: "references",
  title: "References",
  type: "document",
  fields: [
    defineField({
      name: "client",
      title: "Client",
      type: "document",
      fields: [
        {
          name: "name",
          title: "Client Name",
          type: "string",
        },
        {
          name: "url",
          title: "website url",
          type: "url",
        },
      ],
    }),
    defineField({
      name: "typeOfWork",
      title: "Type Of Work",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
    }),
    defineField({
      name: "logo",
      title: "Client Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "servicesProvided",
      title: "Services Provided",
      type: "array",
      of: [
        {
          name: "service",
          title: "Service",
          type: "document",
          fields: [
            {
              name: "serviceName",
              title: "Service Name",
              type: "string",
            },
            {
              name: "subservices",
              title: "Subservices List",
              type: "array",
              of: [
                {
                  name: "subserviceName",
                  title: "Subservice Name",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    }),
  ],
});
