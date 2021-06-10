import * as React from "react"
import * as notFoundPageStyles from "../modules/404.module.scss";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout title={'error'}>
      <div className={notFoundPageStyles.error}>the page you were looking for was not found!</div>
    </Layout>
  )
}

export default NotFoundPage
