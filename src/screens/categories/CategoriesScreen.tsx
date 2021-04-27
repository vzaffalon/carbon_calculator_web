import {  Tabs, Card, List, Typography, Input, Row, Col  } from "antd";
const { Title, Text } = Typography;
const { TabPane } = Tabs;

function CategoriesScreen(){
    return <div style={{width: "100%", justifyContent: "center"}}>
        <Title level={3} style={{textAlign: "center", marginTop: 20}}>Carbon Footprint Calculator</Title>
        <Tabs defaultActiveKey="1" style={{width: "100%"}} centered>
            <TabPane tab="Housing" key="1">
                <Row style={{justifyContent: "center" }}>
                    <div>
                        <Card title="Your current emissions from Housing" style={{ width: 900 }}>
                            <List
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={[1,2,3,4,5,6,7,8]}
                                renderItem={item => (
                                <List.Item>
                                    <Card type="inner" title={"Natural gas"}>
                                        <div>
                                            <Input style={{marginBottom: 5}} placeholder="10" />
                                            <Text style={{marginLeft: "105px"}}>kWh/yr</Text>
                                        </div>
                                        <div style={{height: 50, background: "#75b66c", alignItems: "center", justifyContent: "center", display: "flex", margin: "20px -24px -16px -24px"}}>
                                            <Text strong style={{color: "#ffffff", fontSize: "15px"}}>18 kg CO2e/yr</Text>
                                        </div>
                                    </Card>
                                </List.Item>
                            )}></List>
                        </Card>
                    </div>
                    <div>
                        <Card title="Total Category Sum" style={{ width: 300, height: "100%", marginLeft: 10 }}>
                                <div style={{alignItems: "center", justifyContent: "center", display: "flex", height: "350px"}}>
                                    <Col style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                                        <Text style={{fontSize: 34}}>10,500</Text>
                                        <Text style={{fontSize: 24}}>Total(kg CO2e/yr)</Text>
                                    </Col>
                                </div>
                        </Card>
                    </div>
                </Row>
            </TabPane>
            <TabPane tab="Transportation" key="2">
            Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Waster" key="3">
            Content of Tab Pane 3
            </TabPane>
        </Tabs>
        <div style={{alignItems: "center", justifyContent: "center", width: "100%", display: "flex", marginTop: 10, marginBottom: 20}}>
            <Card type="inner" title="Total Sum" style={{ width: 1210, height: 200 }}>
                <Row>
                    <Col span={3} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Text style={{fontSize: 24}}>10,500</Text>
                        <Text style={{fontSize: 24}}>Housing</Text>
                    </Col>

                    <Col span={3} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Text style={{fontSize: 24}}>10,590</Text>
                        <Text style={{fontSize: 24}}>Travel</Text>
                    </Col>

                    <Col span={3} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Text style={{fontSize: 24}}>10,500</Text>
                        <Text style={{fontSize: 24}}>Waste</Text>
                    </Col>

                    <Col span={3} style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Text style={{fontSize: 24}}>10,500</Text>
                        <Text style={{fontSize: 24}}>Total</Text>
                    </Col>
                </Row>
            </Card>
        </div>
  </div>
}

export default CategoriesScreen