"use client";
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  // user,in below
  const { isLoaded } = useUser();
  const [isSetCompleted, setIsSetCompleted] = useState(false);
  const {call,isCallLoading}=useGetCallById(params.id);

  if(!isLoaded || isCallLoading) return <Loader/> 
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetCompleted ? <MeetingSetup setIsSetCompleted={setIsSetCompleted}/> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting; 
