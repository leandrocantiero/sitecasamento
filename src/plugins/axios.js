import axios from "axios";
import { ref } from "vue";

export function useAxios() {
  const loading = ref(false);
  const error = ref(null);
  const data = ref(null);

  const fetchData = async (url, options = {}) => {
    try {
      loading.value = true;
      const response = await axios(url, options);
      data.value = response.data;
    } catch (err) {
      error.value = err;
      console.error("Error fetching data:", err);
    } finally {
      loading.value = false;
    }
  };

  return { loading, error, data, fetchData };
}
