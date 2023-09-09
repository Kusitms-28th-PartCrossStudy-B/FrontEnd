import axios from 'axios';

const postApi = () => {
  const instance = axios.create({
    baseURL: 'https://kusitms.shop',
    //timeout: 3000,
  });

  const postArticle = async (title, description, body, tagList) => {
    try {
      const response = await instance.post('/api/v1/articles', {
        title: title,
        description: description,
        body: body,
        tagList: tagList,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return { postArticle };
};

export default postApi;
