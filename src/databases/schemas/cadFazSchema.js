import { tableSchema } from "@nozbe/watermelondb";

export const cadFazSchema = tableSchema({
  name: "cadFaz",
  columns: [
    {
      name: "nomefaz",
      type: "string",
    },
    {
      name: "proprietario",
      type: "string",
    },
    {
      name: "tipoprod",
      type: "string",
    },
  ]
});
