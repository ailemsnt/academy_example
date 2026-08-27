import { Body, Controller, Post } from '@nestjs/common';
import { InstrutorService } from './instrutor.service';
import { LoginDto } from './dto/login.dto';

@Controller('instrutores/login')
export class InstrutorLoginController {
  constructor(private readonly instrutorService: InstrutorService) {}

  @Post()
  login(@Body() createInstrutorDto: LoginDto) {
    return this.instrutorService.login(createInstrutorDto);
  }
}
