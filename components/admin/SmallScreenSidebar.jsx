// "use client"
// import { usePathname } from "next/navigation";
// import React from "react";
// import { admin_nav_links } from "@/constants";
// import Link from "next/link";
// import { FaRegCircleQuestion } from "react-icons/fa6";
// import { globalVariables } from "@/context/global";

// export default function DrawerWithNavigation() {
  
 
//   const setSidebar = globalVariables((state)=>state.setOpenSidebar)
//   const openSidebar = globalVariables((state)=>state.openSidebar)
//   const pathname = usePathname()


//   return (
//     <div className="">
     
//       <Drawer className='h-screen w-screen' open={openSidebar} overlay={true} onClose={setSidebar}>
//         <div className="mb-2 flex items-center justify-between p-4">
//           <Typography variant="h5" color="blue-gray">
//             Onlineshopping
//           </Typography>
//           <IconButton variant="text" color="blue-gray" onClick={setSidebar}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </IconButton>
//         </div>
//         <List>
//         {
//           admin_nav_links.map((item,index)=> 
//           <Link  key={index} href={item.link} className="flex items-center gap-2">
//           <ListItem className={pathname == item.link ? 'bg-[#9e8282] text-white rounded px-2 py-1':'px-2 py-1'}>
//               <ListItemPrefix>
//               {React.createElement(item.icon)}
//               </ListItemPrefix>
//               {item.name}
     
//             </ListItem>
//             </Link>
//           )
//       }
         
//         </List>
//         <div className="flex items-center absolute bottom-5 w-full  justify-center mb-10 text-gray-400 gap-2">
//       <FaRegCircleQuestion />
//     <span>Support Service</span>
//     </div>
//       </Drawer>
//     </div>
//   );
// }
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { admin_nav_links } from "@/constants"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaRegCircleQuestion } from "react-icons/fa6"

export default function SmallScreenSidebar() {
    const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className='p-2'>
          <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className='font-sans'>
        <SheetHeader>
          <SheetTitle> Onlineshopping</SheetTitle>
        </SheetHeader>
        <ul>
       {
          admin_nav_links.map((item,index)=> 
          <Link  key={index} href={item.link} className="flex items-center gap-4">
          <li className={pathname == item.link ? 'bg-[#9e8282] text-white rounded px-2 py-1 flex justify-start gap-4 items-center w-48':'px-2 py-1 flex justify-start gap-4 items-center w-48'}>
              <span>
              {React.createElement(item.icon)}
              </span>
              <span className="font-sans">
              {item.name}
              </span>
     
            </li>
            </Link>
          )
      }
         
        </ul>
        <div className="flex items-center absolute bottom-5 w-full  justify-center mb-10 text-gray-400 gap-2">
      <FaRegCircleQuestion />
    <p className="font-sans">Support Service</p>
    </div>
        
      </SheetContent>
    </Sheet>
  )
}
