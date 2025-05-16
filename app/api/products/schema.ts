import { z } from "zod";

const schema = z.object({ name: z.string().min(3), price: z.number() });
export type ProductData = z.infer<typeof schema>; //testing to enable intellisense in routes

export default schema;
