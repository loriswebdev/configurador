import { useMediaQuery } from "@mui/material";




export function useBreakpoints(){
    const breakpoints = {
        mobile: useMediaQuery('(max-width: 540px)'),
        tablet: useMediaQuery('(max-width: 850px'),
        laptop: useMediaQuery('(max-width: 1080px)')

    }

    return breakpoints
}


