import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = [];

  findAll(): string {
    return 'test message';
  }

  findOne(id: number): CreateCatDto {
    return this.cats.find(id);
  }

  create(createCatDto: CreateCatDto): string {
    this.cats.push(createCatDto);
    return 'this action as a new cat';
  }

  multiCreate(createCatDtoList: CreateCatDto[]): string {
    for (const createCatDto of createCatDtoList) {
      this.cats.push(createCatDto);
    }
    return 'this action as a multi new cat';
  }

  update(id: string, updateCatDto: CreateCatDto): string {
    return 'this action as a update cat';
  }
}
