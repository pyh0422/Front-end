import './Toss.css';
import notReady from './serviceNot.png'

function HPhone() {

  return (
    <div className="payMain">
      <br></br>
      <div>
        <h4>전화결제</h4>
        <hr></hr>
        <img src={notReady} alt="서비스준비중" width={"800px"}></img>
        </div>
    </div>
  );
}

export default HPhone;