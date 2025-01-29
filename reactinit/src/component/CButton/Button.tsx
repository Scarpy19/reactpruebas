interface Props {
    text: string
    func: () => void
}

function Button({ text, func }: Props) {
    return (
        <button onClick={func}>
            {text}
        </button>
    )
}

export default Button