// Homework 1 part 1


const gmailInput = document.getElementById('gmail_input');
const gmailButton = document.getElementById('gmail_button');
const gmailResult = document.getElementById('gmail_result');


const gmailRegExp = /^[a-zA-Z0-9._%]+@gmail\.com$/;



gmailButton.onclick = () => {
    if (gmailRegExp.test(gmailInput.value)) {
        gmailResult.textContent = 'OK';
        gmailResult.style.color = 'green';
    } else {

        gmailResult.textContent = 'Invalid gmail';
        gmailResult.style.color = 'red';
    }
};

// HOME WORK 1 party 2


// const parentBlock = document.querySelector('.parent_block');
// const childBlock = document.querySelector('.child_block');
//
// const moveBlock = (position) => {
//     const parentWidth = parentBlock.clientWidth;
//     const childWidth = childBlock.clientWidth;
//
//     if (position < parentWidth - childWidth) {
//         childBlock.style.left = `${position}px`;
//
//
//         requestAnimationFrame(() => moveBlock(position + 1));
//     } else if (position >= parentWidth && position <= childWidth) {
//     }
//
// };
//
//
// moveBlock(1);



const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

const moveAround = (angle) => {
    const parentWidth = parentBlock.clientWidth;
    const parentHeight = parentBlock.clientHeight;

    const childWidth = childBlock.clientWidth;
    const childHeight = childBlock.clientHeight;

    const radius = Math.min(parentWidth, parentHeight) / 2 - Math.max(childWidth, childHeight) / 2;

    const centerX = parentWidth / 2;
    const centerY = parentHeight / 2;

    const x = centerX + radius * Math.cos(angle) - childWidth / 2;
    const y = centerY + radius * Math.sin(angle) - childHeight / 2;

    childBlock.style.left = `${x}px`;
    childBlock.style.top = `${y}px`;

    requestAnimationFrame(() => moveAround(angle + 0.02)); // Увеличиваем угол для плавного движения
};

moveAround(0);