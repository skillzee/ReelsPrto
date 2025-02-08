"use client"
import { apiClient } from "@/lib/api-client";
import { IVideo } from "@/models/Video";
import { useEffect, useState } from "react";



export default function Home() {

  const [videos, setvideos] = useState<IVideo[]>([])

  useEffect(()=>{
    const fetchVideos = async () =>{
      try {
        const data = await apiClient.getVideos()
        setvideos(data)
      } catch (error) {
        console.log("Error in fetching videos: ", error);
        
      }
    }
    fetchVideos()
  }, [])

  return (
    <div>
    <h1></h1>
    </div>
  );
}
