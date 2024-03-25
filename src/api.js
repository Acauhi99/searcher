import axios from "axios";

export async function searchImages(term) {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID It-HrljVoYHQgWiDDHG9w1lqFKZJ-ZXNmtXW3V5kTN4'
    },
    params: {
      query: term
    }
  });
  
  return response.data.results;
};