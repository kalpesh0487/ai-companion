
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface props {
  src: string;
  name:string;
}

const BotAvatar = ({ src,name }: props) => {
  return <Avatar className="h-12 w-12">
    <AvatarImage src={src}></AvatarImage>
    <AvatarFallback className=" bg-primary/10 text-2xl flex justify-center items-center">{name[0]}</AvatarFallback>
  </Avatar>;
};

export default BotAvatar;
