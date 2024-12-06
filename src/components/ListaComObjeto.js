function ListaComObjeto( {itens} ) {
  return (
    <>
      <h3>Lista com algumas tecnologias</h3>
      { itens.length > 0 ? itens.map( (element, index) => (
          <p key={index}>Nome da tecnologia: {element.tec} --- Onde é usada?? {element.local} </p>
        ) ) : (
          <p>Imprevistos acontecem, esse item não foi carregado :(</p>
        )
        

      }
    </>
  )
}

export default ListaComObjeto