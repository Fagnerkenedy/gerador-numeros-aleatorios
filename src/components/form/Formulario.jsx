import { Card, Col, Form, Grid, Layout, Row } from "antd"
import FormItem from "./FormItem"
import './styles.css'
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useState } from "react";
import handleSubmit from "./handleSubmit";
import Header from "../header/Header";

const { useBreakpoint } = Grid;

const Formulario = () => {
    const screens = useBreakpoint()
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const submit = (fields) => {
        const result = handleSubmit(fields, setLoading)
        navigate('/list', {state: { result: result.linhasAgrupadas, title: result.title, fields}});
    }

    return (
        <Layout style={{ backgroundColor: "#1a1a1aff", minHeight: '100vh' }}>
            <Header />
            <Row style={{ justifyContent: "center" }}>
                <Col style={{ width: screens.xs ? '100%' : "", height: screens.xs ? '100vh' : "calc(100vh - 25px)", maxHeight: "200px" }}>
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
                    >

                        <Form
                            form={form}
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
                            onFinish={fields => submit(fields)}
                        >
                            <Row style={{ justifyContent: "space-between", minHeight: "83vh" }}>
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