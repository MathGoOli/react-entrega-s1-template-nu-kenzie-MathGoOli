import styled from "styled-components"

export const Div = styled.div`
    margin-top: .5rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;

    border: 2px solid var(--color-grey-2);

    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    h4{
        font-size: 0.75rem;
	    font-weight: 600;
	    line-height: 1.625rem;
    }
    p{
        font-size: 0.75rem;
	    font-weight: 400;
	    line-height: 1.625rem;
    }
`

export const Span = styled.span`
    color: var(--color-color-primary);
    font-weight: 700;
    font-size: 1rem;
`