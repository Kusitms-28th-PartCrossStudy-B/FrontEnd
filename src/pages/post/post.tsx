import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import postApi from '../../apis/postApi';

const PostPage = () => {
  const [title, setTitle] = useState<string>();
  const [subTitle, setSubTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [tag, setTag] = useState({
    study: '',
    health: '',
    drink: '',
  });

  const submitPost = async () => {
    try {
      const response = await postApi().postArticle(title, subTitle, content, [tag.study, tag.health, tag.drink]);
      console.log(response?.data);
    } catch (error) {
      console.log(`posting error : ${error}`);
    }
  };

  return (
    <EContainer>
      <ColumnFlexBox>
        <TextField
          id="filled-multiline-flexible"
          label="제목"
          multiline
          maxRows={1}
          variant="filled"
          style={{ marginTop: '2rem' }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          id="filled-multiline-flexible"
          label="소제목"
          multiline
          maxRows={1}
          variant="filled"
          value={subTitle}
          onChange={(e) => {
            setSubTitle(e.target.value);
          }}
        />
        <TextField
          id="filled-multiline-flexible"
          label="적고 싶은 내용"
          multiline
          maxRows={10}
          variant="filled"
          rows={10}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </ColumnFlexBox>

      <FlexBox style={{ width: '100%', justifyContent: 'space-between' }}>
        <TagItem>
          <TextField
            id="standard-basic"
            label="Study"
            variant="standard"
            fullWidth
            value={tag.study}
            onChange={(e) => {
              setTag((prev) => {
                return {
                  ...prev,
                  study: e.target.value,
                };
              });
            }}
          />
        </TagItem>
        <TagItem>
          <TextField
            id="standard-basic"
            label="Health"
            variant="standard"
            fullWidth
            value={tag.health}
            onChange={(e) => {
              setTag((prev) => {
                return {
                  ...prev,
                  health: e.target.value,
                };
              });
            }}
          />
        </TagItem>
        <TagItem>
          <TextField
            id="standard-basic"
            label="Drink"
            variant="standard"
            fullWidth
            value={tag.drink}
            onChange={(e) => {
              setTag((prev) => {
                return {
                  ...prev,
                  drink: e.target.value,
                };
              });
            }}
          />
        </TagItem>
      </FlexBox>
      <FlexBox style={{ width: '100%', justifyContent: 'flex-end', marginTop: '2%' }}>
        <Button
          variant="contained"
          onClick={() => {
            submitPost();
          }}
        >
          글 저장
        </Button>
      </FlexBox>
    </EContainer>
  );
};

const EContainer = styled.div`
  min-height: 80vh;
  padding: 2rem 10vw 2rem 10vw;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  overflow: hidden;
`;
const FlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const ColumnFlexBox = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
const TagItem = styled.div`
  display: flex;
  flex-grow: 1;
`;

export default PostPage;
