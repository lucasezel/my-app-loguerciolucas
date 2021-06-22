import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//COMPONENTES
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';
import NavBar from './components/NavBar/NavBar';

class App extends React.Component {
  render(){
    return (
      <div className='container'>

        <NavBar />

        <Header 
        title={'ElectroApp'}
        subtitle={'Todos los electrodomesticos que buscas en un solo lugar'}
        />

        <div className='card-container row text-center justify-content-center align-self-center'>
        <CardComponent 
        name={'Plancha'} 
        description={'Plancha a vapor'}
        img={'data:image/jpeg;base64,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'}
        />

        <CardComponent 
        name={'Notebook'} 
        description={'Acer Nitro 5'}
        img={'data:image/jpeg;base64,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'}
        />

        <CardComponent 
        name={'Heladera'} 
        description={'Heladera de 100 lts'}
        img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GiuCcl1KlYNuYEqA9A69T-0I96CE9P6gVLqXPpLOR2Q5eXPeIMiWv6xUwEUTmwl9-uSzpXk&usqp=CAc'}
        />

        <CardComponent 
        name={'Microondas'} 
        description={'Microondas de 25 lts'}
        img={'data:image/jpeg;base64,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'}
        />

        <CardComponent 
        name={'Horno electrico'} 
        description={'Horno electrico de 40 lts'}
        img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx7JvDssaGPaivuxC4kII76J9_9zrPhg8fr_BIpyNcCThsXYeGSBaXKC4d6C9siV6lLx-7knk&usqp=CAc'}
        />

        <CardComponent 
        name={'TV'} 
        description={'TV Philips 43 pulgadas'}
        img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsY33HZn9RIDXVwo3x6Xlz8cbYbz8jOR94oXffReZo9NwEr4ncH2x_Zrgg0gLeBZtVa2EGpgw&usqp=CAc'}
        />

        <CardComponent 
        name={'Tostadora'} 
        description={'Tostadora 2 cabidades'}
        img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyT0Kpw9dMI7cxlHWXXTdEr-ZUuNdawFQtFUakY6FHVZgX4GfvFAhQzOHD0Rkcy94WLZW3Zjx&usqp=CAc'}
        />
        </div>
        
      </div>
      );  
  }
}

export default App;