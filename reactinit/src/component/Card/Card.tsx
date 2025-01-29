interface Props {
    children: React.ReactNode,
    text?: string
}

function Card({ text, children }: Props) {
    return (
        <section>
            <header>
                <h1>{text}</h1>
            </header>
            {children}
        </section>
    )
}

export default Card