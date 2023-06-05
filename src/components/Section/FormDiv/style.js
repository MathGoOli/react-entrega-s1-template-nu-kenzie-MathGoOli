import styled from "styled-components"

export const Div = styled.div`
    min-width: clamp(150px, 100%, 450px);

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid var(--color-grey-2);
    gap: .8rem;
    padding: 1rem 2rem;

    input{
        background-color: var(--color-grey-2);
        border: none;
        width: 100%;
        height: 53px;
        padding-left: 5px;
        box-sizing: border-box;

    }

    select{
        padding-left: 2px;
        background-color: var(--color-grey-2);
        border: none;
        width: 100%;
        height: 53px;
        
    }

    option{
        background-color: var(--color-grey-2);
        padding-left: 2px;
        border: none;
        border-radius: 0;
        width: 100%;
        height: 53px;
    }

    button{
        height: 53px;
        width:100%;
        background-color: var(--color-color-primary);
        border: none;
        border-radius: 8px;
        color: var(--color-grey-1);
        box-sizing: border-box;
    }

` 


export const Label = styled.label`

    font-size: .75rem;
    font-family: "Nunito";

    font-style: normal;
    line-height: 1.125rem;

    font-weight: ${({isBold}) => isBold ? 700 : 400};

    align-self: flex-start;
`
