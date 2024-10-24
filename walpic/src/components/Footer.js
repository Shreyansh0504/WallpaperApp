import React from 'react'

const Footer = ({dark}) => {
  return (
    <div className={`footer ${dark?"black":""}`}>
      © 2024 Picsbucket. Developed by Shreyansh Tripathi :)
    </div>
  )
}

export default Footer
