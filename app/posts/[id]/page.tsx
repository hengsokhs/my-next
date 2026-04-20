export default async function PostPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return (
        <main className="max-w-2xl mx-auto p-8">
            <a href="/posts" className="text-blue-500 hover:underline mb-6 inline-block">Back to All Posts</a>

            <h1 className="text-4xl font-bold text-green-600 mb-4">{post.title}</h1>
            <p className="text-gray-700 leading-relaxed text-lg">{post.body}</p>

            <div className="mt-10 text-sm text-gray-500">
                Post ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{id}</span>
            </div>
        </main>
    );
}