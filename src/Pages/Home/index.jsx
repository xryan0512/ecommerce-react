import { useState, useEffect } from "react"
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import { apiUrl } from "../../Api"
import ProductDetail from "../../components/ProductDetails";
import SideMenu from "../../components/SideMenu";

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
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => {
            return <Card key={item.id} data={item} />
          })
        }
      </div>
      <SideMenu />

    </Layout>
  )
}

export default Home
