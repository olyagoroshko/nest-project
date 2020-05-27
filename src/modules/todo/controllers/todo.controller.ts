import { CreateDto, UpdateDto } from './dto';
import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { Todo } from './../entities/todo.entity';


@Controller('rest/todo')
export class TodoController {

  @Get()
  getAllAction(): string {
    return "Todo get all";
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): string {
    return `Todo get one by id = ${id}`;
  }

  @Post()
  cteateAction(@Body() todo: CreateDto): CreateDto {
    console.log(todo);
    return todo;
  }

  @Put(':id')
  updateAction(
    @Param('id') id: string,
    @Body() todo: UpdateDto): UpdateDto {
    console.log(`Search by ID ${id}`);
    console.log(todo, "saved");
    return todo;
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string {
    return `Delete todo by id = ${id}`;
  }
}
