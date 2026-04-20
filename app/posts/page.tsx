interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// This is a Server Component
export default async function Posts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 60 },
    });
    const posts: Post[] = await res.json();

    return (
        <main className="max-w-3xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8 text-green-600">Latest Posts</h1>

            <div className="space-y-6">
                {posts.slice(0, 5).map((post: Post) => (
                    <div key={post.id} className="border rounded-2xl p-6 hover:shadow-md transition">
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-600 mt-3 line-clamp-3">{post.body}</p>

                        {/* Link to dynamic route */}
                        <a
                            href={`/posts/${post.id}`}
                            className="mt-6 inline-block text-blue-600 hover:underline font-medium"
                        >
                            Read full post →
                        </a>
                    </div>
                ))}
            </div>

            <p className="text-sm text-gray-500 mt-10">
                Data fetched on the server • Page updated live
            </p>
        </main>
    );
}