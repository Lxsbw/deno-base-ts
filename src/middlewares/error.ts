import { Response } from 'oak';

export default async ({ response }: { response: Response }, next: () => Promise<unknown>) => {
  try {
    await next();
  } catch (err) {
    response.status = 500;
    response.body = { msg: err.message };
  }
};
