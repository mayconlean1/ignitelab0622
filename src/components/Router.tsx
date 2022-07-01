import{Route, Routes} from 'react-router-dom';
import { Authenticate } from '../pages/Authenticate';
import { CodeLogin } from '../pages/CodeLogin';
import { Platform } from '../pages/platform';
import { Subscribe } from '../pages/Subscribe';

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<Subscribe/>} />
            <Route path='/event' element={<Platform />} />
            <Route path='/event/lesson/:slug' element={<Platform />} />
            <Route path='/codelogin' element={<CodeLogin/>} />
            <Route path='/authenticate' element={<Authenticate/>} />
        
        </Routes>
        )
}