<template>
  <div class="lista">
    <h3 v-if="titulo" class="lista-titulo">{{ titulo }}</h3>

    <ul class="lista-itens">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="lista-item"
        :class="{ 'lista-item-destaque': destaque === index }"
      >
        <slot :item="item" :index="index" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" generic="T">

defineProps<{
  items: T[]
  titulo?: string
  destaque?: number
}>()

</script>

<style scoped>
.lista {
    background: var(--fundo);
    border: 1px solid var(--borda);
    border-radius: var(--radius);
    padding: 16px;
    width: 100%;

    .lista-titulo {
        color: var(--texto);
        font-size: 11px;
        letter-spacing: 0.08em;
        margin-bottom: 12px;
        opacity: 0.4;
        text-align: center;
        text-transform: uppercase;
    }

    .lista-itens {
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 8px;
        list-style: none;
        margin: 0;
        max-height: 250px;
        overflow-y: auto;
        padding: 0;
        scrollbar-width: thin;
        scrollbar-color: var(--borda) transparent;
        width: 100%;

        &::-webkit-scrollbar { 
            width: 4px; 
        }

        &::-webkit-scrollbar-track { 
            background: transparent; 
        }

        &::-webkit-scrollbar-thumb {
            background: var(--borda);
            border-radius: 999px;
        }
    }

    .lista-item {
        align-items: center;
        background: var(--superficie);
        border: 1px solid var(--borda);
        border-radius: 8px;
        display: flex;
        gap: 10px;
        padding: 10px 14px;
        transition: border-color 0.2s;
        width: 95%;
    }

    .lista-item-destaque {
        border-color: var(--primaria);
        background: color-mix(in srgb, var(--primaria) 10%, var(--superficie));
    }
  
}


</style>