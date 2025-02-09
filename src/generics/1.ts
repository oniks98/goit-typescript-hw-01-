import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error fetching from ${url}: ${error.message}`);
    }
    throw new Error(`Unknown error fetching from ${url}`);
  }
}
