import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) { }

  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({ data: createTaskDto })
  }

  async findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: string) {
    return this.prisma.task.findFirst({
      where: {
        id
      }
    })
  }

  async findByUserId(id: string) {
    return this.prisma.task.findMany({
      where: {
        userId: id
      },
      include: {
        user: true
      }
    })
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: {
        id
      },
      data: updateTaskDto
    })
  }

  remove(id: string) {
    return this.prisma.task.delete({
      where: {
        id
      }
    })
  }
}
