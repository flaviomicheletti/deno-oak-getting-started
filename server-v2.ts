import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const port: number = 8080;

app.use((ctx) => {
  ctx.response.body = "Hello world!";
});

console.log("running on port ", port);

await app.listen({ port });
