import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Article } from '../main';

interface dateType {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

const Post: React.FC<Article> = ({ articleId, title, description, createdAt, updatedAt }) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<dateType | null>(null);

  const handleClick = () => {
    navigate(`/article/${articleId}`);
  };

  const trimDate = () => {
    if (updatedAt) {
      setDate({
        year: updatedAt.getFullYear(),
        month: updatedAt.getMonth(),
        day: updatedAt.getUTCDate(),
        hour: updatedAt.getHours(),
        minute: updatedAt.getMinutes(),
        second: updatedAt.getSeconds(),
      });
      return;
    }
    setDate({
      year: createdAt.getFullYear(),
      month: createdAt.getMonth(),
      day: createdAt.getUTCDate(),
      hour: createdAt.getHours(),
      minute: createdAt.getMinutes(),
      second: createdAt.getSeconds(),
    });
  };

  useEffect(() => {
    trimDate();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <HeaderLeft>
          <img src="https://part-cross-study.vercel.app/kusitm.svg" alt="logo" />
          <InfoText>
            <h3>{articleId}</h3>
            {date && <pre>{`${date.year}. ${date.month}. ${date.day} ${date.hour}:${date.minute}:${date.second}`}</pre>}
          </InfoText>
        </HeaderLeft>
        <HeartButton>♥️</HeartButton>
      </HeaderContainer>
      <TextContainer onClick={handleClick}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>더보기...</span>
      </TextContainer>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.25rem;
  border-bottom: 1px solid #bbb;

  margin-top: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 0.25rem;
  img {
    width: 32px;
    height: 32px;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;

  pre {
    color: #bbb;
    font-size: 0.8rem;
    display: block;
  }
`;

const HeartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #2a83ff;
  background-image: none;
  background-color: transparent;
  border: 1px solid #2a83ff;
  font-weight: 400;
  line-height: 1.25;

  padding: 0.3rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;

  box-sizing: border-box;

  height: 26.83px;

  cursor: pointer;

  &:hover {
    border: 1px solid #fff;
    color: #fff;
    background-color: #2a83ff;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  margin-bottom: 1rem;
  cursor: pointer;

  h3 {
    font-weight: 600;
    font-size: 1.5rem;
  }

  p {
    color: #999;
    font-weight: 300;
    line-height: 1.3rem;
    font-size: 1rem;

    margin-bottom: 1rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 300;
    color: #bbb;
    vertical-align: middle;
  }
`;
