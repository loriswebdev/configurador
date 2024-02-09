import { styled } from "@mui/material/styles";
import { Button, CssBaseline, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";

export default function Page4() {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(red[500]),
        textTransform: "capitalize",
        fontFamily: "inherit",
        fontSize: "1.5rem",
        borderRadius: 0,
        backgroundColor: red[500],
        "&:hover": {
          backgroundColor: red[700],
        },
      }));
   return( <>
   <div className=''>
            <CssBaseline />
                <Typography align="center" component="h1" gutterBottom>
                    Datos De Contacto
                </Typography>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <form
                        id="contact-form"
                        className={'classes.contactForm'}
                        onSubmit={''}
                        >
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="name"
                                label="Nombre"
                                name="userName"
                                className={'classes.inputField'}
                                onChange={''}
                                margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="email"
                                label="Correo Electronico"
                                name="email"
                                className={'classes.inputField'}
                                onChange={''}
                                margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="phone"
                                label="Telefono de contacto (10 digitos)"
                                name="phone"
                                className={'classes.inputField'}
                                onChange={''}
                                margin="normal"
                                multiline
                                rowsmax="4"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="address"
                                label="Dirección"
                                name="address"
                                className={'classes.inputField'}
                                onChange={''}
                                margin="normal"
                                multiline
                                rowsmax="4"
                                />
                            </Grid>
                            <Grid container direction="row" spacing={2}>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="Cuidad"
                                label="city"
                                name="Cuidad"
                                className={'classes.inputField'}
                                onChange={''}
                                margin="normal"
                                multiline
                                rowsmax="4"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="business"
                                label="Empresa"
                                name="business"
                                className={'classes.inputField'}
                                onChange={''}
                                margin="normal"
                                multiline
                                rowsmax="4"
                                />
                            </Grid>
                            </Grid>
                            <Grid container direction="row" spacing={2} style={{ marginTop: 20 }}>
                            <Grid item >
                                <Button
                                className={'classes.formButton'}
                                type="reset"
                                variant="contained"

                                //disabled={submitting || pristine}
                                >
                                RESET
                                </Button>
                            </Grid>
                            <Grid item >  
                                <ColorButton
                                className={'classes.formButton'}
                                type="submit"
                                >
                                Submit
                                </ColorButton>
                            </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                
            </div> 
    </>
  );    
}
