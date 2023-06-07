import styled from "styled-components";

export const MainDiv = styled.div`
    min-width: clamp(150px, 100%, 500px);
`

export const Ul = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: .5rem;


`

export const Li = styled.li`
    width: 100%;
    height: 5rem;
    padding: 8px 14px;
    border-left: ${({isEntry}) => isEntry ? "4px solid var(--color-color-secondary)" : "4px solid var(--color-grey-2)" };
    border-radius: 4px;
    background-color: var(--color-grey-1);
    display: flex;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .money{
        text-align: right;
    }
`

export const Button = styled.button`
    border: none;
    font-size: .75rem;
    padding: 5px;
    background-color: var(--color-grey-2);
`