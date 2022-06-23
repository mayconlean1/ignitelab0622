import{Route, Routes} from 'react-router-dom';
import { Platform } from '../pages/platform';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/event' element={<Platform />} />
            <Route path='/event/lesson/:slug' element={<Platform />} />
        </Routes>
        )
}