import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const handleClick = (url) => () => {
    navigate(url);
  };

  return (
    <div>
      <button onClick={handleClick('/home')}>마이홈으로</button>
      <br />
      <button onClick={handleClick('/signup')}>회원가입</button>
      <br />
      <button onClick={handleClick('/map')}>그룹 공간으로</button>
      <br />
      <button onClick={handleClick('/login')}>로그인</button>
      <br />
      <button onClick={handleClick('/photo')}>사진 모달</button>
      <br />
      <button onClick={handleClick('/comment')}>방명록 모달</button>
      <br />
      <button onClick={handleClick('/heatmap')}>사진 지도</button>
      <br />
      <button onClick={handleClick('/group')}>그룹 목록</button>
      <br />
      <button onClick={handleClick('/creategroup')}>그룹 생성</button>
      <br />
      <button onClick={handleClick('/group-detail')}>그룹 상세</button>
      <br />
      <button onClick={handleClick('/loading')}>기본 로딩</button>
      <br />
      <button onClick={handleClick('/story-write')}>사연작성 모달</button>
      <br />
      <button onClick={handleClick('/story-read')}>사연읽기 모달</button>
    </div>
  );
};

export default MainPage;
