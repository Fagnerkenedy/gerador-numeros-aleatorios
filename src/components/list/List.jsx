import { Affix, Button, Card, Col, Divider, FloatButton, Form, Grid, Layout, Row, Skeleton, Typography } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CaretUpOutlined, LeftOutlined } from "@ant-design/icons";
import CustomButton from "../form/CustomButton";
import { CheckCard } from "@ant-design/pro-components";
import './styles.css'
import handleSubmit from "../form/handleSubmit";
const { useBreakpoint } = Grid;

const List = () => {
  const screens = useBreakpoint();
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([])
  const { state } = useLocation()
  const { result, title, fields } = state
  const { Title } = Typography
  const navigate = useNavigate()

  useEffect(() => {
    setList(list.length !== 0 ? list : result)
  }, [result, list])

  const submit = () => {
    const resultList = handleSubmit(fields, setLoading)
    setList(resultList.linhasAgrupadas)
  }

  const { Text } = Typography
  let i = 1
  return (
    <Layout style={{ backgroundColor: "#1a1a1aff", minHeight: '100vh' }}>
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        <Col flex="100px">
          <Affix offsetTop={15}>
            <Button onClick={() => navigate(-1)} style={{ fontSize: 30, color: "white" }} type="text" shape="circle" icon={<LeftOutlined />} />
          </Affix>
        </Col>
        <Col>
          <Title style={{ color: "white", margin: 15 }} level={3}>Gerador de temperaturas</Title>
        </Col>
        <Card
          style={{
            minWidth:
              screens.xs ? '100%' : 400,
            minHeight:
              screens.xs ? '92vh' : "100%",
            borderRadius: 40,
            borderEndEndRadius: 0,
            borderEndStartRadius: 0
          }}
          title={
            <Affix offsetTop={10}>
              {list.length !== 0 && (
                <Text style={{ fontSize: 20 }} strong>{title}</Text>
              )}
            </Affix>
          }
        >
          <Col style={{ minHeight: "74vh" }}>
            <Row style={{ justifyContent: "space-around" }}>
              {list.length !== 0 && list.map((group) => {
                return (
                  <Col span={11}>
                    <CheckCard
                      title={`Grupo ${i++}`}
                      className="customCard"
                      style={{ width: "100%" }}
                    >
                      {loading ? <Skeleton active /> :
                        group.map((linha) => {
                          return (
                            <p>
                              {linha.map(number => {
                                return (
                                  <>
                                    <Text style={{ fontSize: '18px' }}> {number} °C</Text>
                                    <Divider type="vertical" />
                                  </>
                                )
                              })}
                            </p>
                          )
                        })}
                    </CheckCard>
                  </Col>
                )
              })}
            </Row>
          </Col>
          <Form
            onFinish={e => submit()}
          >
            <CustomButton text="Gerar" icon="redo" loading={loading} />
          </Form>
          <FloatButton.BackTop icon={<CaretUpOutlined />} style={{ width: 80, height: 80, marginBottom: 50 }} />
        </Card>
      </Row>
    </Layout>
  )

};

export default List;
