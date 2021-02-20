import React from 'react'
import {skills} from '../context'


const Skills = () => {
    return(
        <>
            <h6>{skills.minititle}</h6>
            <h2>{skills.title}</h2>
            <div className="list-of-skills row">
                {skills.SkillsIcons.map(item => {
                    return(
                        <div className="col" key={item.name}>{item.name}<i>{item.icon}</i></div>
                    )
                })}
            </div>
        </>
    )
}

export default Skills