import { RedoOutlined, RightCircleOutlined, SyncOutlined } from "@ant-design/icons"
import { Affix, Button, Col } from "antd"

const CustomButton = ({ text, icon, loading }) => {
    return (
        <Affix offsetBottom={30}>
            <Col span={10} offset={16}>
                <Button
                    style={{ backgroundColor: "#1a1a1aff", borderRadius: 50, width: "100%", height: 50 }}
                    type="primary"
                    size="large"
                    htmlType="submit"
                    iconPosition="end"
                    loading={loading && { icon: <SyncOutlined spin /> }}
                    icon={icon == "redo" ? <SyncOutlined /> : <RightCircleOutlined />}
                // onClick={() => document.getElementById('scrollableDiv').scrollIntoView({ behavior: "smooth" })}
                >
                    {text ? text : "Gerar"}
                </Button>
            </Col>
        </Affix>
    )
}

export default CustomButton