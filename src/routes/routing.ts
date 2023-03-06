import { Router } from '../deps.ts';
import Controller from '../controller/mobile-phone.ts';

const router = new Router();

router.post('/api/mobile-phone/create', Controller.save);
router.get('/api/mobile-phone/findall', Controller.findAll);
router.get('/api/mobile-phone/findone/:_id', Controller.findById);
router.put('/api/mobile-phone/update', Controller.update);
router.delete('/api/mobile-phone/delete/:_id', Controller.deleteById);

router.get('/hello', context => {
  context.response.body = { mess: 'hello deno!' };
});

router.get('/swagger', context => {
  context.response.redirect('/');
});

export default router;
