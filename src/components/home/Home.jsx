import { Button, Card, Layout, Typography } from "antd"
import './styles.css'
import { useNavigate } from "react-router-dom"
import CustomButton from "../form/CustomButton"

const Home = () => {
    const { Title } = Typography
    const navigate = useNavigate()
    return (
        <Layout style={{ minHeight: '100vh', padding: 20, flexDirection: "column", justifyContent: "space-between" }}>
            <Title>GERADOR DE TEMPERATURAS</Title>
            <CustomButton onClick={() => navigate('form')} text="Começar" />
        </Layout>
    )
}

export default Home