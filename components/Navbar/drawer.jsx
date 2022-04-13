import React, { useState } from 'react'
import { Tabs,Tab, Drawer, ListItemButton, ListItemIcon } from '@mui/material'
import { FastRewindOutlined } from '@material-ui/icons'
import { IconButton, ListItemText ,List} from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';

const DrawerComp=()=>{
    const [openDrawer,setDrawer] = useState(false)
  const [value , setValue] = useState({});

    const page=["Home","FAQ","Policy","Terms"]
return(
  <>
<Drawer  style={{background:"#202427 !important"}} open={openDrawer} onClose={(e)=>setDrawer(!openDrawer)}>
<Tabs style={{display:"grid !important",width:"50vw"}} sx={{marginLeft:"auto", textAlign:"center !important"}} value={value} onChange={(e,value)=>setValue(value)} textColor="inherit">
<ul  >
    <li >
<Tab  sx={{padding:"10px !important"}} label="Home" />
</li>
<li>
<Tab  sx={{padding:"10px !important"}} label="FAQ"/>
</li>
<li>
<Tab  sx={{padding:"10px !important" }} label="Policy"/>

</li><li>
<Tab  sx={{padding:"10px !important"}} label="Terms"/>
</li>
<li>
    <Tab>
    <Button variant='contained'  sx={{color:"black ",background:"#E2C76E ",    width: "25vw ",
    padding: "5px !important"}}>
Sign out
        </Button>      
    </Tab>
</li>
</ul>

</Tabs>
         

    </Drawer>
    <IconButton className='MuiSvgIcon-root ' onClick={()=>setDrawer(!openDrawer)} style={{textAlign:"end"}}>
    <MenuIcon  />

</IconButton>

</>
)
}
export default DrawerComp;