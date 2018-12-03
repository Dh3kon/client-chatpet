import { http } from "./config";

export default {
  listarClientes: () => {
    return http.get("clientes");
  }
};
