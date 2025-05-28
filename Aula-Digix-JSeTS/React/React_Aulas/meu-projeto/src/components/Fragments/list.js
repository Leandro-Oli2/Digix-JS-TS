import Item from "./item"
function List(){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2020}/>
                <Item marca="Mustang" ano_lancamento={2026}/>
                <Item/>
            </ul>
        </>
    )
}
export default List