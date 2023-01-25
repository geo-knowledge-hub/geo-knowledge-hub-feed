/*
 * This file is part of GEO-Knowledge-Hub-CMS.
 * Copyright (C) 2023 GEO Secretariat.
 *
 * GEO-Knowledge-Hub-CMS is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ as, children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
      <div>
        <Navbar currentPageId={as === "post" ? "post" : "blog"} />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
