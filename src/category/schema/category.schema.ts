import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;
@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  is_active: boolean;

  @Prop()
  created_at: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);