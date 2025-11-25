import { RedoOutlined, RightCircleOutlined, SyncOutlined } from "@ant-design/icons"
import { Affix, Button, Col } from "antd"

const CustomButton = ({ text, icon, loading }) => {
    return (
        <Affix offsetBottom={15}>
            <Col offset={17}>
                <Button
                    style={{ backgroundColor: "#1a1a1aff", borderRadius: 50 }}
                    type="primary"
                    size="large"
                    htmlType="submit"
                    iconPosition="end"
                    loading={loading && { icon: <SyncOutlined spin /> }}
                    icon={icon == "redo" ? <RedoOutlined /> : <RightCircleOutlined />}
                // onClick={() => document.getElementById('scrollableDiv').scrollIntoView({ behavior: "smooth" })}
                >
                    {text ? text : "Gerar"}
                </Button>
            </Col>
        </Affix>
    )
}

export default CustomButton