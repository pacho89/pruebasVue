import { shallowMount } from '@vue/test-utils'

import Usuario from '@/components/Usuario.vue'



describe('componente Usuario.vue', () => {

    it('debe cambiar el valor a true', () => {
        /// Crea una instancia del componente
        const wrapper = shallowMount(Usuario);
        /// Evalúa que el valor por defecto sea "false"
        expect(wrapper.vm.usuarioActivo).toBe(false);
        /// Ejecuta el metodo que cambia el valor de la variable a "true"
        wrapper.vm.activarUsuario();
        /// Evalúa que el nuevo valor usuarioActivo sea "true"
        expect(wrapper.vm.usuarioActivo).toBe(true);
    })
})