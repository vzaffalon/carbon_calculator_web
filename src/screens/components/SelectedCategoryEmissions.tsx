function SelectedCategoryEmissions(){
    return(
        <div style={{alignItems: "center", justifyContent: "center", display: "flex", height: "350px"}}>
                 <Col style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
                     <Text style={{fontSize: 22, fontWeight: 400, color: "#8C8C8C"}}>Housing</Text>
                     <Text style={{fontSize: 30}}>10,500</Text>
                     <Text style={{fontSize: 14, color: "#8C8C8C"}}>Annual CO2 emissions (Kg.)</Text>
                 </Col>
             </div>
    )
}

export default SelectedCategoryEmissions