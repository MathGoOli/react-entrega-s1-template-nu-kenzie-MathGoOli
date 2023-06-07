import {Div, Span} from "./style.js"
import {HeaderTitle3} from "../../../../styles/titles.js"

export const Results = ({releaseList}) => {

    return (
        <Div>
            <div>
                <HeaderTitle3>Valor total</HeaderTitle3>
                <p>O valor se refe ao saldo</p>
            </div>
            <div>
                
                <Span>
                    {
                    releaseList.reduce(
                        (accumulator, currentValue) => {accumulator + currentValue
                            if (currentValue.type === "entry") {
                                return accumulator + parseFloat(currentValue.value)
                            } 
                            return accumulator - parseFloat(currentValue.value)
                            
                        }, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                    }
                </Span>
            </div>
        </Div>
    )
}