function TotalEmissionsCard(){
    return(
    <Card type="inner" title="Total Carbon Footprint Annual CO2 emissions (Kg.)" style={{ width: 400, height: 230, marginLeft: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 20}}>
                <Text style={{fontSize: 20, color: "#8C8C8C"}}>Total</Text>
                <Text style={{fontSize: 34}}>10,500</Text>
                <Text style={{fontSize: 14, color: "#8C8C8C"}}>U.S. Average*: 10,500</Text>
        </div>
    </Card>
)

}
export default TotalEmissionsCard 