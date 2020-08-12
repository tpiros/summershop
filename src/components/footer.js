import React from 'react'

function Footer({ metaData }) {

  return (
    <footer className="flex p-2 bg-black text-white text-sm border-t-2 border-red-600 justify-center">
      © {metaData.title}, {new Date().getFullYear()}. Brought to you by {metaData.author} (<a className="link underline" href={metaData.companyWebsite}>{metaData.company}</a>)
    </footer>
  )
}

export default Footer