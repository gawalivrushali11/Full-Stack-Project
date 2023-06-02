
import axios from  'axios';

const API_url="http://localhost:9999";

class ProductService
{

        saveProduct(product)
        {
            return axios.post(API_url+"/saveProduct",product);
        }
        getAllProduct()
        {
            return axios.get(API_url+"/")
        }
        getProductById(id)
        {
            return axios.get(API_url+"/"+id)
        }
        deleteProduct(id)
        {

                // console.log(id);
            return axios.delete(API_url+"/deleteProduct/"+id)
        }
        editProduct(product)
        {
            console.log("Pid",product.pid);
            return axios.put(API_url+"/editProduct/"+product.pid,product)
        }
        getoutofwarrantyProduct()
        {
            return axios.get(API_url+"/outofwarranty")
        }
}

export default new ProductService