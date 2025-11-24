import { Affix, Button, Form, Grid } from "antd"
import FormItem from "./FormItem"
import './styles.css'
import { useNavigate } from "react-router-dom";
import gerador from "../../utils/gerador";
import geradorUnico from "../../utils/geradorUnico";
import agrupador from "../../utils/agrupador";
import notify from "../../utils/notify";

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
            // setLoading(true)
            let numbers
            if (fields.duplicados) {
                numbers = gerador(fields)
            } else {
                numbers = geradorUnico(fields)
            }
            const grupos = agrupador(numbers, fields.agruparPor || 20)
            const linhasAgrupadas = grupos.map((grupo) => {
                return agrupador(grupo, fields.numerosPorLinha || 5)
            })
            console.log("resuklt", linhasAgrupadas);

            const title = `${fields.categoria}: ${fields.minima}° até ${fields.maxima}°`

            navigate('/list', { state: {result: linhasAgrupadas, title: title} });
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
            <Affix offsetBottom={15}>
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