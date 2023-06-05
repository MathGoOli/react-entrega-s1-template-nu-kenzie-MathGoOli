import {HeaderTitle2, TextCaption} from "../../../styles/titles.js"
import {Ul, Li, Button, MainDiv} from "./style.js"

export const Summary = ({releaseList, setReleaseList}) => {
    const excludeLi = (id) => {
        setReleaseList(releaseList.filter(item => item.id !== id))
    }
    return(
        <MainDiv>
            <HeaderTitle2>Resumo financeiro</HeaderTitle2>
            <Ul>
                { releaseList.length === 0 ? <HeaderTitle2>Você ainda não possui nenhum lançamento</HeaderTitle2>: null}
                {releaseList.map(({id, type, description, value}) => {
                    
                    return(
                        <Li isEntry={(type === "entry")} key={id}>
                            <div>
                                <TextCaption isBold={true}>{description}</TextCaption>
                                <TextCaption isBold={false}>{type==="entry" ? "Entrada": "Saída"}</TextCaption>
                            </div>
                            <div>
                                <TextCaption className="money" isBold={false}>{Number(value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</TextCaption>
                                <Button onClick={() => {excludeLi(id)}}>Excluir</Button>
                            </div>

                        </Li>
                )})}
            </Ul>
        </MainDiv>

    )
}