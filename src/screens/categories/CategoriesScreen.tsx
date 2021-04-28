import { useState, useEffect  } from "react"
import {  Tabs, Card, List, Typography, Input, Row, Col  } from "antd";
import { Categories, Emissions, SubCategories } from "../../models";
import { Category } from "../../interfaces/category/category.interface";
import { SubCategory } from "../../interfaces/subcategory/subcategory.interface";
import { Emission } from "../../interfaces/emission/emission.interface"
const { Title, Text } = Typography;
const { TabPane } = Tabs;

function CategoriesScreen(){
    const [categories, setCategories] = useState<Category[]>([]);
    const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
    const [categories_emissions, setCategoriesEmissions] = useState<Emission>([])

    const getCategories = () => {
        Categories.list().then((response: any) => {
            setSubcategories(response.data);
        });
    };

    const getSubCategories = (category: Category) => {
        SubCategories.list(category.id).then((response: any) => {
            setCategories(response.data);
        });
    };

    const calculateTotalEmission = () => {
        let params = [{
            "subcategory_id": 1,
            "use": 50.0
        },
        {
            "subcategory_id": 1,
            "use": 50.0
        },
        {
            "subcategory_id": 7,
            "use": 50.0
        }
        ]
        Emissions.calculate_total_emission(params).then((response: any) => {
            setCategoriesEmissions(response.data)
        })
    }
    
    useEffect(() => {
        getCategories()
        getSubCategories()
        calculateTotalEmission()
    }, []);

    return <div style={{width: "100%", justifyContent: "center", alignItems: "center"}}>
        <Title level={2} style={{textAlign: "center", marginTop: 30}}>Carbon Footprint Calculator</Title>
   
  </div>
}

export default CategoriesScreen