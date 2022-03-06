import React from 'react'
import Popup from './Popup';

const PostInput = () => {
    const [isOpen, setIsOpen] = React.useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
    return <div>
      <input
        type="button"
        value="Click to Open Popup"
        onClick={togglePopup}
      />




      
      {isOpen && <Popup
        content={<>
          <b>Design your Popup</b>
          <button>Test button</button>
        </>}
        handleClose={togglePopup}
      />}
    </div>
}

export default PostInput