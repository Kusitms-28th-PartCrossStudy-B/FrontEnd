import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Header = () => {
  const navigate = useNavigate();
  const handleArticleCreate = () => {
    navigate('/editor');
  };
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderStyle>
      <Logo src={logo} alt="logo" onClick={handleLogoClick} />
      <ArticleCreate onClick={handleArticleCreate}>글 쓰기</ArticleCreate>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 10rem;
`;

const Logo = styled.img`
  width: 8rem;
  cursor: pointer;
`;

const ArticleCreate = styled.div`
  color: #b2b2b2;
  cursor: pointer;
`;
