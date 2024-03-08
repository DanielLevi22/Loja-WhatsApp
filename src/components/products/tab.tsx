import { Tabs, TabsList,TabsContent ,TabsTrigger} from "../ui/tabs";


export function ProductsTab() {
  
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="flex">
        <TabsTrigger value="tab-1" className="flex-1" >tab-1</TabsTrigger>
        <TabsTrigger value="tab-2" className="flex-1" >tab-2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1" className="mt-6">
          contentudo 1
      </TabsContent>
      <TabsContent value="tab2">
          contentudo 2
      </TabsContent>
      <TabsContent value="tab3">
          contentudo 3
      </TabsContent>

    </Tabs>
  )
}