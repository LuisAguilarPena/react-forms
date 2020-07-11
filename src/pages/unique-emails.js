import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Please look at the root of the project for the code, inside emailsUnicos.js.</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
