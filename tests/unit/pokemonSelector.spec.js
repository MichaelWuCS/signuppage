import PokemonSelector from '@/components/PokemonSelector.vue';
import { shallowMount } from '@vue/test-utils';
import { config } from '@vue/test-utils';

describe('pokemonSelector', () => {
  test('pokemonSelector should not take in any props', () => {
    //Arrange
    const parameter = 'Hello';

    //Act
    const wrapper = shallowMount(PokemonSelector, {});
    const result = wrapper.html();

    //Assert
    expect(result).toMatchSnapshot();
  });
});
