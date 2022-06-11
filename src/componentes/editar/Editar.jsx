import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Editar.module.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export function Editar() {
  const { id } = useParams();
  const itens = JSON.parse(localStorage.getItem("itens"));
  const indexDoProduto = itens.findIndex((item) => item.codigo == id);

  const objetoProduto = itens[indexDoProduto];

  const [produto, setProduto] = useState(objetoProduto.produto);
  const [codigo, setCodigo] = useState(objetoProduto.codigo);
  const [categoria, setCategoria] = useState(objetoProduto.categoria);
  const [fornecedor, setFornecedor] = useState(objetoProduto.fornecedor);
  const [valor, setValor] = useState(objetoProduto.valor);

  const atualizar = (e) => {
    e.preventDefault();
    if (
      produto === "" ||
      codigo === "" ||
      categoria === "" ||
      fornecedor === "" ||
      valor === ""
    ) {
      return toast.error("Campos Incompletos!");
    }
    itens[indexDoProduto] = {
      produto,
      codigo,
      categoria,
      fornecedor,
      valor,
    };
    localStorage.setItem("itens", JSON.stringify(itens));
    toast.success("Atualizado com Sucesso!");
  };
  if (codigo == null) {
    return;
  }
  console.log(codigo);
  return (
    <div className={styles.container}>
      <h1 className={styles.subititle}>Cadastro de Produtos:</h1>
      <div className={styles.title}>
        <input
          className={styles.input}
          type="text"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
          placeholder="Nome do Produto"
        />
        <input
          className={styles.input}
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Categoria do Produto"
        />
        <input
          className={styles.input}
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          type="text"
          placeholder="Código do Produto"
          required
        />

        <input
          className={styles.input}
          type="text"
          value={fornecedor}
          onChange={(e) => setFornecedor(e.target.value)}
          placeholder="Nome do Fornecedor"
        />
        <input
          className={styles.input}
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Valor do Produto"
        />
      </div>
      <div className={styles.form}>
        <ToastContainer toastStyle={{ backgroundColor: "black" }} />
        <Link
          to="/list"
          className={styles.button}
          type="submit"
          onClick={atualizar}
        >
          Atualizar
        </Link>
        <Link to="/list" className={styles.button}>
          Listar
        </Link>
      </div>
    </div>
  );
}
