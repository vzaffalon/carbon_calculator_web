function CategoryEmissionsCard(){
 return(<Row style={{justifyContent: "center" }}>
 <div>
     <Card title="Your current emissions from Housing" style={{ width: 900 }}>
         <SubcategoriesList></SubcategoriesList>
     </Card>
 </div>
 <div>
     <Card title="Total Category Emissions" style={{ width: 300, height: "100%", marginLeft: 10 }}>
             <SelectedCategoryEmissions></SelectedCategoryEmissions>
     </Card>
 </div>
</Row>)
}

export default CategoryEmissionsCard