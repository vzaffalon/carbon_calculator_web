function SubcategoriesList(){
    return(
        <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={subcategories}
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
    )
}

export default SubcategoriesList