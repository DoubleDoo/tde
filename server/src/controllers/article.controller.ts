import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ArticleService } from '../services/article.service';
import {Article} from "../models/article.model"

@Controller("article")
export class ArticleController {
  constructor(private readonly ArticleService: ArticleService) {}

  @Get()
  getHello(): Article[] {
    return this.ArticleService.getAll();
  }

//   @Get(':id')
//   getById( @Param('id', ParseIntPipe) id: number):Article {
//     // return this.ArticleService.getById(id);
//     return this.ArticleService.getAll()[0];
// }
}

