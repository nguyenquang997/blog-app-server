import mongoose from "mongoose"

async function connect(url) {
    try {
        await mongoose.connect(url)
        console.log('Connect Susses!!!')
    } catch (error) {
        console.log('Connect Fail!!!')
    }

}

export default { connect }
