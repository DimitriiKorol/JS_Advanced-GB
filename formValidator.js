const feedbackBtn = document.querySelector('.feedback-button');

feedbackBtn.addEventListener('click', feedbackClicker);

function feedbackClicker(event) {
    let feedbackCheck = new Validation(event);
    if (!feedbackCheck.valid) {
        event.preventDefault();
    }
}

class Validation {
    constructor () {
        this.valids = {
            name: /[a-zа-яё]+/i,
            phone: /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
            mail: /^[a-zа-яё0-9]+@[a-zа-яё0-9]+\.[a-zа-яё]{2,}$/i,
            text: /\w+/ig
        };

        this.classNames = [
            '.feedback-name',
            '.feedback-phone',
            '.feedback-mail',
            '.feedback-text'
        ];

        this.inputs = document.querySelectorAll(this.classNames);

        this.errMsg = {
            empty: `<p>Заполните поле!</p>`,
            validErr: `<p>Введите корректное значение!</p>`,
        };

        this.errClass = 'invalid';
        this.valid = false;
        this.dupeCatch();
        this.validation();
    }

    dupeCatch() {
        //let errors = document.querySelectorAll(`.${this.errClass}`);
        for (let delClass of this.inputs) {
            if (delClass.classList.contains(this.errClass)) {
                document.querySelector('.input-wrap>p').remove();
            }

            delClass.classList.remove(this.errClass, 'valid');
        }
    }

    validation() {
        let inputValues = this.inputs.forEach((item) => {
            if (item.value.length > 0) {
                let validId = item.className.match(/\b\w+$/);
                let validator = this.valids[validId];

                if (validator.test(item.value)) {
                    item.classList.add('valid');
                } else {
                    item.insertAdjacentHTML('afterend', this.errMsg.validErr);
                    item.classList.add('invalid');
                }
            } else {
                item.insertAdjacentHTML('afterend', this.errMsg.empty);
                item.classList.add('invalid');
            }
        });

        let validCheck = document.querySelectorAll('.invalid');
        if (validCheck.length === 0) {
            this.valid = true;
        }
    }
}
