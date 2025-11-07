# Student Grade Report Generator

# Function to calculate grade
def calculate_grade(mark):
    if mark >= 80:
        return "A"
    elif mark >= 70:
        return "B"
    elif mark >= 60:
        return "C"
    elif mark >= 50:
        return "D"
    else:
        return "E"

# Sample student data
students = [
    {"name": "Faith Kemboi", "marks": 85},
    {"name": "John Doe", "marks": 67},
    {"name": "Mary Wambui", "marks": 73},
    {"name": "Alex Kimani", "marks": 48},
]

# Generate report
print("STUDENT GRADE REPORT")
print("-" * 40)
print("{:<15} {:<10} {:<10}".format("Name", "Marks", "Grade"))
print("-" * 40)

for student in students:
    grade = calculate_grade(student["marks"])
    print("{:<15} {:<10} {:<10}".format(student["name"], student["marks"], grade))

# Summary
average = sum(s["marks"] for s in students) / len(students)
print("-" * 40)
print(f"Class Average: {average:.2f}")
