import './MyPageBar.css';

function MyPageBar() {
  return (
    <div>
      <h2 style={{marginLeft : "10%", marginBottom : "2%", fontSize : "25px"}}>- 마이페이지</h2>


      <ul className='ulList'>
        <li><a className="job" href="0">나의 판매 물품</a></li>
        <li><a href="/listPages">내가 등록한 물품</a></li>
        <li><a href="/listPages">판매중</a></li>
        <li><a href="/listPages">판매 취소 완료</a></li>
        <li><a href="/listPages">판매 완료</a></li>
        <li><a className="job" href="0">나의 구매 물품</a></li>
        <li><a href="1">구매중</a></li>
        <li><a href="2">구매 취소완료</a></li>
        <li><a href="3">구매 취소</a></li>
        <li><a className="job" href="0">마일리지 관리</a></li>
        <li><a href="1">마일리지 내역</a></li>
        <li><a href="2">마일리지 충전</a></li>
        <li><a className="job" href="0">나의 정보 관리</a></li>
        <li><a href="/updateInfo">회원정보 수정</a></li>
        <li><a href="2">관심 물품</a></li>
        <li><a href="/deleteInfo">회원 탈퇴</a></li>
      </ul>
    </div>
  );
}

export default MyPageBar;