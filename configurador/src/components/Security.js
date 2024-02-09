import React from 'react'
import sensorDeProximidad from "../data/SensorDeProximidad.json";
import sensorDesvioDeCarril from "../data/SensorDesvioDeCarril.json";
import sensorAlarmaPuntoCiego from "../data/SensorAlarmaPuntoCiego.json";
import sistemaAntiVuelco from "../data/SistemaAntiVuelco.json";
import useCreateRadioButtons from "./hooks/useCreateRadioButtons";
import {
    Grid,
    Stack,
  } from "@mui/material";
export default function Security() {
    const SensorDeProximidad = useCreateRadioButtons(
        sensorDeProximidad,
        "interior",
        "start", 'seguridad', 'sensorDeProximidad'
      );
      const SensorDesvioDeCarril = useCreateRadioButtons(
        sensorDesvioDeCarril,
        "interior",
        "start", 'seguridad', 'sensorDevisoDeCarril'
      );
      const SensorAlarmaPuntoCiego = useCreateRadioButtons(
        sensorAlarmaPuntoCiego,
        "interior",
        "start", 'seguridad', 'sensorAlarmaPuntoCiego'
      );
      const SistemaAntiVuelco = useCreateRadioButtons(
        sistemaAntiVuelco,
        "interior",
        "start", 'seguridad', 'sistemaAntiVuelco'
      );
  return (
    <>
    <h2 className="page-header" style={{width: 'fit-content'}}>Seguridad</h2>
    <Stack
      className="interior-container"
      sx={{
        label: {
          margin: 0,
        },
        h3: {
          margin: 0,
        },
        "div.MuiGrid-root": {
          margin: 0,
        },
      }}
      direction="row"
      spacing={1}
    >
      <Grid
        alignSelf="flex-start"
        container
        width="fit-content"
        sx={{ paddingRight: "10%" }}
      >
        <Grid sx={{ width: "100%" }} container item>
          <Stack>
            <Stack height="1em"></Stack>
            <Stack height="1em"></Stack>
            <Stack
              justifyContent="space-between"
              spacing={0}
              sx={{
                "&.MuiStack-root h4": { m: 0 },
                "&.MuiStack-root div.SiNo": {
                  display: "flex",
                  gap: "40px",
                },
              }}
              direction="row"
            >
              <div></div>
              <div className="SiNo">
                <h4 style={{ display: "inline" }}>SI</h4>
                <h4 style={{ display: "inline-block" }}>NO</h4>
              </div>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <h5 style={{ padding: 0, margin: 0 }}>
                Sensor de proximidad/impacto
              </h5>
              {SensorDeProximidad}
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <h5 style={{ padding: 0, margin: 0 }}>
                Sensor desvio de carril
              </h5>
              {SensorDesvioDeCarril}
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <h5 style={{ padding: 0, margin: 0 }}>
                Sensor alarma punto ciego
              </h5>
              {SensorAlarmaPuntoCiego}
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <h5 style={{ padding: 0, margin: 0 }}>Sistema antivuelco</h5>
              {SistemaAntiVuelco}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
    </>
  )
}
