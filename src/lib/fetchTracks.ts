const apiToken:string = 'BQDSXLrI2ZhN5QtM1emAb95RTnD3tBk9QdpOdJzEfNqhLXGiNO-sbO66qF_GlYMABK3pnmYy1XYYubINGOkNqZ5QZC8kmIOAq-uOIz43N_BlcouFfmq2FsJw1rJy-QoXUZnh5f_j2IAAGscjVj-r7jIHvE0nm7XT5JjGBveuW0eN8Addap_7VEh1g9jODGFhvrpMMLqF7muPeyIHEORDTamiOLtuUA';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };
  console.log(data.items)
  return data.items;
};