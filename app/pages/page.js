async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.body}</p>
              <button className="mt-4 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
