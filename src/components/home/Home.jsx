import { Button, Layout } from "antd"
import './styles.css'
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    return (
        <Layout style={{ backgroundColor: "#1a1a1aff", minHeight: '100vh' }}>
            <Button onClick={() => navigate('form')}>Formulário</Button>
        </Layout>
    )
}

export default Home