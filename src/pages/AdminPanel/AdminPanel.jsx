import React from 'react'
// import Navbar from '../../components/Navbar/Navbar'
import MainLayout from '../../components/Navbar/Navbar'

function AdminPanel() {
  return (
    <>
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">

      <MainLayout />

    </div>
    </>
  )
}

export default AdminPanel