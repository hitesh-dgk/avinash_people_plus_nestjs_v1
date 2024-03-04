import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './DTO/Category.dto';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';


@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService, ){}

    @Get("all-active")
    @ApiCreatedResponse({
        description: "Categories are fetched"
    })
    @ApiBadRequestResponse({
        description: "Category fetching failed. Please try again later"
    })
    getAllActiveCategory() {
        return this.categoryService.getAllActiveCategory()
    }

    @Post("add-category")
    @ApiCreatedResponse({
        description: "Category was created successfully"
    })
    @ApiBadRequestResponse({
        description: "Category creation failed. Please check the request data"
    })
    async addNewCategory(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.createNewCategory(createCategoryDto)
    }

    @Put("update-category")
    async updateCategory(@Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoryService.updateNewCategory(updateCategoryDto)
    }
}
