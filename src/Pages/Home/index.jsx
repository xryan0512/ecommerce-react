import { useState, useEffect } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import { apiUrl } from "../../Api"

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`)
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log('Error al obtener los datos', err)
      }

    }
    fetchData()
  }, [])
  return (
    <Layout className='bg-red-100'>
      Home
      {
        items?.map((item) => {
          return <Card />
        })
      }

    </Layout>
  )
}

export default Home
