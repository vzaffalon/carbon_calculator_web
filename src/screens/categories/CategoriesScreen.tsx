import {  Tabs, Card, List, Typography, Input, Row, Col  } from "antd";
const { Title, Text } = Typography;
const { TabPane } = Tabs;

function CategoriesScreen(){
    return <div>
        <Title level={3} style={{textAlign: "center", marginTop: 20}}>Carbon Footprint Calculator</Title>
        <Tabs defaultActiveKey="1" style={{width: 900}} centered>
            <TabPane tab="Housing" key="1">
                <Row>
                    <Col>
                        <Card title="Your current emissions from Housing" style={{ width: 900 }}>
                            <List
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={[1,2,3,4,5,6,7,8]}
                                renderItem={item => (
                                <List.Item>
                                    <Card type="inner" title={"hehehe"}>
                                        <div>
                                            <Input placeholder="Basic usage" />
                                            <Text></Text>
                                        </div>
                                    </Card>
                                </List.Item>
                            )}></List>
                        </Card>
                    </Col>
                    <Col>
                        <Card title="Total Sum" style={{ width: 300 }}>

                        </Card>
                    </Col>
                </Row>
            </TabPane>
            <TabPane tab="Transportation" key="2">
            Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Waster" key="3">
            Content of Tab Pane 3
            </TabPane>
        </Tabs>
  </div>
}

export default CategoriesScreen