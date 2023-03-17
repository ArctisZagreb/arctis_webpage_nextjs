import { defineField, defineType } from "sanity";

export default defineType({
  name: "archibusProducts",
  title: "Archibus Products",
  type: "document",
  fields: [
    defineField({
      name: "mainMenuItem",
      title: "main Menu Item",
      type: "document",
      fields: [
        defineField({
          name: "name",
          title: "Main Menu Name",
          type: "string",
        }),
        defineField({
          name: "icon",
          title: "Icon",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "headerImg",
          title: "Header Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "subMenuItem",
          title: "Sub Menu List",
          type: "array",
          of: [
            {
              name: "name",
              title: "Sub Menu Document",
              type: "document",
              fields: [
                defineField({
                  name: "name",
                  title: "Sub Menu Name",
                  type: "string",
                }),
                defineField({
                  name: "body",
                  title: "Body",
                  type: "blockContent",
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
});
