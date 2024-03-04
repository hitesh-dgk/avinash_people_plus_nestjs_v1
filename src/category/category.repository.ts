import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schema/category.schema';
import { Model } from 'mongoose';
import { CreateCategoryDto, UpdateCategoryDto } from './DTO/Category.dto';
import * as moment from "moment"

@Injectable()
export class CategoryRepository {

    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) { }

    async getAllActiveCategory() {
        return this.categoryModel.find({ is_active: true }, { "name": 1, "is_active": 1, "created_at": 1 }).exec()
    }

    async findCategoryByName(name: string){
        return this.categoryModel.find({ name }, { "name": 1, "is_active": 1, "created_at": 1 }).exec()
    }

    async createNewCategory(categoryData: CreateCategoryDto) {
        let data: any = {...categoryData}
        data.created_at = moment().format("YYYY/MM/DD")
        const createdCat = new this.categoryModel(data);
        return createdCat.save();
    }

    async updateCategory(updateCategory: UpdateCategoryDto) {
        let { category_id, ...rest } = updateCategory
        return this.categoryModel.findByIdAndUpdate(updateCategory.category_id, { ...rest })
    }

}
