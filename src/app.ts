import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './moduler/student/student.route';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes

//call only student routes
app.use('/api/v1/students', StudentRoutes);

app.get('/azad', (req: Request, res: Response) => {
  try{
    res.status(200).json({
      success: true,
      message: "connected success",
      data: 'azad called'
    });
  }catch(err){
    res.status(200).json({
      success: false,
      message: err,
      data: 'azad called'
    });
  }

});
app.get('/test', (req: Request, res: Response) => {
  const a = 10;

   res.status(200).json({
    success: true,
    message: "connected success",
    data: a
  });
});


export default app;
