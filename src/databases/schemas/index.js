import { appSchema } from "@nozbe/watermelondb";

import { cadFazSchema } from "./cadFazSchema";

export const schemas = appSchema({
  version: 2,
  tables: [cadFazSchema]
});
