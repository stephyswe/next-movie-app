import dynamic from 'next/dynamic'
import { FC } from 'react'

import AuthItems from '../auth/AuthItems'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.types'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.ul}>
        {items.map((item) => {
          if (item.title) {
            return <MenuItem key={item.link} item={item} />
          }
        })}
        {title === 'General' ? <AuthItems /> : null}
      </ul>
    </div>
  )
}

export default Menu
