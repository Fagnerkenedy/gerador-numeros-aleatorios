import { LeftOutlined } from "@ant-design/icons"
import { Affix, Button, Col, Row, Typography } from "antd"
import { useNavigate } from "react-router-dom"
const { Title } = Typography

const Header = () => {
    const navigate = useNavigate()

    return (
        <Row>
            <Col span={4}>
                <Affix offsetTop={15}>
                    <Button onClick={() => navigate(-1)} style={{ fontSize: 30, color: "white" }} type="text" shape="circle" icon={<LeftOutlined />} />
                </Affix>
            </Col>
            <Col span={16}>
                <Title style={{ color: "white", margin: 15 }} level={3}>Gerador de temperaturas</Title>
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}

export default Header