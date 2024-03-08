import { Skeleton } from "../ui/skeleton";


export function TabSkeleton() {
  return (
    <div>
      <Skeleton className="w-full h-10 rounded-xl" />

      <div className="mt-6 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {Array.from( {length: 6 }, (item,index) => (
          <div key={index}>
            <Skeleton className="w-full h-32 rounded-xl"/>
            <Skeleton className="mt-2 w-full h-7 rounded-xl"/>
            <Skeleton className="mt-2 h-5 rounded-xl"/>
            <Skeleton className="mt-2 w-full  h95 rounded-xl"/>
          </div>
        ))}
      </div>
    </div>
  )
}