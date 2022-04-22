import React from "react";
import Link from 'next/link'
import {useRouter} from 'next/router'
function FooterBar(){
    const router = useRouter();
    return(
<>
<div class="sticky-nav ">
<ul style={{listStyle:"none",display:"contents"}}>
    <li className={router.pathname=="/Search" ? "active" : ""}>
<Link href="/Search"><span><i class="fa fa-search " aria-hidden="true" /></span></Link>
    </li>   
     <li className={router.pathname=="/Chats" ? "active" : ""}>
    <Link href="/Chats"><span> <i class="fas fa-comment-dots " /></span></Link>
    </li>
    <li className={router.pathname=="/About" ? "active" : ""}>
    <Link href="/About"><span> <i class="fas fa-user " /></span></Link>
    </li>
</ul>
    </div>
</>
    )
}
export default FooterBar;