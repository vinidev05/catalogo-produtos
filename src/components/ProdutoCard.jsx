export default function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "10px",
      width: "200px"
    }}>
      <img src={imagem} alt={nome} style={{ width: "100%" }} />
      <h3>{nome}</h3>
      <p><strong>R$ {preco}</strong></p>
      <p>{descricao}</p>
    </div>
  )
}
