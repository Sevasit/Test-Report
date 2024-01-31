import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  HttpCode,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTask.dto';
import { SendTask } from './dto/sendTask.dto';
import { SendPoint } from './dto/sendPoint.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('create')
  @HttpCode(201)
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.tasksService.create(createTaskDto);
  }

  @Get('findAllTask')
  @HttpCode(200)
  async findAll() {
    return await this.tasksService.findAllTasks();
  }

  @Get('findById')
  @HttpCode(200)
  async findById(@Query('id') id: string) {
    return await this.tasksService.findById(id);
  }

  @Get('findByType')
  @HttpCode(200)
  async findByType(@Query('type') type: string) {
    return await this.tasksService.findByType(type);
  }

  @Get('findAllByIdUser')
  @HttpCode(200)
  async findAllByIdUser(@Query('userId') userId: string) {
    return await this.tasksService.findAllByIdUser(userId);
  }

  @Get('findCompleteByIdUser')
  @HttpCode(200)
  async findCompleteByIdUser(@Query('userId') userId: string) {
    return await this.tasksService.findCompleteByIdUser(userId);
  }

  @Get('findPendingByType')
  @HttpCode(200)
  async findPendingByType(@Query('type') type: string) {
    return await this.tasksService.findPendingByType(type);
  }

  @Get('findCompleteByType')
  @HttpCode(200)
  async findCompleteByType(@Query('type') type: string) {
    return await this.tasksService.findCompleteByType(type);
  }

  //For Dashboard
  @Get('findCurrentTaskByType')
  @HttpCode(200)
  async findCurrentTaskByType(@Query('type') type: string) {
    return await this.tasksService.findCurrentTaskByType(type);
  }

  @Get('findTaskCount')
  @HttpCode(200)
  async findTaskCount() {
    return await this.tasksService.findTaskCount();
  }

  @Get('findTaskCountToGraph')
  @HttpCode(200)
  async findTaskCountToGraph() {
    return await this.tasksService.findTaskCountToGraph();
  }

  @Patch('sendTaskApprove')
  @HttpCode(201)
  async sendTaskApprove(@Query('id') id: string) {
    return await this.tasksService.sendTaskApprove(id);
  }

  @Patch('sendTask')
  @HttpCode(201)
  async sendTask(@Body() sendTask: SendTask) {
    return await this.tasksService.sendTask(sendTask);
  }

  @Patch('sendpoint')
  @HttpCode(201)
  async sendPoint(@Body() sendPoint: SendPoint) {
    return await this.tasksService.sendPoint(sendPoint);
  }

  @Delete('delete')
  @HttpCode(201)
  async delete(@Query('id') id: string) {
    return await this.tasksService.delete(id);
  }
}
