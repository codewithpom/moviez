import Head from 'next/head'
import { useState, useEffect } from "react"
import Form from '../components/parts/Form'
import Table from '../components/parts/Table';
import Seo from '../components/seo';

export default function Home() {
  const [movies, setMovies] = useState([]);


  return (
    <div className="container pb-5">
      <Head>
        <Seo />
      </Head>

      <Form func={setMovies} /> {/* Form here */}
      <br />
      <Table movies={movies} /> {/* Table here */}

    </div>
  )
}
