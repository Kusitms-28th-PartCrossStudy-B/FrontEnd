import styled from 'styled-components';
import Banner from './components/Banner';
import defaultAxios from '../../apis';
import { useQuery } from 'react-query';
import Post from './components/Post';

export interface Article {
  articleId: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const MainPage = () => {
  const fetchArticle = () => defaultAxios.get('/api/v1/articles');
  const { isLoading, data } = useQuery(['article'], fetchArticle);

  if (isLoading) return <div>loading...</div>;
  const articles = data?.data?.data;
  return (
    <Container>
      <Banner />
      <MainConatiner>
        <FilterContainer></FilterContainer>
        {articles.map(({ articleId, title, description, createdAt, updatedAt }: Article) => (
          <Post
            key={articleId}
            articleId={articleId}
            title={title}
            description={description}
            createdAt={new Date(createdAt)}
            updatedAt={new Date(updatedAt)}
          />
        ))}
      </MainConatiner>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainConatiner = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  box-sizing: border-box;
  padding: 5rem 10rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
