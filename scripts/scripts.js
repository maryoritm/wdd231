const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
  }
];

// Display current year and last modified date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();

function filterCourses(filter) {
  const courseList = document.querySelector('.course-list');
  courseList.innerHTML = '';
  let totalCredits = 0;

  courses.forEach(course => {
    if (filter === 'all' || course.subject === filter) {
      const courseButton = document.createElement('button');
      courseButton.textContent = `${course.subject} ${course.number}: ${course.title}`;
      courseList.appendChild(courseButton);
      totalCredits += course.credits;
    }
  });
  document.getElementById('totalCredits').textContent = totalCredits;
}
filterCourses('all');
