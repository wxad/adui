import File from "./File";
import Img from "./Img";
export interface IUpload {
    File: typeof File;
    Img: typeof Img;
}
/**
 * 上传组件
 */
declare const Upload: IUpload;
export default Upload;
