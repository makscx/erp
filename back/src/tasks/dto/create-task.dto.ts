import { IsString, IsUUID } from "class-validator";

export class CreateTaskDto {
    @IsString()
    title: string

    @IsString()
    status: string

    @IsUUID()
    userId: string
}
