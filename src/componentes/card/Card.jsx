import styles from "./Card.module.css";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Card(valor) {
  var data = valor.product
  if (data == null) { return }
  const formatarPreco = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(data.valor);
  const deletar = (e) => {
    var produtos = JSON.parse(localStorage.getItem("itens")),
      produtos = produtos.filter(
        (produtos) => produtos.codigo !== data.codigo
      );
    localStorage.setItem("itens", JSON.stringify(produtos));
  };

  return (

    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Link to={`/editar/` +data.codigo} product={data} className={styles.button}>
          <FaPen />
        </Link>
        <button onClick={deletar} className={styles.button}>
          <FaTrashAlt />
        </button>
      </div>

      <div className={styles.cardinfo}>
        <p className={styles.texttitle}>{data.produto} </p>
        <p className={styles.textbody}>
          <strong>Categoria:</strong> {data.categoria}
        </p>
        <p className={styles.textbody}>
          <strong>Código: </strong>
          {data.codigo}
        </p>
        <p className={styles.textbody}>
          <strong>Fornecedor: </strong>
          {data.fornecedor}
        </p>
      </div>
      <div className={styles.cardfooter}>
        <span className={styles.texttitle}>{formatarPreco}</span>
      </div>
    </div>
  );
}