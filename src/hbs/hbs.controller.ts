import { Get, Controller, Render } from '@nestjs/common';

@Controller('hbs')
export class HbsController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
