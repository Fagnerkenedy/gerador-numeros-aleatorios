import { LeftOutlined } from "@ant-design/icons"
import { Button, Col, Row, Typography } from "antd"
import { useNavigate } from "react-router-dom"
const { Title } = Typography

const Header = () => {
    const navigate = useNavigate()

    return (
        <Row>
            <Col style={{ alignContent: "center"}} span={4}>
                <Button onClick={() => navigate(-1)} style={{ width: "100%", height: "100%", fontSize: 30, color: "white" }} type="text" shape="circle" icon={<LeftOutlined />} />
            </Col>
            <Col span={16}>
                <Title style={{ color: "white", margin: 15 }} level={3}>Gerador de temperaturas</Title>
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}

export default Header