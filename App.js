// import validator from "validator"

const validator = require('validator')

const readline = require('readline')
const { resolve } = require('path')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// function pertanyaan() {
//     let namaDulu = null
//     let emailDulu = null

//     rl.question(`what's your name? `, (name = namaDulu) => {
//         if (!validator.isLength(name, { 'min': 1, 'max': 6 })) {
//             pertanyaan();
//         }
//         rl.question(`what's your email? `, (email) => {
//             if (!validator.isEmail(email)) {
//                 pertanyaan(rl.write(name))
//             }
//             // if (email != null) {
//             //     rl.write(email)
//             // }
//             rl.question(`type your phone number... `, (phone) => {
//                 if (!validator.isMobilePhone(phone, 'id-ID')) {
//                     pertanyaan()
//                 } else {
//                     const hasil = [
//                         `Name : ${name}`,
//                         `E-mail : ${email} `,
//                         `Phone : ${phone}`
//                     ]
//                     hasil.forEach(e => {
//                         console.log(e);
//                     });
//                     rl.close()
//                 }
//             })
//         })
//     })
// }

// pertanyaan()

function questionName() {
    return new Promise(resolve => {
        rl.question(`what's your name? `, (e) => {
            if (!validator.isLength(e, { 'min': 1, 'max': 6 })) {
                questionName();
            }
            resolve(e)
        })
    })
}

function questionEmail() {
    return new Promise(resolve => {
        rl.question(`what's your email? `, (e) => {
            if (!validator.isEmail(e)) {
                questionEmail()
            }
            resolve(e)
        })
    })
}

function questionPhone() {
    return new Promise(resolve => {
        rl.question(`type your phone number... `, (e) => {
            if (!validator.isMobilePhone(e, 'id-ID')) {
                questionPhone()
            }
            rl.close()
            resolve(e)
        })
    })
}

async function allQuestion() {
    const name = await questionName()
    const email = await questionEmail()
    const phone = await questionPhone()
    const val = [
        `Name : ${name}`,
        `E-mail : ${email}`,
        `Phone : ${phone}`
    ]

    val.forEach(e => {
        console.log(e);
    });

    // console.log(`Name : ${name} || Email : ${email} || Phone ${phone}`)
}

allQuestion()

