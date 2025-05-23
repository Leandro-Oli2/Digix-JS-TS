import React from "react";


const Cardproduto = ({nome, preco, descricao, imagem}) => {
    return(
        <div className="card-produto">
            <img src={imagem} alt={nome} />
            <h2>{nome}</h2>
            <p className="preco">R$ {preco.toFixed(2)}</p>
            <p className="descricao">R$ {descricao}</p>
        </div>
    )
};

export default Cardproduto;