import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "./style.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Inputs = ({ setResultData }) => {
  const [boolean, setBoolean] = useState(false);

  const history = useHistory();

  const formSchema = yup.object().shape({
    amount: yup.number(),
    installments: yup.number(),
    mdr: yup.number(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  function errorApi() {
    axios
      .post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  function calculate(data) {
    setBoolean(true);
    axios
      .post(
        "https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=5000",
        data,
      )
      .then((response) => {
        console.log(response.data);
        setResultData(response.data);
        setBoolean(false);
      })
      .catch((err) => {
        errorApi();
        history.push("/error");
      });
  }

  return (
    <form onSubmit={handleSubmit(calculate)} className="card-input">
      <div className="div-container-input">
        <h3 className="title">Simule sua Antecipação</h3>

        <div className="div-text-input">
          <label className="label-input">Informe o valor da venda *</label>
          <input
            {...register("amount")}
            name="amount"
            className="input-number"
            placeholder="R$ 1.000,00 "
            type="number"
          ></input>
        </div>
        <div className="div-text-input">
          <label className="label-input">Em quantas parcelas *</label>
          <input
            {...register("installments")}
            name="installments"
            className="input-number"
            type="number"
          ></input>
          <p className="paragraph-input">Máximo de 12 parcelas</p>
        </div>

        <div className="div-text-input">
          <label className="label-input-top">
            Informe o percentual de MDR *
          </label>
          <input
            {...register("mdr")}
            name="mdr"
            className="input-number"
            type="number"
          ></input>
        </div>
        <div className="container-button">
          {boolean === false ? (
            <button className="button-enviar" type="submit">
              Enviar
            </button>
          ) : (
            <button disabled className="button-enviar">
              ...Enviar
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Inputs;
