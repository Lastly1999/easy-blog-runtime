import React, { PropsWithChildren } from 'react'
import contentStyle from "./Content.module.css"

type ContentProps = {

}

const Content: React.FC<PropsWithChildren<ContentProps>> = (props) => {
	return (
		<main className={contentStyle.appContentContainer}>
			{props.children}
		</main>
	)
}

export default Content