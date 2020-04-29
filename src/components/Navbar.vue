<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">DOSCG</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/home">Home</b-nav-item>
          <b-nav-item to="/doscg">DOSCG</b-nav-item>
          
          <b-nav-item-dropdown>
            <template v-slot:button-content>
              <em>Problem</em>
            </template>
            <b-dropdown-item to="/problem01">problem 1</b-dropdown-item>
            <b-dropdown-item to="/problem02">problem 2</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/Direction">Google API</b-nav-item>
          <b-nav-item to="/Cv">CV</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>
  
<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>