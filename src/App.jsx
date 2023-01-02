import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Pegawai from './pages/Pegawai/Pegawai';
import TambahPegawai from './pages/Pegawai/TambahPegawai';
import TambahJenjangKarir from './pages/Pegawai/TambahJenjangKarir';
import DetailPegawai from './pages/Pegawai/DetailPegawai';
import Golongan from './pages/Golongan/Golongan';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pegawai" element={<Pegawai />} />
        <Route path="pegawai/detail/:nip" element={<DetailPegawai />} />
        <Route path="pegawai/tambah" element={<TambahPegawai />} />
        <Route path="pegawai/jenjang/tambah/:nip" element={<TambahJenjangKarir />} />
        <Route path="golongan" element={<Golongan />} />
        <Route path="*" element={<div className='flex'><h1 className='justify-content-center items-center'>404: Not Found</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;
