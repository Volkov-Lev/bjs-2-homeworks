// Задача 1

function parseCount(value) {
	const parcedValue = Number.parseInt(value);
	if (isNaN(parcedValue)) {
		throw new Error("Невалидное значение");
	} 
		
		return parcedValue;
}

function validateCount(value) {
	try {
		return parseCount(value)
	} catch (error) { 
		return error;
	}

}

// Задача 2

class Triangle {
	constructor(a, b, c) {
	if (a + b < c || a + c < b || b + c < a) {
		throw new Error("Треугольник с такими сторонами не существует");
	  }

	this.a = a;
	this.b = b;
	this.c = c;

	}

  getPerimeter() {
    return this.a + this.b + this.c;
  }

	getArea() {
		const p = this.getPerimeter() * 0.5;
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
			).toFixed(3);
	}

}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	  } catch {
		  return {
		  getArea() {
		  return "Ошибка! Треугольник не существует"
	    },
	    getPerimeter() {
	    return "Ошибка! Треугольник не существует"
	    },
	  }
  }
}
