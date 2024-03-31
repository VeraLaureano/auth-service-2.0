// Import modules
import { Response } from 'express';
import { AuthenticatedRequest } from '../interfaces/AuthRequest.interface';
import { routes } from '../config/routes';

// Define a function to handle 404 errors
export const notFound = (req: AuthenticatedRequest, res: Response) => {
  // Set the status code of the response to 404
  return res.status(404).json({
    actual_path: req.path,
    app_name: 'Auth Service 2.0',
    user: [
      {
        path: routes.user,
        methods: ['GET', 'PATCH', 'DELETE']
      },
      {
        path: `${routes.user}/login`,
        methods: ['POST']
      }, 
      {
        path: `${routes.user}/signup`,
        methods: ['POST']
      }
    ],
    docs: routes.docs,
    github_repo: 'https://github.com/VeraLaureano/auth-service-2.0/',
  });
};
