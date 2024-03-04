import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({
    description: "Category Name",
    example: "Web3"
  })
  name: string;

  @ApiProperty({
    description: "Active state of Category",
    example: true
  })
  is_active: boolean;
}


export class UpdateCategoryDto {
  @ApiProperty({
    description: "Category Object ID",
    example: "<db_object_id>"
  })
  category_id: string;
  @ApiProperty({
    description: "Category Name",
    example: "Web3"
  })
  name: string;

  @ApiProperty({
    description: "Active state of Category",
    example: true
  })
  is_active: boolean;
}