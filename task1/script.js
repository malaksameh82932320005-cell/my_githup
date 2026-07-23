function checkGrade() {

    let grade = document.getElementById("grade").value;
    let result = document.getElementById("result");

    if (grade >= 90 && grade <= 100) {

        result.innerHTML = "Excellent <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>";

    }
    else if (grade >= 75 && grade <= 89) {

        result.innerHTML = "Very Good <i class='fa-solid fa-star'></i><i class='fa-solid fa-star'></i>";

    }
    else if (grade >= 50 && grade <= 74) {

        result.innerHTML = "Pass <i class='fa-solid fa-star'></i>";

    }
    else if (grade >= 0 && grade < 50) {

        result.innerHTML = "Fail ❌";

    }
    else {

        result.innerHTML = "Invalid Grade";

    }

}