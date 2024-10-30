import { useState } from "react"
import { LinkMenu, ListaMenu, MenuButton, ListaMenuResponsive, LinkMenuResponsive } from "./styles"
import { Menu } from "lucide-react"

export default function Component() {
    const [ isOpen, setIsOpen ] = useState(false)
    
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <ListaMenu>
                <LinkMenu>Credit</LinkMenu>
                <LinkMenu>Debit</LinkMenu>
                <LinkMenu>App</LinkMenu>
                <LinkMenu>Learn</LinkMenu>
            </ListaMenu>

            <MenuButton 
                onClick={toggleMenu}
            >
                <Menu size={40} />
            </MenuButton>

            {
                isOpen ? 
                <ListaMenuResponsive>
                    <LinkMenuResponsive href="/credit">Credit</LinkMenuResponsive>
                    <LinkMenuResponsive href="/">Debit</LinkMenuResponsive>
                    <LinkMenuResponsive href="/">App</LinkMenuResponsive>
                    <LinkMenuResponsive href="/">Learn</LinkMenuResponsive>
                </ListaMenuResponsive>
                : ''
            }
        </>
    )
}
