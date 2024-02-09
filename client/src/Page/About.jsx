import { Button, Stack } from "@mui/material"

const About = () => {
  return (
    <div className="flex w-11/12 m-auto justify-center items-center">
    
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button  variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </div>
  )
}

export default About