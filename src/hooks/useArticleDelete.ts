import { partcrossAxios as axios } from '../apis/axios';
import { articleKeys } from '../constants/articleKey';
import { useMutation, useQueryClient } from 'react-query';

async function ArticleDelete(id: number): Promise<void> {
  await axios.delete(`/api/v1/articles/${id}`);
}

interface UseArticleDelete {
  mutate: () => void;
}

export function useArticleDelete(id: number): UseArticleDelete {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => ArticleDelete(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(articleKeys.all);
    },
  });
  return { mutate };
}
