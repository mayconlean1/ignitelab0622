import{Route, Routes} from 'react-router-dom';
import { Platform } from '../pages/platform';
import { Subscribe } from '../pages/Subscribe';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Subscribe/>} />
            <Route path='/event' element={<Platform />} />
            <Route path='/event/lesson/:slug' element={<Platform />} />
        </Routes>
        )
}