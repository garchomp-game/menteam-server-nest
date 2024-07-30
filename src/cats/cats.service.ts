import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = [];

  findAll(): string {
    return 'test message';
  }

  findOne(id: number): CreateCatDto {
    // idでcreateCatDtoのidを検索して返す
    return this.cats.find((cat) => cat.id === id);
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

  /**
   * idをもとに更新する
   * @param {number} id
   * @param {CreateCatDto} updateCatDto
   * @returns {string}
   */
  update(id: number, updateCatDto: CreateCatDto): string {
    this.cats.push(updateCatDto);
    return 'this action as a update cat';
  }
}
