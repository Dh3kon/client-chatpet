<template>
  <div class="container subl">
    <h2>Login</h2>
    <div class="login-form">
      <div class="main-div">
        <div class="panel">
          <img src="img/logo chat pet_Prancheta 1.png" alt class="img-pet">
          <p>Digite seu e-mail e senha</p>
        </div>
        <form id="Login">
          <div class="form-group">
            <input type="email" class="form-control" id="inputEmail" placeholder="Email">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" id="inputPassword" placeholder="Senha">
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subl {
  text-decoration-line: underline;
}
</style>

