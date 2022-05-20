import s from './_app.module.scss';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Header from './header/Header';

import Main from "./pages/main/Main";
import Catalog from "./pages/catalog/Catalog";
import CatalogContainer from "./pages/catalog/CatalogContainer";
import ProductCard from "./pages/productCatalog/ProductCard";
import Footer from './footer/Footer';
import MainContainer from './pages/main/MainContainer';


function App(props) {

    return (
        <BrowserRouter >
            <div className={s.mainApp}>
                <div className={s.container}>
                    <Header />

                    {/* <Route path='/main' render={() => <Main cardDetailsData={props.state.cardDetailsData}
                        stockBanerData={props.state.stockBanerData.stockBanerData} />} /> */}

                    <Route path='/main' render={() => <MainContainer />} />

                    <Route path='/catalog' render={() => <CatalogContainer />} />

                    {/* <Route path='/catalog' render={() => <CatalogContainer store={props.store}/>} /> */}


                    {/* <Route path='/productCard' component={ProductCard} /> */}

                    <Route path='/productCard'  render={() => <ProductCard/>}/>


                    <Redirect from='/' to='/main' />
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );


}

export default App;
