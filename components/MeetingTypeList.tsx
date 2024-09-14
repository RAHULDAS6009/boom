"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduledMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  function createMeeting() {

  }
  return (
    <section
      className="grid grid-cols-1 gap-5 
  md:grid-cols-2 xl:grid-cols-4"
    >
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New meeting"
        description="Start an instant meeting"
        handleClick={() => {
          setMeetingState("isInstantMeeting");
        }}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join meeting"
        description="Via invitation link"
        handleClick={() => {
          setMeetingState("isJoiningMeeting");
        }}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Join meeting"
        description="Via invitation link"
        handleClick={() => {
          setMeetingState("isScheduledMeeting");
        }}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        handleClick={() => {
          router.push("/recordings");
        }}
        className="bg-yellow-1"
      />
      <MeetingModal
      isOpen={meetingState === "isInstantMeeting"}
      onClose={()=>setMeetingState(undefined)} 
      title="Start an instant meeting"
      buttonText="Start  Meeting"
      className="text-center"
      handleClick={createMeeting }
      // image="/icons/add-meeting.svg"
           />    

    </section>
  );
};

export default MeetingTypeList;
