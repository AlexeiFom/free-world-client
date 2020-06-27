import { IArticle } from './iarticle';

export interface INews  {
    articles: IArticle[],
    totalResults: string,
    category: string
}
