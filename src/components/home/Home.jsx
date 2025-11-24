import { Card, Col, Divider, Grid, Layout, Row, Typography } from "antd"
import Formulario from "../form/Formulario"
const { useBreakpoint } = Grid;

const Home = () => {
    const { Title } = Typography
    const screens = useBreakpoint();
    return (
        <Layout style={{ backgroundColor: "#1a1a1aff", minHeight: '100vh' }}>
            <Row style={{ justifyContent: "center" }}>
                <Title style={{ color: "white", margin: 10 }} level={3}>Gerador de números aleatórios</Title>
                <Col style={{ width: screens.xs ? '100%' : "", height: screens.xs ? '100vh' : "calc(100vh - 25px)", maxHeight: "200px" }}>
                    <Card
                        style={{
                            minWidth:
                                screens.xs ? '100%' : 400,
                            minHeight:
                                screens.xs ? '100vh' : "100%",
                            borderRadius: 40,
                            borderEndEndRadius: 0,
                            borderEndStartRadius: 0
                        }}
                    >
                        <Formulario />
                    </Card>
                    {/* <div id="scrollableDiv" /> */}
                </Col>
                {screens.xs ? <Divider /> : <Divider style={{ height: "calc(100vh - 25px)" }} type="vertical" />}
            </Row>
        </Layout>
    )
}

export default Home