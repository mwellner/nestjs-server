import { Controller, Get, Body, Post, Param, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.entity';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  @Get()
  async findAll(): Promise<Array<Course>> {
    return this.courseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Course> {
    return this.courseService.findOne(id);
  }

  @Post()
  async addCourse(@Body() body: Course) {
    return this.courseService.upsert(body);
  }

  @Put()
  async updateCourse(@Body() body: Course) {
    return this.courseService.upsert(body);
  }
}
