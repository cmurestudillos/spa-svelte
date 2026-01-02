<script>
  import { Route, Router } from "svelte-routing";
  
  import Heroes from './components/heroes/Heroes.svelte';
  import Heroe from './components/heroe/Heroe.svelte';
  import Footer from './components/shared/footer/Footer.svelte';
</script>

<div id="app" class="container main-container">
  <Router basepath="/">
    <Route path="/" component={Heroes} />
    <Route path="/heroe/:nombre" let:params>
      <Heroe nombre={params.nombre} />
    </Route>
  </Router>
  
  <Footer />
</div>

<style>
  /* Estilos de tu aplicación */
</style>