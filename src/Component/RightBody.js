import { Box, Checkbox, FormControlLabel, FormGroup, ImageList, ImageListItem, Switch } from '@mui/material'

const RightBody = ({mode,setMode}) => {
  
  return (
    <Box flex={1} p={2}>
      <FormGroup>
       <FormControlLabel control={<Checkbox defaultChecked/>} label="Label" />
       <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
       <FormControlLabel control={<Switch onChange={()=>setMode(mode==='light'?"dark":'light')}/>} label={mode}/>
     </FormGroup>


     <ImageList sx={{ width: '100%'}} cols={2} rowHeight={150}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
    </Box>
  )
}

const itemData=[
  {img:'https://i.pinimg.com/564x/c7/ff/5e/c7ff5e21697d15cce738dafde43555ad.jpg',title:'poster1'},
  {img:'https://i.pinimg.com/564x/4d/9b/e3/4d9be31332beb4afd39db2e6105f133c.jpg',title:'poster2'},
  {img:'https://i.pinimg.com/564x/45/9d/d4/459dd4c345e0b37dd44e78a5169d9081.jpg',title:'poster3'},
  {img:'https://i.pinimg.com/564x/d5/a6/b9/d5a6b94a4f101daf7a2c49fc0290e07a.jpg',title:'poster4'},
]

export default RightBody
