import axios from 'axios';

const postApi = () => {
  const instance = axios.create({
    baseURL: 'https://koeyhk.shop',
    //timeout: 3000,
  });

  const postArticle = async (title, description, body, tagList) => {
    try {
      const response = await instance.post('/api/v1/articles', {
        title: title,
        description: description,
        body: body,
        tags: tagList,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const getArticle = async (id) => {
    try {
      const response = await instance.get(`/api/v1/articles/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const modifyArticle = async (title, description, body, tagList) => {
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

  return { postArticle, getArticle, modifyArticle };
};

export default postApi;
