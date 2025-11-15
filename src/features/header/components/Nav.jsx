import ListItem from "./ListItem"

function Nav() {
    return (
        <nav className="">
            <ul className="flex flex-col items-center md:flex-row gap-2 p-4 md:p-0">
                <ListItem>Projetos</ListItem>
                <ListItem>Serviços</ListItem>
                <ListItem>Resumo</ListItem>
                <ListItem>Contato</ListItem>
                <ListItem>Sobre mim</ListItem>
            </ul>
        </nav>
    )
}

export default Nav