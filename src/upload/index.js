import fs from 'node:fs'
import path from 'node:path'

export const uploadImage = async ({ imgPart, attachment }) => {

    const rootPath = process.cwd()
    const imageBuffer = attachment.replace(/^data:image\/png;base64,/, '');;
    // Create the "uploads" directory if it doesn't exist
    const uploadsDirectory = path.join(rootPath, 'uploads');
    if (!fs.existsSync(uploadsDirectory)) {
        fs.mkdirSync(uploadsDirectory);
    }

    // Create the "image" directory if it doesn't exist
    const imageDirectory = path.join(uploadsDirectory, 'image');
    if (!fs.existsSync(imageDirectory)) {
        fs.mkdirSync(imageDirectory);
    }

    // Create a unique filename to avoid overwriting existing files
    const uniqueFilename = imgPart;

    // Create the full file path
    const imagePath = path.join(imageDirectory, uniqueFilename);

    const result = fs.writeFile(imagePath, imageBuffer, 'base64', (err) => {
        if (err) {
            console.error('Lỗi khi ghi file:', err);
            return {
                statusUpload: false,
                err: err
            }
        }
        console.log('File hình ảnh đã được tải lên và ghi thành công!');
        return {
            statusUpload: true,
            err: 'File hình ảnh đã được tải lên và ghi thành công!'
        }
    });

    return result

}
