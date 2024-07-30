import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a cat with ID: ${id}`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return this.catsService.create(createCatDto);
  }

  @Post('multi')
  multiCreate(@Body() createDto: CreateCatDto[]): string {
    return this.catsService.multiCreate(createDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto): string {
    const cat: CreateCatDto = this.catsService.findOne(id);
    return this.catsService.update(cat, updateCatDto);
  }
}
