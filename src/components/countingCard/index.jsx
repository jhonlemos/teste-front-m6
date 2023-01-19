import "./style.css";

const CountingCard = ({ resultData }) => {
  return (
    <div className="counting-container">
      <div className="container-text">
        <h4 className="title-counting">Você receberá:</h4>
        <div className="line"></div>
        {resultData === "" ? (
          <>
            <p className="counting">
              Amanhã: <b>R$ 00,00</b>
            </p>
            <p className="counting">
              Em 15 dias: <b>R$ 00,00</b>
            </p>
            <p className="counting">
              Em 30 dias: <b>R$ 00,00</b>
            </p>
            <p className="counting">
              Em 90 dias: <b>R$ 00,00</b>
            </p>
          </>
        ) : (
          <>
            <p className="counting">
              Amanhã: <b>R$ {resultData["1"]}</b>
            </p>
            <p className="counting">
              Em 15 dias: <b>R$ {resultData["15"]}</b>
            </p>
            <p className="counting">
              Em 30 dias: <b>R$ {resultData["30"]}</b>
            </p>
            <p className="counting">
              Em 90 dias: <b>R$ {resultData["90"]}</b>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CountingCard;
