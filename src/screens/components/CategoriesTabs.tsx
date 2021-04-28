function CategoriesTab(){
    return(
        <Tabs type="line" tabBarStyle={{color: "#40a9ff", width: 1200, marginLeft: 120}} defaultActiveKey="1" style={{width: "100%"}} centered>
        {categories.map((category) => <TabPane tab="Housing" key="1">
           <CategoryEmissionsCard category={category}></CategoryEmissionsCard>
        </TabPane>)}
    </Tabs>
    )

}
export default CategoriesTab 