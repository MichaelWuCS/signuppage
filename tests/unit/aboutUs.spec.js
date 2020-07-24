import AboutUs from '@/components/AboutUs.vue';
import { shallowMount, mount } from '@vue/test-utils';
jest.mock('axios', () => {
  return { get: jest.fn() };
});
import Axios from 'axios';

describe('aboutUs', () => {
  test('aboutUs should render the selected pokemon information (ditto)', async () => {
    //Arrange
    const messageProp = 'Hello';
    Axios.get.mockImplementation(async () => {
      return {
        data: 'mockDittoData',
      };
    });

    //Act
    const wrapper = shallowMount(AboutUs, {
      propsData: { message: messageProp },
    });
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    await wrapper.vm.$nextTick();
    const result = wrapper.html();
    //Assert
    expect(result).toMatchSnapshot();
  });
});
