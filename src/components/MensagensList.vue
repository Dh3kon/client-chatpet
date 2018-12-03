<template>
  <div class="container">
    <h2>Lista de Mensagens</h2>
    <a href="/createMensagem" class="btn btn-success btn1">Criar</a>
    <br>
    <table class="table table-hover">
      <thead>
        <th>Código</th>
        <th>Texto</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="mensagem in mensagens" :key="mensagem.id">
          <td>{{ mensagem.id }}</td>
          <td>{{ mensagem.text }}</td>
          <td>
            <a href="/comentarios" class="btn btn-info">Ver</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Mensagem from "../service/mensagens";
export default {
  data() {
    return {
      mensagens: []
    };
  },
  mounted() {
    Mensagem.listarMensagens().then(response => {
      console.log(response.data);
      this.mensagens = response.data;
    });
  }
};
</script>

<style scoped>
.btn1 {
  margin-bottom: 10px;
  padding: 5px;
}
</style>

