import { ref } from "vue";
import { onMounted } from "vue";
export function useFetch(url) {
    const data = ref(null);
    const error=ref(null);
    const loading=ref(false);
    const fetchData = async () => {
        loading.value=true;
        error.value=null;
        const res= await fetch(url.value);
        try{
        if(!res.ok){
            throw new Error(`Error fetching data from ${url}, status: ${res.status}`);
        }
        data.value= await res.json();
    }
    catch (err){
        error.value= err.message;

    } finally{
        loading.value=false;
    }

    }
    onMounted(fetchData);

    return {data, error, loading, fetchData};
}
