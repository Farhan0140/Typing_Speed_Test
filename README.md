# 🖋️ Typing Speed Test – JavaScript Project

A simple yet powerful web-based **Typing Speed Test** app built with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**. It helps users measure their **typing speed**, **accuracy**, and displays detailed results after a 60-second test.

---

## 🚀 Features

- ⏱️ 60-second countdown timer
- ✍️ Dynamic text rendering (each character is individually tracked)
- 🎯 Real-time feedback on keypress (correct/wrong)
- 🟩 Visual feedback with color-coded results
- 📈 Live counters for:
  - Total Typed Characters
  - Correct Typed Characters
  - Wrong Typed Characters
- 📊 Calculates:
  - **CPM (Characters Per Minute)**
  - **WPM (Words Per Minute)**
  - **Accuracy (%)**
- 🔁 Smart restart with `localStorage` (remembers and reloads into test)
- ⚡ Clean and responsive UI with Tailwind CSS


---

## 🧪 Sample Result

```txt
Total Characters → 1350
Typed Characters → 970
Correct Characters → 910
Wrong Characters → 60
CPM → 970
WPM → 194
Accuracy → 93.81%
```

## 🗂️ Project Structure
```
index.html              # Main HTML structure
script.js               # Core logic for typing, timer, result, restart
style.css (optional)    # Tailwind utilities or custom styles
```

## 🔧 How It Works

1. **`start_test()`**
   - Unhides the `.box` elements (which were initially hidden)
   - Dynamically renders a long paragraph character-by-character into `<span>` tags
   - Starts a 60-second countdown timer
   - Adds a `keydown` listener to compare each typed character with the expected one
   - Highlights the current character with a blinking cursor style (`.for_track_cursor`)
   - Marks each character as:
     - ✅ Correct (`.green_bg` or `.correct`)
     - ❌ Incorrect (`.red_bg` or `.wrong`)
   - Updates live counters:
     - Total typed characters
     - Correct characters
     - Wrong characters

2. **`calculate_result()`**
   - Called when the timer hits 0 or all characters are typed
   - Calculates and displays:
     - **CPM (Characters Per Minute)** — `cursor`
     - **WPM (Words Per Minute)** — `cursor / 5`
     - **Accuracy (%)** — `(correct / typed) * 100`
   - Injects the results into the `#for_text_and_result` container

3. **`restart()`**
   - Saves a flag in `localStorage` (`shouldStartTest = true`)
   - Reloads the page using `location.reload()`
   - On `window.onload`, if the flag exists, `start_test()` runs automatically and the flag is cleared

4. **Character Cursor System**
   - Each character is given a dynamic ID like `single_character0`, `single_character1`, etc.
   - The current character is visually tracked using a class (`.for_track_cursor`)
   - Cursor moves forward as each key is typed

5. **Word Checking**
   - Spaces are checked explicitly (e.g. `" "` key must match a space)
   - Letters are matched case-sensitively unless modified

## 🛠️ Technologies Used
- ✅ HTML5
- ✅ Tailwind CSS
- ✅ JavaScript (Vanilla)

## 🧑‍💻 Author
- Farhan Nadim
- Built with 💙 and JavaScript
- Feel free to fork, modify, and enhance it!

## 🔗 Live Link
<a>https://imaginative-alpaca-a75f52.netlify.app/</a>
