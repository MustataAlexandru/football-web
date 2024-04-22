import React from "react";
import { UserProvider , useUser } from "../ContextProvider/UserProvider";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Anunturi from "./Anunturi";
import Echipe from "./Echipe";

export default function Admin () {
    const {user} = useUser();
    return (
        <div className="container"  >
        <Tabs aria-label="Full width tabs" style="fullWidth">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
            <div className="margin-top-1">
           <div className="custom_admin_user">
          <img className="user-logo" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user logo"></img>
          <p>{user?.username}</p>
          </div> 
          <p>Email : {user?.email}</p>
          <p>Role : {user?.role == 0 ? 'user' : 'admin'}</p>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Announces" icon={MdDashboard}>
          
          <Anunturi className="margin-negative"/>

        </Tabs.Item>
        <Tabs.Item title="Teams" icon={MdDashboard}>
        
          <Echipe />
        </Tabs.Item>
       
        
      </Tabs>
      </div>
    )
}