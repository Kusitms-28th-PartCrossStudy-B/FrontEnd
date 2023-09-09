import styled from 'styled-components';

const Banner = () => (
  <BannerContainer>
    <img src="https://part-cross-study.vercel.app/kk.png" alt="image1" />
    <BannerText>
      <h3>kusitms</h3>
      <pre>파트 크로스 스터디에 오신 것을 환영합니다!</pre>
    </BannerText>
    <img src="https://part-cross-study.vercel.app/kk.png" alt="image2" />
  </BannerContainer>
);

export default Banner;

const BannerContainer = styled.div`
  display: flex;
  background-color: #2a83ff;

  width: 100%;
  height: 10em;

  img {
    width: 400px;
    opacity: 0.3;
  }
`;
const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 20px;

  padding: 2rem 0;
  box-sizing: border-box;

  h3 {
    font-family: 'titillium web', 'sans-serif';
    color: white;
    font-size: 3.5rem;
  }
  pre {
    color: white;
    font-size: 1.5rem;
  }
`;
