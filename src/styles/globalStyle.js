import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	/* reset */
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		font-family: "Nunito";
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		width: 100vw;
		line-height: 1;
	}
	section{
		margin:1rem 1rem;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	button{
		cursor: pointer;
	}

	.body {
		font-size: 12px;
		font-family: "Nunito";
		font-weight: 400;
		font-style: normal;
		line-height: 22px;
		text-decoration: none;
		text-transform: none;
	}

	section{
		margin-top: 20px;
		width: 100%;
	}

	:root {
		--color-color-primary: rgba(253,55,126,1);
		--color-color-primary-2: rgba(227,73,129,1);
		--color-color-secondary: rgba(3,184,152,1);
		--color-grey-4: rgba(33,37,41,1);
		--color-grey-3: rgba(52,58,64,1);
		--color-grey-2: rgba(233,236,239,1);
		--color-grey-1: rgba(248,249,250,1);
	}
	
	.headline {
		font-size: 16px;
		font-family: "Nunito";
		font-weight: 400;
		font-style: normal;
		line-height: 26px;
		text-decoration: none;
		text-transform: none;
	}

	main{
		width: 100%;
		display: flex;
		justify-content: center;

	}

`