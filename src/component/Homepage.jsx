import { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import ContactUs from "./Homepage-En/ContactUs"
import Navigation from "./Header/Nav"
import Main from "./Main"
import Index from "./Homepage-En/Index"
const Error = lazy(()=>import('./Error'))

const HomePage = () => {
    return (
        <div className='container-fluid bg-light' style={{ overflow: 'hidden' }} >
            <Navigation />
            <Main>                
                <Suspense fallback={<div className='flex justify-center w-full mt-5' >Loading ...</div>}>
                    <Switch>
                        <Route exact path='/' component={Index} />
                        <Route path='/Contact-us' component={ContactUs} />
                        {/* <Route  exact path='/' component={Skema} />
                        <Route  path='/skema/:id' component={SkemaDetail} />
                        <Route  path='/pemegang-sertifikat' component={DataPemegang} />
                        <Route  path='/petunjuk' component={Petunjuk} /> */}
                    </Switch>
                </Suspense>
            </Main>
        </div>
    )
}

export default HomePage