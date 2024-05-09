import { notFound } from "next/navigation";
const Ask = async (url, method, cache, headers) => {
  const request = await fetch(url, {
    method,
    cache: cache,
    ...headers,
  });

  const result = await request.json();

  if (request.status === 404) {
    notFound();
  } else {
    return result.result;
  }
};

export default Ask;
