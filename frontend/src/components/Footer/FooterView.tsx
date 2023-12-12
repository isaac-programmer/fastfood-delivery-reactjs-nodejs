import "./index.scss";

export default function FooterView(): JSX.Element {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
        </footer>
    )
}