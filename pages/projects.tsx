import type { NextPage } from 'next'
import Head from 'next/head'
import Portfolio from "../components/Portfolio";

const Projects: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Catherine Siller | Projectsß</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Portfolio />
    </div>
  )
}

export default Projects
