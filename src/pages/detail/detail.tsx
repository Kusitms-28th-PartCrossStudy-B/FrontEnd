import styled from 'styled-components';
import { useArticleDetail } from '../../hooks/useArticleDetail';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import { useArticleDelete } from '../../hooks/useArticleDelete';

const DetailPage = () => {
  const { id } = useParams();
  const { article } = useArticleDetail(Number(id));
  const articleDelete = useArticleDelete(Number(id));
  const navigate = useNavigate();

  const handleArticleUpdate = () => {};

  const handleArticleDelete = () => {
    articleDelete.mutate();
    navigate('/');
  };

  return (
    <>
      {article && (
        <>
          <Banner>
            <Title>{article.data.title}</Title>
            <DetailBox>
              <Button onClick={handleArticleUpdate}>글 수정</Button>
              <Button onClick={handleArticleDelete}>글 지우기</Button>
            </DetailBox>
          </Banner>
          <Content>{article.data.description}</Content>
          <TagBox>{article.data.tagList && article.data.tagList.map((tag) => <Tag>study</Tag>)}</TagBox>
        </>
      )}
    </>
  );
};

export default DetailPage;

const Banner = styled.div`
  width: 100%;
  background: #2a83ff;
  padding: 2rem 10rem;
`;

const DetailBox = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 2.6rem;
  color: white;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  border: 3px solid #2a83ff;
  border-radius: 8px;
  margin: 2rem 10rem;
  padding: 1.5rem;
  min-height: 8rem;
`;

const TagBox = styled.div`
  display: flex;
  padding: 0 10rem;
`;

const Tag = styled.div`
  background: #818a91;
  border-radius: 20px;
  padding: 0.5rem 0.7rem;
  color: white;
  margin-right: 0.5rem;
`;
