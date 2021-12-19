import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Index from '../Page/index'

export default function RouterComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index />} />
            </Routes>
        </BrowserRouter>
    )
}
