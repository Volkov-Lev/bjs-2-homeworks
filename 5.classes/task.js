class Student {
    constructor(name) {
      this.name = name;
      this.grades = {}; // Словарь для хранения оценок по предметам
    }
  
    addMark(grade, subject) {
      if (grade >= 1 && grade <= 5) {
        if (!this.grades[subject]) {
          this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
      } else {
        console.error("Ошибка, оценка должна быть числом от 1 до 5");
      }
    }
  
    getAverageBySubject(subject) {
      const grades = this.grades[subject];
      return grades ? grades.reduce((sum, grade) => sum + grade, 0) / grades.length : 0;
   0;
    }
  
    getAverage() {
      let total = 0;
      for (let subject in this.grades) {
        total += this.getAverageBySubject(subject);
   this.getAverageBySubject(subject);
      }
      return total / Object.keys(this.grades).length;
    }
  
    exclude() {
      console.log(`${this.name} исключен за попытку подделать оценки`);
      // Здесь может быть логика для физического удаления студента из журнала
    }
  }
  
  // Пример использования
  const student = new Student("Олег Никифоров");
  student.addMark(5, "algebra");
  student.addMark(5, "algebra");
  student.addMark(5, "geometry");
  student.addMark(4, "geometry");
  student.addMark(6, "geometry"); // Ошибка, оценка должна быть числом от 1 до 5
  console.error("Ошибка, оценка должна быть числом от 1 до 5");
  student.addMark(5, "physics");
  
  console.log(student.getAverageBySubject("geometry")); // Средний балл по предмету geometry 4.5
  console.log(student.getAverageBySubject("biology")); 4.5
  console.log(student.getAverageBySubject("biology")); // Несуществующий предмет
  console.log(student.getAverage()); // Средний балл по всем предметам 4.75
  student.exclude();