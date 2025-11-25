import { Affix, Button, Card, Col, Divider, FloatButton, Grid, Layout, Row, Skeleton, Typography } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import gerador from "../../utils/gerador";
import geradorUnico from "../../utils/geradorUnico";
import agrupador from "../../utils/agrupador";
import { BackwardOutlined, CaretUpOutlined, LeftOutlined } from "@ant-design/icons";
import CustomButton from "../form/CustomButton";
import { CheckCard } from "@ant-design/pro-components";
const { useBreakpoint } = Grid;

const List = () => {
  const screens = useBreakpoint();
  // const [title, setTitle] = useState('')
  // const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const { state } = useLocation()
  // const { search } = useLocation()
  // const params = Object.fromEntries(new URLSearchParams(search))
  const { result, title } = state
  const { Title } = Typography
  const navigate = useNavigate()
  // console.log("fields: ", fields)

  // useEffect(() => {
  //   if (!fields) return;
  //   handleGenerate();
  // }, [fields]);

  // const handleGenerate = () => {
  //   setLoading(true)
  //   let numbers
  //   if (fields.duplicados) {
  //     numbers = gerador(fields)
  //   } else {
  //     numbers = geradorUnico(fields)
  //   }
  //   const grupos = agrupador(numbers, fields.agruparPor || 20)
  //   const linhasAgrupadas = grupos.map((grupo) => {
  //     return agrupador(grupo, fields.numerosPorLinha || 5)
  //   })
  //   console.log("resuklt", linhasAgrupadas);

  //   setTitle(`${fields.categoria}: ${fields.minima}° até ${fields.maxima}°`)
  //   setResult(linhasAgrupadas)
  //   setLoading(false)
  // }


  const { Text } = Typography
  let i = 1
  return (
    <Layout style={{ backgroundColor: "#1a1a1aff", minHeight: '100vh' }}>
      <Row style={{ justifyContent: "center", alignItems: "center" }}>
        <Affix offsetTop={15}>
          <Button onClick={() => navigate(-1)} style={{ fontSize: 25, color: "white", backgroundColor: "gray" }} type="text" shape="circle" icon={<LeftOutlined />} />
        </Affix>
        <Title style={{ color: "white", margin: 15 }} level={3}>Gerador de temperaturas</Title>
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
          title={
            <Affix offsetTop={10}>
              {result.length !== 0 && (
                <Text style={{ fontSize: 20 }} strong>{title}</Text>
              )}
            </Affix>
          }
        >
          <Col style={{ minHeight: "84vh", marginTop: 10 }}>
            {console.log("refedfdjfnsdjfnnj", result)}
            {result.map((group) => {
              return (
                <CheckCard
                  size="small"
                  title={`Grupo ${i++}`}
                  style={{ marginBottom: 15 }}
                >
                  {loading ? <Skeleton active /> :
                    group.map((linha) => {
                      return (
                        <p>
                          {linha.map(number => {
                            return (
                              <>
                                <Text style={{ fontSize: '18px' }}> {number} </Text>
                                <Divider type="vertical" />
                              </>
                            )
                          })}
                        </p>
                      )
                    })}
                </CheckCard>
              )
            })}
          </Col>
          <CustomButton text="Gerar" icon="redo" loading={loading} />
          <FloatButton.BackTop icon={<CaretUpOutlined />} style={{ width: 85, height: 85 }} />
        </Card>
      </Row>
    </Layout>
  )

};

export default List;
