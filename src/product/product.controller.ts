import { ProductUpdateDto } from './models/product-update.dto';
import { ProductCreateDto } from './models/product-create.dto';
import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';



@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get()
    async all() {
        return this.productService.all()
    }

     @Get(':id')
    async getById(@Param('id') id: number) {
        return this.productService.getById(id)
    }

    @Post()
    async create(@Body() body: ProductCreateDto) {
        return this.productService.create(body)
    }


    @Put(':id')
    async update(@Param('id') id: number, @Body() body: ProductUpdateDto) {

        return this.productService.update(id, body)
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return this.productService.delete(id)
    }
}


