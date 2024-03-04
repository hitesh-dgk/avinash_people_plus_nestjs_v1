import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from './DTO/Category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {

    constructor(private categoryRepository: CategoryRepository) {}

    async getAllActiveCategory() {
        try {
            const result = await this.categoryRepository.getAllActiveCategory()
            return result;
        } catch(error: any) {
            throw new BadRequestException(error.message)
        }
    }

    async createNewCategory(categoryData: CreateCategoryDto) {
        try {
            const existingResult = await this.categoryRepository.findCategoryByName(categoryData.name)
            if(existingResult.length > 0) {
                return existingResult[0]
            }
            const result = await this.categoryRepository.createNewCategory(categoryData)
            return result;
        } catch (error: any) {
            throw new BadRequestException(error.message)
        }
        
    }

    async updateNewCategory(updateCategoryData: UpdateCategoryDto) {
        try {
            const result = await this.categoryRepository.updateCategory(updateCategoryData)
            result.name = updateCategoryData.name
            result.is_active = updateCategoryData.is_active
            console.log(result)
            return result
        } catch (error: any) {
            throw new BadRequestException(error.message)
        }
        
    }

}
