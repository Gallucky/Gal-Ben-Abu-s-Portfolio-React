import { Container, Typography } from "@mui/material";

const Main = () => {
    return (
        <Container
            sx={{
                width: "100vw",
                bgcolor: "tomato",
                height: "100vh",
                flex: "row",
                justifyItems: "start",
            }}>
            <Typography variant="h1" sx={{ ml: -1, pt: 1 }}>
                This is the main page.
            </Typography>
        </Container>
    );
};

export default Main;
