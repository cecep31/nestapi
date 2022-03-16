// todo/dto/update-todo.dto.ts
import { BasePostDto } from './base-post.dto';

export class UpdatePostDto extends BasePostDto {
  completedAt: Date;
}
