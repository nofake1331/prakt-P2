
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
              
            <button
              class="btn-close"
              @click="close"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription">
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            Ну вот модальное окно, как передовать данные между компонентами я не знаю.
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
      props: {
        id: ''
      },
    name: 'modal',
          data: function(){
            
         return{
      studs:{},
         };
       },

    methods: {

   
      close() {
        this.$emit('close');
         
      },
    },
  };
</script>