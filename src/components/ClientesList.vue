<template>
  <div>
    <h1>Lista de Clientes</h1>
    <table class="table table-hover">
      <thead>
        <th>Código</th>
        <th>Nome</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td>{{ cliente.id}}</td>
          <td>{{cliente.nome}}</td>
          <td>{{ cliente.email}}</td>
          <td>
            <button class="btn btn-info bt1">Edit</button>
            <button class="btn btn-danger bt1">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <a href="/cadastrarCliente" class="btn btn-success">Cadastrar</a>
    </div>
  </div>
</template>

<script>
import Cliente from "../service/clientes";
export default {
  data() {
    return {
      clientes: []
    };
  },
  mounted() {
    Cliente.listarClientes().then(response => {
      console.log(response.data);
      this.clientes = response.data;
    });
  }
};
</script>

<style>
.bt1 {
  margin-right: 5px;
}
</style>

