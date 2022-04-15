import s from './_app.module.scss';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Header from './header/Header';

import Main from "./pages/main/Main";
import Catalog from "./pages/catalog/Catalog";
import ProductCard from "./pages/productCatalog/ProductCard";
import Footer from './footer/Footer';


function App(props) {

    return (
        <BrowserRouter >
            <div className={s.mainApp}>
                <div className={s.container}>
                    <Header headerNavData={props.state.headerNavData} />

                    <Route path='/main' render={() => <Main cardDetailsData={props.state.cardDetailsData} 
                        stockBanerData={props.state.stockBanerData}/>} />

                    <Route path='/catalog' render={() =>  <Catalog cardCAtalogData={props.state.cardCAtalogData}/>} />


                    <Route path='/productCard' component={ProductCard} />

                    
                    <Redirect from='/' to='/main' />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );


}

export default App;
