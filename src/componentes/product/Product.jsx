import styles from "./Product.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

export function Product() {
  const [produto, setProduto] = useState("");
  const [codigo, setCodigo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (e) =>{
    if(produto === "" || codigo === "" || categoria === "" || fornecedor === "" || valor === ""){
     
      return   toast.error('Campos Incompletos!');
    }

    let itensArray = localStorage.getItem("itens") // Get Previous Comments
    let temp = []

    if(itensArray !== null) {
        temp = [...JSON.parse(itensArray)]
    }

    temp.push( {
      "produto": produto,
      "codigo": codigo,
      "categoria": categoria,
      "fornecedor": fornecedor,
      "valor": valor
    })
    localStorage.setItem("itens", JSON.stringify(temp))
    setProduto("");
    setCodigo("");
    setCategoria("");
    setFornecedor("");
    setValor(""); 
    toast.success('Cadastro Efetuado com Sucesso!');
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.subititle}>Cadastro de Produtos:</h1>
      <div className={styles.title}>
        
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
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Categoria do Produto"
        />
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
      <ToastContainer toastStyle={{ backgroundColor: "black" }}/>
        <button className={styles.button} type="submit" onClick={handleSubmit}>Cadastrar</button>
        <Link to="/list" className={styles.button}>
          Listar
        </Link>
      </div>
    </div>
  );
}
