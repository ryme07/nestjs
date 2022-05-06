
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export abstract class AbstractService {

    protected constructor(protected readonly repository: Repository<any>) {

    }

    async all(): Promise<any[]> {
        return this.repository.find();
    }

    async getById(id: number): Promise<any> {
        return this.repository.findOne(id)
    }

    async create(data): Promise<any> {
        return this.repository.save(data)
    }

    async update(id: number, body): Promise<any> {
        return this.repository.update(id, body)
    }

    async delete(id: number): Promise<any> {
        return this.repository.delete(id)
    }
}
