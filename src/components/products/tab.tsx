import { getAllProducts } from "@/services/product";
import { Tabs, TabsList,TabsContent ,TabsTrigger} from "../ui/tabs";
import { Product } from "@/types/product";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";

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
      products: product.filter(item => item.category === 'sushi')
    },
    {
      title: 'Temaki',
      value: 'temaki',
      products: product.filter(item => item.category === 'temaki')
    },
    {
      title: 'Combinados',
      value: 'pack',
      products: product.filter(item => item.category === 'pack')
    },
    {
      title: 'Bebidas',
      value: 'beverage',
      products: product.filter(item => item.category === 'beverage')
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
            {item.products.length > 0 &&
              <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
                {item.products.map(product =>(
                  <ProductItem key={product.id} item={product}/>
                ))}
              </div>
            }

            {item.products.length === 0 &&
              <ProductEmpty />
            }
        </TabsContent>

      ))}
     
  
    </Tabs>
  )
}