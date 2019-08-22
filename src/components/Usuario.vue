<template>

 <div>Usuario</div>

</template>

<script>
export default {
    data: function () {
        return {
            usuarioActivo: false
        };
    },
    methods: {
        activarUsuario: function() {
            this.usuarioActivo = true;
        }
    }
};
</script>

<style>
</style>