import {Div, Span} from "./style.js"

export const Results = ({releaseList}) => {

    return (
        <Div>
            <div>
                <h4>Valor total</h4>
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