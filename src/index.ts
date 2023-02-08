import { Application } from 'oak';
import router from './routes/routing.ts';

const app = new Application();

// static content
app.use(async (context, next) => {
  try {
    await context.send({
      root: `${Deno.cwd()}/src/public`,
      index: "index.html",
    });
  } catch {
    await next();
  }
});


app.use(router.routes());
app.use(router.allowedMethods());

console.log('Server Port 8000');

await app.listen({ port: 8000 });

// import { Application } from 'https://deno.land/x/oak/mod.ts';
// import { APP_HOST, APP_PORT } from './config/config.ts';
// import router from './routes/routing.ts';
// import notFound from './handlers/notFound.ts';
// import errorMiddleware from './middlewares/error.ts';

// const app = new Application();

// app.use(errorMiddleware);
// app.use(router.routes());
// app.use(router.allowedMethods());
// app.use(notFound);

// console.log(`Listening on ${APP_PORT}...`);

// // await app.listen(`${APP_HOST}:${APP_PORT}`);

// await app.listen({ port: 3000 });
