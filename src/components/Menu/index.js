import { ListaMenu } from "./styles"
import ItemMenu from "../ItemMenu"

export default function Component() {
    return (
        <ListaMenu>
            <ItemMenu item="Credit" />
            <ItemMenu item="Debit" />
            <ItemMenu item="App" />
            <ItemMenu item="Learn" />
        </ListaMenu>
    )
}
