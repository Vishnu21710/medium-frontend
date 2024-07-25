

const BlogCardSkeleton = () => {
    return (
        <div className="space-y-5 border-b-[1px] border-gray-200 pt-5 pb-10 animate-pulse">
            <div className="flex gap-3 items-center">
                <div className="h-10 w-10 bg-gray-200 rounded-full" />
                <div className="h-4 bg-gray-200 rounded w-40" />
            </div>
            <div className="space-y-2">
                <div className="h-6 bg-gray-200 rounded w-2/4" />
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-full" />
            </div>
            <div>
                <div className="h-4 bg-gray-200 rounded w-20" />
            </div>
        </div>
    )
}

export default BlogCardSkeleton