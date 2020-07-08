import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  findAll(): Promise<Array<Course>> {
    return this.courseRepository.find({ relations: ['users'] });
  }

  findOne(id: string): Promise<Course> {
    return this.courseRepository.findOne(id);
  }

  /**
   * Create or update, upsert
   */
  async save(course: Course): Promise<Course> {
    const newCourse = await this.courseRepository.save(course);
    return newCourse;
  }
}
