# 🐱 Supergato (Ultimate Tic-Tac-Toe)

Supergato es una versión extendida y estratégica del clásico juego de gato (tic-tac-toe), donde cada celda del tablero principal contiene otro tablero interno. El objetivo es ganar tres tableros internos seguidos para conquistar el tablero principal y así ganar la partida.

## 🎮 ¿Cómo se juega?

- El tablero principal es una cuadrícula 3x3.
- Cada celda del tablero principal contiene su propio minitablero 3x3 (¡gato dentro de gato!).
- El juego comienza con el jugador X.
- En su turno, un jugador elige una celda en cualquier minitablero disponible y coloca su ficha (X u O).
- El lugar donde el jugador coloca su ficha **determina** en qué minitablero el siguiente jugador debe jugar.  
  Por ejemplo, si juegas en la **posición 2** (esquina superior derecha) de un minitablero, el siguiente jugador debe jugar en el **minitablero 2** del tablero principal.
- Si el minitablero de destino ya fue ganado o está lleno (empate), el siguiente jugador puede elegir **cualquier minitablero disponible**.
- Ganas un minitablero cuando haces una línea de 3 (horizontal, vertical o diagonal).
- Ganas el juego cuando conquistas **tres minitableros seguidos** en el tablero principal.

## 🧱 Tecnologías

- HTML5
- CSS Grid
- JavaScript (DOM)

## 🧪 Estado actual del proyecto

- ✅ Estructura de tablero principal (3x3).
- ✅ Cada celda contiene un tablero interno (3x3).
- ✅ Celdas internas clickeables.
- ✅ Alternancia de turnos entre X y O.

## 🚧 Próximos pasos

- ⏭️ Restringir el siguiente turno al minitablero correspondiente.
- 🏆 Detectar cuando un jugador gana un minitablero.
- 👑 Detectar victoria final en el tablero principal.
- 💥 Añadir estilos y animaciones.

## ✨ Inspiración

Basado en la mecánica de **Ultimate Tic-Tac-Toe**, pero con el nombre original **Supergato** y toques únicos.
