import styled from "styled-components"

export const HeaderTitle1 = styled.h1`
    font-size: 2.375rem;
	font-weight: 800;
	line-height: 3rem;
`

export const HeaderTitle2 = styled.h2`
    font-size: 1.375rem;
	font-weight: 700;
	line-height: 2.125rem;
`

export const HeaderTitle3 = styled.h3`
	font-size: 1rem;
	font-weight: ${({isBold}) => isBold ? 700 : 400};
	line-height: 1.875rem;
`
export const HeaderTitle4 = styled.h4`
	font-size: 0.75rem;
	font-weight: ${({isBold}) => isBold ? 600 : 400};
	line-height: 1.625rem;
`
export const TextCaption = styled.h4`
	font-size: .5rem;
	font-family: "Nunito";
	
	font-style: normal;
	line-height: 1.125rem;

    font-weight: ${({isBold}) => isBold ? 700 : 400};

`