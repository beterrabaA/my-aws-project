export const handler = async (event) => {
  if (!event.pathParameters || !event.pathParameters.id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing id" }),
    };
  }

  const { id } = event.pathParameters;

  if (data[id]) {
    return {
      statusCode: 200,
      body: JSON.stringify(data[id]),
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({ message: "User not found" }),
  };
};

const data = {
  21: { name: "Lucas Silva", age: 23, job: "gardener" },
  23: { name: "Lucia Maria", age: 28, job: "pirate" },
  34: { name: "Jhon Know", age: 33, job: "homeless" },
};
