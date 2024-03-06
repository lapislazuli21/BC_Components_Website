import { Card, CardHeader, CardMedia } from "@mui/material"

const CardPreview = ({ image, title, body, url }) => {
    return (
        <Card className={`border-4 border-primary rounded-xl w-[300px] h-[300px] sm:w-auto sm:h-[280px]`} >
            <a href={url}>
                <CardMedia
                    sx={{ height: "100%", backgroundSize: 'contain', marginLeft: "20px", marginRight: "20px" }}
                    image={image}
                    title={title}
                />
                <CardHeader>{body}</CardHeader>
            </a>
        </Card >
    )
}

export default CardPreview