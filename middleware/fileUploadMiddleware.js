import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  // Write your code here
destination:(req,file,cb)=>{
  cb(null,path.resolve('public','uploads'));
},
filename:(req,file,cb)=>{
  const names = Date.now() +  file.originalname; 
    cb(null,names);
}
});

export default multer({ storage });
