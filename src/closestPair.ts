interface Point {
   x: number;
   y: number;
}

function closestPair(px: Point[], py: Point[]): [Point, Point] {
   const n = px.length;

   // Базовый случай: если количество точек меньше или равно 3
   if (n <= 3) {
      let minDist = Number.POSITIVE_INFINITY;
      let closestPoints: [Point, Point] = [px[0], px[1]];

      for (let i = 0; i < n; i++) {
         for (let j = i + 1; j < n; j++) {
            const dist = calculateDistance(px[i], px[j]);
            if (dist < minDist) {
               minDist = dist;
               closestPoints = [px[i], px[j]];
            }
         }
      }

      return closestPoints;
   }

   // Разделение массива точек на две половины
   const mid = Math.floor(n / 2);
   const midPoint = px[mid];

   const pyl: Point[] = [];
   const pyr: Point[] = [];
   for (const point of py) {
      if (point.x <= midPoint.x) {
         pyl.push(point);
      } else {
         pyr.push(point);
      }
   }

   const pxl = px.slice(0, mid);
   const pxr = px.slice(mid);

   // Рекурсивный вызов функции для левой и правой половин
   const [pl1, pl2] = closestPair(pxl, pyl);
   const [pr1, pr2] = closestPair(pxr, pyr);

   // Находим минимальное расстояние d между левой и правой половинами
   const d = Math.min(calculateDistance(pl1, pl2), calculateDistance(pr1, pr2));

   // Формируем полосу ширины 2d вокруг середины массива по оси X
   const strip: Point[] = [];
   for (const point of py) {
      if (Math.abs(point.x - midPoint.x) < d) {
         strip.push(point);
      }
   }

   // Находим ближайшие пары в полосе
   const closestStrip = closestPairStrip(strip, d);

   // Ищем ближайшую пару из трех найденных
   const closestPairs: [Point, Point][] = [[pl1, pl2], [pr1, pr2], closestStrip];

   const closestPoints = getClosestPair(closestPairs);

   return closestPoints;
}

// Вспомогательные функции

function calculateDistance(p1: Point, p2: Point): number {
   const dx = p1.x - p2.x;
   const dy = p1.y - p2.y;
   return Math.sqrt(dx * dx + dy * dy);
}

function closestPairStrip(strip: Point[], d: number): [Point, Point] {
   let minDist = d;
   let closestPoints: [Point, Point] = [strip[0], strip[1]];

   const n = strip.length;

   for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n && strip[j].y - strip[i].y < minDist; j++) {
         const dist = calculateDistance(strip[i], strip[j]);
         if (dist < minDist) {
            minDist = dist;
            closestPoints = [strip[i], strip[j]];
         }
      }
   }

   return closestPoints;
}

// Функция для нахождения ближайшей из трех пар точек
function getClosestPair(pairs: [Point, Point][]): [Point, Point] {
   let minDist = Number.POSITIVE_INFINITY;
   let closestPoints: [Point, Point] = [pairs[0][0], pairs[0][1]];

   for (const [p1, p2] of pairs) {
      const dist = calculateDistance(p1, p2);
      if (dist < minDist) {
         minDist = dist;
         closestPoints = [p1, p2];
      }
   }

   return closestPoints;
}

// Помимо самой функции `closestPair`, в примере есть дополнительные вспомогательные функции. Функция `calculateDistance` используется для вычисления расстояния между двумя точками. Функция `closestPairStrip` находит ближайшую пару точек в полосе ширины 2d вокруг середины раздела. Функция `getClosestPair` находит ближайшую пару точек из трех предоставленных пар.
