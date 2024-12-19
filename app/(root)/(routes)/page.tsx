import Catagories from "@/components/Catagories";
import Companions from "@/components/Companions";
import SearchInput from "@/components/SearchInput";
import prismadb from "@/lib/prismadb";
import React from "react";

interface RootPageProps {
  searchParams: {
    catagoryId: string;
    name: string;
  };
}

const RootPage = async ({searchParams}:RootPageProps) => {
  const data = await prismadb.companion.findMany({
    where:{
      catagoryId:searchParams.catagoryId,
      name:{
        search:searchParams.name
      }
    },
    orderBy:{
      createdAt:"desc"
    },
    include:{
      _count:{
        select:{
          messages:true
        }
      }
    }
  })

  
  const catagory = await prismadb.catagory.findMany();
  return (
    <div className=" h-full p-4 space-y-2">
      <SearchInput />
      <Catagories data={catagory} />
      <Companions data={data}/>
    </div>
  );
};

export default RootPage;
