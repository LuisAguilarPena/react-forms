import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello KAVAK!</h1>
    <p>Welcome to my react forms example.</p>
    <Form />
    <br />
    <Link to="/unique-emails/"> Go to the unique emails algorithm</Link> <br /><br />
  </Layout>
)

export default IndexPage
