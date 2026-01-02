<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';
  
  export let searchTerm = '';
  
  let heroes = [];
  let filteredHeroes = [];
  let loading = true;
  let error = null;
  
  onMount(async () => {
    await loadHeroes();
  });
  
  async function loadHeroes() {
    try {
      loading = true;
      error = null;
      
      const response = await fetch('https://spa-heroes-service.vercel.app/api/superheroes');
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      heroes = data.superheroes || [];
      
    } catch (err) {
      console.error('Error cargando héroes:', err);
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
  
  // Filtrar héroes basado en el término de búsqueda
  $: {
    if (!searchTerm || searchTerm.trim() === '') {
      filteredHeroes = heroes;
    } else {
      filteredHeroes = heroes.filter(heroe => 
        heroe.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        heroe.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        heroe.casa.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
</script>

<div class="container mt-4">
  {#if loading}
    <div class="d-flex justify-content-center">
      <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
  {:else if error}
    <div class="alert alert-danger" role="alert">
      <h4 class="alert-heading">Error al cargar los héroes</h4>
      <p>{error}</p>
      <button class="btn btn-outline-danger" on:click={loadHeroes}>Intentar de nuevo</button>
    </div>
  {:else if filteredHeroes.length === 0 && searchTerm}
    <div class="alert alert-info" role="alert">
      <h4 class="alert-heading">
        <i class="fas fa-search me-2"></i>
        Sin resultados
      </h4>
      <p>No se encontraron héroes que coincidan con "<strong>{searchTerm}</strong>"</p>
      <p class="mb-0">Intenta con otro término de búsqueda.</p>
    </div>
  {:else if heroes.length === 0}
    <div class="alert alert-warning" role="alert">
      No se encontraron héroes.
    </div>
  {:else}
    <div class="search-results-info">
      {#if searchTerm}
        <p class="text-white mb-3">
          <i class="fas fa-filter me-2"></i>
          Mostrando {filteredHeroes.length} de {heroes.length} héroes
        </p>
      {:else}
        <p class="text-white mb-3">
          <i class="fas fa-users me-2"></i>
          Mostrando todos los héroes ({heroes.length})
        </p>
      {/if}
    </div>
    
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
      {#each filteredHeroes as heroe (heroe._id)}
        <div class="col p-1">
          <div class="card h-100 shadow animated fadeIn slow m-2">
            <img src={heroe.img} alt={heroe.nombre} class="card-img-top img-fluid" />
            <div class="card-body">
              <h5 class="card-title">{heroe.nombre}</h5>
              <p class="card-text card-text-truncate">{heroe.bio}</p>
              <small class="text-muted">
                <strong>Año:</strong> {formatDate(heroe.aparicion)}
              </small>
            </div>
            <div class="card-footer">
              <Link to={`/heroe/${heroe._id}`} class="btn btn-4 btn-full-width">Ver mas...</Link>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  /* Estilos del componente Card */
  .btn-full-width {
    width: 100%;
    padding: 12px;
    margin-top: 8px;
  }
  
  .search-results-info {
    margin-bottom: 1rem;
  }
  
  .search-results-info p {
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 15px;
    border-radius: 20px;
    display: inline-block;
    font-size: 14px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
</style>