/* Contador */
#contador .contador-grid {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap; /* Asegura que se ajusten en dispositivos pequeños */
}

#contador .tiempo {
    padding: 20px;
    background-color: var(--color-acento);
    color: var(--color-neutro);
    border-radius: 8px;
    text-align: center;
    width: 100px; /* Aumenta el ancho */
    height: 120px; /* Ajusta la altura */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem; /* Tamaño del número */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#contador .tiempo p {
    font-size: 1rem; /* Tamaño de las etiquetas (Días, Horas, etc.) */
    margin: 5px 0 0;
}
