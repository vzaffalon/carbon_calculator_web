function CategoriesEmissionsCard(){
    return(<div style={{alignItems: "center", justifyContent: "center", width: "100%", display: "flex", marginTop: 10, marginBottom: 60}}>
    <Card type="inner" title="Categories Carbon Footprint Annual CO2 emissions (Kg.)" style={{ width: 800, height: 230 }}>
        <Row style={{alignItems: "center", justifyContent: "space-between", height: 140, marginRight: 70, marginLeft: 50}}>
            {categories_emissions.map((category_emission) => 
            <Col style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Text style={{fontSize: 22, color: "#8C8C8C"}}>{category_emission.category.name}</Text>
            <Text style={{fontSize: 28}}>category_emission.use</Text>
            <Text style={{fontSize: 12, color: "#8C8C8C"}}>U.S. Average*: 10,500</Text>
        </Col>)}
        </Row>
    </Card>
    <TotalEmissionsCard>
</div>)

}
export default CategoriesEmissionsCard 