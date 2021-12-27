export async function GetJSON(url) {
  if (url === undefined || url === "") {
    throw new Error("Undefined URL");
  }

  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error("Cannot fetch the data from url.");
  }

  const data = await response.json();
  console.log(data);
  return data;
}
