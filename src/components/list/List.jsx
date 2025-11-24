import { Affix, Card, Col, Divider, FloatButton, Grid, Skeleton, Typography } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gerador from "../../utils/gerador";
import geradorUnico from "../../utils/geradorUnico";
import agrupador from "../../utils/agrupador";
import { CaretUpOutlined } from "@ant-design/icons";
const { useBreakpoint } = Grid;

const List = () => {
  const screens = useBreakpoint();
  const [title, setTitle] = useState('')
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const { state } = useLocation()

  useEffect(() => {
    if (!state) return;
    handleGenerate();
  }, [state]);

  const handleGenerate = () => {
    setLoading(true)
    let numbers
    if (state.duplicados) {
      numbers = gerador(state)
    } else {
      numbers = geradorUnico(state)
    }
    const grupos = agrupador(numbers, state.agruparPor || 20)
    const linhasAgrupadas = grupos.map((grupo) => {
      return agrupador(grupo, state.numerosPorLinha || 5)
    })
    console.log("resuklt", linhasAgrupadas);

    setTitle(`${state.categoria}: ${state.minima}° até ${state.maxima}°`)
    setResult(linhasAgrupadas)
    setTimeout(() => {
      setLoading(false)
    }, 400)
  }


  const { Text } = Typography
  let i = 1
  return (
    <Col
      style={{
        minWidth:
          screens.xs ? '100%' : 400,
        minHeight:
          screens.xs ? 1000 : ''
      }}
    >
      <Affix offsetTop={10}>
        {result.length !== 0 && (
          <Card
            size="small"
            style={{ backgroundColor: "#d3d3d3ff" }}
          >
            <Text strong>{title}</Text>
          </Card>
        )}
      </Affix>
      <Col style={{ marginTop: 10 }}>
        {console.log("refedfdjfnsdjfnnj", result)}
        {result.map((group) => {
          return (
            <Card
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
            </Card>
          )
        })}
      </Col>
      <FloatButton.BackTop icon={<CaretUpOutlined />} style={{ width: 85, height: 85 }} />
    </Col>
  )

};

export default List;
