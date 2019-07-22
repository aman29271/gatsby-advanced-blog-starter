import React from 'react'
import footerStyles from './modules/footer.module.scss'
const UserLink = (props)=>{

    return(
        <div>
            {props.link.map((link,index)=>{
                return(
                    <a href={link.username} className={footerStyles.link} key={index}><span>{link.label}</span></a>
                )
            })}
        </div>
    )
}
export default UserLink