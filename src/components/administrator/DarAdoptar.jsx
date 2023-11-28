import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/DarAdoptar.css';
import Constants from "../../lib/Constants.js";

const DarAdoptar = () => {
    const [form, setForm] = useState({
      nombre: '',
      edad: '',
      descripcion: '',
      raza: '',
      especie: '',
      genero: '',
      provincia: '',
      image: null,
    });
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      setForm({ ...form, image: URL.createObjectURL(file) });
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Restablecer la URL del objeto para liberar recursos
      URL.revokeObjectURL(form.image);
  
      const formData = new FormData();
      formData.append('image', e.target.image.files[0]);
  
      Object.entries(form).forEach(([key, value]) => {
        if (key !== 'image') {
          formData.append(key, value);
        }
      });
  
      try {
        const response = await fetch(
          `${Constants.API_BASE_URL}:${Constants.API_PORT}/api/pets/addPet`,
          {
            method: 'POST',
            body: formData,
          }
        );
  
        if (response.ok) {
          console.log('Se logró dar en adopción a la mascota!');
        } else {
          console.error('Error subiendo la mascota');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <div>
        <h3>Inicio / Pone en Adopcion</h3>
        <form onSubmit={handleSubmit} className="row dar-adoptar-form mt-4">
          {/* Sección de Subir Foto */}
          <div className="col-md-3">
            <div className="row justify-content-center">
              <div className="form-group preview-container">
                {form.image ? (
                  <img
                    src={form.image}
                    alt="Preview"
                    className="preview-image"
                  />
                ) : (
                  <span style={{ color: 'white' }}>No hay imagen</span>
                )}
              </div>
            </div>
  
            <div className="form-group row justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-secondary col-md-5"
                onClick={() => document.getElementById('imageInput').click()}
              >
                Subir Foto
              </button>
              <input
                type="file"
                id="imageInput"
                className="form-control-file"
                name="image"
                onChange={handleImageUpload}
                accept="image/*"
                style={{ display: 'none' }}
                required
              />
            </div>
          </div>
  
          <div className="col-md-9">
            <div className="row">
              <div className="form-group col-md-8">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="form-group col-md-4">
                <label htmlFor="edad">Edad:</label>
                <input
                  type="text"
                  id="edad"
                  name="edad"
                  value={form.edad}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
  
            <div className="form-group col-md-12">
              <label htmlFor="descripcion">Descripción:</label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>
  
            <div className="row">
              <div className="form-group col-md-4">
                <label htmlFor="raza">Raza:</label>
                <input
                  type="text"
                  id="raza"
                  name="raza"
                  value={form.raza}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="form-group col-md-4">
                <label htmlFor="especie">Especie:</label>
                <input
                  type="text"
                  id="especie"
                  name="especie"
                  value={form.especie}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="form-group col-md-4">
                <label htmlFor="genero">Género:</label>
                <input
                  type="text"
                  id="genero"
                  name="genero"
                  value={form.genero}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
  
            <div className="row">
              <div className="form-group col-md-4">
                <label htmlFor="provincia">Provincia:</label>
                <input
                  type="text"
                  id="provincia"
                  name="provincia"
                  value={form.provincia}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Fin Formulario*/}
            <div className="form-group col-md-12">
              <button
                type="submit"
                className="btn btn-secondary col-md-12 cargar-mascotas"
              >
                Cargar Mascota
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default DarAdoptar;
  