import React from "react";
import Link from 'next/link'
function FooterBar(){
    return(
<>
<div class="sticky-nav">
<a> <i class="fa fa-search active" aria-hidden="true"></i></a>
<a> <i class="fas fa-comment-dots"></i></a>
 <a> <i class="fas fa-user"></i></a>
    </div>
</>
    )
}
export default FooterBar;