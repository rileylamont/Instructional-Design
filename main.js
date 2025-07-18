document.addEventListener("DOMContentLoaded", function () {
  // Header fetch (if you use it)
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      const headerPlaceholder = document.getElementById("header-placeholder");
      if (headerPlaceholder) headerPlaceholder.innerHTML = data;
    });

  // Fade-in modules one after another
  const modules = document.querySelectorAll(
    ".module-container, .select-module"
  );
  modules.forEach((module, i) => {
    setTimeout(() => {
      module.classList.add("visible");
    }, i * 100);
  });

  // Fade-in on scroll
  const fadeEls = document.querySelectorAll(".fade-in");
  function checkFadeIn() {
    fadeEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", checkFadeIn);
  checkFadeIn();

  // Quiz feature
  const correctAnswer = {
    //mindest questions
    q1: {
      Belief: "Correct!",
      Thought: "Try Again!",
      Action: "Not Quite!",
      Reaction: "No",
    },
    q2: {
      True: "Correct!",
      False: "Try Again!",
    },
    q3: {
      q31: "Incorrect",
      q32: "Try Again!",
      q33: "Correct!",
      q34: "Incorrect",
    },
    q5: {
      q51: "Incorrect",
      q52: "Try Again!",
      q53: "Try Again!",
      q54: "Correct!",
    },

    q21: {
      q211: "Try Again!",
      q212: "Correct!",
      q213: "I don't think so!",
      q214: "Incorrect!",
    },

    q22: {
      q221: "Correct!",
      q222: "Try Again!",
    },

    q23: {
      q231: "Incorrect",
      q232: "Try Again!",
      q233: "Correct!",
      q234: "I Don't Think So!",
    },
    q24: {
      q241: "Try Again!",
      q242: "Correct!",
    },
    q25: {
      q251: "Incorrect",
      q252: "Try Again!",
      q253: "I Don't Think So!",
      q254: "Correct!",
    },

    q31: {
      q311: "Try Again!",
      q312: "Correct!",
      q313: "I don't think so!",
      q314: "Incorrect!",
    },

    q32: {
      q321: "Try Again!",
      q322: "Correct!",
      q323: "Nope!",
      q324: "Incorrect!",
    },

    q33: {
      q331: "Incorrect",
      q332: "Correct!",
      q333: "Try Again!",
      q334: "I Don't Think So!",
    },
    q34: {
      q341: "Try Again!",
      q342: "I Don't Think So!",
      q343: "Correct!",
      q344: "Incorrect!",
    },
    q35: {
      q351: "Incorrect",
      q352: "Try Again!",
      q353: "I Don't Think So!",
      q354: "Correct!",
    },

    q41: {
      q411: "Try Again!",
      q412: "I don't think so!",
      q413: "Correct!",
      q414: "Incorrect!",
    },

    q42: {
      q421: "Try Again!",
      q422: "Nope!",
      q423: "Correct!",
      q424: "Incorrect!",
    },

    q43: {
      q431: "Incorrect",
      q432: "Correct!",
      q433: "Try Again!",
      q434: "I Don't Think So!",
    },
    q44: {
      q441: "Try Again!",
      q442: "Correct!",
      q443: "I Don't Think So!",
      q444: "Incorrect!",
    },
    q45: {
      q451: "Incorrect",
      q452: "Try Again!",
      q453: "I Don't Think So!",
      q454: "Correct!",
    },

    q5: {
      q51: "Thank you for your taking my course!",
    },
  };

  document.querySelectorAll(".quizForm").forEach((form) => {
    const feedback = form.parentElement.querySelector(".feedback");

    // Label selection highlight
    const labels = form.querySelectorAll(".answer-box");
    labels.forEach((label) => {
      const input = label.querySelector('input[type="radio"]');
      input.addEventListener("change", () => {
        labels.forEach((l) => l.classList.remove("selected"));
        if (input.checked) {
          label.classList.add("selected");
        }
      });
    });

    // Feedback logic
    form.addEventListener("change", function () {
      const checked = form.querySelector('input[type="radio"]:checked');
      if (!checked) {
        feedback.textContent = "Please select an answer.";
        feedback.style.backgroundColor = "#fff9f0";
        feedback.style.color = "black";
        feedback.style.display = "block";
        return;
      }

      const qName = checked.name;
      const userAnswer = checked.value;
      const message = correctAnswer[qName][userAnswer] || "Try Again!";
      feedback.textContent = message;
      feedback.style.display = "block";
      feedback.style.color = "black";
      if (message.includes("Correct!")) {
        feedback.style.backgroundColor = "#d0f0c0";
      } else if (message.includes("Thank")) {
        feedback.style.backgroundColor = "#fff";
      } else {
        feedback.style.backgroundColor = "#ffd6d6";
      }
    });
  });
});
