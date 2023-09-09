import styled from 'styled-components';
import { useState } from 'react';
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
  tagList: string[];
}

const FilterList = ['study', 'health', 'drink'];

interface FilterType {
  study: string;
  health: string;
  drink: string;
}

const FilterToKorean: FilterType = {
  study: '스터디',
  health: '헬스',
  drink: '술',
};

const MainPage = () => {
  const fetchArticle = () => defaultAxios.get('/api/v1/articles');
  const { isLoading, data } = useQuery(['article'], fetchArticle);
  const [selected, setSelected] = useState<string>('');

  if (isLoading) return <div>loading...</div>;
  const articles = data?.data?.data;

  const handleFilter = (selectedFilter: string): void => {
    setSelected(selectedFilter);
  };

  return (
    <Container>
      <Banner />
      <MainConatiner>
        <FilterContainer>
          {FilterList.map((filter) => (
            <Filter onClick={() => handleFilter(filter)} key={filter} isselected={filter === selected}>
              {FilterToKorean[filter]}
            </Filter>
          ))}
        </FilterContainer>
        {articles
          .filter((article: Article) => article.tagList?.includes(selected))
          .map(({ articleId, title, description, createdAt, updatedAt }: Article) => (
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

const Filter = styled.div`
  color: ${({ isselected }) => (isselected ? '#2a83ff' : '#BBB')} !important;
  border-bottom: ${({ isselected }) => (isselected ? '2px solid #2a83ff' : 'none')} !important;
  display: block;
  cursor: pointer;
  padding: 0.5em 1em;
`;
