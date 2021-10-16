import { Context } from 'https://deno.land/x/oak/mod.ts';
// import { MobilePhoneSchema } from '../models/mobile-phone.ts';
import mobilePhoneService from '../service/mobile-phone.ts';

// const { cwd } = Deno;

class Controller {
  static async save(ctx: Context) {
    // const bodyValue = await ctx.request.body();
    const { value } = ctx.request.body({ type: 'json' });
    const { model_name, size, spec, ram, rom, seria_number } = await value;
    // console.log({ model_name, size, spec, ram, rom, seria_number });

    const result = await mobilePhoneService.save({ model_name, size, spec, ram, rom, seria_number });
    console.log('insert employee:' + result);
    ctx.response.body = { _id: result };
  }

  static async findAll(ctx: any) {
    const employees = await mobilePhoneService.findAll({});
    // console.log(employees);
    ctx.response.body = employees;
  }

  static async findById(ctx: any) {
    const id: string = ctx.params.id;
    console.log('id:' + id);
    const employee = await mobilePhoneService.findById(id);
    console.log(employee);
    ctx.response.body = employee;
  }

  static async update(ctx: any) {
    const { value } = ctx.request.body({ type: 'json' });
    const { _id, model_name, size, spec, ram, rom, seria_number } = await value;

    const updatedEmployee = await mobilePhoneService.update(_id, { model_name, size, spec, ram, rom, seria_number });
    ctx.response.body = updatedEmployee;
  }

  static async deleteById(ctx: any) {
    const id = ctx.params.id;
    const result = await mobilePhoneService.deleteById(id);
    ctx.response.body = { count: result };
  }
}

export default Controller;
