import { useState, useEffect } from "react"
import ProdutoCard from "./components/ProdutoCard"

function App() {

  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: "",
    descricao: "",
    imagem: ""
  })

  // Simulação de API
  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        {
          nome: "Camiseta Nike",
          preco: "120",
          descricao: "Camiseta esportiva",
          imagem: "https://via.placeholder.com/200"
        },
        {
          nome: "Tênis Adidas",
          preco: "300",
          descricao: "Tênis confortável",
          imagem: "https://via.placeholder.com/200"
        }
      ])
      setCarregando(false)
    }, 2000)
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setNovoProduto(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!novoProduto.nome || !novoProduto.preco || !novoProduto.descricao) {
      alert("Preencha os campos obrigatórios")
      return
    }

    setProdutos(prev => [...prev, novoProduto])

    setNovoProduto({
      nome: "",
      preco: "",
      descricao: "",
      imagem: ""
    })
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Catálogo de Produtos</h1>

      {carregando ? (
        <p>Carregando produtos...</p>
      ) : (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {produtos.map((p, index) => (
            <ProdutoCard
              key={index}
              nome={p.nome}
              preco={p.preco}
              descricao={p.descricao}
              imagem={p.imagem || "https://via.placeholder.com/200"}
            />
          ))}
        </div>
      )}

      <h2 style={{ marginTop: "30px" }}>Cadastrar novo produto</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px", gap: "10px" }}>
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={novoProduto.nome}
          onChange={handleChange}
        />

        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={handleChange}
        />

        <input
          type="text"
          name="imagem"
          placeholder="URL da imagem (opcional)"
          value={novoProduto.imagem}
          onChange={handleChange}
        />

        <textarea
          name="descricao"
          placeholder="Descrição"
          value={novoProduto.descricao}
          onChange={handleChange}
        />

        <button type="submit">Adicionar</button>
      </form>

    </div>
  )
}

export default App
