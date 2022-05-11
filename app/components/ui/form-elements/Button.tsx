import cn from 'classnames'
import { FC } from 'react'

import { IButton } from './form.types'
import styles from './Form.module.scss'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
