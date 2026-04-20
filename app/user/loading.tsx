// export default function Loading() {
//     return (
//         <main className="max-w-3xl mx-auto p-8 flex justify-center item-center">
//             <h1 className="text-4xl font-bold mb-8 text-green-600">Loading</h1>
//
//             <div className="space-y-6">
//                 {/* skeleton placeholder */}
//                 {[1].map((i) => (
//                     // <div key={i} className="border rounded-2xl p-6 animate-pulse">
//                     //     <div className="h-6 bg-gray-200 rounded w-3/4"></div>
//                     //     <div className="h-4 bg-gray-200 rounded w-full mt-4"></div>
//                     //     <div className="h-4 bg-grap-200 rounded w-5/6 mt-3"></div>
//                     // </div>
//                     <div key={i} className="flex gap-1">
//                         <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 dark:bg-blue-500" style={{ animationDelay: "0ms" }}></div>
//                         <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 dark:bg-blue-500" style={{ animationDelay: "150ms" }}></div>
//                         <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 dark:bg-blue-500" style={{ animationDelay: "300ms" }}></div>
//                     </div>
//                 ))}
//             </div>
//         </main>
//     );
// }

export default function Loading() {
    return (
        <main className="min-h-screen max-w-3xl mx-auto p-8 flex items-center justify-center ">
            <h1 className="text-4xl font-bold mb-8 text-green-600 flex justify-center">
                <span>Loading</span>
                <span className="flex gap-px mx-3">
                    <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
                </span>
            </h1>
        </main>
    );
}