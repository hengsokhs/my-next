export default function Loading() {
    return (
        <main className="max-w-3xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8 text-green-600">Latest Posts</h1>

            <div className="space-y-6">
                {/* skeleton placeholder */}
                {[1,2,3].map((i) => (
                    <div key={i} className="border rounded-2xl p-6 animate-pulse">
                        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-full mt-4"></div>
                        <div className="h-4 bg-grap-200 rounded w-5/6 mt-3"></div>
                    </div>
                ))}
            </div>
        </main>
    );
}