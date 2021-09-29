import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TwitterIcon from '@mui/icons-material/Twitter';
import UpdateIcon from '@mui/icons-material/Update';

function Contenedor({ frase, autor, handleClick }) {

    return (
        <Container maxWidth="sm" sx={{ mt: 2 }}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Frase del día
                    </Typography>
                    <Typography variant="h5" component="div">
                        {frase}
                    </Typography>
                    <Typography sx={{ mt: 1.5, textAlign: 'right' }} color="text.secondary">
                        - {autor}
                    </Typography>
                </CardContent>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    <CardActions>
                        <Button variant="contained" size="small" startIcon={<TwitterIcon />} href={`https://twitter.com/intent/tweet?text="${frase}" -${autor}`} >Retweet</Button>
                    </CardActions>
                    <CardActions>
                        <Button variant="contained" size="small" color="success" startIcon={<UpdateIcon />} onClick={handleClick} >New Quote</Button>
                    </CardActions>
                </Grid>
            </Card>
        </Container>
    );
}

export default Contenedor;