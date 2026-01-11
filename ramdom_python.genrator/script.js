const pythonSnippets = [
    {
        title: "Variable Basics",
        category: "variables",
        code: `name = "PyGenius"
year = 2026
is_awesome = True

print(f"{name} was created in {year}. Awesome: {is_awesome}")`
    },
    {
        title: "Multiple Assignment",
        category: "variables",
        code: `x, y, z = 10, 20, 30
print(f"Total: {x + y + z}")

# Swapping variables easily
x, y = y, x
print(f"Swapped: x={x}, y={y}")`
    },
    {
        title: "String Formatting",
        category: "strings",
        code: `name = "Python"
version = 3.12

# F-Strings (Modern & Fast)
print(f"I love {name} {version}!")

# Upper & Lower case
msg = "hello world"
print(msg.title()) # Hello World`
    },
    {
        title: "String Slicing",
        category: "strings",
        code: `text = "Programming"
print(text[0:4]) # Prog
print(text[-3:]) # ing
print(text[::-1]) # gnimmargorP (Reversed!)`
    },
    {
        title: "List Comprehension",
        category: "lists",
        code: `# Squaring numbers from 0 to 9
squares = [x**2 for x in range(10)]
print(squares)

# Filtering even numbers
evens = [x for x in squares if x % 2 == 0]
print(evens)`
    },
    {
        title: "List Operations",
        category: "lists",
        code: `fruits = ["apple", "banana"]
fruits.append("cherry")
fruits.insert(1, "blueberry")
fruits.pop() # removes last

print(f"Shopping list: {fruits}")
print(f"Total items: {len(fruits)}")`
    },
    {
        title: "Simple If-Else",
        category: "conditions",
        code: `age = 18

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")`
    },
    {
        title: "Match Case (Python 3.10+)",
        category: "conditions",
        code: `status = 404

match status:
    case 200: print("Success")
    case 404: print("Not Found")
    case 500: print("Server Error")
    case _: print("Unknown Status")`
    },
    {
        title: "For Loop with Range",
        category: "loops",
        code: `print("Counting to 5:")
for i in range(1, 6):
    print(i)

# Using else with loops
for x in range(3):
    print(f"Iteration {x}")
else:
    print("Loop finished!")`
    },
    {
        title: "While Loop Example",
        category: "loops",
        code: `count = 5
while count > 0:
    print(f"T-minus {count}")
    count -= 1
print("Blast off! 🚀")`
    },
    {
        title: "Dictionary Basics",
        category: "data_structures",
        code: `user = {
    "name": "Alice",
    "role": "Developer",
    "skills": ["Python", "JS"]
}

print(user["name"])
print(user.get("age", "Not specified"))`
    },
    {
        title: "Set Operations",
        category: "data_structures",
        code: `set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}

print(f"Union: {set_a | set_b}")
print(f"Intersection: {set_a & set_b}")
print(f"Difference: {set_a - set_b}")`
    },
    {
        title: "Random Password Generator",
        category: "utility",
        code: `import random
import string

def generate_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation
    return "".join(random.choice(characters) for i in range(length))

print(f"Generated Password: {generate_password()}")`
    },
    {
        title: "Simple Web Scraper",
        category: "automation",
        code: `import requests
from bs4 import BeautifulSoup

def get_title(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    return soup.title.string

# Example usage:
# print(get_title("https://www.google.com"))`
    },
    {
        title: "File Organizer",
        category: "utility",
        code: `import os
import shutil

def organize_files(directory):
    for filename in os.listdir(directory):
        if os.path.isfile(os.path.join(directory, filename)):
            ext = filename.split('.')[-1]
            os.makedirs(os.path.join(directory, ext), exist_ok=True)
            shutil.move(os.path.join(directory, filename), 
                        os.path.join(directory, ext, filename))`
    },
    {
        title: "Guess the Number Game",
        category: "game",
        code: `import random

def guess_number():
    target = random.randint(1, 100)
    attempts = 0
    print("I'm thinking of a number between 1 and 100.")
    
    while True:
        guess = int(input("Your guess: "))
        attempts += 1
        if guess < target: print("Higher!")
        elif guess > target: print("Lower!")
        else:
            print(f"Correct! It took {attempts} attempts.")
            break`
    },
    {
        title: "Basic Data Analysis",
        category: "data",
        code: `import pandas as pd

# Creating a sample dataset
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Score': [85, 92, 78],
    'City': ['NY', 'LA', 'CHI']
}
df = pd.DataFrame(data)

print("Mean Score:", df['Score'].mean())
print("\\nFull DataFrame:\\n", df)`
    },
    {
        title: "Basic Function",
        category: "functions",
        code: `def greet(name="User"):
    return f"Hello, {name}! Welcome to Python."

print(greet("Alice"))
print(greet())`
    },
    {
        title: "Lambda Functions",
        category: "functions",
        code: `# Double a number
double = lambda x: x * 2
print(double(5)) # 10

# Sorting with lambda
pairs = [(1, 'one'), (2, 'two'), (3, 'three')]
pairs.sort(key=lambda pair: pair[1])
print(pairs)`
    },
    {
        title: "Writing to a File",
        category: "file_handling",
        code: `with open("example.txt", "w") as f:
    f.write("Hello Python!\\n")
    f.write("This is a new line.")

print("File 'example.txt' has been created.")`
    },
    {
        title: "Reading from a File",
        category: "file_handling",
        code: `try:
    with open("example.txt", "r") as f:
        content = f.read()
        print("File Content:\\n", content)
except FileNotFoundError:
    print("Error: The file was not found.")`
    },
    {
        title: "Appending to a File",
        category: "file_handling",
        code: `with open("example.txt", "a") as f:
    f.write("\\nAppending this line.")

print("Content appended successfully.")`
    },
    {
        title: "Basic Try/Except",
        category: "error_handling",
        code: `try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print(f"Result: {result}")
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")
except ValueError:
    print("Error: Please enter a valid number.")`
    },
    {
        title: "Try/Except/Finally",
        category: "error_handling",
        code: `try:
    f = open("data.txt", "r")
    # perform actions
except IOError:
    print("Could not read file.")
finally:
    print("Closing operations clean.")
    # f.close() would go here if f was opened`
    },
    {
        title: "Using Math Module",
        category: "modules",
        code: `import math

print(f"Pi: {math.pi}")
print(f"Square root of 16: {math.sqrt(16)}")
print(f"Factorial of 5: {math.factorial(5)}")`
    },
    {
        title: "Random Module Fun",
        category: "modules",
        code: `import random

names = ["Alice", "Bob", "Charlie", "David"]
winner = random.choice(names)
print(f"The winner is: {winner}!")

# Random integer
print(f"Dice Roll: {random.randint(1, 6)}")`
    },
    {
        title: "Basic Class & Object",
        category: "oop",
        code: `class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed
    
    def bark(self):
        return f"{self.name} says Woof!"

my_dog = Dog("Rex", "German Shepherd")
print(my_dog.bark())`
    },
    {
        title: "Class Inheritance",
        category: "oop",
        code: `class Animal:
    def speak(self):
        pass

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Duck(Animal):
    def speak(self):
        return "Quack!"

animals = [Cat(), Duck()]
for animal in animals:
    print(animal.speak())`
    },
    {
        title: "Simple Quiz Application",
        category: "projects",
        code: `questions = {
    "What is the capital of France?": "Paris",
    "What is 5 + 7?": "12",
    "Who wrote 'Romeo and Juliet'?": "Shakespeare"
}

score = 0
for q, a in questions.items():
    user_answer = input(f"{q} ")
    if user_answer.lower() == a.lower():
        print("Correct!")
        score += 1
    else:
        print(f"Wrong! The answer was {a}")

print(f"Final Score: {score}/{len(questions)}")`
    },
    {
        title: "Student Management System",
        category: "projects",
        code: `students = {}

def add_student(name, grade):
    students[name] = grade
    print(f"Added {name} with grade {grade}")

def show_students():
    print("\\n--- Student List ---")
    for name, grade in students.items():
        print(f"{name}: {grade}")

add_student("Alice", "A")
add_student("Bob", "B")
show_students()`
    }
];

const dailyTasks = [
    "Write a script that calculates Fibonacci sequence.",
    "Practice using dictionary comprehensions.",
    "Explore the 'itertools' module.",
    "Build a basic CLI Todo app.",
    "Implement a binary search algorithm."
];

const pythonChallenges = [
    {
        title: "Variable Swap",
        category: "variables",
        problem: "Challenge: Write a Python program to swap two variables without using a third temporary variable.",
        solution: "x, y = 5, 10\nx, y = y, x\nprint(f'x: {x}, y: {y}')"
    },
    {
        title: "Type Conversion",
        category: "variables",
        problem: "Challenge: Take a numeric string '100' and a float 50.5. Add them together and print the result as an integer.",
        solution: "s = '100'\nf = 50.5\nresult = int(int(s) + f)\nprint(result)"
    },
    {
        title: "Palindrome Check",
        category: "strings",
        problem: "Challenge: Create a function that checks if a given string is a palindrome (reads the same forwards and backwards).",
        solution: "def is_palindrome(s):\n    s = s.lower().replace(' ', '')\n    return s == s[::-1]\n\nprint(is_palindrome('Racecar'))"
    },
    {
        title: "Word Counter",
        category: "strings",
        problem: "Challenge: Write a script to count the occurrences of each word in a sentence.",
        solution: "sentence = 'python is great and python is fast'\nwords = sentence.split()\ncounts = {word: words.count(word) for word in set(words)}\nprint(counts)"
    },
    {
        title: "Find Largest Number",
        category: "lists",
        problem: "Challenge: Given a list of numbers, find the largest number without using the built-in max() function.",
        solution: "nums = [10, 45, 2, 99, 14]\nlargest = nums[0]\nfor n in nums:\n    if n > largest: largest = n\nprint(largest)"
    },
    {
        title: "Remove Duplicates",
        category: "lists",
        problem: "Challenge: Remove all duplicate items from a list while maintaining the original order.",
        solution: "items = [1, 2, 2, 3, 4, 4, 5]\nunique = []\nfor i in items:\n    if i not in unique: unique.append(i)\nprint(unique)"
    },
    {
        title: "FizzBuzz",
        category: "conditions",
        problem: "Challenge: Print numbers 1-20. For multiples of 3 print 'Fizz', for 5 print 'Buzz', for both print 'FizzBuzz'.",
        solution: "for i in range(1, 21):\n    if i % 15 == 0: print('FizzBuzz')\n    elif i % 3 == 0: print('Fizz')\n    elif i % 5 == 0: print('Buzz')\n    else: print(i)"
    },
    {
        title: "Leap Year Checker",
        category: "conditions",
        problem: "Challenge: Write a program to check if a year is a leap year (divisible by 4, but not by 100 unless divisible by 400).",
        solution: "year = 2024\nif (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):\n    print('Leap Year')\nelse: print('Not Leap Year')"
    },
    {
        title: "Multiplication Table",
        category: "loops",
        problem: "Challenge: Use a loop to print the multiplication table of 7 (up to 7 x 10).",
        solution: "for i in range(1, 11):\n    print(f'7 x {i} = {7*i}')"
    },
    {
        title: "Factorial Calculation",
        category: "loops",
        problem: "Challenge: Calculate the factorial of a number using a while loop.",
        solution: "n = 5\nfact = 1\nwhile n > 0:\n    fact *= n\n    n -= 1\nprint(fact)"
    },
    {
        title: "Merge Dictionaries",
        category: "data_structures",
        problem: "Challenge: Merge two Python dictionaries into one. If keys overlap, keep the value from the second dictionary.",
        solution: "dict1 = {'a': 1, 'b': 2}\ndict2 = {'b': 3, 'c': 4}\ndict1.update(dict2)\nprint(dict1)"
    },
    {
        title: "Sum All Items",
        category: "data_structures",
        problem: "Challenge: Write a script to sum all the items in a dictionary values list.",
        solution: "data = {'marks1': 80, 'marks2': 90, 'marks3': 75}\ntotal = sum(data.values())\nprint(total)"
    },
    {
        title: "Area of a Circle",
        category: "functions",
        problem: "Challenge: Create a function that calculates the area of a circle given its radius. Use math.pi.",
        solution: "import math\ndef circle_area(radius):\n    return math.pi * (radius ** 2)\nprint(circle_area(5))"
    },
    {
        title: "Frequency of Elements",
        category: "functions",
        problem: "Challenge: Write a function that takes a list and returns a dictionary with the frequency of each element.",
        solution: "def get_freq(arr):\n    return {x: arr.count(x) for x in set(arr)}\nprint(get_freq([1,1,2,3,3,3]))"
    },
    {
        title: "Safe File Reader",
        category: "file_handling",
        problem: "Challenge: Write a program that tries to read 'notes.txt' and prints 'Missing' if the file doesn't exist.",
        solution: "try:\n    with open('notes.txt', 'r') as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print('Missing')"
    },
    {
        title: "Division App",
        category: "error_handling",
        problem: "Challenge: Handle both ValueError (not a number) and ZeroDivisionError in a single division program.",
        solution: "try:\n    a = int(input())\n    b = int(input())\n    print(a/b)\nexcept (ValueError, ZeroDivisionError) as e:\n    print(f'Error: {e}')"
    },
    {
        title: "Person Class",
        category: "oop",
        problem: "Challenge: Create a 'Person' class with attributes 'name' and 'age', and a method to introduce them.",
        solution: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def info(self):\n        print(f'Hi, I am {self.name}, {self.age} years old.')\n\np = Person('John', 25)\np.info()"
    }
];

// DOM Elements
const generateBtn = document.getElementById('generate-btn');
const luckyBtn = document.getElementById('lucky-btn');
const snippetModeBtn = document.getElementById('snippet-mode-btn');
const challengeModeBtn = document.getElementById('challenge-mode-btn');
const categorySelect = document.getElementById('category-select');
const codeOutput = document.getElementById('python-code');
const outputTitle = document.getElementById('output-title');
const copyBtn = document.getElementById('copy-btn');
const starBtn = document.getElementById('star-code-btn');
const solutionBtn = document.getElementById('solution-btn');
const tasksBtn = document.getElementById('tasks-btn');
const closeTasksBtn = document.getElementById('close-tasks');
const tasksPanel = document.getElementById('daily-tasks-panel');
const taskList = document.getElementById('task-list');
const toast = document.getElementById('toast');

// Current State
let currentSnippet = null;
let currentMode = 'snippet'; // 'snippet' or 'challenge'
let lastSeenId = null;

// Initialization
function init() {
    renderTasks();

    generateBtn.addEventListener('click', () => generateContent());
    luckyBtn.addEventListener('click', feelLucky);
    snippetModeBtn.addEventListener('click', () => setMode('snippet'));
    challengeModeBtn.addEventListener('click', () => setMode('challenge'));
    copyBtn.addEventListener('click', copyCode);
    solutionBtn.addEventListener('click', revealSolution);

    tasksBtn.addEventListener('click', () => tasksPanel.classList.remove('hidden'));
    closeTasksBtn.addEventListener('click', () => tasksPanel.classList.add('hidden'));

    starBtn.addEventListener('click', () => {
        if (!currentSnippet) return;
        saveToStarred(currentSnippet);
        showToast("⭐️ Added to Starred");
    });
}

function setMode(mode) {
    currentMode = mode;
    snippetModeBtn.classList.toggle('active', mode === 'snippet');
    challengeModeBtn.classList.toggle('active', mode === 'challenge');
    solutionBtn.classList.toggle('hidden', mode === 'snippet');

    // Clear output on mode change for better UX
    outputTitle.textContent = "Mode Switched";
    codeOutput.textContent = `# Ready for some ${mode}s?`;
}

function generateContent(forceCategory = null) {
    const category = forceCategory || categorySelect.value;
    const pool = currentMode === 'snippet' ? pythonSnippets : pythonChallenges;

    let filtered = pool;
    if (category !== 'random' && !forceCategory) {
        filtered = pool.filter(s => s.category === category);
    }

    if (filtered.length === 0) {
        showToast("No content found for this category yet!");
        return;
    }

    // Ensure we pick a different one if possible
    let item;
    if (filtered.length > 1) {
        do {
            item = filtered[Math.floor(Math.random() * filtered.length)];
        } while (item.title === lastSeenId);
    } else {
        item = filtered[0];
    }

    lastSeenId = item.title;
    currentSnippet = item;

    // Animation effect
    codeOutput.parentElement.style.opacity = 0;
    setTimeout(() => {
        outputTitle.textContent = item.title;
        codeOutput.textContent = currentMode === 'snippet' ? item.code : item.problem;
        codeOutput.parentElement.style.opacity = 1;
        codeOutput.parentElement.style.transition = 'opacity 0.4s ease';

        // Hide solution button text if in challenge mode
        if (currentMode === 'challenge') {
            solutionBtn.textContent = "Show Solution";
        }
    }, 200);
}

function feelLucky() {
    const allCategories = Array.from(categorySelect.options).map(opt => opt.value).filter(v => v !== 'random');
    const randomCat = allCategories[Math.floor(Math.random() * allCategories.length)];
    const randomMode = Math.random() > 0.5 ? 'snippet' : 'challenge';

    categorySelect.value = randomCat;
    setMode(randomMode);
    generateContent(randomCat);
    showToast(`🎲 Lucky: ${randomCat} ${randomMode}`);
}

function revealSolution() {
    if (currentMode !== 'challenge' || !currentSnippet) return;

    if (solutionBtn.textContent === "Show Solution") {
        codeOutput.textContent = currentSnippet.solution;
        solutionBtn.textContent = "Hide Solution";
    } else {
        codeOutput.textContent = currentSnippet.problem;
        solutionBtn.textContent = "Show Solution";
    }
}

function copyCode() {
    const text = codeOutput.textContent;
    navigator.clipboard.writeText(text).then(() => {
        showToast("📋 Copied to clipboard!");
    });
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 2000);
}

function renderTasks() {
    taskList.innerHTML = dailyTasks.map(task => `
        <li>
            <input type="checkbox">
            <span>${task}</span>
        </li>
    `).join('');
}

function saveToStarred(snippet) {
    let starred = JSON.parse(localStorage.getItem('pygenius_starred') || '[]');
    if (!starred.find(s => s.title === snippet.title)) {
        starred.push(snippet);
        localStorage.setItem('pygenius_starred', JSON.stringify(starred));
    }
}

// Run Init
init();
