import React, { PropsWithChildren } from 'react'
import HeaderStyle from "./Header.module.css"

type IHeaderProps = {
}

const Header: React.FC<PropsWithChildren<IHeaderProps>> = (props) => {
	return (
		<header className={HeaderStyle.appHeaderContainer}>
			{props.children}
		</header>
	)
}

export default Header