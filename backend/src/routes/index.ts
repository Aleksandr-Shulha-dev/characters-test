import { Request, Response, Router } from "express";
import { API } from '../common/enums';

const marvelСharacters = Router();

marvelСharacters.get(`${API.GETBYID}/:id`, (req: Request, res: Response) => {
  res.send("GETBYID");
});

marvelСharacters.get(`${API.GETALL}`, (req: Request, res: Response) => {
  res.send("GETALL");
});

marvelСharacters.post(`${API.CREATE}`, (req: Request, res: Response) => {
  res.send("CREATE");
});

marvelСharacters.put(`${API.UPDATE}/:id`, (req: Request, res: Response) => {
  res.send("UPDATE");
});

marvelСharacters.delete(`${API.DELETE}/:id`, (req: Request, res: Response) => {
  res.send("DELETE");
});



export { marvelСharacters };