import React from "react";

import PageHeaderContent from "../PageHeaderContent/PageHeaderContent";
import { MdContactMail } from "react-icons/md";
import { Animate } from "react-simple-animate";

import "./Contact.css";
function Contact() {
  return (
    <section id='contact' className='contact'>
      <PageHeaderContent
        headerText='My Contact'
        icon={<MdContactMail size={40} />}
      />

      <div className='contact_content'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            Transform: "translateX(-200px)",
          }}
          end={{
            Transform: "translateX(0px)",
          }}
        >
          <h3 className='contact_content_header-text'>
            Here you can contact me
          </h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            Transform: "translateX(200px)",
          }}
          end={{
            Transform: "translateX(0px)",
          }}
        >
          <div className='contact_content_form'>
            <div className='contact_content_form_controlswrapper'>
              <div>
                <input required name='name' className='inputname' type='text' />
                <label htmlFor='name' className='namelabel'>
                  Name
                </label>
              </div>

              <div>
                <input
                  required
                  name='email'
                  className='inputEmail'
                  type='text'
                />
                <label htmlFor='email' className='emailabel'>
                  Email
                </label>
              </div>
              <div>
                <textarea
                  name='description'
                  className='inputdescripion'
                  type='text'
                  rows='5'
                />
                <label htmlFor='description' className='descriptionlabel'>
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export default Contact;
