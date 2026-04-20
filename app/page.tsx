// app/page.tsx
// Pure Server Component + Server Action (all in one file)

async function submitFeedback(formData: FormData) {
  "use server";                    // ← This is the magic

  const message = formData.get("message") as string;

  // Simulate saving to database (you will see this in your terminal)
  console.log("✅ Feedback received on the server:", message);
}

export default async function Home() {
  // Server-side data fetching
  const res = await fetch('https://api.github.com/users/vercel', {
    cache: 'no-store',
  });
  const user = await res.json();

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h1 className="text-5xl font-bold text-blue-600">Hello from Server Component! 🚀</h1>

        <p className="mt-4 text-xl">
          GitHub public repos of Vercel: <span className="font-bold">{user.public_repos}</span>
        </p>

        {/* Server Action Form */}
        <div className="mt-16 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Send Feedback (Server Action)</h2>
          <form action={submitFeedback} className="space-y-4">
          <textarea
              name="message"
              rows={4}
              placeholder="Type your feedback here..."
              className="w-full p-4 m-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
          />
            <button
                type="submit"
                className="w-full py-4 bg-green-600 text-white font-medium rounded-2xl hover:bg-green-700 transition"
            >
              Submit to Server
            </button>
          </form>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Open your terminal → you will see the message logged when you submit
        </p>
      </main>
  );
}