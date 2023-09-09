import { partcrossAxios as axios } from '../apis/axios';
import { ArticleDetail } from '../interfaces/article';
import { articleKeys } from '../constants/articleKey';
import { useQuery } from 'react-query';

async function getArticleDetail(id: number): Promise<ArticleDetail> {
  const { data } = await axios.get(`/api/v1/articles/${id}`);
  return data;
}

interface UseArticleDetail {
  article?: ArticleDetail;
}

export function useArticleDetail(id: number): UseArticleDetail {
  const { data: article } = useQuery(articleKeys.detail(id), () => getArticleDetail(id));
  return { article };
}
