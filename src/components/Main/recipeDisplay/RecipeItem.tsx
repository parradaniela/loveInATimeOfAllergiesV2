type PropsType = {
    url: string,
    imgSrc: string,
    label: string
}

const RecipeItem = ({ url, imgSrc, label }: PropsType) => {
    return (
        <a href={url}>
            <img src={imgSrc} alt={label} />
            <p>{label}</p>
        </a>
    )
}

export default RecipeItem