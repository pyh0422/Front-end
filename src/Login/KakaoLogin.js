
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

function KakaoLogin() {
  const URL = window.location.href;
  const match = /code=([^&]+)/.exec(URL);
  const navigate = useNavigate();

  if(match) {
    const code = decodeURIComponent(match[1]);
    
    axiosInstance.post('/oauth/kakao', {code:code})
      .then(response => {
        const jwt = response.headers.authorization;
        console.log(response);
        
        if(jwt) {
          sessionStorage.setItem('jwt', jwt);
          navigate('/');
        }
        
      }).catch(error => {
        console.log(error);   
      })  
    }

  return (
    <div>

      <h1>로그인 처리중</h1>

    </div>

  );
}

export default KakaoLogin;