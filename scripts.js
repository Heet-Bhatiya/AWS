body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f0f0;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
}

h1 {
  margin-bottom: 10px;
  color: #333;
}

#game {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 5px;
  margin-bottom: 20px;
}

.cell {
  background: white;
  border: 2px solid #0077cc;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
}

.cell:hover {
  background-color: #e0f0ff;
}

#status {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #0077cc;
}

button {
  background-color: #0077cc;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #005fa3;
}
