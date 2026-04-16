export default function Loading() {
    return (
        <main className="min-h-screen max-w-3xl mx-auto p-8 flex items-center justify-center ">
            <h1 className="text-4xl font-bold mb-8 text-green-600 flex justify-center">
                <span>Loading</span>
                <span className="flex gap-px mx-3">
                  <span className="animate-bounce" style={{animationDelay: "0ms"}}>.</span>
                  <span className="animate-bounce" style={{animationDelay: "150ms"}}>.</span>
                  <span className="animate-bounce" style={{animationDelay: "300ms"}}>.</span>
                </span>
            </h1>
        </main>
    );
}