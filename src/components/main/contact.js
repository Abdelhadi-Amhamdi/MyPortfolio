import React from 'react'
import {contact  , SocilLinks} from '../context'

const Contact = () => {
    return(
        <>
            <h6>{contact.minititle}</h6>
            <h2>{contact.title}</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4>{contact.name}</h4>
                    <h4>Phone : {contact.phone}</h4>
                    <h4>Email : {contact.email}</h4>
                </div>
                <div className="col-md-6 form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" placeholder="Jhon Deo" />
                    <label >Email</label>
                    <input type="email" className="form-control" placeholder="example@email.com" />
                    <label >Message</label>
                    <textarea  cols="43" rows="4" className="form-control" placeholder="message..."></textarea>
                    <button className="btn btn-primary btn-block mt-2" onClick={() => {
                       
                        window.open('mailto:aamhamdi943@gmail.com' , "Gmail");
                    }}>Say Hi</button>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        {SocilLinks.map(item => {
                            return(
                            <div className="col" key={item.id}><a href={item.url} target="_blank" rel="noreferrer">{item.icon}</a></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact