<script>
  import CardComponent from '../shared/card/Card.svelte';
  
  let searchTerm = '';
  
  function handleSearch(event) {
    searchTerm = event.target.value;
  }
  
  function clearSearch() {
    searchTerm = '';
  }
</script>

<div>
  <h1 class="text-white">
    <img src="../../../assets/img/A-64.svg" alt="Logo" class="img-fluid" />
    Heroes <small>Marvel y DC</small>
  </h1>
  <hr class="text-white">
  
  <!-- Buscador -->
  <div class="search-container mb-4">
    <div class="row">
      <div class="col-12 col-md-8 col-lg-6 mx-auto">
        <div class="search-wrapper">
          <div class="input-group">
            <input 
              type="text" 
              class="form-control search-input" 
              placeholder="Buscar héroes por nombre..." 
              bind:value={searchTerm}
              on:input={handleSearch}
            />
          </div>
          {#if searchTerm}
            <small class="search-info text-white-50">
              Buscando: "{searchTerm}"
            </small>
          {/if}
        </div>
      </div>
    </div>
  </div>
  
  <CardComponent {searchTerm} />
</div>

<style>
  /* Estilos del componente Heroes */
  .search-container {
    margin-bottom: 2rem;
  }
  
  .search-wrapper {
    position: relative;
  }
  
  .search-input {
    border-radius: 25px;
    padding: 12px 20px;
    font-size: 16px;
    border: 2px solid #ff3d00;
    background: rgba(255, 255, 255, 0.95);
    transition: all 0.3s ease;
  }
  
  .search-input:focus {
    border-color: #ff5722;
    box-shadow: 0 0 15px rgba(255, 61, 0, 0.3);
    background: white;
  }
  
  .search-icon {
    border: 2px solid #ff3d00;
    border-right: none;
    background: linear-gradient(45deg, #ff3d00, #ff5722);
    color: white;
    border-radius: 25px 0 0 25px;
    padding: 12px 15px;
  }
  
  .clear-btn {
    border: 2px solid #ff3d00;
    border-left: none;
    border-radius: 0 25px 25px 0;
    background: rgba(255, 61, 0, 0.1);
    color: #ff3d00;
    transition: all 0.3s ease;
  }
  
  .clear-btn:hover {
    background: #ff3d00;
    color: white;
    border-color: #ff3d00;
  }
  
  .search-info {
    position: absolute;
    top: 100%;
    left: 15px;
    margin-top: 5px;
    font-style: italic;
  }
  
  /* Animación para el input */
  .search-input:focus {
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    .search-input {
      font-size: 14px;
      padding: 10px 15px;
    }
    
    .search-icon, .clear-btn {
      padding: 10px 12px;
    }
  }
</style>