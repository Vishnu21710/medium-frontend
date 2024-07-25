import {
    Pagination as ShadcnPagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { usePagination } from "@/hooks/usePagination"
import { Button } from "../ui/button"

type Props = {
    totalCount: number,
    onPageChange: any,
    currentPage: number,
    pageSize: number,
    siblingCount: number
}

export function Pagination({ currentPage, onPageChange, pageSize, siblingCount, totalCount }: Props) {

    // const [page, setPage] = useState(1)

    console.log(totalCount);
    


    // let totalCount = 30

    // let pageCount = Math.ceil(totalCount / 3)

    const paginationRange = usePagination({ totalCount, currentPage, pageSize, siblingCount })

    console.log(paginationRange);
    

    const onNext = () => {
        onPageChange(currentPage + 1)
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1)
    }
    //@ts-ignore
    if (currentPage === 0 || paginationRange?.length < 2) {
        return null
    }
    //@ts-ignore
    const lastPage = paginationRange[paginationRange?.length - 1]

    return (
        <ShadcnPagination className="my-10">
            <PaginationContent>
                <PaginationItem>
                    <Button variant={"outline"} disabled={currentPage === 1}  onClick={onPrevious}>
                        <PaginationPrevious  />
                    </Button>
                </PaginationItem>
                    {
                        paginationRange?.map((pageNumber)=>{
                            if(pageNumber === "DOTS"){
                                return (
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                )
                            }

                            return (
                                <PaginationItem onClick={()=>onPageChange(pageNumber)}>
                                    <PaginationLink isActive={currentPage === pageNumber} >
                                        {pageNumber}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        })
                    }
                <PaginationItem  >
                    <Button variant={"outline"} onClick={onNext}  disabled={currentPage === lastPage}>
                        <PaginationNext />
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </ShadcnPagination>
    )
}


//   <PaginationItem>
//   <PaginationEllipsis />
// </PaginationItem>


