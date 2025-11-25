import { Checkbox, Form, InputNumber, Menu, Modal, Select, Switch, Typography } from "antd"
import fields from "./fields"
import { useState } from "react"
import './styles.css'
import { Picker } from "antd-mobile"

const FormItem = ({ form }) => {
    const [checked, setChecked] = useState(true)
    const [open, setOpen] = useState(false);
    const { Text } = Typography

    const numbers = Array.from({ length: 60 }, (_, i) => ({ label: i, value: i }));

    const handleSelect = (item) => {
        setOpen(false)
        form.setFieldValue('categoria', item.name)
        form.setFieldValue('minima', item.min)
        form.setFieldValue('maxima', item.max)
        form.setFieldValue('quantidade', item.qtd)
        form.setFieldValue('agruparPor', item.agrupado)
        // document.getElementById('scrollableDiv').scrollIntoView({
        //     behavior: "smooth",
        // });
        // form.submit()
    }
    return fields.map(field => {
        switch (field.type) {
            case "select":
                return (
                    <>
                        <Form.Item
                            label={<span>{field.label}</span>}
                            name={field.name}
                            rules={[
                                {
                                    required: field.required,
                                    message: 'Este campo é obrigatório',
                                },
                            ]}
                            initialValue={field.initialValue}
                            style={{ width: "100%" }}
                        >
                            <Select
                                placeholder="Selecione.."
                                className="borderRadius"
                                open={false}
                                style={{ width: '100%', textAlign: "left" }}
                                onClick={(e) => setOpen(true)}
                            />
                        </Form.Item>
                        <Modal
                            open={open}
                            footer={null}
                            onCancel={() => setOpen(false)}
                            centered
                            title={field.label}
                        >
                            <Menu>
                                {field.options.map((item) => (
                                    <>
                                        <Menu.Item
                                            onClick={() => handleSelect(item)}
                                        >
                                            <Text style={{ fontSize: 16 }}>
                                                {item.name}
                                            </Text>
                                        </Menu.Item>
                                    </>
                                ))}
                            </Menu>
                        </Modal>
                    </>
                )
            case "number":
                return (
                    <Form.Item
                        label={<span>{field.label}</span>}
                        name={field.name}
                        rules={[
                            {
                                required: field.required,
                                message: 'Este campo é obrigatório',
                            },
                        ]}
                        initialValue={field.initialValue}
                        style={{ width: field.name == "quantidade" ? "100%" : "47%" }}
                    >
                        <InputNumber
                            inputMode="numeric"
                            style={{ width: '100%', borderRadius: "50px" }}
                            min={field.min || ''}
                            max={field.max || ''}
                            placeholder={field.placeholder || ''}
                        />
                        {/* <Picker
                            columns={[numbers]}
                            visible={true}
                        /> */}
                    </Form.Item>
                )

            case "check":
                return (
                    <Form.Item
                        label={<span>{field.label}</span>}
                        name={field.name}
                        valuePropName="checked"
                        initialValue={checked}
                    >
                        <Checkbox
                            onChange={(e) => {
                                setChecked(e.target.checked)
                            }}
                        />
                    </Form.Item>
                )
            case "switch":
                return (
                    <Form.Item
                        label={<span>{field.label}</span>}
                        name={field.name}
                        initialValue={field.initialValue}
                        style={{ width: '47%' }}
                    >
                        <Switch className="switch" />
                    </Form.Item>
                )
            default:
                return false
        }
    })
}

export default FormItem

