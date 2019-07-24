import React from 'react'
import footerStyles from './modules/footer.module.scss'
const UserLink = (props)=>{
    const [ github,] = props.link
    return(
        <div>
            <a href={`https://github.com/${github.username}`} target="_blank" rel="noopener noreferrer" className={footerStyles.link} ><span>{github.label.toUpperCase()}</span></a>
        </div>
    )
}
export default UserLink
