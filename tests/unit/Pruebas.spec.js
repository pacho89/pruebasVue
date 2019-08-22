import Vue from 'vue'
import Pruebas from '@/components/Pruebas.vue'
// función auxiliar que monta y retorna el texto renderizado
function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const otro = new Ctor({propsData}).$mount()
  return otro.$el.textContent
  
}
describe('componente Pruebas.vue', () => {
  it('Se procesa correctamente con diferentes props', () => {
    expect(getRenderedText(Pruebas, {
      msg: 'Hello'
    })).toBe('Hello')
    expect(getRenderedText(Pruebas, {
      msg: 'Bye'
    })).toBe('Bye')
  })
})
/*
describe('componente Pruebas.vue', () => {

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
}) */