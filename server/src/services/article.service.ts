import { Injectable,ParseIntPipe,Param } from '@nestjs/common';
import {articles} from "../data/articles"
import {Article} from "../models/article.model"

@Injectable()
export class ArticleService {
  getAll(): Article[] {
    // const allUsers = await User.find();
    return articles;
  }
  // getById( @Param('id', ParseIntPipe) id: number): Article {
  //   return articles[id];
  // }
}
