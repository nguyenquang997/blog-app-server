import mongoose from "mongoose"

const URI = 'mongodb+srv://nguyenquangns1:M9689vZfirghgH1A@cluster1.qftubdh.mongodb.net/postsdb?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(URI)
        console.log('Connect Susses!!!')
    } catch (error) {
        console.log('Connect Fail!!!')
    }

}

export default { connect }
