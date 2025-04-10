"use client";
import { useState } from "react";


const Community = () => {
    console.log("Community COmponent -- Pages Routeing");
    const [title,setTitle] = useState<string>("hello")
    return <div>Community
        <button onClick={()=> alert("Hello")}> Press me</button>
    </div>
};
export default Community;

