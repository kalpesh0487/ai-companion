import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

const MobileSidebar = ({isPro}:{isPro:boolean}) => {
  
  return (
    <Sheet>
      <SheetTrigger className=" md:hidden pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 bg-secondary pt-10">
        <Sidebar isPro={isPro}/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
