import { z } from "zod";

const schema = z.object({ name: z.string().min(3), email: z.string().email() });
export type UserData = z.infer<typeof schema> //testing to enable intellisense in routes

export default schema;
