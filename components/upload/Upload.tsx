import File from "./File"
import Img from "./Img"

export interface IUpload {
  File: typeof File
  Img: typeof Img
}
/**
 * 上传组件
 */
const Upload: IUpload = () => ({})

Upload.Img = Img
Upload.File = File

export default Upload
