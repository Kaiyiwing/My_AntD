import React from 'react'
import { Menu, MenuProps } from './menu'
import SubMenu, { SubMenuProps } from './subMenu'
import MenuItem, { MenuItemProps } from './menuItem'

export type IMenuComponent = React.FC<MenuProps> & {
  Item?: React.FC<MenuItemProps>
  SubMenu?: React.FC<SubMenuProps>
}

let TransMenu: IMenuComponent = Menu
TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu
