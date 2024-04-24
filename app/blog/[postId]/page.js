'use client'
import Detail from "@/app/components/detail"
import Sidebar from "@/app/components/sidebar"
import { GlobalContext } from "@/app/context/GlobaProvider"
import { useContext } from "react"



export default function Page({ params }) {
  const {model} = useContext(GlobalContext)

  return (
   <>
   <Detail postId={params.postId}/>
   {model && <Sidebar/>}

   </>
  )
}
