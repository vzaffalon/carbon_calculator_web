import {  Tabs, Card, List, Typography, Input, Row, Col  } from "antd";
const { Title, Text } = Typography;
const { TabPane } = Tabs;

function CategoriesScreen(){
    return <div style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
        <Title level={2} style={{textAlign: "center", marginTop: 30}}>Carbon Footprint Calculator</Title>
        <Tabs type="line" tabBarStyle={{color: "#40a9ff", width: 1200, marginLeft: 120}} defaultActiveKey="1" style={{width: "100%"}} centered>
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
                                            <Text style={{marginLeft: "105px", color: "#8C8C8C"}}>kWh/yr</Text>
                                        </div>
                                        <div style={{height: 50, background: "#73d13d", alignItems: "center", justifyContent: "center", display: "flex", margin: "20px -24px -16px -24px"}}>
                                            <Text strong style={{color: "#ffffff", fontSize: "15px"}}>18 kg CO2e/yr</Text>
                                        </div>
                                    </Card>
                                </List.Item>
                            )}></List>
                        </Card>
                    </div>
                    <div>
                        <Card title="Total Category Emissions" style={{ width: 300, height: "100%", marginLeft: 10 }}>
                                <div style={{alignItems: "center", justifyContent: "center", display: "flex", height: "350px"}}>
                                    <Col style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                                        <Text style={{fontSize: 22, fontWeight: 400, color: "#8C8C8C"}}>Housing</Text>
                                        <Text style={{fontSize: 30}}>10,500</Text>
                                        <Text style={{fontSize: 14, color: "#8C8C8C"}}>Annual CO2 emissions (Kg.)</Text>
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
        <div style={{alignItems: "center", justifyContent: "center", width: "100%", display: "flex", marginTop: 10, marginBottom: 60}}>
            <Card type="inner" title="Categories Carbon Footprint Annual CO2 emissions (Kg.)" style={{ width: 800, height: 230 }}>
                <Row style={{alignItems: "center", justifyContent: "space-between", height: 140, marginRight: 70, marginLeft: 50}}>
                    <Col style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Text style={{fontSize: 22, color: "#8C8C8C"}}>Housing</Text>
                        <Text style={{fontSize: 28}}>10,500</Text>
                        <Text style={{fontSize: 12, color: "#8C8C8C"}}>U.S. Average*: 10,500</Text>
                    </Col>

                    <Col style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Text style={{fontSize: 22, color: "#8C8C8C"}}>Travel</Text>
                        <Text style={{fontSize: 28}}>10,590</Text>
                        <Text style={{fontSize: 12, color: "#8C8C8C"}}>U.S. Average*: 10,500</Text>
                    </Col>

                    <Col style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <Text style={{fontSize: 22, color: "#8C8C8C"}}>Waste</Text>
                        <Text style={{fontSize: 28}}>10,500</Text>
                        <Text style={{fontSize: 12, color: "#8C8C8C"}}>U.S. Average*: 10,500</Text>
                    </Col>
                </Row>
            </Card>
            <Card type="inner" title="Total Carbon Footprint Annual CO2 emissions (Kg.)" style={{ width: 400, height: 230, marginLeft: 10 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 20}}>
                        <Text style={{fontSize: 20, color: "#8C8C8C"}}>Total</Text>
                        <Text style={{fontSize: 34}}>10,500</Text>
                        <Text style={{fontSize: 14, color: "#8C8C8C"}}>U.S. Average*: 10,500</Text>
                </div>
            </Card>
        </div>
  </div>
}

export default CategoriesScreen