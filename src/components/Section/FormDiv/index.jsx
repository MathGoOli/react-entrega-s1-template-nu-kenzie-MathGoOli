import { v4 as uuidv4 } from 'uuid'

import {Form, Div, Label} from "./style.js"
import {Results} from "./Results/index.jsx"
import { useState } from "react"

export const FormDiv = ({releaseList, setReleaseList}) => {
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("entry")

    const submit = (e) => {
        e.preventDefault()
        const newItem = {id: uuidv4(),description, value, type}
        setReleaseList((releaseList) => [...releaseList, newItem])

    }
    return(
        <Div>
            <Form onSubmit={submit}>
                <Label isBold={true} htmlFor="">Descrição</Label>
                <input placeholder="Digite aqui sua descrição" value={description} onChange={(e) => {setDescription(e.target.value)}} required/>
                <Label>Ex: compra de roupas</Label>
                <Label isBold={true} htmlFor="">Valor (R$)</Label>
                <input type={"number"} placeholder="1" value={value} onChange={(e) => setValue(e.target.value)} required/>
                <Label isBold={true} htmlFor="">Tipo de valor</Label>
                <select onChange={(e) => setType(e.target.value)}>
                    <option value="entry">Entrada</option>
                    <option value="out">Saida</option>
                </select>
                <button type="submit">Inserir Valor</button>

            </Form>

            <Results releaseList={releaseList}></Results>

        </Div>
    )
}