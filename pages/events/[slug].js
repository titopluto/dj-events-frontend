import { useRouter } from 'next/router'
import Layout from "../../components/Layout"


export default function EventPage() {
    const router = useRouter()

    console.log(router)

    return (
        <Layout title="Add Event">
           <h1> Event Page </h1> 
        </Layout>
    )
}
