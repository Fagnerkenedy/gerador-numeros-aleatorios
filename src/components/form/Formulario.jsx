import { Affix, Button, Card, Col, Form, Grid, Layout, Row, Typography } from "antd"
import FormItem from "./FormItem"
import './styles.css'
import { useNavigate } from "react-router-dom";
import gerador from "../../utils/gerador";
import geradorUnico from "../../utils/geradorUnico";
import agrupador from "../../utils/agrupador";
import notify from "../../utils/notify";
import { CaretRightOutlined, RightCircleOutlined } from "@ant-design/icons";
import CustomButton from "./CustomButton";
import { useState } from "react";

const { useBreakpoint } = Grid;
const { Title } = Typography

const Formulario = () => {
    const screens = useBreakpoint()
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (fields) => {
        try {
            console.log("fields antes: ", fields);
            setLoading(true)
            // const query = new URLSearchParams(fields).toString()
            // navigate(`/list?${encodeURIComponent(JSON.stringify(fields))}`)
            // setLoading(true)
            let numbers
            if (fields.duplicados) {
                numbers = gerador(fields)
            } else {
                numbers = geradorUnico(fields)
            }
            const grupos = agrupador(numbers, fields.agruparPor || 8)
            const linhasAgrupadas = grupos.map((grupo) => {
                return agrupador(grupo, fields.numerosPorLinha || 1)
            })
            console.log("resuklt", linhasAgrupadas);

            const title = `${fields.categoria}: ${fields.minima}° até ${fields.maxima}°`
            setTimeout(() => {
                setLoading(false)
                navigate('/list', { state: { result: linhasAgrupadas, title: title } });
            })
        } catch (error) {
            console.log("Erro ao gerar números: ", error)
            notify({
                message: "Erro ao gerar números",
                description: error.message,
                placement: 'top',
                type: 'error',
                duration: 10,
                width: 600,
                pauseOnHover: true
            })
            setLoading(false)
        }
    }

    return (
        <Layout style={{ backgroundColor: "#1a1a1aff", minHeight: '100vh' }}>
            <Row style={{ justifyContent: "center" }}>
                <Title style={{ color: "white", margin: 15 }} level={3}>Gerador de temperaturas</Title>
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

                        <Form
                            form={form}
                            // labelCol={
                            //     screens.xs
                            //         ? undefined
                            //         : { flex: '150px' }
                            // }
                            labelAlign="right"
                            labelWrap
                            wrapperCol={
                                screens.xs
                                    ? undefined
                                    : { flex: 1 }
                            }
                            colon={false}
                            layout={screens.xs ? 'vertical' : 'horizontal'}
                            variant="filled"
                            size="large"
                            className="form"
                            onFinish={handleSubmit}
                        >
                            <Row style={{ justifyContent: "space-between" }}>
                                <FormItem form={form} />
                            </Row>
                            <CustomButton loading={loading} />
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}

export default Formulario