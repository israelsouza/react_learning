function Lista( {itens} ) {
  return (
    <>
      <h3>Lista com algumas tecnologias</h3>
      {
        itens.map( (element, index) => (
          <p key={index}>elemento: {element} </p>
        ) )

      }
    </>
  )
}

export default Lista