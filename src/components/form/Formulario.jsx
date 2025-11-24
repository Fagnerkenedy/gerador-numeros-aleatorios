import { Affix, Button, Form, Grid } from "antd"
import FormItem from "./FormItem"
import './index.css'
import { useNavigate } from "react-router-dom";

const { useBreakpoint } = Grid;

const Formulario = () => {
    const screens = useBreakpoint();
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const handleSubmit = (fields) => {
        try {
            console.log("fields antes: ", fields);
            
            // const query = new URLSearchParams(fields).toString()
            // navigate(`/list?${encodeURIComponent(JSON.stringify(fields))}`)
            navigate('/list', { state: fields });
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
        }
    }

    return (
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
            <FormItem form={form} />
            <Affix offsetBottom={10}>
                <Button
                    style={{ backgroundColor: "#1a1a1aff", width: '100%', borderRadius: 50 }}
                    type="primary"
                    size="large"
                    htmlType="submit"
                    // onClick={() => document.getElementById('scrollableDiv').scrollIntoView({ behavior: "smooth" })}
                >
                    Gerar
                </Button>
            </Affix>
        </Form>
    )
}

export default Formulario