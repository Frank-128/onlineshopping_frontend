"use client"
import { usePathname } from "next/navigation";
import React from "react";
import { 
  Avatar ,
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react'
import { admin_nav_links } from "@/constants";
import Link from "next/link";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { globalVariables } from "@/context/global";

export default function DrawerWithNavigation() {
  
 
  const setSidebar = globalVariables((state)=>state.setOpenSidebar)
  const openSidebar = globalVariables((state)=>state.openSidebar)
  const pathname = usePathname()


  return (
    <React.Fragment>
     
      <Drawer className=' w-full h-fit fixed ' open={openSidebar} overlay={true} onClose={setSidebar}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Onlineshopping
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={setSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
        {
          admin_nav_links.map((item,index)=> 
          <Link  key={index} href={item.link} className="flex items-center gap-2">
          <ListItem className={pathname == item.link ? 'bg-[#9e8282] text-white rounded px-2 py-1':'px-2 py-1'}>
              <ListItemPrefix>
              {React.createElement(item.icon)}
              </ListItemPrefix>
              {item.name}
     
            </ListItem>
            </Link>
          )
      }
         
        </List>
        <div className="flex items-center absolute bottom-5 w-full  justify-center mb-10 text-gray-400 gap-2">
      <FaRegCircleQuestion />
    <span>Support Service</span>
    </div>
      </Drawer>
    </React.Fragment>
  );
}