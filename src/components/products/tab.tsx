import { getAllProducts } from "@/services/product";
import { Tabs, TabsList,TabsContent ,TabsTrigger} from "../ui/tabs";
import { Product } from "@/types/product";

type Tab = {
  title: string
  value: string
  products: Product[]
}

export async function ProductsTab() {
  const product = await getAllProducts();

  const tabs:Tab[]= [ 
    {
      title: 'Sushi',
      value: 'sushi',
      products: []
    },
    {
      title: 'Temaki',
      value: 'temaki',
      products: []
    },
    {
      title: 'Combinados',
      value: 'combinados',
      products: []
    },
    {
      title: 'Bebidas',
      value: 'beverage',
      products: []
    },
  ]
  return (
    <Tabs defaultValue="sushi">
      <TabsList className="flex">
      {
        tabs.map(item => (
        <TabsTrigger key={item.title} value={item.value} className="flex-1" >{item.title}</TabsTrigger>
        ))
      }

      </TabsList>
      {tabs.map(item => (
        <TabsContent key={item.title} value={item.value} className="mt-6">
            contentudo 2
        </TabsContent>

      ))}
     
  
    </Tabs>
  )
}