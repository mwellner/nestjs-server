import { Get, Controller, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('hbs')
export class HbsController {
  @Get()
  root(@Res() response: Response): void {
    const viewName = Math.random() > 0.5 ? 'index_42' : 'index';
    const message = 'Dynamic content of web page';

    return response.render(viewName, { message });
  }
}
