
import { Container, Stack } from "@mui/material";
import faroDelatnero from "../data/FaroDelantero.json";
import farosNeblineros from "../data/FarosNeblineros.json";
import dimensiones from "../data/Dimensiones.json";
import lucesTraseras from "../data/LucesTraseras.json";
import escape from "../data/Escape.json";
import llantas from "../data/Llantas.json";
import rines from "../data/Rines.json";
import useCreateRadioButtons from "../components/hooks/useCreateRadioButtons";
import { useBreakpoints } from "../components/hooks/useBreakpoints";

export default function Exterior() {const { mobile} = useBreakpoints();
    const FaroDelantero = useCreateRadioButtons(faroDelatnero, 'exterior', 'start', 'exterior', 'faroDelantro');
  const FarosNeblineros = useCreateRadioButtons(farosNeblineros, 'exterior', 'start', 'exterior', 'farosNeblineros');
  const Dimensiones = useCreateRadioButtons(dimensiones, 'exterior', 'start', 'exterior', 'dimensions');
  const LucesTraseras = useCreateRadioButtons(lucesTraseras, 'exterior', 'start', 'exterior', 'lucesTraseras');
  const Escape = useCreateRadioButtons(escape, 'exterior', 'start', 'exterior', 'escape');
  const Llantas = useCreateRadioButtons(llantas, 'exterior', 'start', 'exterior', 'llantas');
  const Rines = useCreateRadioButtons(rines, 'exterior', 'start', 'exterior', 'rines');
  return (
    <Container sx={{marginBottom: '30px'}} size="xl">
          <Stack
            sx={{
              h4:  {
                fontSize: "1.5em",
                margin: ".5em",
                fontWeight: 'normal',
                textTransform: 'capitalize',
                textWrap: "nowrap",
                "span:nth-child(2)": {
                    fontWeight: 'bold'
                },
                "span:only-child": {
                    fontWeight: 'bold'
                }
              },
              flexWrap: "wrap",
              width: '100%'
            }}
            
            direction="row"
            justifyContent={mobile ? "center" : ""}
            spacing={0}
            flexWrap={true}
            whiteSpace={false}
          >
            <Stack justifyContent={ mobile? 'center': ''} minWidth="305px">
              {FaroDelantero}
            </Stack>
            <Stack justifyContent={ mobile? 'center': ''} minWidth="305px">
              {LucesTraseras}
            </Stack>
            <Stack justifyContent={ mobile? 'center': ''} minWidth="305px">
              {Llantas}
            </Stack>
            <Stack justifyContent={ mobile? 'center': ''} minWidth="305px">
              {FarosNeblineros}
            </Stack>
            <Stack justifyContent={ mobile? 'center': ''} minWidth="305px">
              {Escape}
            </Stack>
            <Stack justifyContent={ mobile? 'center': ''} minWidth="305px">
              {Rines}
            </Stack>
            <Stack justifyContent={ mobile? 'center': ''} minWidth="305px">
              {Dimensiones}
            </Stack>
          </Stack>
        </Container>
  )
}
