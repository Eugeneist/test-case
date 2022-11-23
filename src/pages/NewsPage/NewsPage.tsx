import { useState } from "react"
import Container from '@mui/material/Container';
import { PostList, AirButton } from "../../components"

const NewsPage = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth="lg" sx={{padding: "100px 15px"}}>
            <PostList/>
            <AirButton/>
        </Container>


    )
}

export default NewsPage;