<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';
  
  export let nombre;
  
  let heroe = {};
  let loading = true;
  let error = null;
  
  onMount(async () => {
    if (nombre) {
      await getHeroe(nombre);
    }
  });
  
  async function getHeroe(heroeId) {
    try {
      loading = true;
      error = null;
      
      const response = await fetch(`https://spa-heroes-service.vercel.app/api/superheroes/${heroeId}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Héroe no encontrado');
        }
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      heroe = data.superheroe;
      
    } catch (err) {
      console.error('Error cargando héroe:', err);
      error = err.message;
    } finally {
      loading = false;
    }
  }
  
  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.getFullYear();
  }
  
  // Reactivo: si cambia el parámetro nombre, volver a cargar
  $: if (nombre) {
    getHeroe(nombre);
  }
</script>

<div class="bg-white shadow-lg p-3 mb-5 bg-white rounded">
  {#if loading}
    <div class="d-flex justify-content-center p-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  {:else if error}
    <div class="alert alert-danger" role="alert">
      <h4 class="alert-heading">Error</h4>
      <p>{error}</p>
      <Link to={'/'} class="btn btn-outline-danger">Volver al inicio</Link>
    </div>
  {:else if heroe}
    <h1 class="animated fadeIn slow">
      {heroe.nombre} 
      <small>({formatDate(heroe.aparicion)})</small>
    </h1>
    <hr>
    <div class="row animated fadeIn slow">
      <div class="col-md-4">
        <img 
          src={'/' + (heroe.img ? heroe.img : '../../../assets/img/no-image.png')} 
          title={heroe.nombre} 
          class="img-fluid shadow" 
          alt={heroe.nombre} 
        />
        <br><br>
        <Link to={'/'} class="btn btn-4 mt-2 btn-full-width">Volver</Link>
      </div>
      <div class="col-md-8">
        <h3>{heroe.nombre}</h3>
        <hr>
        <p>{heroe.bio}</p>
        <div>
          {#if heroe.casa === 'DC'}
            <img 
              src="../../../assets/img/dc.svg" 
              title={heroe.casa} 
              class="img-fluid" 
              width="92" 
              height="92" 
              alt={heroe.casa} 
            />
          {:else if heroe.casa === 'Marvel'}
            <img 
              src="../../../assets/img/marvel.svg" 
              title={heroe.casa} 
              class="img-fluid" 
              width="92" 
              height="92" 
              alt={heroe.casa} 
            />
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .btn-full-width {
    width: 100%;
    padding: 12px;
    margin-top: 8px;
  }
</style>