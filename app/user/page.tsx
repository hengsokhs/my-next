import Counter from "@/app/user/Counter";

export default async function home() {
    const res = await fetch("https://api.github.com/users/vercel", {
        cache: "no-store",
    });
    const user = await res.json();

    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className={"text-5xl font-bold text-blue-600"}>Hello from Server Component</h1>

            <p className={"mt-4 text-xl"}>GitHub stars of Vercel: <span className={"font-bold"}>{user.public_repos}</span></p>

            <Counter />
        </main>
    );
}
