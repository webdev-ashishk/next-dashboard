export const revalidate = 5; // revalidate at most every hour
async function getData() {
  const res = await fetch(process.env.API_URL, { next: { revalidate: 5 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div style={{ margin: "10px" }}>
      <h1> @ home page @</h1>
      <h1>List of all users!</h1>
      {data.map((items) => {
        return (
          <div key={items.id}>
            {items.email} || {items.id}
          </div>
        );
      })}
    </div>
  );
}
