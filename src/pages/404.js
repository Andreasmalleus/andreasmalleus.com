import * as React from "react"
import "../styles/404.scss";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout title={'error'}>
      <div className="error">the page you were looking for was not found!</div>
    </Layout>
  )
}

export default NotFoundPage
