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
        <div className="admin_container"  >
        <Tabs aria-label="Full width tabs" style="fullWidth">
        <Tabs.Item active title="Profile" icon={HiUserCircle}>
            <div className="admin-user-info">
                <h1 className="text-center"><strong>Welcome to your admin page</strong></h1>
           <div className="custom_admin_user">
            <div className="admin-flex">
          <img className="user-logo" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user logo"></img>
          <p>{user?.username}</p>
          </div>
          </div>
          <div className="admin-user-info2">
          <p style={{color: 'gray'}}className="text-center">You are currently logged in with email : {user?.email}</p>
          <p style={{color: 'gray'}}className="text-center">Role : {user?.role == 0 ? 'user' : 'admin'}</p>
          </div> 
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