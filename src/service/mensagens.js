import { http } from "./config";

export default {
  listarMensagens: () => {
    return http.get("mensagens");
  }
};
