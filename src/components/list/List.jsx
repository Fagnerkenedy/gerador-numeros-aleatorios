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
  // const [title, setTitle] = useState('')
  // const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  const { state } = useLocation()
  // const { search } = useLocation()
  // const params = Object.fromEntries(new URLSearchParams(search))
  const { result, title } = state
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
