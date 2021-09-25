import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID aOpzpruYWQGZ4rl65HnYMK7gm-a3O2-7ZnhGqR9OhxE",
  },
});
