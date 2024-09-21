import React, { useEffect } from 'react';

const KakaoLoginButton = () => {
  useEffect(() => {
    // Kakao SDK 초기화
    const kakaoScript = document.createElement('script');
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.min.js';
    document.head.appendChild(kakaoScript);

    kakaoScript.onload = () => {
      if (window.Kakao) {
        window.Kakao.init('44da575fdc2771642842be16007c8cba'); // 여기에 본인의 카카오 앱 키를 입력
        console.log(window.Kakao.isInitialized()); // true로 출력되면 초기화 완료
      }
    };
  }, []);

  // 카카오 로그인 함수
  const loginWithKakao = () => {
    const redirectUri = 'http://localhost:3007/auth/kakao/callback'; // Redirect URI 설정
    const clientId = '44da575fdc2771642842be16007c8cba'; // 본인의 카카오 앱 키
    const authUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code`;

    // 인가 요청 URL로 리다이렉트
    window.location.href = authUrl;
  };

  return (
    <button onClick={loginWithKakao}>
      카카오 로그인
    </button>
  );
};

export default KakaoLoginButton;
